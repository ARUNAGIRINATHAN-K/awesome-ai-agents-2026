# Design Patterns for Agentic Systems

Whenever the term “AI agents” is used in the context of generative AI applications, people tend to imagine systems where large language models (LLMs) autonomously perform complex tasks from start to finish. In practice, however, most production applications sit somewhere along a spectrum between simple prompting and full autonomy.

We use the term “agentic systems” to cover that full range: systems where LLMs influence or decide execution flow with varying degrees of autonomy. The system’s degree of “agenticity” depends on how much decision-making authority is delegated to the LLM — from tightly controlled flows to multi-agent teams that coordinate complex, open-ended work.

Below are seven practical design patterns we use with customers. For each pattern you’ll find a short explanation, when to use it, and concrete use cases.

- [Controlled flows](#controlled-flows)
- [LLM as a router](#llm-as-a-router)
- [Parallelization](#parallelization)
- [Reflect & critique](#reflect-and-critique)
- [Human-in-the-loop](#human-in-the-loop)
- [Agents (single-agent)](#agents-single-agent)
- [Multi-agent](#multi-agent)
- [Single-agent](#single-agent)
- [Multi-agent](#multi-agent)

---

## Controlled flows

Controlled flows are a low-risk way to leverage LLM capabilities inside a well-defined pipeline. The sequence of steps — and the rules for moving between them — are fixed. LLMs are free to operate inside each step (generate, analyze, summarize), but they cannot choose the next step.

![Controlled flows](img/src-img/controlled_flow.png)

When to use
- Tasks that decompose into a deterministic sequence of subtasks.
- You need predictable, auditable outputs while still benefiting from LLM flexibility.

Use cases
- Content review: LLMs fix grammar, check style, and flag factual claims, then pass artifacts to human reviewers.
- Natural-language-to-query: LLMs extract query parameters and data sources in a fixed query pipeline, producing reproducible queries.

---

## LLM as a router

Use an LLM to inspect incoming requests and route them to specialized workflows, models, or microservices. The router’s job is classification and dispatch — not open-ended decision-making.

![LLM as a router](img/src-img/llm_as_a_router.png)

When to use
- Requests are heterogeneous and can be handled by different subsystems.
- You want to optimize for cost or accuracy by sending requests to the right model or workflow.

Use cases
- Customer support triage: route tickets to billing, technical, or legal handlers.
- Cost-aware routing: send simple queries to smaller models and complex reasoning to larger ones.

---

## Parallelization

Split a complex task into independent subtasks and run them concurrently across LLMs or prompt variants. Aggregate and reconcile outputs afterwards.

![Parallelization](img/src-img/parallelization.png)

When to use
- The problem can be partitioned into largely independent pieces.
- You want lower latency or increased reliability through ensemble-style checks.

Use cases
- LLM-as-judge: multiple evaluations run in parallel (or repeated prompts to the same model) and an aggregator picks the best result.
- Code generation: run different models to generate implementations, execute tests, and select the most efficient/robust output.

---

## Reflect & critique

This pattern separates generation and evaluation into different LLM roles: a generator produces an output, and an evaluator inspects, critiques, and requests refinements. Iterate until the evaluation criteria are satisfied.

![Reflect and critique](img/src-img/reflect_and_critique.png)

When to use
- You need iterative refinement where quality improves through critique and correction.
- Evaluation criteria can be expressed clearly so the evaluator LLM applies them consistently.

Use cases
- Report generation: the evaluator checks for required sections, tone, and factual consistency and asks the generator to improve where needed.
- Code refinement: the evaluator suggests optimizations and security hardening after running tests.

---

## Human-in-the-loop

Embed human reviewers at critical decision points. LLMs can ask for clarifications, offer suggestions, or hand off uncertain cases for human approval — preserving speed while keeping final authority where it matters.

![Human in the loop](img/src-img/human_in_the_loop.png)

When to use
- Tasks where errors are costly, regulated, or high-impact.
- The system needs occasional human judgment (authentication steps, legal approvals, medical reviews).

Use cases
- Computer use: LLMs automate flows but prompt humans for authentication, 2FA, or CAPTCHAs.
- Claims processing: LLMs provide a recommended decision and rationale; human adjusters make the final call.

---

## Agents (single-agent)

When people say “AI agents” they often mean a single LLM that reasons about next steps, calls tools, and uses results to decide what to do next. The agent is flexible and can handle tasks without a fixed script.

![Single agent](img/src-img/single_agent.png)

When to use
- Tasks that lack a predictable workflow and benefit from exploratory, stepwise reasoning.
- You can tolerate non-deterministic outputs and higher latency.

Use cases
- Adaptive tutoring: the agent personalizes lessons by deciding what to teach next.
- End-to-end app building: generate, test, debug, and iterate on code with tool access.

NOTE: Combine single-agent systems with reflect-and-critique or human-in-the-loop to increase reliability.

---

## Multi-agent

Multiple agents coordinate to solve larger problems. Architectures vary: a supervisor agent may orchestrate specialists, agents may form a fully connected network, or you can custom-define interactions.

![Supervisor multi-agent](img/src-img/supervisor_multi_agent.png)
![Network multi-agent](img/src-img/network_multi_agent.png)
![Custom multi-agent](img/src-img/custom_multi_agent.png)

When to use
- Open-ended or highly exploratory tasks where diverse expertise and parallel experimentation add value.
- You accept the higher complexity, cost, and difficulty of debugging multi-agent workflows.

Use cases
- Scientific discovery: teams of agents review literature, propose experiments, and evaluate results.
- Multimedia storytelling: creative agents specialize in narrative, visual art, and music and collaborate to produce a unified piece.

---

## Practical guidance and trade-offs

- Start simple: prefer controlled flows and LLM routing before moving to agents or multi-agent systems.
- Measure per-step: add observability at each handoff so you can diagnose where mistakes occur.
- Combine patterns: human-in-the-loop + reflect-and-critique + agent routing often gives the best reliability/cost balance.
- Cost vs. autonomy: higher autonomy usually means higher compute costs and latency — budget accordingly.
- Fail open vs. fail closed: choose conservative failure modes for risky domains (block or human-review) and more permissive modes for low-risk features.

---

## Conclusion

Agentic systems are not a binary choice; they’re design decisions along a spectrum of autonomy. Use the seven patterns above as a cookbook: start with low-risk patterns, instrument heavily, and only increase agenticity when you can measure gains and control failure modes.

---