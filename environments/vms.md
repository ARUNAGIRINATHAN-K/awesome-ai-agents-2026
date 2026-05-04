# Self-hosted VM isolation

Self-hosted VM isolation lets you run agent-generated code with hardware-level security guarantees — without paying hosted sandbox per-execution fees. This is the right path when you need compliance, cost control at scale, or custom hardware (GPUs, specific CPU features).

## Why VM isolation over containers

Containers share the host kernel. A container escape vulnerability exposes your full host. For agent-generated code — which is fundamentally untrusted input — the question is not *if* something could go wrong, but *what happens when it does*.

| Isolation level | Kernel shared? | Escape difficulty | Overhead |
| --------------- | -------------- | ----------------- | -------- |
| Container (Docker) | Yes | Moderate (kernel CVEs) | ~0% |
| Container + gVisor | Partial (syscall intercept) | Hard | ~5–15% |
| Kata Container | No (lightweight VM) | Very hard | ~10–20% |
| Firecracker microVM | No (full VM boundary) | Extremely hard | ~2–5% |

The overhead numbers are approximate and workload-dependent. For CPU-bound agent workloads, Firecracker is remarkably close to bare-metal performance.

---

## Firecracker

**[Firecracker](https://github.com/firecracker-microvm/firecracker)** — Lightweight microVM with ~125ms boot time, used by AWS Lambda and E2B under the hood. Tags: `sandbox` `rust` `linux`

Firecracker is a virtual machine monitor (VMM) built in Rust by AWS. Each microVM gets its own kernel, network interface, and block device — total isolation from the host and from other VMs. It achieves this with minimal overhead by stripping out everything a general-purpose hypervisor supports (USB, PCI, legacy devices) and keeping only what serverless workloads need.

### When to use Firecracker

- You need microVM-level isolation but can't afford hosted sandbox pricing at scale
- You're building your own agent execution platform (like E2B does)
- Compliance requirements prohibit sending code to third-party services
- You need sub-200ms cold starts with strong security guarantees

### Requirements

- Linux host with KVM support (`/dev/kvm` must exist)
- Root or sufficient privileges to create TAP interfaces
- x86_64 or aarch64 architecture

### Minimal setup

```bash
# Download Firecracker binary
curl -L https://github.com/firecracker-microvm/firecracker/releases/latest/download/firecracker-v1.9.0-x86_64.tgz | tar -xz

# Create a minimal rootfs (Alpine Linux is ideal for agent sandboxes)
dd if=/dev/zero of=rootfs.ext4 bs=1M count=512
mkfs.ext4 rootfs.ext4
mount rootfs.ext4 /mnt
# Install your agent runtime into /mnt, then unmount

# Start a microVM via API
curl --unix-socket /tmp/firecracker.socket -X PUT \
  http://localhost/machine-config \
  -d '{"vcpu_count": 1, "mem_size_mib": 256}'
```

### Cold start optimization

```python
# Use snapshotting to achieve ~50ms warm starts
# 1. Boot VM once
# 2. Take a snapshot after initialization
# 3. Restore from snapshot for each agent invocation

snapshot_config = {
    "snapshot_type": "Full",
    "snapshot_path": "/snapshots/agent-base.snap",
    "mem_file_path": "/snapshots/agent-base.mem"
}
```

---

## gVisor

**[gVisor](https://github.com/google/gvisor)** — User-space kernel that intercepts syscalls, providing VM-level security with container-level UX. Tags: `sandbox` `go` `linux`

gVisor implements a large subset of the Linux kernel in user space (called the Sentry). When containerized code makes a syscall, gVisor intercepts it before it reaches the host kernel. This eliminates the entire class of kernel privilege escalation attacks without the overhead of a full VM.

### When to use gVisor

- You want stronger container isolation without the operational complexity of managing VMs
- You're already using Docker/Kubernetes and want a drop-in security upgrade
- Your agent workload is I/O-heavy (note: gVisor has higher syscall overhead than Firecracker)
- You need OCI compatibility (gVisor is a standard OCI runtime)

### Setup with Docker

```bash
# Install gVisor
curl -fsSL https://gvisor.dev/archive.key | sudo gpg --dearmor -o /usr/share/keyrings/gvisor-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/gvisor-archive-keyring.gpg] https://storage.googleapis.com/gvisor/releases release main" | sudo tee /etc/apt/sources.list.d/gvisor.list
sudo apt-get update && sudo apt-get install -y runsc

# Configure Docker to use gVisor runtime
sudo runsc install
sudo systemctl restart docker

# Run agent code with gVisor isolation
docker run --runtime=runsc agent-sandbox:latest python agent_task.py
```

### Setup with Kubernetes (GKE)

```yaml
# RuntimeClass for gVisor (GKE Sandbox)
apiVersion: node.k8s.io/v1
kind: RuntimeClass
metadata:
  name: gvisor
handler: runsc
---
# Agent Job using gVisor
apiVersion: batch/v1
kind: Job
metadata:
  name: agent-task
spec:
  template:
    spec:
      runtimeClassName: gvisor
      containers:
        - name: agent
          image: agent-sandbox:latest
          resources:
            limits:
              memory: "512Mi"
              cpu: "1"
```

### Performance characteristics

| Workload type | gVisor overhead vs. native |
| ------------- | -------------------------- |
| CPU-bound (matrix ops) | ~5% |
| Memory-bound | ~10% |
| I/O-bound (file reads) | ~15–25% |
| Syscall-heavy (many small files) | ~30–50% |

For agent tasks that are primarily LLM API calls + light Python computation, gVisor overhead is negligible.

---

## Kata Containers

**[Kata Containers](https://github.com/kata-containers/kata-containers)** — Runs standard OCI containers inside lightweight VMs, combining VM security with container UX. Tags: `sandbox` `go` `linux`

Kata Containers wraps each OCI container in a lightweight VM (using QEMU, Cloud Hypervisor, or Firecracker as the VMM). From the developer's perspective, it looks like Docker. From the security perspective, it's a VM boundary.

### When to use Kata Containers

- You need full VM isolation but want to keep your existing Docker/Kubernetes workflows
- You're building a multi-tenant agent platform where different customers' agents must be isolated from each other
- You need OCI runtime compatibility with VM-level security

### Setup

```bash
# Install Kata Containers
bash -c "$(curl -fsSL https://raw.githubusercontent.com/kata-containers/kata-containers/main/utils/kata-manager.sh) install-packages"

# Configure containerd to use Kata
sudo kata-runtime kata-check  # Verify prerequisites

# Run with Kata
docker run --runtime=kata-runtime agent-sandbox:latest python task.py

# Or with containerd
ctr run --runtime=io.containerd.kata.v2 docker.io/library/python:3.12 agent-task python -c "print('isolated')"
```

---

## Comparison and decision guide

```
Start here: What's your threat model?
│
├── Agent runs YOUR code (orchestration, not untrusted execution)
│   └── Standard containers (Docker/Podman) are sufficient
│
├── Agent runs code it generates (untrusted execution)
│   ├── Need OCI compatibility + easy ops? → gVisor (drop-in Docker runtime)
│   ├── Need full VM boundary + fast cold start? → Firecracker
│   ├── Need VM security + existing K8s workflows? → Kata Containers
│   └── Don't want to self-manage? → E2B (hosted Firecracker)
│
└── Multi-tenant (different users' agents on same host)
    ├── Low trust between tenants → Firecracker (strongest isolation)
    └── Medium trust (same org, different teams) → Kata Containers
```

### Summary table

| Tool | Isolation | Cold start | OCI compatible | Managed option | Best for |
| ---- | --------- | ---------- | -------------- | -------------- | -------- |
| Firecracker | microVM | ~125ms | No (own API) | E2B, Modal | High-throughput agent sandboxes |
| gVisor | Syscall intercept | ~200ms | Yes | GKE Sandbox | Drop-in Docker security upgrade |
| Kata Containers | VM-wrapped container | ~1s | Yes | Azure Container Instances | K8s clusters needing VM isolation |

---

## Operational considerations

### Monitoring

All three solutions expose standard metrics. Use Prometheus + Grafana to track:
- VM boot time (p50, p95, p99)
- Execution time per agent task
- Memory usage and OOM events
- Failed sandbox launches

### Networking

By default, give agent sandboxes **no network access**. If the agent needs to make HTTP calls, use a controlled egress proxy that only allows whitelisted domains.

```yaml
# Firecracker: set network to none unless needed
# gVisor: use --network=none Docker flag
# Kata: use NetworkPolicy in Kubernetes
docker run --runtime=runsc --network=none agent-sandbox:latest python task.py
```

### Storage

Agent sandboxes should have **ephemeral, size-limited storage**. Persistent storage is a security risk — previous agent runs could leave malicious files.

```bash
# Limit tmpfs for gVisor containers
docker run --runtime=runsc --tmpfs /tmp:size=100m agent-sandbox:latest
```

## Related pages

- [Hosted sandboxes](sandboxes.md) — For managed alternatives (E2B, Modal, Daytona)
- [Container patterns](containers.md) — For container-only isolation without VM overhead
- [Serverless runtimes](serverless.md) — For Lambda, Cloud Run, and Cloudflare Workers
