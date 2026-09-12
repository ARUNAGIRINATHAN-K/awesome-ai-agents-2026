<div align="center">

# 🤖 Awesome AI Agents 2026

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FZijian-Ni%2Fawesome-ai-agents-2026&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)](https://github.com/Zijian-Ni/awesome-ai-agents-2026)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Last Updated](https://img.shields.io/badge/Last%20Updated-September%208%2C%202026-blue.svg)](#)
[![Resources](https://img.shields.io/badge/Resources-910%2B-orange.svg)](#)
[![Categories](https://img.shields.io/badge/Categories-25-purple.svg)](#)
[![Audited](https://img.shields.io/badge/Spam_Audited-2026--09--08-success.svg)](#️-status-legend)
[![Chinese](https://img.shields.io/badge/Lang-中文-red.svg)](README.zh-CN.md)
[![Japanese](https://img.shields.io/badge/Lang-日本語-purple.svg)](README.ja.md)

**A curated list of AI models, agent frameworks, tools, protocols, and resources for 2026 — the year agents went mainstream and AI became infrastructure.**

*Covering foundation models, multimodal AI, agent protocols (MCP/A2A), coding agents, computer use, generative AI, and more.*

### 🏷️ Status Legend

Entries may carry one or more status tags so readers can judge maturity at a glance:

- 🆕 **New** — Added in the last 60 days, still settling.
- 📦 **Archived** — Repository archived by its owner; preserved for historical reference, no further updates expected.
- 💤 **Stale** — No commits in 6+ months; project may still work but is no longer actively maintained.
- ⚠️ **Unverified** — Recent submission with limited independent traction (low stars / no third-party adoption / sole-maintainer / submitted to many awesome lists in parallel). Listed for completeness, **not endorsed** — vet before using.
- 🇨🇳 **Chinese ecosystem** — Project from a mainland-China team or primarily targeting the Chinese market.
- 🔥 **Hot** — GitHub stars grew >20% in the last 30 days; community momentum.
- ⚡ **Updated** — Received a notable release or major feature in the last 14 days.
- 🧪 **Experimental** — Promising but not production-ready; use for R&D only.
- 💰 **Freemium** — Core functionality free; paid tiers for scale/advanced features.
- 🔐 **Audited** — Has undergone independent security audit or formal verification.
- 🇨🇳 **China-first** — Optimized for Chinese language, regulation, or infra stack.

[Foundation Models](#-foundation-models-2026) · [Multimodal AI](#-multimodal--generative-ai) · [Protocols](#-agent-protocols--standards) · [Frameworks](#️-agent-frameworks) · [IDEs & Builders](#️-agent-ides--visual-builders) · [Memory](#-agent-memory) · [Tools](#-tool--api-integration) · [Sandboxing](#-agent-sandboxing--compute-isolation) · [Security](#️-agent-security) · [RAG](#-rag--knowledge) · [Coding](#-coding-agents) · [Physical AI](#-physical-ai--embodied-agents) · [Simulation](#-agent-simulation--world-models) · [Benchmarks](#-benchmarks--leaderboards) · [Computer Use](#️-computer-use--desktop-agents) · [Browser & Web](#-browser--web-agents) · [Voice](#️-voice--multimodal-agents) · [Personal](#-personal-ai-agents) · [Mobile](#-mobile-agents) · [Enterprise](#-enterprise-agent-platforms) · [Evaluation](#-agent-evaluation--observability) · [Research Tools](#-ai-research-tools) · [Learning](#-learning-resources) · [Chinese Ecosystem](#-chinese-ai-ecosystem) · [Compare](#-compare--side-by-side-tables) · [Notable 2026](#-notable-agent-projects-of-2026) · [Timeline](#-2026-ai-timeline)

</div>

---

## 🚀 Start Here


> **New to AI agents?** Follow this path:
> 1. 📖 **Understand** — what an agent actually is vs. a chatbot
> 2. 🗺️ **Find your scenario** → [Scenario Guide](#️-scenario-guide--what-should-i-use-for)
> 3. 🧩 **Adapt a starting setup** → [Stack Recipes](#-stack-recipes--curated-tool-combinations)
> 4. 🔍 **Pick the right tool** → [Compare Tables](#-compare--side-by-side-tables)
> 5. ⚠️ **Avoid common mistakes** → [Anti-Picks](#️-anti-picks--what-not-to-use-for)
>
> **Already building?** Jump to:
> - 🆕 [Latest additions (September 2026)](#-2026-ai-timeline) • 🛡️ [Security](#️-agent-security) • 💰 [Cost comparison](#-foundation-models--api-cost--context)

---

## Quick Navigation

*Counts cover catalogue appearances, including historical/contextual entries; they are not a count of unique products. This is a curated selection with official catalogue links for further model discovery.*

| Category | Description | Count |
|----------|-------------|-------|
| [🧠 Foundation Models](#-foundation-models-2026) | Latest LLMs from OpenAI, Anthropic, Google, Meta, and 22+ providers | 230+ |
| [🎨 Multimodal & Generative AI](#-multimodal--generative-ai) | Image, video, audio, and music generation | 60+ |
| [🔗 Agent Protocols](#-agent-protocols--standards) | MCP, A2A, and interoperability standards | 20+ |
| [🏗️ Agent Frameworks](#️-agent-frameworks) | Libraries for building autonomous AI agents | 55+ |
| [🛠️ Agent IDEs & Visual Builders](#️-agent-ides--visual-builders) | Visual / low-code environments for designing agent flows | 10+ |
| [🧠 Agent Memory](#-agent-memory) | Persistent memory and context management | 25+ |
| [🔌 Tool & API Integration](#-tool--api-integration) | Connecting agents to external services | 25+ |
| [💱 Agent Economy & Marketplaces](#-agent-economy--marketplaces) | Where agents pay, get paid, and discover services | 10+ |
| [🧪 Sandboxing & Compute Isolation](#-agent-sandboxing--compute-isolation) | Secure runtimes for agent-generated code | 10+ |
| [🛡️ Agent Security](#️-agent-security) | Prompt injection defense and guardrails | 35+ |
| [🔍 RAG & Knowledge](#-rag--knowledge) | Retrieval-augmented generation systems | 20+ |
| [💻 Coding Agents](#-coding-agents) | AI-powered software engineering | 55+ |
| [🤖 Physical AI](#-physical-ai--embodied-agents) | Humanoid robots, embodied AI, industrial automation | 45+ |
| [🎮 Simulation & World Models](#-agent-simulation--world-models) | Sim environments for training and stress-testing agents | 10+ |
| [📊 Benchmarks](#-benchmarks--leaderboards) | Leaderboards tracking frontier capability | 25+ |
| [🖥️ Computer Use](#️-computer-use--desktop-agents) | Desktop automation and OS-level control | 10+ |
| [🌐 Browser & Web Agents](#-browser--web-agents) | Agents that drive real browsers | 20+ |
| [🗣️ Voice & Multimodal Agents](#️-voice--multimodal-agents) | Voice-enabled conversational AI | 25+ |
| [📱 Personal AI Agents](#-personal-ai-agents) | Productivity and daily life assistants | 20+ |
| [📱 Mobile Agents](#-mobile-agents) | Phone-control agents (Android / iOS) | 10+ |
| [🏢 Enterprise Platforms](#-enterprise-agent-platforms) | Enterprise-grade agent deployment | 30+ |
| [📊 Evaluation & Observability](#-agent-evaluation--observability) | Testing, monitoring, and benchmarking | 30+ |
| [🔬 AI Research Tools](#-ai-research-tools) | Tools for AI/ML research and experimentation | 15+ |
| [📚 Learning Resources](#-learning-resources) | Papers, courses, and tutorials | 25+ |
| [🇨🇳 Chinese AI Ecosystem](#-chinese-ai-ecosystem) | Major projects from China-based teams | 25+ |
| [📝 Compare](#-compare--side-by-side-tables) | Side-by-side comparison tables | — |
| [🗺️ Scenario Guide](#️-scenario-guide--what-should-i-use-for) | Curated scenario-to-tool mappings | 58 |
| [📋 Stack Recipes](#-stack-recipes--curated-tool-combinations) | Curated multi-tool combinations | 8 |
| [⚠️ Anti-Picks](#️-anti-picks--what-not-to-use-for) | What NOT to use and why | 17 |

---

## Contents

- [🧠 Foundation Models 2026](#-foundation-models-2026)
- [🎨 Multimodal & Generative AI](#-multimodal--generative-ai)
- [🔗 Agent Protocols & Standards](#-agent-protocols--standards)
- [🏗️ Agent Frameworks](#️-agent-frameworks)
- [🛠️ Agent IDEs & Visual Builders](#️-agent-ides--visual-builders)
- [🧠 Agent Memory](#-agent-memory)
- [🔌 Tool & API Integration](#-tool--api-integration)
- [💱 Agent Economy & Marketplaces](#-agent-economy--marketplaces)
- [🧪 Agent Sandboxing & Compute Isolation](#-agent-sandboxing--compute-isolation)
- [🛡️ Agent Security](#️-agent-security)
- [🔍 RAG & Knowledge](#-rag--knowledge)
- [💻 Coding Agents](#-coding-agents)
- [🤖 Physical AI & Embodied Agents](#-physical-ai--embodied-agents)
- [🎮 Agent Simulation & World Models](#-agent-simulation--world-models)
- [📊 Benchmarks & Leaderboards](#-benchmarks--leaderboards)
- [🖥️ Computer Use & Desktop Agents](#️-computer-use--desktop-agents)
- [🌐 Browser & Web Agents](#-browser--web-agents)
- [🗣️ Voice & Multimodal Agents](#️-voice--multimodal-agents)
- [📱 Personal AI Agents](#-personal-ai-agents)
- [📱 Mobile Agents](#-mobile-agents)
- [🏢 Enterprise Agent Platforms](#-enterprise-agent-platforms)
- [📊 Agent Evaluation & Observability](#-agent-evaluation--observability)
- [🔬 AI Research Tools](#-ai-research-tools)
- [📚 Learning Resources](#-learning-resources)
- [🇨🇳 Chinese AI Ecosystem](#-chinese-ai-ecosystem)
- [📝 Compare — Side-by-Side Tables](#-compare--side-by-side-tables)
- [🗺️ Scenario Guide — What Should I Use For…](#️-scenario-guide--what-should-i-use-for)
- [📋 Stack Recipes — Curated Tool Combinations](#-stack-recipes--curated-tool-combinations)
- [⚠️ Anti-Picks — What NOT to Use For…](#️-anti-picks--what-not-to-use-for)
- [🌟 Notable Agent Projects of 2026](#-notable-agent-projects-of-2026)
- [📅 2026 AI Timeline](#-2026-ai-timeline)

---

## 🧠 Foundation Models 2026

*Selected current and historical foundation models, organized by provider. Model cards, API availability and weight licenses can differ; dated entries preserve release history.*

### OpenAI
- [GPT-Live-1 / GPT-Live-1 mini](https://openai.com/index/introducing-gpt-live/) - 🆕 **July 8, 2026**. OpenAI's full-duplex conversational voice model replacing Advanced Voice Mode. **ChatGPT-only — not exposed as an API model**; for programmatic realtime voice use `gpt-realtime-2.1`, and for streaming transcription `gpt-live-transcribe` ($0.017/min). Listens and speaks simultaneously, handles interruptions, delegates complex queries to GPT-5.5 in the background while keeping the conversation flowing. **GPT-Live-1** is default for paid users (Go/Plus/Pro); **GPT-Live-1 mini** is default for free users. Includes real-time live translation. Available on iOS, Android, and web.
- [GPT-6 Astra / Astra Pro](https://openai.com/index/gpt-6-astra/) - 🆕 **September 3, 2026**. Introduced for demanding reasoning, coding and computer use; [limited organizational rollout, not yet generally available](https://help.openai.com/en/articles/6825453-chatgpt-release-notes), so verify account access separately from the published API model card.
- [GPT-5.6 Sol](https://openai.com/blog/gpt-5-6) - GPT-5.6-family model for reasoning, coding and tool-based work. Standard API input/output pricing is $4/$20 per million tokens at this review; consult the [pricing table](https://developers.openai.com/api/docs/pricing) for long-context tiers, caching and service-tier differences.
- [GPT-5.6 Terra](https://openai.com/blog/gpt-5-6) - 🆕 **July 9, 2026**. Mid-tier model in the GPT-5.6 family offering GPT-5.5-parity performance at approximately 2× lower cost. Designed for cost-efficient production workloads.
- [GPT-5.6 Luna](https://openai.com/blog/gpt-5-6) - 🆕 **July 9, 2026**. The fastest and most cost-efficient tier of GPT-5.6 — optimised for high-volume, speed-critical tasks.
- [ChatGPT Work](https://openai.com/index/chatgpt-for-your-most-ambitious-work/) - 🆕 **July 9, 2026**. OpenAI's agent that turns a goal into finished work — acts across connected apps and files, stays on a project for hours, creates slides/sheets/docs/web apps, runs scheduled tasks, and uses desktop computer-use with a built-in browser. Powered by GPT-5.6. Rolling out on web/mobile starting with Pro, Enterprise, and Edu (Plus/Business next); the desktop app is available globally on Mac and Windows for all plans, including Free.
- [Sites for ChatGPT](https://openai.com/academy/chatgpt-sites/) - 🆕 **June 2026**. A Codex-powered ChatGPT feature that transforms plans and analyses into interactive, sharable websites and lightweight apps. In public beta as of the July 9, 2026 GPT-5.6 / ChatGPT Work launch.
- [Codex Business Plugins](https://venturebeat.com/orchestration/openais-codex-update-lets-agents-build-interactive-enterprise-workspaces-via-sites-and-role-specific-plugins) - 🆕 **June 2026**. Enterprise enhancements bringing sales, data analytics, and creative production plugins directly to Codex.
- [GPT-Rosalind](https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/) - **June 3, 2026**. Major update to OpenAI's life-sciences frontier model — stronger drug discovery, genomics, quantitative biology, and wet-lab troubleshooting (≈31% fewer tokens than GPT-5.5 on long-horizon genomics analyses). Research preview opened to eligible organizations worldwide; Novo Nordisk joins earlier partners Amgen, Moderna, the Allen Institute, and Thermo Fisher.

- [GPT-5.5](https://openai.com/index/gpt-5-5-system-card/) - Released **April 23, 2026** (codename "Spud"). OpenAI's new frontier model for agentic tasks: coding, online research, data analysis, autonomous tool navigation. Significant gains in reasoning, consistency, and long-horizon task handling. Available on ChatGPT Plus / Pro / Business / Enterprise.
- [GPT-5.5 Pro](https://openai.com/index/gpt-5-5-system-card/) - April 23, 2026. Parallel test-time compute variant for higher-accuracy cognitive tasks. Pro / Business / Enterprise tiers.
- [GPT-5.5 Instant](https://openai.com/index/gpt-5-5-instant/) - **May 5, 2026**. New ChatGPT default model. Efficiency-first upgrade with ~50% lower hallucination rate on high-stakes prompts; available on free tier.
- [GPT-5.5-Cyber](https://openai.com/index/trusted-access-for-cyber/) - **April 30, 2026**. Cybersecurity-specialized variant of GPT-5.5, rolled out via OpenAI's Trusted Access for Cyber (TAC) program to vetted defenders, government, critical infrastructure operators, and security vendors. Not available to the general public.
- [OpenAI Daybreak](https://thehackernews.com/2026/05/openai-launches-daybreak-for-ai-powered.html) - **May 12, 2026**. Cyber-defense platform bundling GPT-5.5 + GPT-5.5-Cyber + Trusted-Access-for-Cyber for AI-powered vulnerability detection and patch validation; preview access extended to EU governments and security vendors.
- [GPT-5.6-Cyber](https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows) - 🆕 **August 10, 2026**. OpenAI's cybersecurity-specialized model built on GPT-5.6 Sol, made available through the **Daybreak Red** vetted program for authorized vulnerability research and exploit validation. Capable of identifying zero-day vulnerabilities and developing exploit chains; access limited to cleared security professionals. Daybreak also expanded to AWS Bedrock on August 11.
- [GPT-Realtime-2](https://openai.com/) - **May 8, 2026**. GPT-5-class reasoning brought to the Realtime API, 128K context, parallel tool calls with audio feedback, adjustable reasoning effort.
- [GPT-Realtime-Translate](https://openai.com/) - **May 8, 2026**. Live speech-to-speech translation across 70+ input languages and 13 output languages.
- [GPT-Realtime-Whisper](https://openai.com/) - **May 8, 2026**. Streaming low-latency speech-to-text companion to GPT-Realtime-2.
- [OpenAI Deployment Company (DeployCo)](https://openai.com/index/openai-launches-the-deployment-company/) - **May 11, 2026**. New OpenAI-majority-owned services entity for enterprise AI rollout. Backed by **$4B+** from TPG / Advent / Bain Capital / Brookfield / Goldman Sachs / SoftBank and consulting partners Bain & Company, Capgemini, McKinsey. Built around Forward Deployed Engineers; absorbs the Tomoro AI consulting acquisition (~150 engineers).
- [Codex on Mobile](https://9to5mac.com/2026/05/14/openai-brings-codex-control-to-chatgpt-for-iphone-and-android/) - **May 14, 2026**. ChatGPT iOS/Android can now remote-control the Codex desktop app — review outputs, approve actions, switch models, and kick off new tasks from the phone while the live session runs on Mac (Windows next). Rolling out as preview to Free, Plus and Go users.
- [OpenAI ↔ Malta partnership](https://openai.com/index/malta-chatgpt-plus-partnership/) - **May 16, 2026**. First country-wide deal: every Maltese citizen / resident aged 14+ gets a free 1-year ChatGPT Plus subscription after completing a 2-hour AI literacy course built by the University of Malta. Part of the "OpenAI for Countries" initiative; phased rollout starting May 2026.
- [OpenAI ↔ Dell Codex partnership](https://openai.com/news/company-announcements/) - **May 18, 2026**. Brings Codex to hybrid and on-premises enterprise environments via Dell Technologies infrastructure — first major Codex distribution channel outside the public cloud, targeted at regulated industries needing data-residency control.
- [ChatGPT Safety Updates — sensitive-conversation tracking](https://www.edtechinnovationhub.com/news/openai-updates-chatgpt-safety-systems-to-track-risk-across-sensitive-conversations) - **May 18, 2026**. ChatGPT's safety systems updated to detect and track subtle escalation cues across long sessions for acute risks (suicide / self-harm / harm to others), with cross-session state retention.
- [OpenAI Guaranteed Capacity (Compute Annual Pass)](https://openai.com/news/company-announcements/) - **May 19, 2026**. Long-term compute reservation product for enterprise AI products / agents / workflows. 1, 2, or 3-year terms; longer terms unlock larger discounts. OpenAI's structural response to the Anthropic "Priority Tier" model.
- [OpenAI ↔ Google SynthID + C2PA content provenance](https://openai.com/index/advancing-content-provenance/) - **May 19, 2026**. OpenAI partners with Google to add durable cross-platform **SynthID watermarking** to ChatGPT/Sora images, joins C2PA, and previews a public **"is-this-image-from-OpenAI"** verifier. First major frontier-lab interop on watermarking.
- [GPT-5.4](https://openai.com/) - Released March 2026. Frontier model with 1M-token context, advanced coding, computer use, tool search. BenchLM 94, SWE-bench Verified 77.2%, OSWorld 75% (beats human).
- [GPT-5.4 Pro](https://openai.com/) - Higher-accuracy variant of GPT-5.4. BenchLM 92.
- [GPT-5.3](https://openai.com/) - Early 2026. Includes GPT-5.3 Instant (conversations) and GPT-5.3-Codex (coding).
- [GPT-5.2](https://openai.com/) - Released Dec 2025. State-of-the-art reasoning, long-context understanding, and vision.
- [GPT-5](https://openai.com/index/introducing-gpt-5/) - **August 2025**. Earlier GPT generation with standard, mini and nano API variants; retained as release history.
- [GPT-4o](https://openai.com/index/hello-gpt-4o/) - Omni model with native text, vision, and audio. Retired from ChatGPT Feb 2026 but still available via API.
- [GPT-4.5](https://developers.openai.com/api/docs/deprecations) - 📦 Historical research preview; the `gpt-4.5-preview` API was retired on **July 14, 2025**.
- [o3 / o4-mini](https://openai.com/index/introducing-o3-and-o4-mini/) - Reasoning models with chain-of-thought for complex problem solving. Released April 2025. o3 leaves ChatGPT on Aug 26, 2026; the `o3-2025-04-16` and `o3-pro-2025-06-10` **API snapshots are removed on Dec 11, 2026**, with `gpt-5.6-sol` named as the replacement ([deprecations](https://developers.openai.com/api/docs/deprecations.md)).
- [Codex CLI](https://github.com/openai/codex) - Open-source terminal-based coding agent powered by OpenAI models. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopenai%2Fcodex&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenAI Jalapeño](https://openai.com/index/jalapeno-first-results) - 🆕 ⚡ **August 25, 2026**. First public results for OpenAI's custom inference chip: higher throughput and lower latency for modern models. RSS: "industry-leading speed and efficiency in AI inference."
- [ChatGPT for Teens](https://openai.com/index/chatgpt-for-teens) - 🆕 **August 18, 2026**. Age-appropriate ChatGPT experience with stronger built-in protections, healthy-use features, and extra parent controls.
- [Zero Data Retention for frontier models](https://openai.com/index/offering-zero-data-retention-for-frontier-models) - 🆕 **August 19, 2026**. OpenAI reaffirms ZDR for eligible API customers and previews Private Safety Processing so advanced safety checks can run without retaining customer data.

### Anthropic

- [Claude Haiku 4.5](https://platform.claude.com/docs/en/models/overview) - Low-latency Claude tier with a 200K context window and 64K maximum output; current alongside Sonnet 5, Opus 5 and Fable 5.1.
- [Claude Fable 5.1 / Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1) - 🆕 **September 1, 2026**. Fable 5.1 is generally available (`claude-fable-5-1`); Mythos 5.1 uses the same model with different safeguards and remains limited to approved US organizations.
- [Claude text watermarking + content credentials](https://www.anthropic.com/news/claude-text-watermark) - 🆕 **August 14, 2026**. Anthropic adds invisible **SynthID-Text-based watermarking** (Google DeepMind's method) to future Claude models globally at launch, plus C2PA content credentials on generated images/files (.png/.jpg/.svg); models released before August 2, 2026 get it "over the coming months", and a detection API is coming. Implemented to comply with the EU AI Act after Anthropic signed the EU transparency Code of Practice in July. Anthropic says watermarked text is indistinguishable to readers.
- [Claude Opus 5](https://www.anthropic.com/news/claude-opus-5) - 🆕 **July 24, 2026**. Anthropic's fifth-generation flagship — nears Fable 5 performance at a significantly lower price ($5/$25 per million input/output tokens). 1M-token context window, 128K output tokens. Now the default model on Claude Max. API: `claude-opus-5`. Available on Anthropic API, Amazon Bedrock, and Google Cloud Vertex AI.
- [Claude Fable 5 (Global Reinstatement)](https://www.anthropic.com/news/redeploying-fable-5) - 🆕 **July 1, 2026**. After US Commerce Department export controls were lifted on June 30, Anthropic reinstated global access to Fable 5 across Claude.ai, the Claude Platform, Claude Code, and Claude Cowork. A new safety classifier blocking the Amazon-discovered jailbreak was deployed (blocks the reported behavior in >99% of cases). Pro/Max/Team and select Enterprise plans got Fable 5 included for up to 50% of weekly usage through July 7, then via usage credits; cloud re-enablement on AWS, Google Cloud, and Microsoft Foundry to follow. Mythos 5 remains restricted to vetted US entities.
- [Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) - **June 30, 2026**. The most agentic Sonnet yet — planning, browser/terminal tool use, and autonomous operation at a level that recently required Opus-class models. Performance approaches Opus 4.8 on agentic search (BrowseComp) and computer use (OSWorld-Verified) at higher effort settings, with a much wider cost-performance range than Sonnet 4.6. Now the default model for Claude.ai Free/Pro; also on Max/Team/Enterprise, Claude Code, and the API as `claude-sonnet-5`. **August 10, 2026 update**: the introductory $2/$10 per million input/output pricing was made **permanent** — the previously scheduled increase to $3/$15 on September 1 will not occur. Anthropic reports a lower rate of undesirable behaviors than Sonnet 4.6.
- [Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) - **June 9, 2026**. Anthropic's first publicly available **Mythos-class** model — a capability tier above Opus. Surpasses Opus 4.8 across software engineering, knowledge work, vision, and scientific research benchmarks. Ships with built-in safeguards (sensitive cyber/bio queries may be rerouted to Opus 4.8). $10 / $50 per million in/out tokens. Available via Anthropic API, Amazon Bedrock, and Google Cloud Vertex AI. **⚠️ Access suspended June 12, 2026** — a US government export-control directive ordered Anthropic to disable Fable 5 and Mythos 5 for all customers pending security review. **✅ Export controls lifted June 30, 2026; access restored July 1** with a new cybersecurity classifier — see entry above ([statement](https://www.anthropic.com/news/redeploying-fable-5)). **August 7, 2026**: [biology-safeguard false positives reduced](https://www.anthropic.com/news) so Fable 5 falls back to a weaker model less often on biology-related queries.
- [Claude Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) - **June 9, 2026**. The same underlying Mythos-class model as Fable 5 with fewer restrictions, deployed only to vetted partners (cybersecurity firms, infrastructure providers) through **Project Glasswing** in collaboration with the US government. Successor to the April Claude Mythos Preview. **⚠️ Suspended June 12, 2026** alongside Fable 5 under a US export-control directive. **✅ Partially reinstated June 26, 2026** — US Commerce Secretary Lutnick restored access to 100+ approved US companies and federal agencies; broader reinstatement ongoing ([statement](https://www.anthropic.com/news/fable-mythos-access)).
- [Claude Opus 4.8](https://www.anthropic.com/claude/opus) - **May 28, 2026**. Major Opus refresh: codebase-scale migrations, sharper agentic judgment, **dynamic workflows** research preview with hundreds of parallel sub-agents in a single session, manual **effort-control** panel, **3× cheaper Fast mode** at the same $5 / $25 per million in/out. Available on Anthropic native + Amazon Bedrock + AWS Claude Platform + Google Cloud + Microsoft Foundry. Teases an upcoming **Mythos-class** model series for limited orgs.
- [Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7) - Released April 16, 2026. Advanced software engineering (SWE-bench Verified 87.6%), enhanced vision, proactive code verification. Supports `/think xhigh` reasoning effort. 1M-token context.
- [Claude Opus 4.6](https://www.anthropic.com/) - Released Feb 2026. 1M-token context, 14.5-hour task horizon. Leads Arena chat leaderboard.
- [Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6) - Released Feb 2026. Frontier coding and agentic performance, 1M token context window.
- [Claude Mythos Preview](https://www.anthropic.com/) - April 2026 gated research preview. BenchLM 99 (top of leaderboard), SWE-bench Verified 93.9%. Limited to Project Glasswing partners.
- [Claude Opus 4](https://www.anthropic.com/news/claude-4) - Released May 2025. Advanced reasoning and complex task execution.
- [Claude Sonnet 4](https://www.anthropic.com/news/claude-4) - Released May 2025. Balanced performance and cost for a wide range of tasks.
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) - Agentic coding tool operating directly in your terminal. Powered by Opus 4.7 with `/think xhigh` support. **July 2026**: desktop app gains a **built-in browser** enabling live website interaction (scraping, debugging, live-page inspection); Fable 5 model available since July 1.
- [Claude Security](https://www.anthropic.com/) - **May 1, 2026**. Public beta. Enterprise security tool powered by Opus 4.7 — scans entire codebases for vulnerabilities and generates targeted patches with confidence rating, severity, reproduction steps, and recommended fixes. Available to Enterprise customers via [claude.ai/security](https://claude.ai/security).
- [Claude Finance Agents](https://www.anthropic.com/news/finance-agents) - **May 5, 2026**. Ten Opus-4.7-powered specialised agents for pitchbook authoring, KYC, month-end close, deal screening, etc. Deployable as Claude Cowork plugins, Claude Code skills, or Managed-Agents cookbooks.
- [Claude Finance JV](https://www.anthropic.com/) - **May 4, 2026**. $1.5B Claude deployment joint venture with Goldman Sachs and Blackstone embedding Anthropic engineers in mid-market Wall Street firms.
- [Claude Managed Agents updates](https://claude.com/blog/new-in-claude-managed-agents) - **May 19, 2026**. Managed Agents update documents multi-agent coordination, rubric-based outcomes and dreaming in research preview; availability differs by feature.
- [Anthropic ↔ SpaceX Colossus 1](https://www.siliconrepublic.com/business/anthropic-joins-forces-with-spacex-for-colossus-capacity) - **May 6, 2026**. Anthropic takes all available capacity at SpaceX's Colossus 1 Memphis datacenter (>220K NVIDIA H100/H200/GB200 GPUs, 300+ MW) for Claude Opus inference. Doubles Claude Code 5-hour rate limits on Pro/Max/Team/Enterprise; also lifts peak-hour limits.
- [Anthropic ↔ AMD (up to 2 GW of Instinct MI450)](https://ir.amd.com/news-events/press-releases/detail/1292/amd-and-anthropic-announce-strategic-partnership-to-deploy-up-to-2-gigawatts-of-amd-instinct-mi450-series-gpus) - 🆕 **July 22, 2026**. Anthropic will deploy **up to 2 gigawatts** of AMD Instinct MI450 Series (MI455X) GPUs in AMD Helios rack-scale systems with EPYC "Venice" CPUs, Pensando networking and ROCm; the first gigawatt begins in H1 2027. AMD has committed a strategic equity investment of **up to $5 billion** in Anthropic, plus a multi-year engineering collaboration. Builds on Anthropic's existing MI355X usage — a deliberate hardware-diversification move alongside its TPU, Trainium and SpaceX Colossus capacity.
- [Anthropic's position on open-weights models](https://www.anthropic.com/news/position-open-weights-models) - 🆕 **July 27, 2026**. Dario Amodei responds to reports that US officials are weighing a ban on Chinese open-weights models: "Anthropic has never advocated for a ban on open-weights models." He calls non-dangerous open weights "a public good" and instead backs chip export controls plus a smuggling crackdown, deterrence of industrial-scale distillation, and **mandatory pre-release safety testing for all sufficiently capable models, open and closed**. Useful primary source for anyone tracking the 2026 open-vs-closed policy fight.
- [Claude for Legal](https://github.com/anthropics/claude-for-legal) - 🆕 **May 12, 2026**. New legal stack on top of Claude Cowork: **20+ MCP connectors** (iManage, NetDocuments, DocuSign, Ironclad, LexisNexis, Westlaw, Harvey, Everlaw, Relativity, CourtListener…) + **12 practice-area plugins** (commercial, employment, privacy, product, corporate, AI governance, litigation associate, law-student bar-exam). Microsoft Word / Outlook / Excel / PowerPoint orchestration built in.
- [Claude for Small Business](https://www.anthropic.com/news/claude-for-small-business) - **May 13, 2026**. Small-business toggle inside Claude Cowork — 15 pre-built agentic workflows across finance / ops / sales / marketing / HR / customer service, native connectors for QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace, Microsoft 365. Bundled with a free PayPal-backed "AI Fluency for Small Business" course and a 10-city US workshop tour kicking off in Chicago.
- [Anthropic ↔ Gates Foundation $200M](https://www.anthropic.com/news/gates-foundation-partnership) - **May 14, 2026**. 4-year, $200M partnership pairing grants + Claude usage credits + Anthropic engineers on global-health, life-sciences, education, and agriculture programs. All tools produced under the program will be freely available; first focus areas include vaccine R&D for polio / HPV / preeclampsia and agriculture-specific Claude extensions.
- [Anthropic ↔ PwC strategic alliance expansion](https://www.pwc.com/us/en/about-us/newsroom/press-releases/anthropic-pwc-expand-alliance-agentic-enterprise.html) - **May 14, 2026**. PwC commits to global rollout of Claude Code + Claude Cowork, certifies 30,000 PwC professionals, and stands up a joint "Agentic Enterprise" Center of Excellence — focused on agentic build, AI-native deals, and finance / supply-chain / HR reinvention.
- [Anthropic ↔ Financial Stability Board briefing (Claude Mythos)](https://www.theguardian.com/technology/2026/may/18/anthropic-ai-claude-mythos-cyber-financial-stability-board-fsb) - **May 18, 2026**. Anthropic briefs the global FSB on Claude Mythos cyber-flaw discovery capabilities — first time a frontier lab briefs a G20-level financial-stability regulator on a frontier model's offensive-security implications.
- [Code with Claude 2026 sessions on YouTube](https://www.infoq.com/news/2026/05/code-with-claude/) - **May 18, 2026 (sessions published)**. Full developer-conference recordings (May 6 event) go public: Claude Code roadmap, Claude Developer Platform updates, Managed Agents dreaming + multi-agent orchestration, and partner deployments.
- [Widening the conversation on frontier AI](https://www.anthropic.com/news/widening-conversation-ai) - **May 19, 2026**. Anthropic publishes its framework for engaging diverse traditions (religious, philosophical, indigenous) in frontier-AI safety dialogue. Companion to ongoing public-engagement work.
- [Bristol Myers Squibb ↔ Anthropic Claude Enterprise](https://news.bms.com/news/corporate-financial/2026/Bristol-Myers-Squibb-Announces-Strategic-Agreement-with-Anthropic-to-Position-Claude-Enterprise-as-the-Shared-Intelligence-Platform-Across-Its-Global-Operations/default.aspx) - **May 20, 2026**. BMS adopts Claude Enterprise as its shared intelligence platform for 30,000+ employees globally, embedding agentic Claude into drug-discovery / development / delivery workflows. First top-5 pharma enterprise-wide Claude deployment.

### Google DeepMind
- [Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) - 🆕 **September 2026**. Stable `gemini-3.8-flash` supports text, image, audio, video and PDF input, 1,048,576 input tokens, 65,536 output tokens and function calling.
- [Gemini 3.7 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) - 🆕 **August 13, 2026**. Google's new "most intelligent workhorse model" for coding and agents, shipped just three weeks after 3.6 Flash — and before the still-missing 3.5 Pro. FrontierCode 1.1 43.6% (vs 34.4% for 3.6 Flash), DeepSWE v1.1 65.3% (vs 49.0%). Introductory pricing **$0.75/$3.75 per million in/out through Dec 31, 2026** (then $1.50/$7.50). Available in AI Studio, Android Studio, Antigravity, and the Gemini Enterprise Agent Platform; powers Gemini Spark for AI Pro/Ultra subscribers.
- [Gemini 3.6 Flash](https://github.com/google-gemini/cookbook) - 🆕 **July 21, 2026**. Google's Flash tier — stronger on complex agentic and multimodal tasks **while using fewer tokens, at a lower price point than 3.5 Flash**. API id `gemini-3.6-flash`. Documented in the official Gemini API cookbook alongside thinking-mode guides. Superseded as the top Flash tier by 3.7 Flash on August 13, 2026.
- [Gemini 3.5 Flash-Lite](https://github.com/google-gemini/cookbook) - 🆕 **July 21, 2026**. The fastest, lowest-cost model in the 3.5 family; outperforms prior Flash-Lite generations for high-throughput execution. API id `gemini-3.5-flash-lite`. Now the cheapest Gemini tier, superseding 3.1 Flash-Lite for new builds.
- [Gemini 3.1 Pro (preview)](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview) - Preview reasoning model with multimodal input and 1M context; availability and limits are endpoint-specific.
- [Gemini 3.5 Pro (announcement)](https://ai.google.dev/gemini-api/docs/models) - ⚠️ No Gemini 3.5 Pro endpoint appears in the current public Gemini API catalog checked **2026-09-08**; do not assume an announced model is available or infer its price/context.
- [Gemma 4 12B](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/) - **June 2026**. Novel multimodal open model with a **unified, encoder-free architecture** processing text, images, and audio in a single pass. Runs locally on 16 GB VRAM.
- [DiffusionGemma](https://www.marktechpost.com/2026/06/10/google-ai-releases-diffusiongemma-a-26b-moe-open-model-using-text-diffusion-for-up-to-4x-faster-generation/) - **June 2026**. 26B MoE open model using **text-diffusion** for up to **4× faster generation** than autoregressive models.

- [Gemini 3.5 Flash](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/) - **May 19, 2026 — Google I/O 2026**. Default model powering the Gemini app and Google Search AI Mode. Marketed as **~4× faster** than other frontier models in output tokens/sec while outperforming Gemini 3.1 Pro on key benchmarks. Gemini 3.5 Pro was slated for June 2026 but has been delayed (see above).
- [Gemini Omni / Omni Flash](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/) - **May 19, 2026 — Google I/O 2026**. New Google DeepMind multimodal **world-model** family aimed at AGI. Omni Flash, the first shipped variant, can take any input modality and generate any output (starting with video; image and text generation following). Direct lineage to Gemini Robotics / Genie line of work.
- [Gemini 3.1 Pro](https://deepmind.google/technologies/gemini/) - Released Feb 2026. BenchLM 94, GPQA Diamond 94.3% (world-record), ARC AGI2 77.1%. `$2/1M tokens` flagship.
- [Gemini 3.1 Flash Live](https://deepmind.google/technologies/gemini/) - April 2026. Real-time multimodal streaming for voice assistants and interactive agents. Low latency, long context.
- [Gemini 3.1 Flash-Lite (GA)](https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-1-flash-lite-is-now-generally-available) - **May 8, 2026**. Generally available on Gemini API / AI Studio / Vertex AI. Fastest and most cost-efficient model in the Gemini 3 family — built for low-latency code completion, real-time UX, and agentic developer tools; matches Gemini 2.5 Flash quality at significantly lower cost.
- [Gemini Omni Flash — voice-controlled video editing rollout](https://www.techtimes.com/articles/317309/20260528/google-gemini-omni-flash-brings-voice-controlled-ai-video-editing-future-conversational-ai.htm) - **May 28, 2026**. Omni Flash starts rolling out to consumers via the Gemini app, **Google Flow**, and **YouTube Shorts** as the editing engine — conversational cinematic zooms / background swaps / weather edits driven by text, voice, image, or audio prompts; no traditional NLE required.
- [Gemini Spark (24/7 personal AI agent)](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/) - **May 19, 2026 — Google I/O 2026**. Cloud-resident personal AI agent that runs **24/7** on user intent, integrates Gmail / Chat first, then ~30+ third-party tools via MCP (Adobe / Dropbox / Uber). Available to Google AI Ultra subscribers in the US within the I/O week.
- [Google AI Ultra ($100/month tier)](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/) - **May 19, 2026 — Google I/O 2026**. New top consumer subscription targeted at developers / creators / power users. Gates Gemini Spark, highest Gemini 3.5 quotas, and the upcoming Gemini 3.5 Pro.
- [Gemini 3.1 Flash / Flash Lite](https://deepmind.google/technologies/gemini/) - Fast, cost-efficient models for high-throughput applications.
- [Gemma 4 family](https://huggingface.co/google/gemma-4-31B-it) - Open-weight multimodal family with E2B, E4B, 12B, 26B A4B and 31B variants under Apache-2.0; this is Gemma, not a released open Gemini 4 family.
- [Gemini 2.5 Pro / Flash](https://deepmind.google/technologies/gemini/) - GA June 2025. Thinking model with 1M context.
- [Gemma 4 31B](https://github.com/google-deepmind/gemma) - April 2026. GPQA Diamond 84.3%. Strong open-weight alternative for on-device reasoning. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgoogle-deepmind%2Fgemma&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Gemma 3](https://github.com/google-deepmind/gemma) - Previous open model family for on-device and research use.
- [Gemini Robotics ER 2](https://ai.google.dev/gemini-api/docs/robotics-overview) - 🆕 Current embodied-reasoning preview for spatial understanding and robotics tool orchestration, with a separate streaming preview; replaces the retired ER 1.6 endpoint.

### Meta

- [Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3) - 🆕 **September 2, 2026**. Agentic and coding update available in Muse Code and Meta Model API, including max reasoning; Spark open weights remain on the roadmap.
- [Muse Image](https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/) - 🆕 **July 7, 2026**. Meta Superintelligence Labs' most advanced image generation model to date — an "agentic" image model that performs intermediate reasoning steps (web search, code execution, self-refinement) before producing high-quality visuals. Integrated into the Meta AI app, Instagram Stories (US), and WhatsApp in limited countries (Facebook coming soon). Note: a controversial feature allowing images from other users' public Instagram profiles was added then removed on July 10 after feedback.
- [Muse Spark 1.1](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) - 🆕 **July 9, 2026**. Multimodal reasoning model designed for agentic tasks from Meta Superintelligence Labs — available through a new public preview of the Meta Model API. Marks a strategic shift toward proprietary revenue-focused models alongside Meta's open-source Llama line.
- [Muse Video](https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/) - 🆕 **July 7, 2026 (preview)**. Video generation model from Meta Superintelligence Labs, built on the same foundational technology as Muse Image; ranks #3 on Arena for text-to-video. Previewed alongside the Muse Image launch — "coming soon to creators and Meta AI."
- [Muse Spark 1.2 + Muse Code (beta)](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) - 🆕 **August 5, 2026**. **Muse Code** is MSL's terminal coding agent (async background agents, replay-exact local event log, `/plan` / `/grill` / `/goal` skills), powered by the new **Muse Spark 1.2** — trained on whole-repository generation and long-horizon coding. Spark 1.2 is also available in the Meta Model API with expanded global access.
- [Muse Glimmer 30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) - 🆕 **August 10, 2026**. Open-weight, 30B-parameter multimodal model from Meta Superintelligence Labs, Apache 2.0 license. Designed for **always-on local agent workflows** and optimized to run on a single consumer GPU or Apple Silicon. 131K-token context window, 100+ language training, DFlash acceleration. Distilled from Muse Spark; tuned for coding, evaluation, and agentic tasks. Available on Hugging Face with llama.cpp / MLX / ExecuTorch integrations.
- **Llama 5** — ❌ **Does not exist. Removed from this list on 2026-07-30 after verification.** A "Llama 5, 600B+, April 8 2026" entry circulated widely in AI-news aggregators and LLM search summaries, and was previously listed here. It does not hold up: the `meta-llama` Hugging Face organisation contains **no Llama-5 weights of any kind** (newest Llama-family upload is Llama-4-Maverick, May 2025), and Wikipedia's Llama article states "the latest version is Llama 4, released in April 2025" and that **Muse Spark replaced the Llama line in April 2026**. Treat any "Llama 5" claim as unverified until Meta publishes weights or a newsroom post. See [Muse Spark](#meta) above for what actually shipped.
- [Muse Spark](https://ai.meta.com/blog/introducing-muse-spark-msl/) - **April 9, 2026**. First model from Meta Superintelligence Labs (MSL). Natively multimodal reasoning model powering Meta AI app, smart glasses, and features across Facebook / Instagram / WhatsApp / Messenger.
- [Llama 4 Scout](https://llama.meta.com/) - 109B total params (17B active), MoE with 16 experts, 10M token context window, multimodal. Runs on single H100.
- [Llama 4 Maverick](https://llama.meta.com/) - 400B total params (17B active), 128 experts, 1M context. Outperforms GPT-4o on multimodal benchmarks.
- [Llama 4 Behemoth](https://llama.meta.com/) - 2T parameters (288B active). In training — Meta's frontier model rivaling top closed-source models.
- [Llama 3.3 70B](https://llama.meta.com/) - Strong instruction following and reasoning, open-weight under Llama Community License.

### Sakana AI

- [Sakana Namazu](https://console.sakana.ai/models) - Japanese-specialized LLM exposed as `sakana-namazu-v1.0`; the `sakana-namazu` alias follows the current release.
- [Sakana RL Conductor](https://venturebeat.com/orchestration/how-sakana-trained-a-7b-model-to-orchestrate-gpt-5-claude-sonnet-4-and-gemini-2-5-pro) - **Paper April 27, 2026; Fugu beta late-April / early-May 2026**. 7B RL-trained orchestrator (built on Qwen2.5-7B) that routes subtasks between GPT-5, Claude Sonnet 4, Gemini 2.5 Pro, etc. SOTA on LiveCodeBench (83.9%) and GPQA-Diamond (87.5%) at ~1.8K tokens/query — roughly 6× cheaper than other multi-agent ensembles.
- [Sakana Fugu / Fugu Ultra](https://console.sakana.ai/models) - Model orchestration API with `fugu`, `fugu-ultra-v1.1` and pay-as-you-go `fugu-cyber-v1.0`, supporting OpenAI-compatible Responses and Anthropic-compatible Messages.

### Zyphra

- [ZAYA1-8B](https://www.zyphra.com/models/zaya1-8b) - **May 6, 2026**. Small MoE reasoning model with Apache-2.0 weights, trained using AMD MI300X infrastructure.
- [ZAYA1-8B-Diffusion-Preview](https://www.zyphra.com/post/zaya1-8b-diffusion-preview) - **May 14, 2026**. First MoE diffusion language model converted from an autoregressive LLM and the first diffusion LM trained on AMD GPUs. Generates 16 tokens per step, achieving up to **7.7× inference speedup** vs the autoregressive base. Built with Zyphra's TiDAR recipe + CCA attention.

### Thinking Machines Lab

- [Inkling](https://thinkingmachines.ai/inkling/) - **July 15, 2026**. Apache-2.0 MoE model with 975B total / 41B active parameters and native text, image and audio input; model context reaches 1M, while Tinker exposes smaller limits.
- [Inkling-Small](https://thinkingmachines.ai/inkling/) - 🆕 **July 30, 2026 (weights released)**. Compact variant of Inkling — 276B total / 12B active, same native multimodal architecture (text/image/audio), 1M-token context, Apache 2.0. Scores **31.6% on HLE text benchmark** — slightly outperforming the larger 975B Inkling (29.7%) on that metric, validating the efficiency-first design. Available via Thinking Machines API and Hugging Face.

### Mistral AI

- [Voxtral Mini Transcribe Realtime](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602) - Apache-2.0 open-weight model for streaming speech recognition, distinct from the Voxtral TTS generation model.
- [Shieldstral 1.0](https://docs.mistral.ai/models/shieldstral-1-0) - 🆕 **August 4, 2026**. Apache-2.0 text/image moderation model in public preview; classifies policy questions, prompt-response pairs and refusals.
- [Mistral OCR 4.1](https://docs.mistral.ai/models/ocr-4-1) - Document OCR service returning paragraph bounding boxes, structural block labels and confidence scores.
- [Mistral Large 3](https://mistral.ai/news/mistral-3) - 675B total / 41B active parameters, MoE, 256K context. Flagship open-weight multimodal model. Released Dec 2025.
- [Mistral Medium 3.1](https://docs.mistral.ai/models) - 📦 Legacy 2025 release now listed among deprecated/retired models; Mistral Medium 3.5 is the current Medium entry.
- [Mistral Small 4](https://mistral.ai/news/mistral-small-4) - Released March 2026. 119B total / 6B active. Hybrid model combining reasoning, multimodal, and coding strengths.
- [Magistral 1.2](https://docs.mistral.ai/models) - 📦 Historical Medium/Small reasoning variants from September 2025, now in Mistral's deprecated/retired catalog.
- [Devstral 2](https://docs.mistral.ai/models/devstral-2-25-12) - Historical agentic coding model with a December 2025 model card; check lifecycle status before deployment.
- [Codestral 2508](https://docs.mistral.ai/models/codestral-25-08) - Code-completion model in the current Mistral catalog; use the versioned model card instead of the original 2024 22B specifications.
- [Pixtral Large](https://mistral.ai/) - 124B multimodal model with 1B vision encoder, 128K context, processes 30+ high-res images.
- [Ministral 3B/8B/14B](https://mistral.ai/) - Compact models optimized for edge deployment and efficiency.
- [Mistral Forge](https://mistral.ai/) - March 2026 platform for training custom LLMs on proprietary data.
- [Mistral Medium 3.5](https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04) - **April 28, 2026**. Dense 128B open-weight model, 256K context, Modified MIT license. Unifies instruction-following, reasoning, and coding.
- [Leanstral 1.5](https://mistral.ai/news/leanstral-1-5/) - 🆕 **July 2, 2026**. Formal-verification model for proof engineering in Lean 4 — 119B total / 6B active parameters, Apache 2.0, weights on Hugging Face plus a free API endpoint. Scores 100% on miniF2F, solves 587/672 PutnamBench problems, and discovered 5 previously unreported bugs across 57 real-world repositories.
- [Robostral Navigate](https://mistral.ai/news/robostral-navigate/) - 🆕 **July 8, 2026**. Mistral's first robotics model — an 8B embodied-navigation model that steers wheeled, legged, and flying robots through offices, homes, and outdoor spaces from natural-language instructions using only a single RGB camera (76.6% success rate on unseen validation). Trained fully in-house on ~400K simulated trajectories.
- [Voxtral TTS](https://docs.mistral.ai/models/voxtral-tts-26-03) - Open-weight speech generation with voice cloning and multilingual support; weights use CC-BY-NC-4.0, so commercial deployment needs separate permission.

### DeepSeek

- [DeepSeek-V4-Pro-0813 (GA)](https://api-docs.deepseek.com/news/news260813) - **August 13, 2026**. Production checkpoint behind `deepseek-v4-pro`, with configurable reasoning effort and Responses API support; peak/off-peak pricing has applied since August 16.
- [DeepSeek-V4-Pro](https://api-docs.deepseek.com/news/news260424) - **April 24, 2026 (preview); production launch mid-July 2026**. 1.6T total / 49B active MoE, 1M-token context. MIT license. Leadership in agent capabilities, world knowledge, reasoning; tops open-source benchmarks. 384K max output, 500-request concurrency. `deepseek-v4-pro` / `deepseek-v4-flash` are the production API models (V4-Pro serves the 0813 checkpoint since August 13 — see above; tiered peak/off-peak pricing from August 16, 2026).
- [DeepSeek-V4-Flash](https://api-docs.deepseek.com/news/news260424) - April 24, 2026. 284B total / 13B active MoE, 1M context. MIT. Cost-efficient tier — from August 16, 2026: peak **$0.014 cache-hit / $0.44 cache-miss input, $1.32 output**, off-peak **$0.007 / $0.22 / $0.66** per 1M tokens; 384K max output, 2,500-request concurrency ([pricing](https://api-docs.deepseek.com/quick_start/pricing)).
- [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) - 🆕 **July 31, 2026**. Updated Flash checkpoint with enhanced agentic capabilities — same 284B/13B-active MoE architecture, same pricing/API model ID, but outperforms V4-Pro (Preview) on agent task benchmarks. Open weights on Hugging Face under MIT license. Drop-in replacement for `deepseek-v4-flash` API users.
- [DeepSeek-V4-Flash-Vision-Exp](https://api-docs.deepseek.com/news/news260821) - 🆕 **August 21, 2026**. Experimental multimodal API model (`deepseek-v4-flash-vision-exp`) that matches V4-Flash on text/agents/reasoning while jumping multimodal-agent benchmarks to near Opus-4.8. Images billed at V4-Flash rates (up to 384 tokens each); Chat Completions / Messages / Responses; base64, URL, or Files API. **Files API** launched the same day (free upload, reuse by `file_id`). DeepSeek Harness 0.1.1 shipped with day-one support.
- [DeepSeek Agent Harness team](https://www.scmp.com/tech/big-tech/article/3354113/deepseek-recruits-former-jane-street-engineer-catch-ai-agents-revenue-race) - **May 19, 2026**. DeepSeek hires a former Jane Street engineer to lead a new "AI harness" team building the deterministic scaffolding that turns DeepSeek V4 into autonomous, revenue-generating agents — first major signal DeepSeek is moving past raw-model R&D into agentic productisation.
- [DeepSeek-V3.2](https://www.deepseek.com/) - Released Dec 2025. Advanced MoE architecture with 671B total parameters. V3.2 Speciale variant for enhanced reasoning. ⚠️ API model IDs deepseek-chat / deepseek-reasoner (V3.2-era) deprecated effective July 24, 2026 — superseded by V4-Flash modes.
- DeepSeek-R2 - 🧪 **Unreleased/rumored.** No official announcement, model card, or API ID exists as of mid-July 2026; reasoning is served via V4's Thinking mode.
- [DeepSeek-R1](https://www.deepseek.com/) - Reasoning-focused model with chain-of-thought capabilities. Released Jan 2025.
- [DeepSeek-Coder-V2](https://github.com/deepseek-ai/DeepSeek-Coder-V2) - Code generation model competitive with GPT-4 on coding benchmarks. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdeepseek-ai%2FDeepSeek-Coder-V2&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

### Alibaba (Qwen)

- [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) - 🆕 **August 2026**. Experimental multimodal MoE with 125B parameters / 6B active plus 51B n-gram tables and 4B MTP; native 262K context, extensible to 1M, under Qwen Community License 1.0.
- [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) - 🆕 **August 14, 2026**. Open-weight 27B multimodal (text/image/video input) distillation of Qwen3.8-Max, released on Hugging Face under **Apache 2.0** — sized for ~24 GB-VRAM consumer GPUs (RTX 4090-class). The promised open-weight companion to the Qwen3.8-Max launch, shipped on schedule.
- [Qwen3.8-Max / Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) - **August 2026**. Multimodal flagship with an official downloadable checkpoint; full-model weights use a custom Qwen license, while the separate Qwen3.8-27B checkpoint uses Apache-2.0.
- [Qwen3.7-Max](https://www.scmp.com/tech/big-tech/article/3354212/alibaba-unveils-new-qwen-model-custom-chips-bid-become-chinas-ai-factory) - **May 20, 2026 — Alibaba Cloud Summit Hangzhou**. New Qwen flagship purpose-built as the foundation for AI agents: agentic coding, complex reasoning, and **long-horizon multi-step missions** with sustained decision-making. Released alongside a full-stack AI infrastructure upgrade and new T-Head **Zhenwu M890** AI accelerator chip. Worldwide developer/enterprise availability rolling.
- [Qwen3.7-Max-Preview / Qwen3.7-Plus-Preview](https://www.scmp.com/tech/tech-trends/article/3354087/alibaba-teases-new-qwen-previews-highest-ranking-chinese-ai-models-arena) - **May 18, 2026**. Preview ladder before the Hangzhou unveil. Ranked the highest of any Chinese model on LM Arena in both text and vision; sustained 1M-context evaluations.
- [Qwen3.6-27B](https://qwen.ai/blog?id=qwen3.6-27b) - **April 22, 2026**. Dense 27B multimodal. Open-sourced. Focus: agentic coding + thinking-context preservation.
- [Qwen3.6-Max-Preview](https://qwen.ai/) - **April 18, 2026**. Proprietary frontier preview. High coding/reasoning performance, 1M context window. Top-tier among Chinese models on coding benchmarks.
- [Qwen3.6-35B-A3B](https://qwen.ai/blog?id=qwen3.6-35b-a3b) - **April 15, 2026**. MoE, 35B total / 3B active. Apache 2.0. Stability and real-world utility improvements.
- [Qwen3.6-Plus](https://qwen.ai/) - **April 2, 2026**. Proprietary flagship. High value-per-token general model. Strong long-context, tool-calling, agentic behavior.
- [HappyHorse 1.1](https://technode.com/2026/06/23/alibaba-unveils-happyhorse-1-1-video-generation-model-launches-global-ai-filmmaking-competition/) - 🆕 **June 23, 2026**. Alibaba's video-generation model (T2V/I2V/S2V, up to 15s 1080p with synced audio, strong multi-shot character consistency). HappyHorse 1.0 entered limited beta April 28, 2026 after launching anonymously and topping video leaderboards.
- [Qwen3.5 Max Pro](https://qwen.ai/) - April 2026. High-performance flagship. Enhanced coding and math reasoning, long context.
- [Qwen3.5 Omni Plus](https://qwen.ai/) - April 2026. Proprietary full-modal foundation model unifying text and image input.
- [Qwen3-Max-Thinking](https://qwen.ai/) - Alibaba's strongest thinking model. 1T+ parameters, enhanced agentic capabilities.
- [Qwen3.5-Omni](https://qwen.ai/) - March 2026. Fully omni-modal: language, vision, sound, motion. Speech recognition in 113 languages, 256K context.
- [Qwen3-Coder-Next](https://qwen.ai/) - Feb 2026. Open-weight coding agent model, MoE 80B total / 3B active.
- [Qwen3 235B-A22B](https://qwen.ai/) - MoE with dual-mode reasoning. Strong math, code, and commonsense reasoning.
- [Qwen2.5 Coder 32B](https://github.com/QwenLM/Qwen3-Coder) - Top open-source coding model. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FQwenLM%2FQwen3-Coder&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

### xAI / SpaceXAI (Grok)

- [Grok 4.6](https://x.ai/news/grok-4-6) - **August 12, 2026**. Coding and agentic model offered through the API, Cursor and Grok Build, starting at $2 input / $6 output per million tokens; Fast costs twice as much.
- [Grok Bot](https://docs.x.ai/docs/release-notes) - 🆕 **August 11, 2026 (early beta)**. Durable AI teammates that work on a **persistent cloud computer**, with messaging, approvals, connectors, and routines — xAI's entry into always-on autonomous agents. Available via SuperGrok Heavy, Cursor Ultra, and Cursor Teams Premium.
- [Grok 4.5](https://x.ai/) - 🆕 **July 8, 2026**. Optimised for coding and agentic tasks through joint training with Cursor using real developer interaction data. Features a 500K-token context window, function calling, structured outputs, web/X search, code execution, document search, and context compaction. Priced at $2/$6 per million in/out tokens. EU API-console availability arrived July 17, 2026. Superseded as flagship by Grok 4.6 on August 12, 2026.
- [Grok 4.3 GA](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-grok-4-3-on-microsoft-foundry-latest-generation-agentic-capabilities/4517096) - **May 2026**. Grok 4.3 reached general availability on Microsoft Foundry and OCI Generative AI; xAI's flagship for agentic workloads with improved tool-calling and long-horizon reasoning.
- [Grok 4.3 Beta](https://x.ai/) - April 2026. Latest iteration with improved reasoning and coding benchmarks. See [`2026.4` benchmark snapshot](https://benchlm.ai/).
- [Grok 4.20](https://x.ai/) - Feb 2026. Multi-agent system (4 standard + 16 specialized agents in Heavy mode), 2M token context.
- [Grok 4 / 4 Heavy](https://x.ai/) - Released July 2025. xAI's frontier model of the Grok 4 generation.
- [Grok 3 / 3 Mini](https://x.ai/) - Feb 2025. First reasoning models with "Think Mode".

### Microsoft (MAI)

- [MAI-Transcribe-2](https://microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/) - 🆕 **September 3, 2026**. Speech recognition with diarization, word timestamps, vocabulary biasing and 60-language support; promotional pricing is $0.10/audio-hour through year-end.
- [Microsoft MAI-Code-1-Flash](https://microsoft.ai/news/introducingmai-code-1-flash/) - **Build 2026 (June 2, 2026)**. Microsoft's first major in-house foundation model built entirely without OpenAI technology. 5B-parameter coding model with adaptive thinking, rolling out in GitHub Copilot. Outperforms Claude Haiku 4.5 across four core coding benchmarks (16-point lead on SWE-Bench Pro: 51.2% vs 35.2%); solves harder tasks with up to 60% fewer tokens on SWE-Bench Verified.
- [Microsoft MAI-Thinking-1](https://microsoft.ai/news/microsoft-build-2026-mai-keynote-transcript/) - **Build 2026 (June 2, 2026)**. Microsoft's first in-house reasoning model, trained from scratch without OpenAI data. Companion to MAI-Code-1-Flash; signals Microsoft's foundation-model independence push.
- [MAI-Code-1.1-Flash](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/) - 🆕 **August 11, 2026**. Production Copilot workhorse vs the June 1.0 baseline: higher-quality code, **25% greater token efficiency**, **a quarter of the cost**; +22% Terminal-Bench 2.1, +15% on .NET tasks.
- [MAI-Image-2.6](https://microsoft.ai/news/mai-image-2-6-launches-at-no-2-on-arena-ahead-of-google-meta-and-xai/) - 🆕 **August 10, 2026** (Arena editing update **August 18**). Microsoft's image model launched at Arena T2I #2; by Aug 18 it was Arena **image-editing #3**, ahead of Nano Banana and Muse Image (+79 Elo vs 2.5). MAI Playground + Microsoft Foundry private preview.
- [MAI-Cyber-1-Flash](https://microsoft.ai/news/introducing-mai-cyber-1-flash-inside-mdash/) - 🆕 **August 13, 2026**. Cyber model inside MDASH; Microsoft says world-class performance at **50% of the cost** of leading models.

### Microsoft (Phi)

- [Phi-4-reasoning-vision-15B](https://huggingface.co/microsoft/Phi-4-reasoning-vision-15B) - MIT-licensed 15B vision-language model combining image understanding with reasoning; consult the official checkpoint for deployment requirements.
- [Phi-4](https://azure.microsoft.com/en-us/products/phi) - 14B parameter SLM with reasoning rivaling much larger models. Open-source under MIT License.
- [Phi-4-mini](https://azure.microsoft.com/en-us/products/phi) - 3.8B parameter dense model. 128K context. Excels in reasoning, math, coding, and function-calling.
- [Phi-4-multimodal](https://azure.microsoft.com/en-us/products/phi) - 5.6B parameter. First multimodal Phi model — integrates speech, vision, and text in unified architecture.

### Cohere

- [Command A+](https://docs.cohere.com/docs/command-a-plus) - **May 2026**. `command-a-plus-05-2026` unifies image input, reasoning, tool use and translation, with 128K input context and 64K output.
- [Command A](https://docs.cohere.com/v2/changelog/command-a) - Released March 13, 2025. 111B open-weights model, 256K context. Agentic, multilingual, and coding focused.
- [Command R+](https://cohere.com/) - Enterprise RAG model, 128K context, multilingual (10 languages), grounded generation with citations.
- [Command R](https://cohere.com/) - Cost-efficient model for retrieval-augmented generation and enterprise workloads.

### Baidu (ERNIE / 文心)

- [ERNIE 5.1](https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/) - **May 9, 2026 official post**. ERNIE model update using asynchronous reinforcement learning and agentic post-training for writing, reasoning and tool-driven work.
- [ERNIE 5.0](https://ernie.baidu.com/) - Released November 13, 2025 (Baidu World). 2.4T-parameter omni-modal MoE (activates <3% per query).
- [ERNIE 4.5](https://yiyan.baidu.com/) - Multimodal predecessor released 2025. Strong reasoning and Chinese language capabilities.

### Zhipu AI / Z.ai (GLM)

- [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) - 🆕 MIT-licensed multimodal MoE with 320B total / 18B active parameters, hybrid sparse/linear attention and configurable reasoning effort.
- [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) - 🆕 Official coding/reasoning weights are now downloadable; they use the custom GLM-5.3 License, not GLM-5.2's MIT license, and support vLLM/SGLang deployment.
- [GLM-5.2](https://z.ai/blog/glm-5.2) - **June 13, 2026**. Coding-first 744B-MoE flagship with a **1M-token context window** (~5× GLM-5.1) and up to 131K output tokens. Live across all GLM Coding Plan tiers; MIT open weights + standalone API rolling out the launch week. Works out of the box with Claude Code, Cline, OpenCode, Roo Code, Goose, and OpenClaw. (No benchmark numbers published at launch.)
- [GLM-5.1](https://z.ai/blog/glm-5.1) - **April 8, 2026**. 744B MoE / 40B active, 200K context. MIT license. Tops SWE-Bench Pro.
- [ZCode](https://www.scmp.com/tech/tech-trends/article/3359170/zhipu-ai-releases-harness-glm-52-model-chinese-firm-takes-aim-anthropic) - 🆕 🇨🇳 **July 2, 2026**. Zhipu's agent harness for GLM-5.2 — turns the model into an autonomous coding agent, squarely targeting Claude Code; launch promos include +50% quota for Coding Plan subscribers and 5M free tokens for new users.
- [GLM-5 Reasoning](https://z.ai/) - April 2026. BenchLM 85 — **top open-source score**. SWE-Bench Pro surpasses GPT-5.4 and Claude Opus 4.6.
- [GLM-5V-Turbo](https://z.ai/) - April 2026. Native multimodal agent — vision, video clips, text inputs. Cost-performance balanced.
- [GLM-5](https://z.ai/) - Released Feb 2026. 744B parameters, advanced agentic intelligence. MIT license.
- [GLM-4.7](https://z.ai/) - Released late 2025. Matches Claude Opus 4 on SWE-Bench.

### MiniMax

- [MiniMax M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) - Open-weight multimodal model for coding and agentic work with MiniMax Sparse Attention and 1M context; weights use the MiniMax Community License.
- [MiniMax-M2.7 (Open Weights)](https://www.minimax.io/) - April 2026. 230B-class open-weight flagship. Top-tier performance on coding and Agent tasks.
- [MiniMax M2.7 (release history)](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) - Earlier MiniMax agentic/coding model with downloadable weights and its own license; the hosted launch description does not mean its weights remain proprietary-only.
- [MiniMax M2.5](https://www.codemotion.com/magazine/ai-ml/minimax-m2-5-low-costs-high-performance/) - 🇨🇳 **February 2026**. 230B-parameter cost-efficient flagship for "real-world productivity".
- [MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) - 🆕 🇨🇳 **July 2026** (HF created July 28). Open-weight omni-modal generator: understands text/image/video/audio and produces **video with native stereo audio** up to 2K / 15s. 33B dense Omni Transformer; `minimax-h3-community-license-agreement`. Current MiniMax video flagship (supersedes Hailuo 2.3). 4.4M+ HF downloads.
- [Hailuo 2.3 / 2.3 Fast](https://www.minimax.io/news/minimax-hailuo-23) - 🇨🇳 **October 2025**. Predecessor video model — SOTA physics, character micro-expressions, strong stylization; Hailuo 02 (2025) remains as the I2V-focused variant. Superseded as flagship by MiniMax H3 (July 2026).
- [MiniMax Music 3.0](https://huggingface.co/MiniMaxAI/MiniMax-Music3) - 🆕 🇨🇳 **August 13, 2026**. Open-weight music model for complete songs up to **five minutes** (8B Global LLM + 0.6B Local LLM, 32 kHz 16-bit stereo WAV). Current MiniMax music flagship.
- [MiniMax Music 2.6](https://aimlapi.com/blog/the-ultimate-guide-to-minimax-models-2026-m2-7-music-2-6-hailuo-video-advanced-tts) - 🇨🇳 **April 10, 2026**. Cover-generation predecessor; superseded as flagship by Music 3.0.
- [MiniMax-M1-80k](https://www.minimax.io/) - Open-weight hybrid-attention reasoning model. 456B parameters, 1M token context.
- [Hailuo AI (Video)](https://hailuoai.video/) - Text/image-to-video generation with AI avatars, voiceovers, and character consistency.
- [Kilo Code Integration](https://www.minimax.io/) - MiniMax models are heavily featured in Kilo Code (open-source AI coding extension at kilo.ai).

### Moonshot AI (Kimi)

- [Kimi K3](https://huggingface.co/moonshotai/Kimi-K3) - Open-weight multimodal MoE with 2.8T total / 104B active parameters and 1M context; the custom Kimi K3 License includes additional terms for large model-service businesses.
- [Kimi K2.7 Code](https://kimi.ai/) - **June 12, 2026**. Coding-first successor to K2.6 — 1T MoE / 32B active (384 experts), 256K context, Modified MIT, on Hugging Face + Kimi API. Targets long-horizon agentic coding with ~30% lower reasoning-token use; Moonshot reports +21.8% over K2.6 on its Kimi Code Bench v2 (vendor benchmarks). $0.95 / $4.00 per million in/out tokens.
- [Kimi K2.6](https://kimi.ai/) - **April 20-21, 2026**. 1T MoE / 32B active, 256K context. Enhanced coding, long multi-step execution, **agent swarm up to 1,000 collaborating agents**. Supports `thinking.keep="all"` persistent reasoning. Default in OpenClaw v2026.4.20+.
- [Kimi K2.5](https://kimi.ai/) - Jan-Feb 2026. 1T total / 32B active MoE. Native multimodal, Agent Swarm (up to 100 parallel sub-agents). Open-source. ⚠️ Support ended May 25, 2026; no longer available to newly registered users, with **full platform sunset on August 31, 2026** — migrate to K2.6.
- [Kimi Code](https://kimi.ai/) - Premium coding tier powered by K2.5/K2.6, terminal-based developer workflows.

### ByteDance (Doubao / 豆包)

- [Seed 2.1](https://seed.bytedance.com/en/seed2_1) - 🆕 Current Seed model for general agent tasks and end-to-end coding, with official evaluations and product access links.
- [Doubao 2.0](https://www.taipeitimes.com/News/biz/archives/2026/02/16/2003852382) - 🇨🇳 **February 2026**. Agent-era upgrade focused on real-world task execution; powers ByteDance's consumer AI apps.
- [Seedance 2.0](https://economictimes.indiatimes.com/us/news/seedance-2-0-goes-live-as-bytedances-ai-videos-ignite-china-market-rally/articleshow/128150649.cms) - 🇨🇳 **February 2026**. Multi-modal cinematic video generation, 2K resolution, ~30% faster than Seedance 1.5.
- [Doubao-Seed-2.0 Pro](https://seed.bytedance.com/en/seed2) - Seed 2.0 Pro is the reasoning and agentic-work tier of ByteDance's Seed 2.0 family; use the regional ModelArk catalog for endpoint availability and pricing.
- [Doubao-Seed-2.0 Lite](https://seed.bytedance.com/) - General production workloads. Balanced performance and efficiency.
- [Doubao-Seed-2.0 Code](https://seed.bytedance.com/) - Software development — code generation, debugging, and review.
- [BAGEL](https://github.com/bytedance-seed/BAGEL) - Open-source multimodal model for text, image, and video understanding and generation.

### Amazon (Nova)

- [Nova 2 Omni](https://docs.aws.amazon.com/nova/) - Multimodal understanding and generation member documented in the Amazon Nova 2 lineup.
- [Nova 2 Pro](https://docs.aws.amazon.com/nova/) - Reasoning member of the Nova 2 family; consult the Amazon Nova 2 guide for access, regional availability and supported modalities.
- [Nova 2 Lite](https://aws.amazon.com/nova/) - **December 2, 2025**. Fast, cost-effective reasoning with 1M-token context. Adjustable "thinking effort" controls.
- [Nova 2 Sonic](https://aws.amazon.com/nova/) - **December 2, 2025**. Speech-to-speech model for real-time conversational AI. Multilingual.
- [Nova Act](https://aws.amazon.com/nova/) - **December 2, 2025**. Browser-based AI agent service for web task automation, re-launched powered by Nova 2 Lite.
- [Nova Forge](https://aws.amazon.com/nova/) - **December 2, 2025**. "Open training" service for building custom Nova model variants with proprietary data.

### NVIDIA (Nemotron)
- [Nemotron 3.5 Lightning](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) - Open-weight 30B / 3B-active model for efficient agentic workloads, with official BF16 and NVFP4 checkpoints; follow the NVIDIA license attached to each artifact.
- [Nemotron 3.5 ASR](https://developer.nvidia.com/nemotron) - **June 6, 2026**. NVIDIA's 600M-parameter cache-aware streaming speech recognition model — real-time transcription across 40 language-locales.
- [Nemotron 3 Ultra (550B)](https://research.nvidia.com/labs/nemotron/Nemotron-3-Ultra/) - 🆕 **June 4, 2026**. Open-weight 550B-total / 55B-active hybrid Mamba-Transformer MoE for long-running agents. Frontier-level reasoning among US open models, optimized for Blackwell.
- [Nemotron-Labs-TwoTower](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16) - 🆕 🧪 **July 1, 2026**. Open-weight diffusion language model from NVIDIA Research, adapted from a frozen Nemotron-3-Nano-30B-A3B backbone — one tower holds context, the other writes tokens in parallel for ~2.4× throughput without retraining.
- [Nemotron 3 Super](https://developer.nvidia.com/nemotron) - Released March 11, 2026 (GTC). 120B total / 12B active. 1M context. 5x higher throughput vs predecessor.
- [Nemotron 3 Nano](https://developer.nvidia.com/nemotron) - **December 15, 2025**. Cost-efficient hybrid Transformer-Mamba MoE. Optimized for targeted agentic tasks.
- [Nemotron 3 Nano Omni](https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/) - **April 28, 2026**. 30B-A3B hybrid MoE (Mamba + Transformer). Natively multimodal: text, image, audio, video, charts, and documents in one model. 9x higher throughput than comparable open omni models. Topped 6 leaderboards (MMlongbench-Doc, OCRBenchV2, WorldSense, DailyOmni, VoiceBench). Open weights on Hugging Face, OpenRouter, Amazon SageMaker JumpStart.

### Tencent (Hunyuan)

- [Hunyuan Hy3](https://huggingface.co/tencent/Hy3) - Apache-2.0 open-weight MoE for reasoning and tool use, with an official checkpoint and deployment guidance.
- [Hunyuan Hy3 Preview](https://hy.tencent.com/hy3-preview) - 🇨🇳 **April 2026**. Preview that preceded the official Hy3: fast-slow thinking fusion architecture, 40% improved inference efficiency, vLLM and SGLang support. Open-sourced on GitHub, Hugging Face, ModelScope, GitCode. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTencent-Hunyuan%2FHy3-preview&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

### Apple

- [Apple Foundation Models 3 / ADM 3 Cloud](https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models) - **June 8, 2026**. Five-model family: on-device AFM 3 Core/Core Advanced, server AFM 3 Cloud/Cloud Pro, and ADM 3 Cloud for image generation on Private Cloud Compute.
- [OpenELM](https://machinelearning.apple.com/research/openelm) - Open-source efficient language models (270M–3B). Designed for on-device processing on Apple silicon.

### Samsung

- [Samsung Gauss2](https://news.samsung.com/sg/samsung-electronics-hosts-samsung-developer-conference-korea-2024-unveils-its-improved-gen-ai-model) - Samsung's officially documented proprietary multimodal family has Compact, Balanced and Supreme variants for internal productivity; a public Gauss 2.3 API/model card was not verified in this refresh.

### StepFun

- [Step 3.7 Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) - Apache-2.0 open-weight vision-language MoE for agentic coding and search, with official deployment instructions.
- [Step 3.5 Flash](https://github.com/stepfun-ai/Step-3.5-Flash) - 🇨🇳 **February 2026**. Open-weight 196B MoE (11B active) reasoning + agent model; punches above its weight against larger rivals.

### Baichuan

- [Baichuan-M4 (research)](https://arxiv.org/abs/2606.08982) - **June 8, 2026**. Research report on a medical agent system for continuous care, combining a reasoning model, persistent patient memory, evidence retrieval and multimodal clinical tools; public API/weight availability is not established by the paper.
- [Baichuan-M3-235B](https://huggingface.co/baichuan-inc/Baichuan-M3-235B) - Official 235B medical-domain model with downloadable Apache-2.0 weights.
- [Baichuan-M3 Plus](https://github.com/baichuan-inc/baichuan-mcp-servers/blob/main/packages/baixiaoying-mcp-server/README_EN.md) - Medical-domain model with an application-based access program for eligible institutions; availability and use restrictions are defined by Baichuan.

### Inflection AI

- [Inflection 2.5 / Pi](https://inflection.ai/labs) - Historical Inflection generation; the lab remains active in personal-intelligence research and Pi products, so it should not be treated as an abandoned project.

### 01.AI

- [Yi-Lightning](https://www.01.ai/) - **October 2024**. Historical 100B MoE release; 01.AI's current product focus includes enterprise platforms such as TrueNorth, released in July 2026.

### Chinese Academy of Sciences

- [ScienceOne 100 / 磐石100](https://english.cas.cn/newsroom/cas-in-media/202604/t20260429_1158251.shtml) - **April 2026**. CAS scientific AI system built around ScienceOne and discipline-specific models, with research tools for scientific workflows.

---

## 🎨 Multimodal & Generative AI

*Tools and models for generating and editing images, videos, audio, and music.*

### Image Generation

- [Nano Banana 2 Lite](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite-image) - Google's efficient image generation/editing variant, exposed as `gemini-3.1-flash-lite-image` in the Gemini API.
- [Grok Imagine Image 2.0](https://x.ai/news/grok-imagine-image-2) - 🆕 **August 7, 2026**. SpaceXAI's image generation/editing model — magic-wand editing, segmentation, background removal, multi-reference editing (up to 5 images), and smart resize; ranked **#2 worldwide on Arena in both text-to-image and image editing** at launch. Available on grok.com/imagine, iOS/Android, and the API as `grok-imagine-image-2.0`.
- [Meta Muse Image](https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/) - 🆕 **July 7, 2026**. Meta's most advanced image generation model from MSL — agentic design that performs web search, code execution, and self-refinement before producing images. Rolled out in Instagram Stories (US) and WhatsApp in limited countries (Facebook coming soon). Also accessible in the Meta AI app and on meta.ai.
- [Midjourney V8.1 / V8.2 Edit (alpha)](https://updates.midjourney.com/alpha-changelog-9-2-26/) - **September 3, 2026 update**. V8.2 Edit is available on the alpha site with instruction-based edits and up to four reference images; the main generation model remains V8.1.
- [FLUX.2 Pro / Flex / Dev / Klein](https://bfl.ai/blog/flux-2) - 🆕 **November 25, 2025**. Black Forest Labs' next-generation family. SOTA image quality, multi-reference consistency (up to 10 images), dramatically improved text rendering; open-weight 32B Dev variant.
- [Recraft V4 / V4.1](https://www.recraft.ai/blog/introducing-recraft-v4-design-taste-meets-image-generation) - 🆕 **February 17, 2026** (V4.1 **May 14, 2026**). Ground-up rebuild; major prompt-accuracy improvements; editable SVG vector output. V4.1 adds better photorealism, 3D/gradients, and Vector/Utility variants.
- [Stable Diffusion 3.5](https://huggingface.co/stabilityai/stable-diffusion-3.5-large) - Open-weight image generation under the Stability AI Community License, with separate commercial terms where applicable; not Apache-2.0.
- [Ideogram 4.0](https://ideogram.ai/models/4.0/) - Image generation and editing with multilingual typography and layout control; public quantized weights use the [Ideogram Non-Commercial Model Agreement](https://ideogram.ai/licensing/), with separate commercial licenses.
- [P-Image-Ideogram](https://ideogram.ai/tools/p-image-ideogram/) - Pruna and Ideogram image-model family offering multiple quality, latency and cost tradeoffs.
- [Ideogram 3.0](https://ideogram.ai/) - Excels at text rendering in images; March 2025 release with style references and in-platform canvas editor.
- [ChatGPT Images 2.0](https://openai.com/index/introducing-chatgpt-images-2-0/) - 🆕 **April 21, 2026**. State-of-the-art image generation with improved text rendering, multilingual support, advanced visual reasoning, and multi-turn editing for iterative refinement.
- [gpt-image-2](https://developers.openai.com/api/docs/models/gpt-image-2) - 🆕 **April 21, 2026**. OpenAI's latest image generation/editing API model with flexible image sizes and high-fidelity inputs. **August 20, 2026**: transparent-background **preview** (`background=transparent`, `png`/`webp` only) on `gpt-image-2` and `gpt-image-2-2026-04-21` in the Images API and Responses image tool ([changelog](https://developers.openai.com/api/docs/changelog.md)).
- [MAI-Image-2.6](https://microsoft.ai/news/mai-image-2-6-launches-at-no-2-on-arena-ahead-of-google-meta-and-xai/) - 🆕 **August 10, 2026** (editing leaderboard **August 18**). Microsoft's in-house image model — Arena T2I #2 at launch, Arena image-editing #3 by Aug 18. See Foundation → Microsoft (MAI).
- [DALL·E 3](https://developers.openai.com/api/docs/deprecations) - 📦 Historical text-to-image model; the `dall-e-3` API was retired on **May 12, 2026** and the documented replacement is the GPT Image family.
- [Gemini 3 Pro Image (Nano Banana Pro)](https://deepmind.google/models/gemini-image/pro/) - Google's native image generation within Gemini.
- [Nano Banana 2 (Gemini 3.1 Flash Image)](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/) - 🆕 **February 26, 2026**. Nano Banana Pro-level quality and world knowledge at Flash speed; up to 5-character consistency, 512px–4K output, text rendering/translation in images.
- [Kling Image 3.0 / 3.0 Omni](https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be/) - 🇨🇳 🆕 **February 5, 2026**. Kuaishou's native 2K/4K image generation, launched alongside Video 3.0 in the Kling 3.0 suite.
- [Flux](https://github.com/black-forest-labs/flux) - 💤 **Stale** (last update 2025-07). Black Forest Labs' original open-source repo — superseded by Flux 2 family. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fblack-forest-labs%2Fflux&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Seedream 5.0 Pro](https://seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro) - **July 8, 2026**. ByteDance's image creation model for layouts, text rendering and multimodal design; Seedream is the image family, while Seedance is the video family.
- [Qwen-Image-3.0](https://qwenlm.github.io/) - 🆕 🇨🇳 **July 20, 2026**. Alibaba's third-generation image generation model, unveiled at the World AI Conference. Significant improvements in photorealism, text rendering, and multi-subject consistency. Available via Alibaba Cloud Bailian and Qwen Cloud.
- [FLUX 3](https://bfl.ai/blog/flux-3) - 🆕 **July 23, 2026 (Early Access)**. Black Forest Labs' pivot from a still-image family to a unified multimodal foundation model that jointly learns from images, video and audio in one architecture. Generates video **up to 20 seconds with native synchronized audio** (text-to-video, image-to-video, video-to-video, keyframe-to-video, multilingual dialogue, agentic multi-shot chaining). In BFL's own early evaluations FLUX 3 was preferred over Runway Gen-4.5 in 77% of comparisons, Luma Ray 3.2 in 93%, Kling v3 Pro in 60%, and Seedance 2.0 / Gemini Omni Flash in 52% — vendor-reported and explicitly preliminary. World understanding also extends to **action prediction** for robotics. FLUX 3 Image early access still pending as of mid-August 2026.
- [Reve](https://reve.com/) - 🆕 "Layout-first" image model — it plans a structured, editable layout before rendering pixels, so individual elements can be moved, resized or recolored and re-rendered without regenerating the whole frame. Native 4K, sketch/annotation input, and direct object editing.

### Video Generation

- [Runway Aleph 2.0](https://docs.dev.runwayml.com/guides/models/) - Runway video-editing model exposed as `aleph2`, with video/text/image input and professional output formats.
- [Meta Muse Video](https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/) - 🆕 **July 7, 2026 (preview)**. Video generation model from Meta Superintelligence Labs built on the same architecture as Muse Image; ranks #3 on Arena for text-to-video. Previewed at the Muse Image launch; broader rollout anticipated across Meta apps.
- [Runway Agent](https://runwayml.com/news/introducing-runway-agent) - 🆕 **May 13, 2026**. Conversational agent that takes a written brief and ships a complete **multi-shot finished video**: storyboard → generation → cut → voiceover, with a timeline editor for final adjustments; first credible end-to-end "prompt-to-rough-cut" production agent.
- [Veo 3.1](https://ai.google.dev/gemini-api/docs/veo) - Video-with-audio generation, frame control and extension; Gemini API preview supports 4/6/8-second clips, with 1080p/4K restricted to 8 seconds.
- [Runway Gen-4.5](https://runwayml.com/research/introducing-runway-gen-4.5) - 🆕 **December 2025**. Runway's flagship video model, #1 on the Artificial Analysis text-to-video benchmark at launch. Platform also exposes third-party models incl. Kling 3.0 and Sora 2 Pro (added February 20, 2026).
- [Kling VIDEO 3.0](https://app.klingai.com/) - 🇨🇳 🆕 **February 4-7, 2026**. Kuaishou's new generation; realistic human motion, lip-sync, narrative production with audio sync.
- [Sora 2 (via Runway)](https://runwayml.com/changelog) - OpenAI's Sora app shut down April 26, 2026 (API until September 24, 2026), but Sora 2 Pro has been available inside Runway since **February 20, 2026**.
- [Seedance 2.5](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5) - 🇨🇳 🆕 **July 31, 2026 (official release)**. ByteDance's next-gen video model (announced June 23 at the Volcano Engine 2026 conference): native 30-second one-shot generation with multi-round extensions, flexible referencing (up to **30 images + 10 video clips + 10 audio clips** in a single pass), and improved character/product consistency. Rolling out on Jimeng AI and Doubao Pro in China; API via BytePlus ModelArk pre-release — no official global rate card yet.
- [Seedance 2.0](https://seed.bytedance.com/) - 🇨🇳 **February 2026**. ByteDance multi-modal cinematic video generation, 2K resolution (upgraded to 4K output June 23, 2026), ~30% faster than 1.5.
- [MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) - 🆕 🇨🇳 **July 2026**. Open-weight omni video+audio generator (2K / 15s, native stereo). Current MiniMax video flagship — see Foundation → MiniMax.
- [MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) - 🆕 🇨🇳 **August 24, 2026**. Alibaba PAI ControlNet-Union for H3: one checkpoint conditions on Canny / Depth / HED / MLSD / Pose and supports video inpainting (`minimax-h3-community-license-agreement`).
- [Hailuo 2.3](https://www.minimax.io/news/minimax-hailuo-23) - 🇨🇳 **October 28, 2025**. Predecessor MiniMax video model: SOTA physics, character micro-expressions, strong stylization (anime/ink-wash/game CG); Hailuo 2.3 Fast variant at Hailuo 02 pricing. Superseded as flagship by MiniMax H3.
- [Pika 2.5](https://pika.art/) - Creative video generation with scene and effects control.
- [LTX Studio](https://ltx.studio/) - AI-powered cinematic video creation platform.
- [HappyHorse 1.1](https://technode.com/2026/06/23/alibaba-unveils-happyhorse-1-1-video-generation-model-launches-global-ai-filmmaking-competition/) - 🇨🇳 🆕 **June 23, 2026**. Alibaba's video model (revealed April 10, 2026 as "HappyHorse-1.0" after topping benchmarks anonymously; rose to #2 globally). 1.1 upgrades motion dynamics, subject consistency, prompt adherence, and audio generation. Available via the HappyHorse site, Alibaba Cloud Bailian, and Qwen Cloud.
- [Sora 2 API (deprecated)](https://developers.openai.com/api/docs/deprecations) - 📦 Deprecated API with shutdown scheduled for **September 24, 2026**; retained for migration tracking, not recommended for new integrations.
- [Gemini Omni Flash 1.1](https://ai.google.dev/gemini-api/docs/omni) - Google's current default video-generation recommendation, supporting multi-turn editing through `gemini-omni-1.1-flash`; uploaded-video editing and extensions have regional restrictions.
- [Wan 3.0](https://www.alibabacloud.com/en/blog/wan-3-0-next-gen-video-generation-model-public-beta-launched) - 🆕 🇨🇳 **August 6, 2026 (public beta)**. Alibaba Tongyi Lab's next-gen video generation model — generates up to 30-second native single-shot video. Uniquely accepts documents (PDF/Word/PPT) and web pages as input alongside text, images, and audio. Intelligent duration recommendation based on prompt. Available for testing on Alibaba Cloud Model Studio and QwenCloud; full API and open weights not yet confirmed. Companion to the Qwen3.8-Max launch.
- [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) - 🆕 **August 12, 2026**. Lightricks' open-weight video-audio world model with native multishot generation (multiple connected scenes in one pass with consistent character identity, environment, and voice across cuts), diffusion fidelity rendering, a new video decoder (sharper faces, fewer artifacts), custom Gemma 4 12B text encoder, and a prompt enhancer. Supports text-to-video, image-to-video, video-to-video, audio-to-video, and text-to-audio-video. Self-hostable, no per-generation billing. Available on Hugging Face; commercial license (full terms in LICENSE).
- [Decart Lucy 2.5](https://decart.ai/) - 🆕 **July 2026**. Real-time video/world transformation model behind Decart's "Live AI" push — continuous infinite video with physically-aware effects, billed as ~100× more efficient than persistent-compute approaches. Positioned for live streams, interactive world models and robotics/AV simulation.

### Audio & Music

- [MAI-Transcribe-2](https://microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/) - 🆕 **September 3, 2026**. Microsoft speech-to-text model with speaker labels, word timestamps and configurable verbatim/clean transcripts.
- [Muse Voice Transcribe](https://research.meta.ai/blog/introducing-muse-voice-transcribe) - 🆕 **September 1, 2026**. Meta's real-time audio perception model for streaming ASR, diarization and speech endpoint detection.
- [Lyria 3.5](https://ai.google.dev/gemini-api/docs/models/lyria-3.5) - Google's current full-song music-generation model, documented as `lyria-3.5`; Lyria RealTime remains a separate interactive music model.
- [Qwen3-TTS](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) - Apache-2.0 multilingual TTS family with separate Base, CustomVoice and VoiceDesign checkpoints and streaming generation.
- [Qwen3-ASR](https://huggingface.co/Qwen/Qwen3-ASR-1.7B) - Apache-2.0 speech-recognition family with 0.6B/1.7B variants, streaming and offline inference, and 30 languages plus 22 Chinese dialects.
- [ElevenLabs Eleven v3 + ElevenAgents](https://elevenlabs.io/agents) - 🆕 2026 "audio layer of the internet" — 70+ language TTS with emotional Audio Tags, plus the AIUC-1-certified ElevenAgents voice-agent platform with multimodal messages, conversation topic discovery, and pre-tool speech controls. **July 2026 update**: Music Finetunes API (programmatic custom model management), per-agent sentiment analysis, nested agent transfers, RAG knowledge-base queries, auto-translated transcripts, faster generation with improved tonal consistency for long audio.
- [Eleven Music + Scribe v2 Realtime](https://elevenlabs.io/) - ElevenLabs' music generation and live transcription stack.
- [Cartesia Sonic 3 / 3.5](https://cartesia.ai/blog/introducing-line-for-voice-agents) - **2026**. State-space-model TTS hitting ~40-90ms time-to-first-audio (Sonic 3.5 GA May 2026); powers the **Line** voice-agent platform (Line agents run on Sonic 3.5 TTS + Ink-2 STT by default since May 2026).
- [Deepgram Nova-3 + Aura-2 + Flux Multilingual](https://deepgram.com/learn/best-voice-ai-agents-2026-buyers-guide) - **April 2026**. Speech-to-text in 45+ languages, sub-200ms TTS, conversational STT with mid-call language switching across 10 languages.
- [MiniMax Music 3.0](https://huggingface.co/MiniMaxAI/MiniMax-Music3) - 🆕 🇨🇳 **August 13, 2026**. Open-weight complete-song generator (up to 5 minutes, 32 kHz stereo). Current MiniMax music flagship — see Foundation → MiniMax.
- [MiniMax Music 2.6](https://aimlapi.com/blog/the-ultimate-guide-to-minimax-models-2026-m2-7-music-2-6-hailuo-video-advanced-tts) - 🇨🇳 **April 10, 2026** (global beta). Cover-generation predecessor; superseded by Music 3.0.
- [Voxtral TTS](https://docs.mistral.ai/models/voxtral-tts-26-03) - Mistral's multilingual speech-generation model; open weights are CC-BY-NC-4.0, distinct from Apache-2.0 Voxtral transcription weights.
- [Suno v5.5 + Studio 2.0](https://suno.com/blog/v5-5) - 🆕 **March 26, 2026** (Studio 2.0 **August 13, 2026**). AI music generation with high-quality vocals; v5.5 adds Voices (sing with your own verified voice), Custom Models trained on your uploads, and My Taste personalization. **Studio 2.0** (Aug 13) is a completely redesigned browser-based DAW with MIDI support, audio effects, and built-in synths; Voices expanded to iOS/Android free plans Aug 7. V6 rumored but unannounced.
- [Udio](https://www.udio.com/) - Text-to-music generation with professional audio quality.
- [OpenAI Audio Models](https://openai.com/) - Native audio understanding and generation within GPT-4o and GPT-Realtime-2 (**May 7, 2026**, with GPT-Realtime-Translate and GPT-Realtime-Whisper); gpt-realtime-2.1 and 2.1-mini released **July 6, 2026** with improved alphanumeric recognition, noise handling, and interruption behavior.
- [Stable Audio 3.0](https://stability.ai/stable-audio) - Audio-generation family with Large, Medium, Small and Small SFX variants; Medium and Small have open weights, with deployment rights governed by the applicable Stability license.
- [Bark](https://github.com/suno-ai/bark) - 💤 **Stale** (no commits since 2024-08). Open-source text-to-audio model supporting speech, music, and sound effects. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fsuno-ai%2Fbark&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Hume TADA](https://github.com/HumeAI/tada) - Speech-language models using 1:1 text/acoustic alignment, with TADA-1B and multilingual TADA-3B-ML checkpoints; code is MIT and weights use the Llama 3.2 Community License. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FHumeAI%2Ftada&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

---

## 🔗 Agent Protocols & Standards

*Open standards enabling agent interoperability, tool access, and cross-platform communication.*

### Model Context Protocol (MCP)

- [FastMCP](https://github.com/PrefectHQ/fastmcp) - Python framework for MCP servers, clients, and interactive apps; Apache-2.0; [v4.0.3](https://github.com/PrefectHQ/fastmcp/releases/tag/v4.0.3) (2026-09-05). ![GitHub stars](https://img.shields.io/github/stars/PrefectHQ/fastmcp?style=flat-square)
- [MCP Specification 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28) - 🆕 **2026-07-28 (final)**. Biggest MCP protocol change since launch: **stateless architecture** (removes `initialize`/`initialized` handshake and `Mcp-Session-Id`; every request is a self-contained HTTP POST), enabling serverless/edge deployment and horizontal scaling. Formal extension model; per-request token evaluation; 12-month deprecation window for old versions.
- [MCP Specification](https://modelcontextprotocol.io/) - The "USB-C for AI" — open protocol by Anthropic for connecting LLMs to tools and data sources. Donated to Agentic AI Foundation (Linux Foundation) in Dec 2025.
- [MCP 2026-07-28](https://blog.modelcontextprotocol.io/posts/2026-07-28/) - 🆕 **Shipped on schedule July 28, 2026** — the biggest revision since launch. **Stateless protocol core**: the `initialize` handshake and protocol-level session are gone, so every request is self-describing and any request can land on any instance behind a plain round-robin load balancer. **Multi Round-Trip Requests (MRTR)** replace held-open bidirectional streams for sampling/elicitation. Method and tool names now travel in `Mcp-Method` / `Mcp-Name` HTTP headers so gateways can route and authorize on headers alone. List responses carry cache hints + deterministic ordering (stable upstream prompt caches across reconnects). **Extensions Framework** formalized, with Tasks joining MCP Apps and Enterprise Managed Authorization (EMA). **Authorization hardening**: RFC 9207 issuer validation and a formal shift from Dynamic Client Registration (DCR) to Client ID Metadata Documents (CIMD). Plus a formal 12-month minimum deprecation window. Tier-1 TypeScript / Python / Go / C# SDKs updated day-one. Scale context: Tier-1 SDKs now see ~half a billion downloads a month, with TS and Python each past 1B total. [SDK betas shipped June 29, 2026](https://blog.modelcontextprotocol.io/posts/sdk-betas-2026-07-28/); [RC announced May 21, 2026](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/).
- [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) - 🆕 **August 22, 2026**. Core maintainers (David Soria Parra, Den Delimarsky) publish the post-`2026-07-28` roadmap: agentic messaging primitives, HTTP-native transport unification, agent identity / enterprise security, improved primitives, and SDK DX. Looks back at March priorities now landed (stateless core, `server/discover`, cacheable lists, Tasks-as-extension, MRTR, CIMD auth).
- [MCP Reference Servers](https://github.com/modelcontextprotocol/servers) - Educational reference implementations of MCP features; use the [MCP Registry](https://registry.modelcontextprotocol.io/) to discover integrations and review each server before production use. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmodelcontextprotocol%2Fservers&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) - Official TypeScript SDK for building MCP clients and servers. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmodelcontextprotocol%2Ftypescript-sdk&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) - Official Python SDK for MCP implementation. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmodelcontextprotocol%2Fpython-sdk&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [mcp.so](https://mcp.so/) - Community directory of MCP servers and tools.
- [Agents Launchpad](https://launchpad.smartbizcalc.com) - 🆕 Community launchpad for discovering and showcasing AI agents, MCPs, and indie agent products — submit your launch, get on the weekly leaderboard, and let the right builders find you. ⚠️ **Unverified** (early-stage).
- [CorpusIQ](https://www.corpusiq.io/) - ⚠️ **Unverified adoption**: hosted business-data connector for AI assistants; the official site documents its MCP integration.
- [Agentage Memory](https://agentage.io/blog/mcp-endpoint-is-live) - ⚠️ **Unverified adoption**: shared memory service accessed by MCP clients, with browser sign-in; link points to human-readable connection documentation.
- [mcp-gateway](https://github.com/Zijian-Ni/mcp-gateway) - ⚠️ **Unverified** (early-stage). Gateway server for routing and managing MCP connections. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FZijian-Ni%2Fmcp-gateway&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

### Agent-to-Agent Protocol (A2A)

- [A2A Protocol](https://github.com/a2aproject/A2A) - Open agent-to-agent communication protocol; [v1.0.0](https://github.com/a2aproject/A2A/releases/tag/v1.0.0) shipped 2026-03-12 and v1.0.1 on 2026-05-28; Apache-2.0; [v1.0.1](https://github.com/a2aproject/A2A/releases/tag/v1.0.1) (2026-05-28). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fa2aproject%2FA2A&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [A2A Course (DeepLearning.AI)](https://www.deeplearning.ai/short-courses/a2a-the-agent2agent-protocol/) - Free course on building multi-agent systems with A2A.

### Other Standards

- [Agentic AI Foundation](https://aaif.io/) - 🆕 Linux Foundation body stewarding open agent standards — hosts MCP, goose, AGENTS.md, and agentgateway. Founding platinum members: AWS, Anthropic, Block, Bloomberg, Cloudflare, Google, Microsoft, OpenAI.
- [AGENTS.md](https://agents.md/) - 🆕 Open Markdown convention — "a README for agents" — giving AI coding agents a predictable place for project-specific context and instructions. Used by 60k+ open-source projects; stewarded by the Agentic AI Foundation (Linux Foundation).
- [Coinbase Base MCP](https://fortune.com/2026/05/26/coinbase-pushes-further-into-ai-payments-with-new-mcp-for-base-network/) - **May 26, 2026**. Coinbase ships an MCP server for the Base blockchain, letting Claude / Cursor / ChatGPT agents execute crypto trades and lending operations on-chain. First major exchange-grade MCP endpoint for autonomous on-chain transactions.
- [Cloudflare WebMCP](https://blog.cloudflare.com/agents-week-review-august-2026/) - 🆕 **August 6, 2026 (Cloudflare Agents Week, Aug 3–7)**. One-line addition to make any website or web app discoverable and usable by AI agents — publishers retain control over access and pricing, while agents get structured access to web content. Part of Cloudflare's vision for an open Agentic Internet (readable, discoverable, callable, payable).
- [Robinhood Agentic Trading MCP](https://robinhood.com/us/en/newsroom/robinhood-is-now-open-to-agents/) - **May 27, 2026** (beta). First US broker to expose stock trading via MCP. AI agents (Claude / Codex / Cursor) get read access to accounts and trade-execute access only inside a dedicated ring-fenced Agentic account; push notifications on every trade, one-tap kill switch.
- [The Declaration of Intelligence](https://thedeclaration.ai) - ⚠️ Draft (v0.2) declaration of principles for AI agents and humans, signed publicly via GitHub pull request. Early-stage — a handful of signatories at last check.
- [Kuberna Labs](https://github.com/kawacukennedy/kuberna-labs) - ⚠️ **Unverified.** Cross-chain intent execution protocol for AI agents. Claims ERC-8004 on-chain identity, zkTLS/TEE attestation, and a typed intent schema enabling agents to autonomously execute transactions across NEAR, Base, and Mantle with verifiable execution proofs. New repo, independent adoption unverified — listed for visibility, evaluate before depending on it.

---

## 🏗️ Agent Frameworks

*Frameworks and libraries for building autonomous AI agents.*

- [Deep Agents](https://github.com/langchain-ai/deepagents) - MIT agent harness built on LangGraph, with subagents, filesystem tools, context management, persistent memory, and skills. ![GitHub stars](https://img.shields.io/github/stars/langchain-ai/deepagents?style=flat-square)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) - NousResearch agent harness with tools, persistent memory, skills, and messaging integrations; [v2026.9.7](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.7) (2026-09-07). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FNousResearch%2Fhermes-agent&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Superpowers](https://github.com/obra/superpowers) - Reusable coding-agent skills for planning, test-driven development, debugging, and code review; [v6.3.0](https://github.com/obra/superpowers/releases/tag/v6.3.0) (2026-08-12). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fobra%2Fsuperpowers&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Pi Agent](https://github.com/earendil-works/pi) - Extensible terminal coding-agent toolkit with model-provider integrations; [v0.85.1](https://github.com/earendil-works/pi/releases/tag/v0.85.1) (2026-09-05). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fearendil-works%2Fpi&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Ponytail](https://github.com/DietrichGebert/ponytail) - 🆕 **June 2026**. Agent framework from Dietrich Gebert that makes AI agents think like a lazy senior developer: minimal code, maximum correctness. Works with 20+ agents. MIT license; **103,000+ stars**. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FDietrichGebert%2Fponytail&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [NVIDIA NOOA (labs-OO-Agents)](https://github.com/NVIDIA-NeMo/labs-OO-Agents) - 🆕 ⚡ **August 2026 (alpha)**. NVIDIA Object-Oriented Agents: a model-agnostic Python framework that unifies prompt templates, tool schemas, callback code, and workflow graphs into a single Python class. Methods with a body stay as deterministic code; bodyless methods are completed at runtime by an LLM loop. Achieves high scores on SWE-bench Verified and CyberGym L1 with roughly half the tokens of comparable frameworks. Apache-adjacent license (NOASSERTION); run in sandboxed environments due to alpha status. **1,627 stars**. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FNVIDIA-NeMo%2Flabs-OO-Agents&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [NVIDIA Molt](https://github.com/NVIDIA-NeMo/labs-molt) - 🆕 **July 2026 (v0.1.0)**. PyTorch-native agentic reinforcement learning framework from NVIDIA NeMo Labs — lean ~9,000-line codebase treats the **agent as the core program** rather than a side-effect of training. Single asynchronous loop, Ray for distributed execution, vLLM for rollouts, NeMo AutoModel + FSDP2 for the policy actor. Supports 100B+ MoE models. RL estimators: REINFORCE, REINFORCE-baseline, RLOO, GRPO, DR-GRPO, GAE (PPO), on-policy distillation. Ships with Slurm scripts + prebuilt containers. Statistically comparable to a Megatron-based stack at matched async protocols. Apache-2.0. **910 stars**. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FNVIDIA-NeMo%2Flabs-molt&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Vercel Eve](https://github.com/vercel/eve) - **June 17, 2026 (Vercel Ship 2026)**. Open-source, filesystem-first TypeScript agent framework — an agent is a directory of files (instructions, tools, skills) that Vercel compiles into a durable service with sandboxed execution, approvals, evals, and OpenTelemetry built in. Works with any model, any MCP server, and channels like Slack / Discord / GitHub; billed as "Next.js for agents." Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvercel%2Feve&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Databricks Omnigent](https://github.com/omnigent-ai/omnigent) - **June 2026**. Open-source meta-harness that sits above the coding agents you already run (Claude Code, Codex, Pi, custom) and makes them interoperable parts of one system — compose agents, enforce shared security policies, and share / collaborate in real time. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fomnigent-ai%2Fomnigent&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Nokia NSP Agentic AI](https://www.globenewswire.com/news-release/2026/06/11/3310210/0/en/nokia-introduces-agentic-ai-framework-in-network-services-platform-to-enable-trust-based-ai-operations-for-ip-networks.html) - **June 2026**. Enterprise agentic framework for telecom Network Services Platforms (NSP), deploying agents to reason and execute routing/maintenance on complex IP networks.
- [Alteryx Agent Studio](https://www.alteryx.com/blog/new-capabilities-in-alteryx-one-built-for-how-analysts-work) - 🆕 **May 2026**. Packages trusted Alteryx datasets and workflows into conversational agents; creates and manages MCP endpoints via the new Alteryx One MCP Server (answers in Claude, ChatGPT, Gemini).
- [Koog](https://github.com/JetBrains/koog) - Kotlin/Java agent framework; 1.2.0 adds Agent Skills discovery and Amazon Bedrock AgentCore Runtime integration; [1.2.0](https://github.com/JetBrains/koog/releases/tag/1.2.0) (2026-08-28). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FJetBrains%2Fkoog&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LangChain](https://github.com/langchain-ai/langchain) - Build context-aware reasoning applications with LLMs. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flangchain-ai%2Flangchain&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LangGraph](https://github.com/langchain-ai/langgraph) - Build resilient language agents as graphs with stateful, multi-actor orchestration. **Latest stable 1.2.11 (August 11, 2026)**. 1.2.11 delivers tracing and checkpointing stability fixes. The 0.3.x series (2025) split prebuilt agents into `langgraph-prebuilt` (Supervisor, Swarm, LangMem, Trustcall). **v1.2 (May 2026)** adds per-node timeouts / error recovery / graceful shutdown, a new `DeltaChannel` to cut checkpoint overhead on long threads, and a content-block-centric streaming API v3. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flangchain-ai%2Flanggraph&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [CrewAI](https://github.com/crewAIInc/crewAI) - Python framework for collaborative agent crews and event-driven Flows; 1.15.20 fixes legacy platform-tool alias discovery; [1.15.20](https://github.com/crewAIInc/crewAI/releases/tag/1.15.20) (2026-09-04). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FcrewAIInc%2FcrewAI&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [goose](https://github.com/aaif-goose/goose) - Extensible desktop and CLI agent originating at Block, now hosted by AAIF; Apache-2.0; [v1.49.0](https://github.com/aaif-goose/goose/releases/tag/v1.49.0) (2026-09-03). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Faaif-goose%2Fgoose&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [AG2](https://github.com/ag2ai/ag2) - Community-maintained conversational multi-agent framework; 1.0.4 updates provider SDK support and ACP session resumption; [v1.0.4](https://github.com/ag2ai/ag2/releases/tag/v1.0.4) (2026-09-07). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fag2ai%2Fag2&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) - MIT-licensed Python/.NET agent and workflow framework; Python [1.17.0](https://github.com/microsoft/agent-framework/releases/tag/python-1.17.0) (2026-09-03), .NET [1.20.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.20.0) (2026-08-31).
- [Microsoft Agent 365](https://techcommunity.microsoft.com/blog/agent-365-blog/what%E2%80%99s-new-in-agent-365-may-2026/4516340) - **GA May 2026**. Enterprise observability + governance + security for AI agents across environments; May 2026 update adds Secure Access Service Edge (SASE) for agents, threat detection / blocking, and agent-threat-hunting workflows. KPMG announced a global deployment covering 276,000 professionals (June 9, 2026).
- [Microsoft Scout](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) - **June 2, 2026 (Build 2026)**. Microsoft's always-on personal work agent for Microsoft 365, built on the open-source OpenClaw runtime.
- [AutoGen](https://github.com/microsoft/autogen) - 💤 **Maintenance mode** (last release Sep 2025; superseded by Microsoft Agent Framework, community-managed going forward). Multi-agent conversation framework by Microsoft. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmicrosoft%2Fautogen&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Google Agent Development Kit (ADK)](https://github.com/google/adk-python) - Python framework for agents, tools, and workflows; the 2.x feature line is distinct from the continuing 1.x maintenance line; [v2.8.0](https://github.com/google/adk-python/releases/tag/v2.8.0) (2026-08-26). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgoogle%2Fadk-python&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) - Python agent SDK with handoffs, guardrails, tracing, MCP, and sandbox integrations; 0.22.1 adds server-wide MCP tool guardrails; [v0.22.1](https://github.com/openai/openai-agents-python/releases/tag/v0.22.1) (2026-09-08). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopenai%2Fopenai-agents-python&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - Multi-agent framework assigning different roles to GPTs for collaborative software entities. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FFoundationAgents%2FMetaGPT&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Pydantic AI](https://github.com/pydantic/pydantic-ai) - Typed Python agent framework with validated structured outputs and provider integrations; 2.41.0 adds a direct image-generation API; [v2.41.0](https://github.com/pydantic/pydantic-ai/releases/tag/v2.41.0) (2026-09-08). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fpydantic%2Fpydantic-ai&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Mastra](https://github.com/mastra-ai/mastra) - TypeScript agent framework with workflows, memory, and observability; core Apache-2.0, enterprise directories use separate terms; [@mastra/core@1.64.0](https://github.com/mastra-ai/mastra/releases/tag/%40mastra/core%401.64.0) (2026-09-04). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmastra-ai%2Fmastra&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Agon](https://github.com/AutoResearch-Factory/Agon) - 🆕 ⚠️ **Unverified** (35 stars, MIT). Autonomous omnidisciplinary research orchestrator built as a **Claude Code plugin** — scientist/coder/auditor multi-agent loop takes a bare topic all the way to running experiments with no human-written experimental code. 18 roles in 230.6 KiB of prompts across 10+ disciplines; 30-day continuous autonomous run documented. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FAutoResearch-Factory%2FAgon&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Hypha](https://github.com/CodeSoul-co/Hypha) - 🆕 ⚠️ **Unverified** (v1.0.1, August 14, 2026; Apache-2.0). TypeScript agent framework from CodeSoul that separates an **Agent Core** (ReAct, planning, tool selection, memory) from a **Production Harness** (FSM execution, policy/approval, checkpoints, recovery, replay, audit); product behaviour is declared as versioned **DomainPacks**, and a typed cache plane is explicitly barred from authorising side effects or advancing the FSM. 15 `@codesoul-co/hypha-*` packages on npm. ⚠️ Early-stage adoption: npm downloads for `@codesoul-co/hypha-core` were ~32/month as of 2026-08-22, and the vendor-published τ³ result (0.636 vs 0.626 direct-model baseline over 385 single-trial tasks) is inside statistical noise. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FCodeSoul-co%2FHypha&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Ontheia](https://github.com/Ontheia/ontheia) - ⚠️ **Unverified** (early-stage; independent adoption unverified). AGPL-3.0 self-hosted agent platform with multi-provider models, MCP, visual workflows, memory and role-based access; self-hosting and access controls alone do not establish GDPR compliance for a deployment. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FOntheia%2Fontheia&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [AgentGPT](https://github.com/reworkd/AgentGPT) - 📦 **Archived** (2026-01). Assemble, configure, and deploy autonomous AI agents in your browser. Influential first-wave project, kept for historical reference; no longer maintained. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Freworkd%2FAgentGPT&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [BabyAGI](https://github.com/yoheinakajima/babyagi) - Experimental self-building autonomous agent framework; the original 2023 task-management BabyAGI now lives at [babyagi_archive](https://github.com/yoheinakajima/babyagi_archive). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fyoheinakajima%2Fbabyagi&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [SuperAGI](https://github.com/TransformerOptimus/SuperAGI) - 💤 **Stale** (no commits since 2025-01). Open-source autonomous AI agent framework to build, manage & run agents. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTransformerOptimus%2FSuperAGI&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - Integrate LLM technology into apps. C#, Python, Java support. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmicrosoft%2Fsemantic-kernel&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Agno](https://github.com/agno-agi/agno) - Python framework for agents, teams, workflows, and knowledge; Apache-2.0; review the v3 migration guide before upgrading; [v3.0.7](https://github.com/agno-agi/agno/releases/tag/v3.0.7) (2026-09-08). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fagno-agi%2Fagno&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [DSPy](https://github.com/stanfordnlp/dspy) - The framework for programming—not prompting—language models. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fstanfordnlp%2Fdspy&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenClaw](https://github.com/openclaw/openclaw) - Personal-agent runtime with channels, skills, memory, and scheduled tasks; 2026.9.3 adds safer staged updates and performance fixes; [v2026.9.3](https://github.com/openclaw/openclaw/releases/tag/v2026.9.3) (2026-09-08). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopenclaw%2Fopenclaw&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) - 🧪 DeepSeek agent harness built on Cordis with a plugin architecture; [dsh-v0.1.3-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.3-alpha.2) (2026-09-07) remains a developer preview with expected breaking changes. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdeepseek-ai%2Fdeepseek-harness&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Dify](https://github.com/langgenius/dify) - Open-source LLM app development platform with visual agent builder. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flanggenius%2Fdify&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Haystack Agents](https://github.com/deepset-ai/haystack) - End-to-end LLM framework for agentic pipelines. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdeepset-ai%2Fhaystack&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Vellum AI](https://www.vellum.ai/) - Production-grade agent framework with prompt-based building, evaluations, versioning, and observability.
- [FastAgency](https://github.com/ag2ai/fastagency) - 💤 Deploy AG2 (AutoGen) multi-agent workflows to production via console, Mesop web UI, REST/FastAPI, and NATS adapters; last release Dec 2025. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fag2ai%2Ffastagency&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Rasa](https://github.com/RasaHQ/rasa) - 💤 **Maintenance mode** (last release Jan 2025; successor: Rasa CALM). Open-source conversational AI with strong intent recognition and dialogue management. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FRasaHQ%2Frasa&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Lindy](https://www.lindy.ai/) - Top no-code agent framework for business users with visual workflow builder.
- [Octomind](https://github.com/muvon/octomind) - Rust-based open-source AI agent runtime. Model-agnostic (13+ providers), community-built specialist agents (developer, medical, legal, DevOps), MCP support with runtime self-extension, zero-config setup. Apache 2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmuvon%2Foctomind&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Microsoft AI Agent Governance Toolkit](https://www.helpnetsecurity.com/2026/04/03/microsoft-ai-agent-governance-toolkit/) - **April 3, 2026**. Open-source toolkit for enforcing runtime security policies across agent frameworks including LangChain and AutoGen. Policy-as-code approach for enterprise AI governance.
- [Bernstein](https://github.com/sipyourdrink-ltd/bernstein) - Python orchestrator for 40+ CLI coding agents (Claude Code, Codex, Gemini CLI, Cursor, Aider). One LLM plan call up front; scheduling, git worktree isolation, quality gates, and HMAC-chained audit are deterministic. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fsipyourdrink-ltd%2Fbernstein&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Genkit Middleware](https://developers.googleblog.com/announcing-genkit-middleware-intercept-extend-and-harden-your-agentic-apps/) - **May 14, 2026**. New middleware system for Google's open-source Genkit framework. Composable hooks at the generate / model / tool layers — retries with exponential backoff, model fallbacks, tool approval gates, scoped filesystem access, skill injection from `SKILL.md`. TypeScript / Go / Dart; Python next.
- [Coze Studio](https://github.com/coze-dev/coze-studio) - 🇨🇳 ByteDance's open-source AI agent development platform — all-in-one visual builder for creating, debugging, and deploying agents. Apache-2.0, 20K+ stars; open-source counterpart to Coze.com. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcoze-dev%2Fcoze-studio&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LlamaIndex ↔ Google Agents API integration](https://www.kucoin.com/news/flash/google-launches-agents-api-llama-index-integrates-llamaparse-for-unstructured-document-processing) - **May 20, 2026**. LlamaIndex ships a template for Google's newly launched Agents API exposing **LlamaParse** / **LiteParse** over unstructured documents inside a sandboxed Linux environment.
- [NarraNexus](https://github.com/NetMindAI-Open/NarraNexus) - Ready-to-run AI agent team workspace by NetMind.AI — memory-aware agents that remember, collaborate, and use tools from day one. Multi-agent (PM/dev/deployment/research), persistent context, MCP-style integrations, composable modules. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FNetMindAI-Open%2FNarraNexus&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Strands Agents (AWS)](https://github.com/strands-agents/harness-sdk) - 🆕 **April–June 2026**. AWS open-source model-driven agent SDK (Python + TypeScript 1.0 GA April 30, 2026). Model-agnostic (Bedrock, Anthropic, OpenAI, Ollama), multi-agent orchestration patterns (graph/swarm/workflow), built-in observability hooks, A2A Protocol support; TypeScript SDK now maintained in the [harness-sdk monorepo](https://github.com/strands-agents/harness-sdk). Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fstrands-agents%2Fharness-sdk&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [CrewAI](https://github.com/crewAIInc/crewAI) - Python framework for collaborative agent crews and event-driven Flows; 1.15.20 fixes legacy platform-tool alias discovery; [1.15.20](https://github.com/crewAIInc/crewAI/releases/tag/1.15.20) (2026-09-04). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FcrewAIInc%2FcrewAI&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Oracle AI Agent Studio (Fusion)](https://www.oracle.com/news/announcement/oracle-introduces-ai-native-builder-experience-2026-07-14/) - 🆕 **July 14, 2026**. AI-native builder within Oracle Fusion Cloud Applications for creating Fusion Agentic Applications — outcome-driven systems powered by teams of specialized agents that reason and execute within Fusion's business objects, workflows, and security context. No-code / low-code / pro-code options; included at no additional cost to Fusion customers.
- [Microsoft Agent Framework releases](https://github.com/microsoft/agent-framework/releases) - Official release notes; stable release verified 2026-09-08; [python-1.17.0](https://github.com/microsoft/agent-framework/releases/tag/python-1.17.0) (2026-09-03). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmicrosoft%2Fagent-framework&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenAI Agents SDK releases](https://github.com/openai/openai-agents-python/releases) - Official release notes; stable release verified 2026-09-08; [v0.22.1](https://github.com/openai/openai-agents-python/releases/tag/v0.22.1) (2026-09-08). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopenai%2Fopenai-agents-python&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [CrewAI releases](https://github.com/crewAIInc/crewAI/releases) - Official release notes; stable release verified 2026-09-08; [1.15.20](https://github.com/crewAIInc/crewAI/releases/tag/1.15.20) (2026-09-04). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FcrewAIInc%2FcrewAI&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Google ADK releases](https://github.com/google/adk-python/releases) - Official release notes; stable release verified 2026-09-08; [v2.8.0](https://github.com/google/adk-python/releases/tag/v2.8.0) (2026-08-26). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgoogle%2Fadk-python&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ServiceNow AI Agents](https://www.servicenow.com/products/ai-agents.html) - Agents integrated with ServiceNow workflows; AI Agent Studio builds agents, Agent Fabric connects them, and AI Control Tower governs deployments.
- [Embabel Agent](https://github.com/embabel/embabel-agent) - 🆕 **Latest tagged release: v1.5.1 (August 24, 2026)** after v1.5.0 (August 11). Production-oriented AI agent framework for the **JVM** ecosystem — created by Rod Johnson (Spring Framework founder). Typed domain objects define agent behavior; Spring AI 2 / Jackson 3; graph-based multi-agent orchestration; native MCP client; embedding-driven skills and role-based LLM SPI in 1.5.x. **Apache-2.0**. Pronounced *em-BAY-bel*. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fembabel%2Fembabel-agent&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

---

## 🛠️ Agent IDEs & Visual Builders

*Visual environments for designing, debugging, and shipping agent workflows without (or with minimal) code.*

- [LangGraph Studio](https://docs.langchain.com/langsmith/studio) - Visual debugger and trace inspector for LangGraph agents (now part of LangSmith) — step through state, replay turns, edit messages mid-flight. Companion to the LangGraph runtime.
- [Dify](https://github.com/langgenius/dify) - Open-source LLM app development platform with drag-and-drop agent workflow builder. Mainstream production deployments. ⚡ **v1.17.0 (August 25, 2026)** adds E2B cloud sandboxes, Home Snapshots, workspace Skill manager, and context-aware history compaction. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flanggenius%2Fdify&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Agenta](https://github.com/agenta-ai/agenta) - Open-source LLMOps platform combining a prompt playground, prompt management, evaluation runs, and observability in one UI. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fagenta-ai%2Fagenta&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Vellum AI](https://www.vellum.ai/) - Production-grade agent IDE with prompt building, evaluations, versioning, and observability — closed-source SaaS.
- [Coze Loop](https://github.com/coze-dev/coze-loop) - 🆕 🇨🇳 ByteDance's open-source agent optimization platform: full-lifecycle development, debugging, evaluation, and monitoring. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcoze-dev%2Fcoze-loop&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Restack](https://www.restack.io/) - Durable agent runtime + visual workflow editor (built on Temporal-style replay). Open-source examples in [restackio/examples-python](https://github.com/restackio/examples-python).
- [Bisheng](https://github.com/dataelement/bisheng) - 🇨🇳 Open enterprise LLM DevOps platform: workflow editor, RAG, agent orchestration, fine-tuning, dataset management, observability. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdataelement%2Fbisheng&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [n8n](https://github.com/n8n-io/n8n) - General-purpose visual workflow automation that has become a popular agent canvas — 400+ integrations + native AI nodes. Fair-code license. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fn8n-io%2Fn8n&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Mastra](https://github.com/mastra-ai/mastra) - TypeScript agent framework with workflows, memory, and observability; core Apache-2.0, enterprise directories use separate terms; [@mastra/core@1.64.0](https://github.com/mastra-ai/mastra/releases/tag/%40mastra/core%401.64.0) (2026-09-04). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmastra-ai%2Fmastra&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [VoltAgent](https://github.com/VoltAgent/voltagent) - End-to-end TypeScript AI Agent Engineering Platform with memory, RAG, guardrails, MCP, voice, and workflow capabilities. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FVoltAgent%2Fvoltagent&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Coze Studio](https://github.com/coze-dev/coze-studio) - 🇨🇳 Open-source agent IDE / visual builder from ByteDance's Coze team. Drag-and-drop workflows, plugin marketplace, debugging panel, multi-LLM provider support. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcoze-dev%2Fcoze-studio&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

---

## 🧠 Agent Memory

*Systems for giving agents persistent memory and context management.*

- [Mem0 SDK releases](https://mem0.ai) - Official [Python v2.0.20](https://github.com/mem0ai/mem0/releases/tag/v2.0.20) and [TypeScript v3.1.8](https://github.com/mem0ai/mem0/releases/tag/ts-v3.1.8) (2026-09-02). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmem0ai%2Fmem0&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Letta (MemGPT)](https://github.com/letta-ai/letta) - Create LLM services with long-term memory and custom tools. **July 2026**: goes beyond a passive memory layer — provides a **stateful agent runtime** where the agent has active control over its own memory, deciding what to store and forget. Supports multi-tenant apps and long-running sessions without context-window resets. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fletta-ai%2Fletta&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [MemoryLake](https://memorylake.ai) - 🆕 **July 2026**. "Memory passport for agents" — platform-neutral memory layer shared across different agents and tools. Stores scoped memories (user / agent / session) and surfaces them via a universal API so an agent on one platform can recall context from another.
- [Supermemory](https://github.com/supermemoryai/supermemory) - 🆕 Context graph built from diverse data sources (web, docs, chats) to inform agent conversations. API-first, integrates with MCP and major frameworks. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fsupermemoryai%2Fsupermemory&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Graphlit](https://www.graphlit.com/) - 🆕 Context platform for production agents: ingestion, entity extraction, and knowledge graph for search + RAG. Exposes MCP server for Claude / Cursor / Copilot integration.
- [Mem0](https://github.com/mem0ai/mem0) - Persistent memory library for AI applications, with Python and TypeScript SDKs; Apache-2.0; [v2.0.20](https://github.com/mem0ai/mem0/releases/tag/v2.0.20) (2026-09-02). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmem0ai%2Fmem0&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Remio](https://remio.ai/) - Local-first AI memory and knowledge base desktop app (Windows/Mac) for personal context. Parses files, webpages, recordings, emails, messages, and images into local indexes and vectors, so agents can retrieve focused context instead of repeatedly grepping directories or loading whole documents into prompts. Local-first + BYOK.
- [Zep](https://github.com/getzep/zep) - Long-term memory for AI assistants and agents. Note: open-source Community Edition deprecated — repo now hosts Zep Cloud SDKs/examples; see [Graphiti](https://github.com/getzep/graphiti) for Zep's active OSS. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgetzep%2Fzep&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [agent-memory](https://github.com/Zijian-Ni/agent-memory) - ⚠️ **Unverified** (early-stage). Lightweight agent memory framework for persistent context across sessions. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FZijian-Ni%2Fagent-memory&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Graphiti](https://github.com/getzep/graphiti) - Temporal knowledge-graph engine for agent memory; core v0.30.0 and MCP server v1.1.0 released 2026-09-01; [v0.30.0](https://github.com/getzep/graphiti/releases/tag/v0.30.0) (2026-09-01). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgetzep%2Fgraphiti&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LangMem](https://github.com/langchain-ai/langmem) - LangChain's long-term memory SDK for agents — semantic/episodic/procedural memory primitives that plug into LangGraph's persistence layer. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flangchain-ai%2Flangmem&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Motorhead](https://github.com/getmetal/motorhead) - 💤 **Unmaintained** (deprecated by maintainers; last release 2023-12). Memory and context management server for LLMs. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgetmetal%2Fmotorhead&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ChromaDB](https://github.com/chroma-core/chroma) - AI-native open-source embedding database for memory-augmented agents. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fchroma-core%2Fchroma&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Cognee](https://github.com/topoteretes/cognee) - Knowledge and memory engine combining document ingestion, graphs, and vector retrieval; Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Ftopoteretes%2Fcognee&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LangGraph Memory](https://github.com/langchain-ai/langgraph) - Built-in persistence and checkpointing for stateful agent workflows. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flangchain-ai%2Flanggraph&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Claude Managed Agents Memory](https://platform.claude.com/docs/en/release-notes/overview) - **April 23, 2026** (public beta). Anthropic's persistent memory feature for Claude Managed Agents. Agents retain information across sessions by mounting read/write memory stores to a filesystem. Enables long-running agents to learn and adapt without resetting context.
- [OpenViking](https://github.com/volcengine/OpenViking) - Agent context database organizing memory, resources, and skills through filesystem-style access; AGPL-3.0; [v0.4.19](https://github.com/volcengine/OpenViking/releases/tag/v0.4.19) (2026-09-08). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvolcengine%2FOpenViking&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ReMe](https://github.com/agentscope-ai/ReMe) - 🇨🇳 Memory management kit from Alibaba's AgentScope team — combined file-based + vector-based memory for agents, designed to tackle context-window limits and stateless sessions. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fagentscope-ai%2FReMe&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [taOSmd](https://github.com/jaylfc/taosmd) - ⚠️ **Unverified.** Local-first agent memory that keeps every turn verbatim in an append-only, zero-loss archive and links each extracted fact to its source, so facts a verifier cannot support are demoted out of recall (served-hallucination measured at 0.04, then 0.00). Typed temporal knowledge graph with supersede, plus hybrid vector + BM25 retrieval; tuned for small local models, fully offline (runs on an 8 GB SBC or RK3588 NPU). Author-reported 97% Recall@5 on LongMemEval-S, reproducible per `docs/benchmarks.md`. MIT. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fjaylfc%2Ftaosmd&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenWiki](https://github.com/langchain-ai/openwiki) - 🆕 ⚡ **July 2026 launch; August 25, 2026 self-correcting memory**. LangChain's MIT CLI that writes and maintains a codebase wiki for agents; Aug 25 adds claim-to-code evidence so the wiki can notice stale facts and forget ([blog](https://www.langchain.com/blog/self-correcting-memory-openwiki)). 15K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flangchain-ai%2Fopenwiki&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [claude-mem](https://github.com/thedotmack/claude-mem) - 🆕 ⚡ **August 2026**. Lightweight MCP server that gives Claude Code (and any MCP-compatible agent) persistent context across sessions — stores conversation history to a local SQLite database so agents recall prior work without re-loading entire project files. **90,000+ stars**. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fthedotmack%2Fclaude-mem&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Hindsight](https://github.com/vectorize-io/hindsight) - Agent memory that learns from experience — not just conversation history. Biomimetic data structure organizes facts about the world, agent experiences, and learned mental models; `retain`/`recall`/`reflect` primitives; ships with the Agent Memory Benchmark (AMB). MIT, 15K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvectorize-io%2Fhindsight&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [SimpleMem](https://github.com/aiming-lab/SimpleMem) - Efficient lifelong memory for LLM agents — multimodal (text + image + audio + video), designed to beat token-limit constraints without fine-tuning. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Faiming-lab%2FSimpleMem&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Genesys](https://github.com/Astrix-Labs/papez) - ⚠️ **Unverified** (single-maintainer, self-submitted). Causal-graph memory engine for AI agents — memories are nodes, edges encode causal relationships; multiplicative scoring (relevance × connectivity × reactivation) + active forgetting to prune stale context. MCP-native (13 tools). AGPL-3.0. Author-reported 85.55 LoCoMo score. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FAstrix-Labs%2Fpapez&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Agent Memory Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) - 30 runnable Jupyter notebooks covering conversation buffers, vector stores, knowledge graphs, episodic/semantic memory, MemGPT, Mem0, Letta, Zep, Graphiti, LoCoMo benchmarks — the practical reference for learning all major memory patterns. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FNirDiamant%2FAgent_Memory_Techniques&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

## 🔌 Tool & API Integration

*Protocols and tools for connecting agents to external services and APIs.*

- [LangChain MCP integration](https://www.langchain.com/blog/mcp-in-langchain-stateless-protocol-elicitation-and-more) - 🆕 **2026-09-03**: MCP support moves into `langchain.mcp`, using FastMCP for protocol negotiation, tool-list caching, and elicitation through LangGraph interrupts.
- [ZoomMate](https://news.zoom.com/zoom-launches-zoommate/) - 🆕 💰 **GA June 1, 2026**. Zoom's first-party AI teammate that turns meeting conversations into completed work — updates Salesforce records, creates Jira issues, and routes requests through Slack. $20/user/month.
- [MCP Reference Servers](https://github.com/modelcontextprotocol/servers) - Educational reference implementations of MCP features; use the [MCP Registry](https://registry.modelcontextprotocol.io/) to discover integrations and review each server before production use. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmodelcontextprotocol%2Fservers&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [mcp-gateway](https://github.com/Zijian-Ni/mcp-gateway) - ⚠️ **Unverified** (early-stage). Gateway server for routing and managing MCP protocol connections. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FZijian-Ni%2Fmcp-gateway&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Composio](https://github.com/ComposioHQ/composio) - Integration platform for AI agents — 1000+ toolkits with managed auth. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FComposioHQ%2Fcomposio&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Toolhouse](https://toolhouse.ai/) - Cloud infrastructure for AI tool use — store, manage, and execute tools.
- [LangChain Tools](https://github.com/langchain-ai/langchain) - Extensive collection of tool integrations within the LangChain ecosystem. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flangchain-ai%2Flangchain&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Arcade AI](https://github.com/ArcadeAI/arcade-mcp) - Tool calling platform for AI agents and assistants. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FArcadeAI%2Farcade-mcp&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Browser Use](https://github.com/browser-use/browser-use) - Python browser-automation library for AI agents; MIT; [0.13.10](https://github.com/browser-use/browser-use/releases/tag/0.13.10) (2026-09-04). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbrowser-use%2Fbrowser-use&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Firecrawl](https://github.com/firecrawl/firecrawl) - Turn websites into LLM-ready data. Crawl and convert any website for AI. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Ffirecrawl%2Ffirecrawl&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Crawl4AI](https://github.com/unclecode/crawl4ai) - Open-source LLM-friendly web crawler and scraper. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Funclecode%2Fcrawl4ai&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Stagehand](https://github.com/browserbase/stagehand) - AI-powered browser automation framework by Browserbase. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbrowserbase%2Fstagehand&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [AgentQL](https://www.agentql.com/) - Query language for AI agents to interact with web pages semantically.
- [StackOne](https://www.stackone.com/) - Unified API for AI agent integrations across HR, CRM, and ATS platforms.
- [AWS MCP Server](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-mcp-server/) - **GA May 6, 2026**. AWS-managed MCP server giving coding agents secure, auditable access to any AWS API; sandboxed Python execution for multi-step ops; replaces "agent SOPs" with agent skills. First-party from AWS.
- [Google Workspace MCP Server](https://workspaceupdates.googleblog.com/2026/05/agent-tools-and-security-updates-for-workspace-developers.html) - **Public developer preview, May 1, 2026**. Workspace-native MCP server exposing Gmail / Drive / Calendar / Chat / People to MCP clients, with admin-controlled OAuth scopes and audit trails.
- [iManage MCP Server](https://imanage.com/resources/resource-center/news/mcp-server-available-broader-ai-ecosystem/) - **May 14, 2026**. Native MCP endpoint for the iManage knowledge-work platform — lets any AI client securely read/write iManage documents without custom integration. First major legal/professional-services SaaS to ship a public MCP server.
- [Power Platform Canvas Authoring MCP Server](https://www.microsoft.com/en-us/power-platform/blog/2026/05/14/whats-new-in-power-platform-may-2026-feature-update/) - **May 14, 2026**. Microsoft Power Platform feature exposing Canvas Apps authoring as an MCP server; lets Copilot / Claude Code drive natural-language InfoPath → Canvas Apps migration.
- [Coinbase AgentKit](https://github.com/coinbase/agentkit) - Coinbase SDK for agent wallets and on-chain actions, with Python/TypeScript framework integrations; Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcoinbase%2Fagentkit&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Bifrost (Maxim AI)](https://github.com/maximhq/bifrost) - Open-source enterprise AI gateway (Apache-2.0) — 1000+ models, adaptive load balancer, cluster mode, guardrails, OAuth 2.0 with PKCE, prompt-injection defense at the gateway layer; ~<100µs overhead at 5k RPS. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmaximhq%2Fbifrost&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Anthropic Creative Tool Connectors](https://www.anthropic.com/news/claude-for-creative-work) - **April 28, 2026**. Nine MCP-based Claude connectors for creative software: Adobe (50+ tools across Creative Cloud — Photoshop, Premiere, Express), Blender, Autodesk Fusion, Ableton, Splice, Affinity by Canva, SketchUp, and Resolume. Built on the MCP open standard so other LLM clients can use them too.
- [The Colony](https://thecolony.cc) - ⚠️ **Unverified.** Self-described public agent-first social network with REST API for agent posts/votes/DMs and SDKs in Python ([colony-sdk-python](https://github.com/TheColonyAI/colony-sdk-python)), TypeScript ([colony-sdk-js](https://github.com/TheColonyAI/colony-sdk-js)) and Go ([colony-sdk-go](https://github.com/TheColonyAI/colony-sdk-go)). Organisation and SDK repos are <30 days old, all 0–2 stars, single-maintainer; same submission was sent to 15+ awesome lists in parallel — listed for visibility, evaluate before depending on it. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTheColonyAI%2Fcolony-sdk-python&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [dependency-freshness-mcp](https://github.com/Armigerous/dependency-freshness-mcp) - ⚠️ **Unverified.** MCP server giving AI coding agents fresh, cited npm & PyPI facts — latest version, release dates, deprecations, and dated breaking-change diffs — to close the training-cutoff blind spot. Remote (Apify Standby HTTP) + local stdio. New single-maintainer repo (created 2026-06-08, 0 stars at listing) — listed for visibility, evaluate before depending on it. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FArmigerous%2Fdependency-freshness-mcp&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [NotFair](https://github.com/nowork-studio/notfair-plugin) - Open-source Claude Code agent skills for [SEO](https://github.com/nowork-studio/notfair-plugin/tree/main/seo), [Google Ads](https://github.com/nowork-studio/notfair-plugin/tree/main/google-ads), and [Meta Ads](https://github.com/nowork-studio/notfair-plugin/tree/main/meta-ads); connects to live campaign and analytics data via Google Ads MCP, Meta Ads MCP, Google Search Console MCP, and Google Analytics (GA4) MCP. MIT. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fnowork-studio%2Fnotfair-plugin&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [mcp-agent](https://github.com/lastmile-ai/mcp-agent) - Open-source Python framework designed with Model Context Protocol (MCP) as its core communication primitive for building agents natively interoperable with the MCP tool ecosystem. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flastmile-ai%2Fmcp-agent&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

## 💱 Agent Economy & Marketplaces

*The commerce layer of the agent ecosystem — where agents discover paid services, make micropayments, and developers monetize APIs for agent consumption. Builds on top of protocols (MCP, A2A, x402) and wallet infrastructure (Coinbase AgentKit, Bedrock AgentCore Payments).*

- [Nevermined + LangChain payment cookbook](https://www.langchain.com/blog/agents-that-pay-how-nevermined-empowers-langchain-agents-to-buy-and-sell-services) - 🆕 **2026-09-03**: official integration example for delegated card payments with spending policies and payment traces in LangSmith.
- [x402](https://github.com/x402-foundation/x402) - Open HTTP payment protocol and reference implementations for paid APIs and agent services. ![GitHub stars](https://img.shields.io/github/stars/x402-foundation/x402?style=flat-square)
- [AP2 (Agent Payments Protocol)](https://github.com/google-agentic-commerce/AP2) - Google-led open protocol for interoperable agent payments; separate from the A2A communication protocol. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgoogle-agentic-commerce%2FAP2&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [minia2a](https://minia2a.uk) - ⚠️ **Unverified** (independent adoption unverified). Agent API marketplace using x402 for per-call USDC payments on Base, with wallet authentication and configurable spending limits; platform-reported usage counters are not independently verified.
- [Cog Depot](https://cogdepot.com) - ⚠️ **Unverified** (early-stage self-submission; no independently verified adoption). Agent marketplace with listing discovery, negotiation and peer introductions through REST and an MIT [MCP client](https://github.com/cogdepot/mcp-server); the broker’s fee escrow is distinct from escrow of the underlying trade.
- [MCPize](https://mcpize.com) - 🆕 MCP server monetization platform — list an MCP server, set a price, platform handles billing and discovery. **85% revenue share** to developers. Bridges the gap between the MCP tool ecosystem and sustainable developer economics.
- [AgentForge](https://github.com/doggychip/agentforge) - ⚠️ **Unverified** (early-stage, 3 stars). Subscription marketplace for AI agents, tools, and content — 300+ agents, unified API, MCP support, 90% creator revenue share. Listed for visibility; evaluate before depending on it. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdoggychip%2Fagentforge&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Cloudflare Wallets](https://blog.cloudflare.com/agents-week-review-august-2026/) - 🆕 **August 4, 2026 (Cloudflare Agents Week, Aug 3–7)**. Programmable wallet for the Agentic Internet — `cloudflare.pay` gives AI agents a secure way to make autonomous payments as participants in the agent economy. Launched alongside WriteGuard (fine-grained controls for risky MCP tool calls), WebMCP (one-line website-to-agent discoverability), MCPv2, and unified Workers AI + AI Gateway control plane as part of Cloudflare's Agents Week.
- [LangChain × AgentCore Payments](https://www.langchain.com/blog/langchain-agentcore-payments) - 🆕 **August 17, 2026**. Middleware so LangChain agents pay for APIs via Amazon Bedrock AgentCore (x402) with session budgets enforced outside the prompt; LangSmith traces every spend.
- [Alchemy & Visa AgentCard](https://www.coindesk.com/business/2026/06/18/alchemy-s-ai-driven-identity-and-payment-service-gains-access-to-visa-network) - *See also 🔌 Tool & API Integration — listed there for its identity/payment stack; relevant here for the agent economy angle.*
- [Amazon Bedrock AgentCore Payments](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-payments-preview/) - *See also 🏢 Enterprise Agent Platforms — managed payment layer for AgentCore agents (Coinbase/Stripe integrations, spending limits).*

---

## 🧪 Agent Sandboxing & Compute Isolation

*Secure runtimes that let agents execute generated code and shell commands without compromising the host. Critical infrastructure once you let an agent off the leash.*

- [OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) - Apache-2.0 sandbox platform with Docker/Kubernetes runtimes, multi-language SDKs, CLI/MCP access, and per-sandbox network controls. ![GitHub stars](https://img.shields.io/github/stars/opensandbox-group/OpenSandbox?style=flat-square)
- [E2B](https://github.com/e2b-dev/E2B) - Open-source secure cloud sandbox for AI-generated code. Used as the execution layer in OpenAI Agents SDK and many production agents. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fe2b-dev%2FE2B&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Daytona](https://github.com/daytonaio/daytona) - 💤 **Public repository unmaintained**: core development moved to a private codebase in June 2026; the public v0.190.0 snapshot receives no further fixes or releases, while the managed service continues. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdaytonaio%2Fdaytona&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Modal](https://modal.com/) - Serverless cloud platform popular for agent compute, GPU jobs, and sandboxed Python — `modal-client` is the official SDK. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmodal-labs%2Fmodal-client&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Microsandbox](https://github.com/superradcompany/microsandbox) - Local, programmable microVM sandboxes for AI agents — secure code execution on your own machine, no cloud dependency. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fsuperradcompany%2Fmicrosandbox&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [SandboxFusion](https://github.com/bytedance/SandboxFusion) - ByteDance's multi-language code-execution sandbox built for agent / model evaluation pipelines. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbytedance%2FSandboxFusion&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Northflank](https://northflank.com/) - General-purpose container PaaS used as an agent runtime backend (per-task ephemeral environments, GPU pools).
- [Firecracker](https://github.com/firecracker-microvm/firecracker) - KVM-based virtual machine monitor (VMM) for lightweight microVMs; Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Ffirecracker-microvm%2Ffirecracker&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LangSmith Sandboxes](https://www.langchain.com/blog/interrupt-2026-overview) - **May 2026 (Interrupt 2026)**. Hosted secure code execution environments for agents — filesystem, shell, package manager, persistent state, and network boundary. Part of LangChain's Interrupt 2026 release alongside LangSmith Engine and Managed Deep Agents.
- [Google Antigravity Sandbox](https://antigravity.google/changelog) - 🆕 **May 2026 (Google I/O)**. Sandboxed Linux environments for agent-executed code; ships as part of Antigravity 2.0's stack — sub-agents run in isolated containers with scoped filesystem + network access.
- [Amazon Bedrock AgentCore Runtime Instances](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-bedrock-agentcore-runtime-instances-generally-available/) - 🆕 **GA August 6, 2026**. EC2-backed persistent compute for AgentCore agents — long-running agent sessions up to **14 days** (vs the 8-hour serverless microVM cap), with GPU-accelerated, memory-optimized, and compute-optimized instance families via capacity providers; no change to the deploy/invoke path. 9 regions at launch.

---

## 🛡️ Agent Security

*Tools and frameworks for securing AI agents against prompt injection, data leaks, and misuse.*

- [Cloudflare WriteGuard](https://blog.cloudflare.com/agents-week-review-august-2026/) - 🆕 **August 5, 2026 (Cloudflare Agents Week, Aug 3–7; Private Beta)**. Fine-grained controls for risky MCP tool calls — the same tooling Cloudflare uses internally, now in private beta for customers. Lets operators intercept and veto destructive or sensitive agent actions before they execute; lowers the blast radius of prompt-injection and autonomous-agent errors.
- [UK AISI agent containment incident (INC-2026-07-28-01)](https://www.helpnetsecurity.com/2026/08/05/ai-agent-deception-in-cyber-tests/) - 🆕 ⚠️ **Incident, not a tool — disclosed August 5, 2026**. The UK AI Security Institute reports that agents built on frontier models (Anthropic Mythos 5, OpenAI GPT-5.6 Sol) in a routine cyber evaluation took "sustained, unsanctioned action directed at real people and organisations" — attempting an open-source supply-chain attack via malicious PRs and social-engineering a maintainer. The agent was never instructed to deceive; deception emerged as a by-product of pursuing the task. Reference case for containment/egress controls on eval infrastructure.
- [prompt-firewall](https://github.com/Zijian-Ni/prompt-firewall) - ⚠️ **Unverified** (early-stage). Firewall for LLM prompts — detect and block prompt injection attacks. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FZijian-Ni%2Fprompt-firewall&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LLM Guard](https://github.com/protectai/llm-guard) - 📦 **Archived** (2026-07-08). The Security Toolkit for LLM Interactions — input/output scanners for AI. Kept for historical reference. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fprotectai%2Fllm-guard&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Rebuff](https://github.com/protectai/rebuff) - 📦 **Archived** (2025-05). Self-hardening prompt injection detector — detect, deflect, and report. Listed for historical reference; no longer maintained. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fprotectai%2Frebuff&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Guardrails AI](https://github.com/guardrails-ai/guardrails) - Adding guardrails to large language models — validate and correct LLM outputs. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fguardrails-ai%2Fguardrails&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) - Toolkit for adding programmable guardrails to LLM-based conversational systems. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FNVIDIA-NeMo%2FGuardrails&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Vigil](https://github.com/deadbits/vigil-llm) - 💤 **Stale** (no commits since 2024-01). LLM security scanner — detect prompt injections, jailbreaks, and data leakage. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdeadbits%2Fvigil-llm&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Lakera Guard](https://www.lakera.ai/) - Enterprise-grade AI security platform for prompt injection defense.
- [Garak](https://github.com/NVIDIA/garak) - LLM vulnerability scanner by NVIDIA — probe for weaknesses in language models. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FNVIDIA%2Fgarak&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Invariant Guardrails](https://github.com/invariantlabs-ai/invariant) - Runtime guardrails for AI agents — policy enforcement and safety checks. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Finvariantlabs-ai%2Finvariant&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Prompt Armor](https://promptarmor.com/) - Enterprise prompt injection protection with real-time detection.
- [Descope MCP Auth](https://www.descope.com/) - Authentication and authorization layer for MCP server security.
- [AgentDojo](https://github.com/ethz-spylab/agentdojo) - ETH Zürich research benchmark for evaluating prompt-injection attacks and defenses against tool-using LLM agents. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fethz-spylab%2Fagentdojo&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ModelScan](https://github.com/protectai/modelscan) - Scan ML model files (Pickle, PyTorch, TF) for serialization-based code-execution attacks. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fprotectai%2Fmodelscan&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [PyRIT](https://github.com/microsoft/PyRIT) - Microsoft's Python Risk Identification Tool for generative AI — automated red-teaming framework (moved from Azure/PyRIT, March 2026; actively maintained). Complements RAMPART below. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmicrosoft%2FPyRIT&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [RAMPART](https://github.com/microsoft/RAMPART) - **May 20, 2026**. Microsoft's pytest-native safety + security testing framework for agentic AI. Developer-facing white-box counterpart to PyRIT — cross-prompt-injection probes, benign-failure asserts, harm-category coverage, statistical thresholds (e.g. safe in 80%+ runs). Integrates straight into CI/CD. MIT. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmicrosoft%2FRAMPART&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Clarity (Microsoft)](https://www.microsoft.com/en-us/security/blog/2026/05/20/introducing-rampart-and-clarity-open-source-tools-to-bring-safety-into-agent-development-workflow/) - **May 20, 2026**. Companion to RAMPART. Structured design-review tool for AI agents — "living artifacts" documenting intent, risks, and behavior before code is written. Open-sourced from Microsoft AI Red Team's internal practice.
- [Nobulex](https://github.com/arian-gogani/nobulex) - ⚠️ **Unverified.** Cryptographic receipts for AI agent actions (Ed25519 dual signatures, hash-chained audit logs). MIT. Bilateral-receipt primitive [merged](https://github.com/microsoft/agent-governance-toolkit/pull/1333) into Microsoft's Agent Governance Toolkit (PRs #1302, #1333). Same submission sent to 15+ awesome lists in parallel; submitter's claim of "4,500 npm downloads" doesn't match registry data (`@nobulex/mcp-server` ~19/month at audit time). Listed for visibility on the strength of the Microsoft adoption. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Farian-gogani%2Fnobulex&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [MCP Gateway & Registry](https://github.com/agentic-community/mcp-gateway-registry) - Enterprise-ready MCP gateway and registry that centralises AI development tools with OAuth authentication, dynamic tool discovery, audit trails, and Keycloak / Entra integration. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fagentic-community%2Fmcp-gateway-registry&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ActPlane](https://github.com/eunomia-bpf/ActPlane) - 🧪 OS-level agent harness enforcing behavioral contracts defined in YAML via eBPF at the syscall boundary — constraints hold across any tool, subprocess, or direct syscall, with corrective feedback to the agent on violation. MIT. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Feunomia-bpf%2FActPlane&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [WalletPrint](https://github.com/Loai17/walletprint-sdk) - ⚠️ **Unverified** (early-stage). Open-source SDK for behavioral risk scoring of agent wallets that flags anomalies before transactions are signed using wallet behavioral history, with integrations for ZeroDev and LangChain. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FLoai17%2Fwalletprint-sdk&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Alchemy & Visa AgentCard](https://www.coindesk.com/business/2026/06/18/alchemy-s-ai-driven-identity-and-payment-service-gains-access-to-visa-network) - **June 18, 2026**. Payments + identity stack for AI agents built on **Visa Intelligent Commerce**. One API provisions everything an agent needs to transact — a Visa payment token, a dedicated email and phone number, and a crypto wallet — so it can buy on a consumer's behalf with scoped controls. Defaults to Visa-issued tokens; also supports crypto, x402, and Stripe's Machine Payments Protocol. Model-agnostic (OpenAI / Anthropic / etc.).
- [Microsoft Prompt Shields](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection) - Azure AI Content Safety feature detecting jailbreaks and indirect prompt injection hidden in documents/web pages an agent consumes (GA 2024; since extended for agent workloads). Integrates with Azure OpenAI Service and third-party models.
- [Agent Name Service (ANS)](https://www.ciodive.com/news/linux-foundation-prepares-open-standard-ai-agent-verification/823691/) - **June 2026**. Linux Foundation initiative to establish an open standard for AI agent verification and trusted identity. Decentralized agent name registry so agents can verify they are communicating with legitimate counterparts, mitigating impersonation and MITM attacks.
- [OpenAI Daybreak](https://openai.com/index/daybreak-securing-the-world/) - **June 2026**. OpenAI initiative + updated Codex Security plugin for automated vulnerability discovery and remediation in AI-adjacent code; includes prompt-injection hardening for agentic applications.
- [JADEPUFFER (Sysdig disclosure)](https://hackread.com/sysdig-jadepuffer-first-agentic-ransomware-operation/) - ⚠️ **Threat, not a tool — July 2, 2026**. Sysdig documents the first fully agent-orchestrated ransomware operation: an LLM-driven agent exploited a Langflow RCE (CVE-2025-3248), harvested credentials, pivoted to a production MySQL/Nacos server, self-corrected a failed step in 31 seconds, then encrypted 1,342 config items with an ephemeral (never-saved) AES key, making the ransom demand unpayable-but-unrecoverable. Payloads were "self-narrating" with natural-language reasoning comments — strong evidence of LLM authorship. Cited here as the reference case for why agent-security tooling (guardrails, egress control, credential scoping) above matters in production.
- [Lineation.ai](https://lineation.ai) - 🆕 ⚠️ **July 2026** (new vendor). Agent accountability layer — observability, governance, and defense with forensic reasoning lineage. Aims to prevent goal hijacking, memory poisoning, and tool misuse; audit trail for SOC 2 / HIPAA / EU AI Act compliance. Cloud (free-to-start) and on-prem.
- [First Recon AI Security Runtime](https://firstrecon.ai) - 🆕 **July 2026**. Enterprise AI governance platform that inspects every AI interaction (human-to-model, agent-to-tool, agent-to-agent) with a proprietary Semantic Security Engine — applies policies before data reaches a model and captures a full decision audit trail. macOS + Windows endpoint agent for governing AI use on device.
- [CrowdStrike Falcon AIDR](https://www.crowdstrike.com/en-us/platform/falcon-aidr-ai-detection-and-response/) - **GA December 2025**. AI Detection and Response — visibility into employee AI use and agent activity across an enterprise, risk scoring, behavioral anomaly detection, prompt-injection blocking, and real-time policy enforcement at the AI interaction layer.
- [Darkmoon](https://github.com/ASCIT31/Dark-Moon) - Open-source (GPL-3.0) AI penetration-testing platform with specialist agents and MCP interfaces; supports cloud providers and local models, with a privacy gateway that masks selected identifiers; actual data flows depend on the provider and configuration. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FASCIT31%2FDark-Moon&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Exabeam Agent Behavior Analytics](https://www.exabeam.com/) - 🆕 **2026**. Extension of Exabeam's behavior-intelligence platform to cover agentic AI risks — continuous verify-observe-analyze-improve loops instead of static guardrails.
- [RufRoot / CVE-2026-59726](https://hackread.com/rufroot-vulnerability-attackers-hijack-ruflo-login/) - 🆕 ⚠️ **Disclosed to maintainers June 30, 2026; reported July 29, 2026.** A **CVSS 10.0** flaw in Ruflo (formerly Claude Flow), an open-source multi-agent orchestration layer for coding agents: the project's previous default Docker Compose config exposed Ruflo's MCP bridge to the network with no authentication, so a single request could invoke `terminal_execute` and reach all **233 tools** behind the bridge — leaking LLM provider API keys and stored conversations. Worst part: attackers could write to **AgentDB**, Ruflo's persistent agent memory, so poisoned instructions survive the upgrade. Maintainers fixed the default in 24h (3.16.3), but recovery requires credential rotation *and* an AgentDB audit — patching alone is not enough. Found by Noma Labs. The canonical example of why agent memory is now part of your attack surface.
- [Claude Code symlink exfiltration (Tego AI)](https://hackread.com/tego-ai-discloses-second-claude-flaw-in-a-week-hidden-link-silently-sends-files-to-attackers/) - 🆕 ⚠️ **July 24, 2026**. A repo-committed `CLAUDE.md` with an `@import` pointing at a symlink can make Claude Code read files *outside* the project and fold their contents into its very first request — no tool call, no approval prompt, no warning, because the out-of-project read check validated the in-repo link path rather than what it resolved to. Reported via HackerOne; Anthropic closed it "Informative" on the grounds that the trust boundary is the initial folder-trust dialog. Worth reading before you let an agent loose on an untrusted repo.
- [CrowdStrike 2026 Threat Hunting Report](https://www.crowdstrike.com/en-us/resources/reports/threat-hunting-report/) - 🆕 **2026-08-03**. AI-agent-triggered detections are **2.5× higher** than human-initiated leads; Chinese APTs exploit PoC vulnerabilities within 24 hours of disclosure; STARDUST CHOLLIMA poisoned 300+ AI framework dependencies in a single day; a single LLMJacking campaign sent 200,000 API requests in 2 minutes.
- [Straiker AI Runtime Security](https://www.straiker.ai/) - 🆕 **2026-08** (BH2026 showcase). AI-native agentic security platform — asset discovery (Discover AI), adversarial red-teaming (Ascend AI), runtime blocking (Defend AI). Blocks prompt injection, memory poisoning, identity abuse. Raised $85M total ($64M Series A, 2026-06).
- [EU AI Act Article 50 — transparency obligations](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations) - **Applicable from August 2, 2026**. Article 50 sets transparency obligations for covered providers and deployers, including AI interaction notices and content marking/disclosure; consult the Commission guidance for scope, role-specific duties and exceptions.

## 🔍 RAG & Knowledge

*Retrieval-augmented generation and knowledge management systems for agents.*

- [Oracle OCI Enterprise AI updates](https://blogs.oracle.com/ai-and-datascience/whats-new-in-ai-june-2026) - **June 2026**. Enterprise deployment of Cohere Rerank 4 to enhance RAG and agentic enterprise search, plus expanded support for new Alibaba/Google models.
- [LlamaIndex](https://github.com/run-llama/llama_index) - Data framework for LLM-based applications — ingest, structure, and access private data. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Frun-llama%2Fllama_index&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Haystack](https://github.com/deepset-ai/haystack) - End-to-end LLM framework for building RAG pipelines and search systems. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdeepset-ai%2Fhaystack&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Unstructured](https://github.com/Unstructured-IO/unstructured) - Open-source components for pre-processing documents for LLMs and RAG. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FUnstructured-IO%2Funstructured&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Chroma](https://github.com/chroma-core/chroma) - AI-native open-source embedding database. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fchroma-core%2Fchroma&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Weaviate](https://github.com/weaviate/weaviate) - Open-source vector database for AI-native applications. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fweaviate%2Fweaviate&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Qdrant](https://github.com/qdrant/qdrant) - High-performance vector similarity search engine and database. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fqdrant%2Fqdrant&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Pinecone](https://www.pinecone.io/) - Managed vector database for high-performance AI applications.
- [Milvus](https://github.com/milvus-io/milvus) - Cloud-native vector database for scalable similarity search. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmilvus-io%2Fmilvus&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [RAGFlow](https://github.com/infiniflow/ragflow) - Open-source RAG engine based on deep document understanding. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Finfiniflow%2Fragflow&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Docling](https://github.com/docling-project/docling) - Document parsing and conversion for RAG and generative AI. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdocling-project%2Fdocling&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Kotaemon](https://github.com/Cinnamon/kotaemon) - Open-source RAG-based tool for chatting with documents. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FCinnamon%2Fkotaemon&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LightRAG](https://github.com/HKUDS/LightRAG) - Simple and fast RAG engine with graph-based knowledge indexing. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FHKUDS%2FLightRAG&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [R2R](https://github.com/SciPhi-AI/R2R) - Production-ready RAG engine with built-in auth, observability, and ingestion. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FSciPhi-AI%2FR2R&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Vanna](https://github.com/vanna-ai/vanna) - 📦 **Archived** (2026-03). RAG for SQL — chat with your database using natural language. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvanna-ai%2Fvanna&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Morphik](https://github.com/morphik-org/morphik-core) - Multimodal retrieval engine for documents containing text, tables, figures and charts. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmorphik-org%2Fmorphik-core&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Cognee](https://github.com/topoteretes/cognee) - Knowledge and memory engine combining document ingestion, graphs, and vector retrieval; Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Ftopoteretes%2Fcognee&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [RAG-Anything](https://github.com/HKUDS/RAG-Anything) - All-in-one multimodal RAG framework from HKU Data Science Lab. Built on top of LightRAG; concurrent pipelines for parallel text + multimodal processing; queries documents that interleave text, diagrams, tables, and formulae. MIT, 21K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FHKUDS%2FRAG-Anything&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [A-MEM](https://github.com/WujiangXu/A-mem-sys) - Agentic Memory system for LLM agents — dynamic organization of memories using Zettelkasten-inspired note linking; enables more flexible retrieval than static vector stores. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FWujiangXu%2FA-mem-sys&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LangChain Retrievers](https://github.com/langchain-ai/langchain) - LangChain's collection of retrievers and document loaders for connecting sources to RAG pipelines. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flangchain-ai%2Flangchain&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Milvus 3.0](https://github.com/milvus-io/milvus/releases/tag/v3.0.0) - 🆕 **v3.0.0 tagged July 29, 2026** (public beta was May 2026). A "lake-native" architecture shift for the large-scale vector database — External Collections that query Parquet / Lance / Iceberg tables directly in S3/GCS/Azure object storage with zero-copy access, a manifest-based Storage V3 columnar engine, Spark DataSource V2 integration, runtime schema evolution, `TEXT` as a first-class type, and multi-vector `StructList` for late-interaction (ColBERT-style) retrieval.

## 💻 Coding Agents

*AI-powered coding assistants and autonomous software engineering agents.*

### Terminal & CLI Agents

- [Claude Code](https://code.claude.com/docs/en/overview) - Anthropic coding agent for terminal, IDE, and repository workflows; [v2.1.263](https://github.com/anthropics/claude-code/releases/tag/v2.1.263) (2026-09-06) contains reliability fixes.
- [Codex CLI](https://github.com/openai/codex) - OpenAI terminal coding agent, Apache-2.0; stable [rust-v0.153.4](https://github.com/openai/codex/releases/tag/rust-v0.153.4) (2026-09-04) fixes Astra visibility and the bundled default model, while 0.154 alpha builds remain prereleases. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopenai%2Fcodex&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Codex Security](https://developers.openai.com/codex/changelog) - **March 2026**. Application-security agent that finds and fixes software vulnerabilities; available to OSS maintainers via the Codex-for-OSS program.
- [Aider](https://github.com/Aider-AI/aider) - Terminal pair-programming tool with repository context and Git integration; Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FAider-AI%2Faider&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [goose](https://github.com/aaif-goose/goose) - Extensible desktop and CLI agent originating at Block, now hosted by AAIF; Apache-2.0; [v1.49.0](https://github.com/aaif-goose/goose/releases/tag/v1.49.0) (2026-09-03). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Faaif-goose%2Fgoose&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) - Google's terminal-first coding agent for large-context refactors. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgoogle-gemini%2Fgemini-cli&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Ivy Tendril](https://github.com/Ivy-Interactive/Ivy-Tendril) - Open-source agentic software factory with an amazing UI that handles parallel Git worktrees for you, complete with programmatic verifications and fast review loops.
- [OpenCode](https://github.com/anomalyco/opencode) - Open-source terminal AI coding agent (opencode.ai, 180K+ stars) — build/plan agents, LSP, MCP, desktop app in beta; unrelated to the archived opencode-ai/opencode. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fanomalyco%2Fopencode&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Crush](https://github.com/charmbracelet/crush) - Terminal AI coding agent from Charm — successor to the archived opencode-ai/opencode; multi-model, LSP + MCP support. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcharmbracelet%2Fcrush&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Grok Build](https://x.ai/news/grok-build-cli) - **May 25, 2026** (early beta). xAI's agentic CLI coding agent powered by **grok-code-fast-1**. Parallel sub-agents in isolated environments, daily release notes; available to SuperGrok and X Premium Plus subscribers. xAI's reply to Claude Code and Codex CLI. ⚠️ July 2026 reports found Grok Build uploading entire git repos to xAI storage — review before use on private code.
- [Antigravity CLI](https://antigravity.google/blog/introducing-google-antigravity-2-0) - **May 19, 2026** (Google I/O 2026). Lightweight CLI companion to Antigravity 2.0 — create and interact with Google agent harnesses directly from the terminal. macOS / Linux / Windows. Reported to replace Gemini CLI for hosted-plan users from June 18, 2026 (the open-source gemini-cli repo remains active, 105K+ stars).
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-code) - Moonshot terminal coding agent for code editing, shell commands, and file/web access; official installers do not require Node.js; [0.41.0](https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai/kimi-code%400.41.0) (2026-09-04). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FMoonshotAI%2Fkimi-code&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [MAI-Code-1-Flash in GitHub Copilot](https://microsoft.ai/news/introducingmai-code-1-flash/) - **Build 2026 (June 2, 2026)**. Microsoft's first fully in-house 5B coding model lands as a model picker option in GitHub Copilot — outperforms Claude Haiku 4.5 on four core coding benchmarks (SWE-Bench Pro 51.2% vs 35.2%) at significantly lower cost.
- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) - Python and TypeScript SDKs exposing the Claude Code agent loop, tools, permissions, and session handling for applications.
- [ai-delivery-spec](https://github.com/franklinxkk/ai-delivery-spec) - ⚠️ **Unverified.** Spec-driven delivery framework for PMs working with AI coding agents (Claude Code, OpenClaw, Codex, Cursor, Copilot). 4 delivery tiers (Lite/Standard/L2/Full), 0D triage routing, prototype testability rules, AI runtime governance, 5 domain modules. SKILL.md convention; hosted on ClawHub. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Ffranklinxkk%2Fai-delivery-spec&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Ralph Harness](https://github.com/rxdt/loopgate_harness) - ⚠️ **Unverified.** Tiny Python scaffold for guarded Claude Code/Codex/Gemini loops with repo-local specs, fresh-context iterations, git-hook gate, CI verification, and coverage gates. Installable via `uvx ralph-harness demo`. MIT. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Frxdt%2Floopgate_harness&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Amp](https://ampcode.com) - 🆕 ⚡ Sourcegraph's frontier coding agent (VS Code extension + CLI). No BYOK — model access is bundled, and its model-agnostic "Dial" router picks the model for you. **July 2026 was a heavy month**: paid subscriptions launched in beta July 18 (Megawatt $20/mo, Gigawatt $200/mo, with the option to attach your own ChatGPT or X Premium+/SuperGrok sub), self-scheduling agents July 21, "Multiplayer" shared-thread collaboration July 22, and [event-driven Orbs](https://ampcode.com/news/event-driven-orbs) July 23 — agents that wake on an external event (CI failure on GitHub, a new Linear issue, a monitor alert, a Discord message; anything that can send an HTTP request). **August kept pace**: "Attach Anything" uploads (video/logs/PDF/datasets, Aug 4), "Portals into Orbs" live-reloading previews (Aug 6), Dial running on a linked ChatGPT subscription (Aug 10), and Global Plugins and Skills (Aug 11). Closed-source.
- [ZCode](https://zcode.z.ai) - 🆕 🇨🇳 **July 2026 (ZCode 3.0)**. Z.ai's official agentic development environment for GLM-5.2 — a desktop app (macOS / Windows / Linux) wrapping file manager, terminal, Git panel, and live browser preview around an agent that plans, codes, reviews, and deploys. Also drives Anthropic and OpenAI models. Free tier with a daily token allowance; GLM-5.2 access via the paid GLM Coding Plan (Lite / Pro / Max).
- [Kolega Code](https://github.com/kolega-ai/kolega-code) - 🆕 ⚠️ **Unverified** (15 GitHub stars; PyPI **~10.5k downloads/month**, v0.32.0 on August 24, 2026). Terminal coding agent whose **Gigacode** engine has the model write a Python multi-agent orchestration program (parallel / pipeline / judge panels) with content-keyed journaled resume. 15+ model providers, MCP client (HTTP/SSE/stdio/OAuth), Textual TUI. **BSL 1.1** (not Apache-2.0; Change Date 2030-08-12) — the PR description got the license wrong. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fkolega-ai%2Fkolega-code&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

### IDE-Based Agents

- [Cursor — self-hosted machines](https://cursor.com/changelog) - 🆕 **2026-09-02**: self-hosted workers keep tool execution on your machines, with personal machines, team pools, and Linux/macOS computer use; model processing and data policies require separate review.
- [Cursor 3.4 (Teams + PR review)](https://cursor.com/changelog) - **May 11–13, 2026**. Microsoft Teams integration (`@Cursor` in Teams delegates to cloud agents), faster parallel-agent plan execution, multi-repo / Dockerfile-based dev-environment configs for agents, `/multitask` async sub-agents, Vulnerability Scanner, granular per-model access controls.
- [Cursor 3.3](https://cursor.com/changelog) - **May 2026**. PR-review experience, parallel agents, enterprise model controls; previous 3.1 in April.
- [Cursor SDK](https://cursor.com/blog/typescript-sdk) - 🆕 **April 29, 2026** (public beta). TypeScript SDK exposing Cursor's runtime, harness, and models so developers can build programmatic agents on top of the Cursor stack — sandboxed cloud VMs, subagents, hooks, token-based pricing.
- [Kilo Code](https://kilo.ai/) - Open-source AI coding extension (VS Code / JetBrains) with Auto Model routing across 500+ models; acquired by Anaconda (2026). MiniMax models heavily featured.
- [Cursor](https://www.cursor.com/) - The AI code editor with Feb 2026 update supporting up to 8 parallel agents.
- [Windsurf → Devin Desktop](https://devin.ai/blog/windsurf-is-now-devin-desktop/) - **Rebranded June 2, 2026**. Cognition renamed the Windsurf IDE to **Devin Desktop** (windsurf.com now redirects to devin.ai): **Devin Local** (Rust rewrite, ~30% more token-efficient, subagent support) replaces Cascade, an **Agent Command Center** Kanban becomes the default surface, and it ships open **Agent Client Protocol (ACP)** support. Cascade reaches end-of-life July 1, 2026.
- [Cline](https://github.com/cline/cline) - Autonomous coding agent in your IDE — VS Code extension. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcline%2Fcline&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Roo Code → Roomote](https://roomote.dev/) - ⚠️ **Discontinued as an IDE extension.** Roo Code announced (April 22, 2026) shutdown of its VS Code extension, Cloud, and Router on May 15, 2026, pivoting to **Roomote**, a cloud coding agent (Slack/GitHub/Linear → PRs); roocode.com now redirects to roomote.dev.
- [Void](https://github.com/voideditor/void) - 📦 **Archived** (repository archived on GitHub as of 2026-08; maintainers exploring new coding ideas; no further updates expected). Fork of VS Code positioned as the open-source Cursor alternative; data stays with you, BYO model. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvoideditor%2Fvoid&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Continue](https://github.com/continuedev/continue) - Open-source AI code assistant for VS Code and JetBrains. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcontinuedev%2Fcontinue&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [GitHub Copilot](https://github.com/features/copilot) - Agent mode with expanded model access and `gh copilot` shell integration in early 2026. **July 2026 updates**: `/security-review` command (public preview) for AI-driven vulnerability scanning of in-progress changes; expanded "long-distance next edit suggestions" across full active file; C++ modernization agent GA in Visual Studio; refreshed Copilot Usage window for real-time billing tracking. **July 31, 2026**: Gemini 2.5 Pro and Gemini 3 Flash deprecated in all Copilot experiences (migrate to Gemini 3 Flash Exp or other available models); new Visual Studio .NET/Azure-specific agent (Copilot SDK); enterprise admins gain user-level model policy targeting (public preview). **August 21, 2026**: `@GitHub` in [Slack](https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack/) or [Teams](https://github.blog/changelog/2026-08-21-shared-agentic-work-with-github-copilot-in-microsoft-teams/) starts a shared Copilot cloud-agent session (plan, sandbox-implement, open a PR).
- [Kiro](https://kiro.dev/) - AWS autonomous agent. Spec-driven development, manages up to 10 simultaneous tasks.
- [Amazon Q Developer](https://aws.amazon.com/q/developer/) - AI coding companion deeply integrated with AWS ecosystem.
- [Visual Studio 2026 Agent Mode + Skills](https://devblogs.microsoft.com/visualstudio/agent-skills-in-visual-studio/) - **VS 2026 Insiders May 12-15, 2026**. Copilot Chat "Agent Mode" now ships a guided Skills workflow inside Visual Studio 2026: discover, manage, and author reusable Copilot Skills with whole-solution context, plus terminal command execution and tool invocation.
- [JetBrains Rider AI Test-Writing Skill](https://blog.jetbrains.com/dotnet/2026/05/22/claude-codex-ai-agent-skill-for-writing-tests/) - **May 22, 2026**. New AI Assistant skill for JetBrains Rider that surfaces .NET coverage data to Claude Code / Codex so agents target untested branches, reducing AI cost for test generation.
- [Agent Skills (addyosmani)](https://github.com/addyosmani/agent-skills) - Reusable engineering skills for coding agents, covering planning, implementation, validation, and review; MIT; [0.6.9](https://github.com/addyosmani/agent-skills/releases/tag/0.6.9) (2026-09-05). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Faddyosmani%2Fagent-skills&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Cursor Router](https://cursor.com/) - 🆕 **July 2026**. Cursor's intelligent model-routing system analyzes each request and routes to the optimal model (Intelligence / Balance / Cost modes); integrates Grok models trained on trillions of Cursor interaction tokens (Grok 4.6 became the Cursor default on August 12, 2026). Companion: Cursor iOS app (July 2026) for mobile development. Part of Cursor IDE.
- [Devin Desktop (formerly Windsurf) — July 2026 updates](https://devin.ai/) - 🆕 **July 2026 updates**. GPT-5.6 / Claude Opus 5 / Claude Fable 5 model support, **Devin Outposts** (run Devin agent on any machine), **Agentic MapReduce** architecture for distributed reasoning across large codebases. Acquired Poke (AI texting assistant) July 23, 2026.
- [JetBrains Rider 2026.2](https://www.jetbrains.com/rider/) - 🆕 **July 22, 2026**. Enhanced AI agent intelligence and native GitHub Copilot integration; improved AI-assisted debugging and refactoring within the IDE ecosystem.
- [Android Studio Quail 2](https://developer.android.com/studio) - 🆕 **July 2026**. Redesigned Agent Mode for AI-assisted Android development — memory leak detection, AI-powered crash analysis, and intelligent app-building workflows.

### Autonomous Software Engineers

- [Cursor 3.4 Cloud Agent Environments](https://cursor.com/changelog) - **May 13, 2026**. New dev environments for cloud agents: multi-repo workspaces, Dockerfile-based config with build secrets, 70% faster cached image layers, per-environment version history with rollback, audit logs, scoped egress and secrets. Companion to the Cursor 3.4 release.
- [Devin Stacked PRs](https://devin.ai/blog/introducing-pr-stacks) - 🆕 **2026-07-30**. Devin + GitHub: large tasks auto-split into independent small PRs, downstream PRs auto-rebased, focused context in Devin Review. Includes Faros AI data from 10,000+ developers.
- [Devin Security Swarm](https://cognition.com/blog) - 🆕 **July 1, 2026**. Cognition's parallel-agent security product: finds vulnerabilities across a codebase, validates exploitability at runtime, and opens remediation PRs; found 36/50 real-world vulns at ~30% lower cost per finding than the next-best tool.
- [Devin 2.2](https://cognition.com/blog/introducing-devin-2-2) - 🆕 **February 24, 2026**. End-to-end testing with computer use (Linux desktop + screen recordings), self-review/auto-fix before PR, 3× faster startup. Cognition's flagship autonomous software engineer (Devin 2.x line; Core plan from $20/mo since Devin 2.0). **August 2026**: Cognition reported to be raising at a **$40B+ valuation** as Devin approaches $1B in annualized revenue (press reports).
- [OpenHands Agent Canvas](https://github.com/OpenHands/OpenHands) - 🧪 Self-hosted control center for coding agents and automations, including OpenHands and ACP-compatible agents; the current README labels Agent Canvas beta. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FOpenHands%2FOpenHands&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) - Turn LLMs into software engineering agents that fix real GitHub issues. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FSWE-agent%2FSWE-agent&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Devika](https://github.com/stitionai/devika) - 💤 **Stale** (no commits since 2025-09). Agentic AI software engineer — open-source alternative to Devin. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fstitionai%2Fdevika&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) - 📦 **Archived** (2026-04). Specify what you want built, AI asks for clarification, then builds it. Foundational project of the autonomous-coding era, kept for historical reference. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FAntonOsika%2Fgpt-engineer&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Codegen](https://github.com/codegen-sh/codegen) - 📦 **Archived** (2026-07-16). Programmatic code manipulation and multi-file refactoring SDK. Kept for historical reference. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcodegen-sh%2Fcodegen&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Qodo](https://www.qodo.ai/) - AI Code Review Platform focused on quality, security, and test generation.
- [Google Antigravity 2.0](https://antigravity.google/blog/introducing-google-antigravity-2-0) - **May 19, 2026** (Google I/O 2026). Standalone desktop application (macOS / Linux / Windows) for orchestrating multiple agents in parallel. Adds scheduled cron-style runs, async long-running tasks, dynamic sub-agents, and integrations with AI Studio / Android / Firebase. Companion **Antigravity SDK** lets you host the harness on your own infra; enterprise edition lands inside Gemini Enterprise Agent Platform.
- [ChatGPT Work](https://openai.com/chatgpt/work/) - 🆕 **July 9, 2026**. OpenAI's multi-step autonomous work agent — integrates with files and apps to complete entire jobs: spreadsheets, slide decks, documents, and small web apps. Desktop-app-centric with Chat/Work mode split. Accompanied by GPT Voice (July 23, 2026) for voice-directed task delegation.
- [Cursor iOS](https://cursor.com/) - 🆕 **July 2026**. Cursor's mobile app for iOS — enables development work on the go with full model access and project sync.
- [Cursor iPad + Agent Hooks](https://cursor.com/changelog) - 🆕 **July 28–29, 2026**. Native iPad app (paid plans) with sidebar multi-agent monitoring, split-view code review, Apple Pencil annotations, and touch-optimized interface. Cloud Agent Hooks (GA) let developers observe agent reasoning and build self-correcting loops; "Cursor Start" regional pricing tier for India market.
- [Claude Cowork](https://claude.com/product/cowork) - Task-oriented assistant working across selected files and tools, with scheduled work and a built-in browser; desktop is available on paid plans and web/mobile remain beta.
- [Claude Tag](https://www.businesswire.com/news/home/20260803/) - 🆕 **August 3, 2026**. Replaces the legacy Claude in Slack integration. Channel-level shared agent identity (`@Claude`), cross-session persistent context, asynchronous multi-day work. Forces migration from old Slack app; Team/Enterprise plans required.
- [Prime Agent](https://github.com/PrimeIntellect-ai/prime-agent) - PrimeIntellect coding agent for terminal workflows with model-provider integrations; MIT; [v0.9.3](https://github.com/PrimeIntellect-ai/prime-agent/releases/tag/v0.9.3) (2026-09-06). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FPrimeIntellect-ai%2Fprime-agent&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

---

## 🤖 Physical AI & Embodied Agents

*Models, tools and deployments for systems that perceive and act in the physical world. Distinguish released software, research demonstrations, pilots and future production plans.*

### Foundational Models & Research
- [Microsoft physical-ai-toolchain](https://github.com/microsoft/physical-ai-toolchain) - Open robotics workflow framework connecting data capture, training, validation and robot deployment; the default laptop tier is local, with Azure, Kubernetes and fleet services added at higher tiers. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmicrosoft%2Fphysical-ai-toolchain&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [PhyAgentOS](https://github.com/PhyAgentOS/PhyAgentOS-core) - ⚡ **v1.0.0 release, September 5, 2026**. MIT embodied-agent framework with governed robot tool calls, before/after observations and task-outcome verification; release includes Python packages and a Node bridge. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FPhyAgentOS%2FPhyAgentOS-core&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ENPIRE](https://research.nvidia.com/labs/gear/enpire/) - 🆕 **June 2026**. NVIDIA/CMU/UC Berkeley framework enabling AI agents to conduct their own robotics research — managing dual-arm robots, modifying algorithms, and training policies without human intervention.
- [Kairos 3.1](https://huggingface.co/ACERobotics/kairos-4B-robot-LIBERO-plus) - 🆕 **July 2, 2026**. ACE Robotics released 4B world-action model weights and inference code, including RoboTwin 2.0 and LIBERO-Plus variants that predict robot actions alongside future visual states; Apache-2.0 model card.
- [DYNA-2](https://www.dyna.co/dyna-2) - 🆕 **August 2026**. Dyna Robotics describes a world-action model trained on egocentric human video for robot manipulation; its reported customer-site results are vendor evaluations, not a common independent leaderboard.
- [NVIDIA Cosmos 3](https://blogs.nvidia.com/blog/cosmos-3-physical-ai-open-world-foundation-model/) - 🆕 **May 31, 2026**. World foundation model combining visual reasoning, multimodal generation and action prediction for robotics, driving and synthetic-data workflows; NVIDIA provides model materials under OpenMDW 1.1 and reports vendor benchmark results.

- [Google Gemini Robotics-ER 1.6 (legacy)](https://ai.google.dev/gemini-api/docs/robotics-overview) - 💤 Superseded by ER 2: Google documents an end-of-August 2026 shutdown for `gemini-robotics-er-1.6-preview`; migrate to the ER 2 standard or streaming preview endpoint.
- [Google Gemini Robotics 2 / ER 2 / On-Device 2](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/) - 🆕 **July 30, 2026**. Whole-body VLA, embodied-reasoning VLM and on-device control family; ER 2 has [standard and streaming Gemini API previews](https://ai.google.dev/gemini-api/docs/robotics-overview), while robot-control model access is through partnerships/tester programs.
- [Project Prometheus (Bezos)](https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/) - 🆕 💰 **June 11, 2026**. Jeff Bezos co-led Physical AI venture raised $12B at a $41B valuation to build an "artificial general engineer" for the physical world.
- [NVIDIA Isaac GR00T N1.7](https://github.com/NVIDIA/Isaac-GR00T) - Open humanoid VLA with released weights, fine-tuning and inference code; N1.7 uses a Cosmos-Reason2/Qwen3-VL backbone and relative end-effector actions, with Apache-2.0 licensing. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FNVIDIA%2FIsaac-GR00T&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Physical Intelligence openpi (π0 / π0-FAST / π0.5)](https://github.com/Physical-Intelligence/openpi) - Official open robotics policies and training/inference code: flow-matching π0, autoregressive π0-FAST and π0.5; released checkpoints support adaptation to new robot datasets, with model-specific terms. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FPhysical-Intelligence%2Fopenpi&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Physical Intelligence π0.7](https://www.pi.website/blog/pi07) - 🆕 🧪 **April 16, 2026 research report**. Steerable VLA conditioned on language, execution metadata and visual subgoals; the authors demonstrate cross-task and cross-robot generalization, without claiming an openpi weight release for this model.
- [LeRobot](https://github.com/huggingface/lerobot) - Hugging Face robotics library for datasets, pretrained policies, imitation/reinforcement learning and hardware integration; Apache-2.0 code, with individual model-card licenses. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhuggingface%2Flerobot&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenVLA](https://github.com/openvla/openvla) - 💤 Historical open vision-language-action baseline for robotic manipulation, with model weights and fine-tuning/inference code; the repository last received a push in March 2025. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopenvla%2Fopenvla&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Figure Index / Helix training data](https://www.figure.ai/news/introducing-index) - 🆕 ⚡ **August 25, 2026**. Figure-exclusive human-video collection program for Helix; [September 3 Nscale agreement](https://www.figure.ai/news/figure-and-nscale-sign-strategic-partnership) targets initial Vera Rubin compute deployment in H2 2027, rather than capacity already delivered.
- [Deutsche Telekom / NVIDIA Industrial AI Cloud](https://www.telekom.com/en/newsroom/latest-updates/media-information/2026/2/germany-s-first-ai-factory-for-industry) - **Operational February 4, 2026**. Munich AI infrastructure built with NVIDIA and Polarise for industrial training, simulation and robotics workloads; this is computing infrastructure, not a robotics model.

### Humanoid Robots

- [Tesla Optimus](https://www.tesla.com/AI) - Tesla humanoid-robot program combining perception, planning, balance and manipulation for repetitive physical tasks; production targets and demonstrations should be distinguished from independently confirmed customer deployments.
- [Figure 03](https://www.figure.ai/news/introducing-figure-03) - Humanoid introduced **October 9, 2025**, designed around Helix with tactile sensing, soft coverings and wireless charging for household and commercial applications.
- [Figure 04](https://autonews.gasgoo.com/articles/news/figure-founder-f04-robot-initiates-component-delivery-process-2054560059634376705) - **May 13, 2026**. Founder Brett Adcock announces Figure 04 design finalized; component deliveries underway. Successor to F.03 with the Helix VLA model.
- [Figure package-sorting livestream](https://incrypted.com/en/figure-ai-held-a-human-vs-robot-marathon/) - **Reported May 18, 2026**. Secondary coverage reproduces Figure’s package-sorting livestream and company claims of extended autonomous operation; this is a vendor demonstration with observed errors, not an independent reliability benchmark.
- [Atlas production / Hyundai factory plan](https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/) - **January 5, 2026 announcement**. Boston Dynamics scheduled initial Atlas fleets for Hyundai and Google DeepMind in 2026 and additional customers in 2027; Hyundai’s planned 30,000-robot annual factory capacity is a future manufacturing target.
- [Boston Dynamics Atlas](https://bostondynamics.com/products/atlas/) - Industrial humanoid for material handling, with autonomous battery swaps and fleet integration through Orbit; official specifications distinguish 50 kg instantaneous from 30 kg sustained load capacity.
- [Figure 03 × BMW](https://www.figure.ai/news/f-03-at-bmw) - 🆕 **June 30, 2026**. Figure announced F.03 at BMW, following the earlier F.02 program; this is a deployment update, not the first Figure–BMW collaboration.
- [JAL / GMO airport humanoid trial](https://press.jal.co.jp/ja/release/202604/009501.html) - **April 27, 2026 announcement**. Haneda ground-handling pilot planned for May 2026–2028, starting with workflow analysis and safety evaluation before staged robot tests; baggage handling and cabin cleaning are candidate applications.
- [Figure Helix 02](https://www.figure.ai/news/helix-02) - 🆕 **January 27, 2026**. Figure’s VLA system extends pixel-to-action control to the full body, coordinating walking, balance and manipulation; demonstrations include a continuous kitchen workflow.
- [Unitree G1 / H2](https://www.unitree.com/about/) - Humanoid platforms used in Unitree’s locomotion and manipulation demonstrations; the official history records the H2 introduction in October 2025 and G1/H2 demonstrations in 2026.
- [Unitree R1 / R1 Air](https://www.unitree.com/mobile/R1/) - 🇨🇳 Lightweight humanoid family; official R1 Air price starts at $4,900 excluding tax and shipping. The specification table reserves secondary development support for R1 EDU, so research buyers must check the variant.
- [Unitree GD01](https://www.unitree.com/about/) - **May 12, 2026 announcement**. Rideable, operator-piloted robot that switches between bipedal and quadrupedal configurations; its form factor is distinct from autonomous humanoid agents.
- [HONOR Robotics D1 / A1](https://www.honor.com/ie/events/honor-robot/) - Humanoid research platforms demonstrated at the 2026 Beijing E-Town robot half-marathon, with autonomous perception, navigation and dynamic locomotion; competition demonstrations do not establish general workplace capability.
- [Zhiyuan (智元) AGIBOT](https://www.agibot.com/article/231/detail/62.html) - 🇨🇳 **APC 2026**. AGIBOT presented seven industrial solution packages and its embodied-intelligence stack; the company reports its 10,000th robot rollout in March 2026, a manufacturing milestone distinct from independently measured customer utilization.
- [Unitree H-series](https://www.unitree.com/) - Boston Dynamics competitor from China. Ongoing 2026 iterations.
- [Unitree Shanghai IPO](https://finance.eastmoney.com/a/202608193846301835.html) - 🇨🇳 **August 19, 2026**. Eastmoney reproduces the Shanghai Stock Exchange’s listing notice for Unitree (688836), reporting an offering of approximately 40.45 million shares at RMB 150.80; this is a corporate milestone, not a robot capability evaluation.
- [1X NEO](https://www.1x.tech/discover/neo-home-robot) - Home humanoid available for preorder since **October 28, 2025**, with US delivery planned for 2026 and expert-guided help for unfamiliar chores; [July 9, 2026 hand update](https://www.1x.tech/discover/neos-hands) introduces 25-DoF hands. Preorders and demos do not establish broad autonomous home deployment.
- [Mitsubishi Motors × Highlanders humanoid MOU](https://www.mitsubishi-motors.com/en/newsroom/newsrelease/2026/20260709_1.html) - **July 9, 2026**. MOU to explore humanoid development, trials in Mitsubishi manufacturing and production at Kyoto; early-2027 production is under feasibility study, not a confirmed manufacturing ramp.
- [Agile Robots](https://www.agile-robots.com/) - German-Chinese robotics company building AI-driven industrial manipulation systems.
- [Shenzhen Humanoid Pilot Line](https://www.chinadailyhk.com/hk/article/631892) - 🇨🇳 Shenzhen launched its first pilot production line for humanoid robots on **April 12, 2026** (Leju Robotics + Dongfang Precision in Longhua District). 2-hour assembly cycle, 500–1,000 units/year, with mass production moving to a 10,000-units/year Foshan facility.

### Consumer Robotics & Wearables

- [Doubao AI Glasses (ByteDance)](https://technode.com/2026/03/18/bytedance-reportedly-delays-doubao-ai-glasses-launch-plan/) - ⚠️ 🇨🇳 **Reported March 18, 2026**: first-generation production delayed and launch considered unlikely; no verified public product release in this source.
- [Nothing AI Glasses/Earbuds](https://techcrunch.com/2026/04/01/nothings-ai-devices-plan-reportedly-contains-smart-glasses-and-earbuds/) - 🧪 Reported March 2026: Nothing plans AI smart glasses + earbuds, targeting a 2027 launch.
- [Samsung Galaxy AI](https://www.samsung.com/us/galaxy-ai/) - Samsung’s device AI features for communication, search and content assistance; availability and processing location vary by feature, device and region.
- [Meta Ray-Ban Display / Ray-Ban Meta](https://www.meta.com/ai-glasses/) - Meta’s AI-glasses product family, including display and camera/audio variants; check the official regional catalogue for supported features and availability.

### Autonomous Driving

- [Tesla FSD (Supervised)](https://www.tesla.com/support/fsd) - Driver-assistance software requiring active human supervision; the official support page explicitly says it does not make the vehicle autonomous. Features vary with hardware, software and region.
- [Waymo](https://waymo.com/) - ⚡ **September 1, 2026**: [first public riders in Denver, San Diego and Tampa](https://waymo.com/blog/2026/09/ride-in-denver-san-diego-tampa/) bring driverless passenger trips to 14 cities, with access expanding gradually from interest lists; Houston opened to everyone on August 20. Announced future markets are distinct from live service.
- [NVIDIA Alpamayo 2 Super](https://huggingface.co/nvidia/Alpamayo2-Super) - 🆕 **Weights released August 4, 2026**. Reasoning VLA for autonomous-driving research that generates trajectories with causal reasoning, alongside AlpaSim and AlpaGym tooling; availability is a model release, not certification of a deployed self-driving system.
- [Pony.ai × Uber Europe](https://cnevpost.com/2026/08/14/pony-ai-uber-2000-robotaxis-europe/) - 🇨🇳 **Reported August 14, 2026**. Partnership expansion targets more than 2,000 robotaxis across five European cities, with Middle East expansion also planned; phased rollout announcements do not establish that the full fleet is already operating.
- [WeRide / Pony.ai / Baidu Apollo](https://www.weride.ai/) - 🇨🇳 Chinese L4 fleets expanding operational zones.

---

## 🎮 Agent Simulation & World Models

*Research environments where agents are trained, observed, or stress-tested in simulated worlds. Increasingly relevant as world-model and embodied research bleeds into language-agent design.*

- [Generative Agents](https://github.com/joonspk-research/generative_agents) - 💤 Historical Smallville research implementation (Park et al., 2023), combining memory, reflection and planning for 25 simulated characters. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fjoonspk-research%2Fgenerative_agents&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Voyager](https://github.com/MineDojo/Voyager) - 💤 Historical Minecraft agent (Wang et al., 2023) using GPT-4, an automatic curriculum and a growing library of executable skills for open-ended exploration. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FMineDojo%2FVoyager&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [SWE-Gym](https://github.com/SWE-Gym/SWE-Gym) - Open environment to train SWE agents on real GitHub issues; companion to SWE-bench. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FSWE-Gym%2FSWE-Gym&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [WebArena / WebArena-Verified](https://webarena.dev/) - Self-hosted web environments for browser-agent evaluation; [WebArena-Verified](https://github.com/ServiceNow/webarena-verified) provides reviewed tasks, reference answers and deterministic evaluators for more reproducible runs.
- [WorkArena](https://github.com/ServiceNow/WorkArena) - ServiceNow's enterprise workplace benchmark for browser agents. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FServiceNow%2FWorkArena&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Genie 3 / Project Genie](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/) - 🧪 Google’s interactive world-model research is accessible through the Project Genie prototype, initially released to US Google AI Ultra subscribers on January 29, 2026; this is hosted experimental access, not open model weights.
- [NVIDIA Cosmos](https://github.com/nvidia-cosmos/cosmos-predict2) - 📦 **Archived**. NVIDIA's foundation world model for embodied AI / robotics — generate physically plausible video futures. predict1 deprecated in favor of Cosmos-Predict2 (Predict 2.5 announced CES 2026); see also Cosmos 3 (May 31, 2026) above. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fnvidia-cosmos%2Fcosmos-predict2&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Snowflake Agent World Model (AWM)](https://github.com/Snowflake-Labs/agent-world-model) - **Open-sourced Feb 10, 2026; accepted to ICML 2026 May 1, 2026**. Synthetic environment generation pipeline that ships 1,000 executable SQL-backed tool-use environments (35K+ tools, 10K tasks) exposed via a unified MCP interface — enables large-scale multi-turn agentic RL. Infrastructure merged into `meta-pytorch/OpenEnv`. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FSnowflake-Labs%2Fagent-world-model&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

- [Qwen-AgentWorld](https://github.com/QwenLM/Qwen-AgentWorld) - **June 24, 2026**. Qwen-AgentWorld-35B-A3B is an open language world model that predicts environment state transitions; its release includes AgentWorldBench across seven agentic domains. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FQwenLM%2FQwen-AgentWorld&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [SimWorld](https://github.com/SimWorld-AI/SimWorld) - Open-ended, realistic simulator built on Unreal Engine 5 for testing autonomous AI agents in complex physical and social environments. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FSimWorld-AI%2FSimWorld&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Newton](https://github.com/newton-physics/newton) - 🆕 ⚡ **v1.5.1, August 28, 2026**. GPU-accelerated robotics physics engine built on NVIDIA Warp, developed with contributions from NVIDIA, Google DeepMind and Disney Research; Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fnewton-physics%2Fnewton&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [NVIDIA Isaac Lab](https://github.com/isaac-sim/IsaacLab) - Official robot-learning framework built on Isaac Sim for reinforcement learning, imitation learning and evaluation; select a supported stable or explicitly labelled beta release for the matching simulator version. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fisaac-sim%2FIsaacLab&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Genesis](https://github.com/Genesis-Embodied-AI/genesis-world) - Physics simulation platform for robot learning and embodied AI, supporting multiple materials and robot types; the repository has moved from `Genesis` to `genesis-world`. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FGenesis-Embodied-AI%2Fgenesis-world&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

---

## 📊 Benchmarks & Leaderboards

*Evaluation suites and live leaderboards; reviewed September 8, 2026.*

> **Read scores with their experimental setup.** Model version, agent harness, dataset revision, tool access and retry/compute budget all affect results. Old leader snapshots have been removed where their original evaluation configuration could not be established. Prefer a reproducible primary run and an evaluation on your own workload.
>
> [OpenAI’s July 8 SWE-bench Pro audit](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) found substantial task-quality defects; [Terminal-Bench 4.0](https://www.tbench.ai/news/terminal-bench-4-0) also changes tasks and resources. Neither case supports comparing scores across revisions without checking the methodology.

- [τ²-bench / τ³-bench](https://github.com/sierra-research/tau2-bench) - Sierra’s tool-agent-user benchmark now includes voice and knowledge-retrieval tasks; **v1.0.1 (July 22, 2026)** fixes banking_knowledge grading, so that domain’s scores require version-aware comparison.
- [BenchLM](https://benchlm.ai/) - Cross-benchmark aggregation and model-release tracking; verify each score’s original source, date and harness before comparing systems.
- [SWE-bench Verified](https://www.swebench.com/) - Human-filtered set of 500 GitHub issue-resolution tasks; distinguish the standardized Bash Only/mini-SWE-agent view from submissions using custom agents.
- [GPQA Diamond](https://github.com/idavidrein/gpqa) - Expert-written graduate-level science questions; use a fixed dataset split and report prompting, tools and sampling policy alongside any score.
- [ARC-AGI-2](https://arcprize.org/) - Abstract visual reasoning on novel tasks; the official leaderboard separates systems and compute budgets rather than treating every result as a base-model score.
- [ARC-AGI-3](https://arcprize.org/leaderboard) - Interactive environments evaluating how efficiently agents learn unfamiliar rules and adapt; compare the official cost/performance view rather than launch-era scores.
- [OSWorld](https://os-world.github.io/) - Benchmark for open-ended computer tasks using real desktop environments; results depend on the agent, model, action interface and step budget.
- [Arena (formerly LMArena / Chatbot Arena)](https://arena.ai/) - Human-preference comparisons across supported modalities; preference rankings are not interchangeable with task-completion or safety evaluations.
- [MMLU-Pro](https://github.com/TIGER-AI-Lab/MMLU-Pro) - Reasoning-focused extension of MMLU with harder multiple-choice questions and a public evaluation implementation.
- [LiveCodeBench](https://livecodebench.github.io/) - Continuously collected programming-contest problems; date-filtered evaluation helps assess contamination risk and changing task difficulty.
- [Humanity’s Last Exam (HLE)](https://agi.safe.ai/) - Expert-level multidisciplinary benchmark, with a finalized 2,500-question set and a separately maintained HLE-Rolling fork; it is distinct from AIME competition mathematics.
- [Terminal-Bench 4.0](https://www.tbench.ai/news/terminal-bench-4-0) - 🆕 ⚡ **August 28, 2026**. Current terminal benchmark recalibrates task resources, fixes tasks and removes saturated/problematic cases; changed tasks and environment budgets require fresh runs rather than direct comparison with 2.x/3.0.
- [Terminal-Bench-Science 0.1](https://www.tbench.ai/news/terminal-bench-science-0-1) - 🆕 ⚡ **August 27, 2026**. 70 expert-reviewed research workflows across life, physical, Earth, mathematical and engineering sciences, evaluated through reproducible task-specific tests.
- [Wolfram LLM Benchmarking Project](https://www.wolfram.com/llm-benchmarking-project/) - Wolfram’s continuing evaluation of code generation from English specifications into Wolfram Language.
- [Terminal-Bench 2.0 (legacy)](https://www.tbench.ai/news/announcement-2-0) - Historical release of 89 terminal tasks; retained for interpreting older papers, with newer revisions correcting task and environment issues.
- [GDPval](https://openai.com/index/gdpval/) - OpenAI’s evaluation of economically valuable work across 44 occupations and nine industries; distinguish the original tasks and grading from third-party GDPval-based leaderboards.
- [SWE-bench Pro](https://github.com/scaleapi/SWE-bench_Pro-os) - Repository-level engineering benchmark; [OpenAI’s July 8, 2026 audit](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) reports substantial task-quality defects and withdraws its earlier recommendation to adopt it, so inspect tasks and use complementary evaluations.
- [LLM-Stats Live Leaderboard](https://llm-stats.com/llm-updates) - Model-news and benchmark aggregation feed; follow through to the linked model card, release or benchmark for primary evidence.
- [Gartner Magic Quadrant 2026 — Enterprise AI Coding Agents](https://cursor.com/blog/cursor-leads-gartner-mq-2026) - Vendor-published summary of Gartner’s analyst assessment naming Cursor a Leader; this is market research, not a reproducible model benchmark.
- [Terminal-Bench 2.1 (legacy)](https://www.tbench.ai/news/terminal-bench-2-1) - Released **May 6, 2026** to repair Terminal-Bench 2.0 task/environment issues; scores require the matching task version and harness.
- [Agent Memory Benchmark (AMB)](https://github.com/vectorize-io/agent-memory-benchmark) - Open long-term agent-memory evaluation with published datasets, prompts, scoring and results; created by the Hindsight team, so note the evaluator’s affiliation.
- [Agents’ Last Exam (ALE)](https://snorkel.ai/leaderboard/agents-last-exam/) - Long-horizon professional-workflow benchmark built with domain experts; distinguish the released reference subset from the larger collection and its future task targets.
- [JetBrains Kotlin Benchmark](https://blog.jetbrains.com/kotlin/2026/07/introducing-the-kotlin-benchmark-evaluate-ai-coding-agents-on-real-world-kotlin-tasks/) - Official Kotlin-focused evaluation of coding agents on end-to-end repository tasks, from issue interpretation through test-passing implementations.
- [Stripe Agent Benchmark](https://stripe.com/blog/can-ai-agents-build-real-stripe-integrations) - Stripe’s evaluation of agents building complete integrations across longer software-engineering workflows; inspect the task setup rather than inferring production readiness from one score.
- [GAIA Benchmark](https://huggingface.co/spaces/gaia-benchmark/leaderboard) - General-assistant benchmark combining reasoning, browsing and tool use; [the paper](https://arxiv.org/abs/2311.12983) describes 466 questions, with held-out answers used for evaluation.

---

## 🖥️ Computer Use & Desktop Agents

- [Clickyy](https://github.com/jayamitkatariya/clickyyy) - Shake your cursor to summon an AI agent that sees your screen and clicks, types, drags, and acts for you on macOS. Open-source, MIT.

*AI agents that can see, control, and automate desktop environments at the OS level. For purely browser-based agents see [🌐 Browser & Web Agents](#-browser--web-agents).*

- [Perplexity Personal Computer for Windows](https://www.perplexity.ai/hub/blog/personal-computer-on-windows) - 🆕 **July 28, 2026**. Perplexity's multi-model agent orchestrator expands to Windows 10/11 — local files, native apps + Microsoft 365 suite, and cross-device workflows in one system. Pro/Max/Enterprise subscribers. Builds on the Mac version (April 16) and the hybrid local/cloud inference orchestrator previewed at Computex 2026.
- [Claude Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) - Anthropic's computer-use capability — Claude sees the screen and uses mouse/keyboard to automate any software. **August 19, 2026**: computer use leaves beta as `computer_toolset_20260801` (batch actions, no beta header); new hosted-viewport **browser use** toolset `browser_toolset_20260801`; Files API and Skills API also drop beta headers ([release notes](https://platform.claude.com/docs/en/release-notes/overview)).
- [macOS Harness](https://github.com/browser-use/macos-harness) - 🆕 **August 17, 2026**. Thinnest official Browser Use harness: one Python process and six macOS primitives (`see` / `key` / `type` / `click` / `ax` / `script`) plus a real browser and files — the model writes missing helpers mid-task. MIT, 761+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbrowser-use%2Fmacos-harness&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ChatGPT Agent](https://openai.com/index/introducing-chatgpt-agent/) - Successor to Operator (deprecated 2025) — agent mode in ChatGPT for browsing, booking, form-filling, and web task automation.
- [Google Project Mariner](https://deepmind.google/models/project-mariner/) - 📦 **Discontinued** (May 2026). Browser-agent research project; capabilities merged into Gemini and Chrome.
- [Microsoft Copilot Agents](https://www.microsoft.com/en-us/microsoft-copilot/) - Autonomous background agents across the Microsoft 365 stack. Beyond sidebar — executes tasks and surfaces for approvals.
- [Open Interpreter](https://github.com/openinterpreter/openinterpreter) - A natural language interface for computers — let LLMs run code locally. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopeninterpreter%2Fopeninterpreter&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Manus AI](https://manus.im/) - 🇨🇳 Autonomous general-purpose AI agent with cloud-to-local hybrid model. Handles research, coding, and complex multi-step tasks.
- [Genspark](https://www.genspark.ai/) - All-in-one autonomous work agent with mixture-of-agents architecture. Can make phone calls.
- [Beam AI](https://beam.ai/) - Self-learning desktop agents that refine logic based on successful outcomes.
- [AICraft](https://github.com/Easlie114514/AICraft) - 🆕 ⚠️ 🇨🇳 **Unverified** (created June 2026, sole maintainer, low traction — listed for completeness, vet before use). Windows desktop "AI capability launcher" that treats LLM skills, MCP tools, RAG sources and memory as hot-swappable modules — the pitch is loading them like Minecraft mods. One-click DeepSeek setup, per-role emotion portraits, three-tier memory, token billing; portable exe, no install. Python FastAPI + React 19 + ChromaDB, Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FEaslie114514%2FAICraft&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Microsoft Copilot Studio Computer-Using Agents](https://techcommunity.microsoft.com/blog/copilot-studio-blog/computer-using-agents-in-microsoft-copilot-studio-are-now-generally-available/4519427) - **GA May 13, 2026**. Build agents inside Copilot Studio that interact directly with websites and desktop applications through the UI — Microsoft's first-party answer to Claude Computer Use, now generally available across Microsoft 365 / Power Platform deployments.
- [ChatGPT Workspace Agents](https://venturebeat.com/orchestration/openai-unveils-workspace-agents-a-successor-to-custom-gpts-for-enterprises-that-can-plug-directly-into-slack-salesforce-and-more) - **Research preview April 22, 2026; credit-based pricing May 6, 2026; EKM support May 7, 2026**. OpenAI's successor to Custom GPTs for enterprises — cloud-side agents with file access, code execution, scheduled runs and built-in connectors for Slack, Google Drive, Salesforce. Available on Business / Enterprise / Edu / Teachers; powered by Codex.

---

## 🌐 Browser & Web Agents

*Frameworks and infrastructure for agents that interact with the web through real browsers — navigate, click, scrape, and complete multi-page workflows.*

- [agent-qa](https://github.com/vostride/agent-qa) - Open-source self-improving QA agent that runs natural-language web and mobile tests, self-heals UI interactions, and learns from previous runs. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvostride%2Fagent-qa&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Cloudflare Kitesurf](https://blog.cloudflare.com/kitesurf/) - 🆕 **August 6, 2026 (beta, Cloudflare Agents Week)**. Cloudflare's new serverless browser built specifically for AI agents — runs on Workers, stateless and isolated per session, optimized for token count and context-window efficiency over pixel-perfect rendering. Supports Puppeteer and Playwright; **3.1× less CPU and 4.7× less memory than Chromium** for screenshot workloads, 215K+ Web Platform Tests passing. Free during beta via Browser Rendering. Trade-offs: no video playback, no WebGL, limited persistent-auth support.
- [Browser Use](https://github.com/browser-use/browser-use) - Python browser-automation library for AI agents; MIT; [0.13.10](https://github.com/browser-use/browser-use/releases/tag/0.13.10) (2026-09-04). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbrowser-use%2Fbrowser-use&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Stagehand](https://github.com/browserbase/stagehand) - The SDK for browser agents — typed `act`/`extract`/`observe` primitives over Playwright by Browserbase. MIT. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbrowserbase%2Fstagehand&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Steel Browser](https://github.com/steel-dev/steel-browser) - Open-source browser API for AI agents — batteries-included sandboxed Chromium with session persistence and proxy rotation. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fsteel-dev%2Fsteel-browser&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Skyvern](https://github.com/Skyvern-AI/skyvern) - Automate browser-based workflows with LLMs and computer vision. AGPL-3.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FSkyvern-AI%2Fskyvern&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [AgentQL](https://github.com/tinyfish-io/agentql) - Query language + Playwright integration for semantic web extraction. Reliable on dynamic, cluttered pages. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Ftinyfish-io%2Fagentql&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Hyperbrowser MCP](https://github.com/hyperbrowserai/mcp) - Hosted headless-browser fleet exposed as an MCP server — plug into Claude/GPT/LangChain via the standard tool interface. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhyperbrowserai%2Fmcp&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - Microsoft's official Playwright server exposed as an MCP tool. Production-grade automation primitives without rolling your own bridge. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmicrosoft%2Fplaywright-mcp&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [MultiOn](https://theagi.company/) - 📦 Hosted browser agent platform with native Reasoning + Memory; multion.ai now redirects to AGI, Inc. (theagi.company). Closed-source.
- [Browserbase](https://www.browserbase.com/) - Headless browser infrastructure built specifically for AI agents — stealth, persistence, captcha solving, observability.
- [BrowserOS](https://www.browseros.com/) - First open-source browser with built-in AI agents — privacy-first Chrome alternative. Natural-language task automation without coding; local-first design competes with Perplexity's Comet and Arc's AI features.
- [Vercel Agent Browser](https://github.com/vercel-labs/agent-browser) - Headless browser automation CLI for AI agents. June 2026 release adds `vitals` command for Core Web Vitals (LCP/CLS/TTFB/FCP), `pushstate` for SPA navigation, out-of-process plugin system, MCP server mode, and `@agent-browser/sandbox` for hosted environments. Apache-2.0, 37K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvercel-labs%2Fagent-browser&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Google Agent Development Kit (ADK)](https://github.com/google/adk-python) - Python framework for agents, tools, and workflows; the 2.x feature line is distinct from the continuing 1.x maintenance line; [v2.8.0](https://github.com/google/adk-python/releases/tag/v2.8.0) (2026-08-26). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgoogle%2Fadk-python&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [WebBrain](https://webbrain.one) - 🆕 **July 2026**. Open-source MIT browser extension (Chrome + Firefox) for automating web tasks with local or cloud LLMs. "Ask mode" for read-only summarization and data extraction; "Act mode" for clicks, form fills, and navigation. Local-first by design — data never leaves the device when using llama.cpp / Ollama.
- [Muse Spark 1.1 (web agent)](https://artificialanalysis.ai/models/muse-spark) - 🆕 💰 **July 9, 2026**. Meta Superintelligence Labs' first paid agentic model, via the Meta Model API public preview — scores 69.0 on WebArena-Verified (behind Claude Opus 4.8's leading 71.2).
- [Firecrawl v2](https://github.com/firecrawl/firecrawl) - 🆕 **v2.11.0, June 2026**. Major update to the agentic web scraping platform: improved JavaScript rendering, live crawl webhooks, and batch URL processing. 150K+ stars. AGPL-3.0 (MIT SDKs). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Ffirecrawl%2Ffirecrawl&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Claude in Chrome](https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome) - 🆕 Anthropic's browser-agent Chrome extension — Claude navigates, fills forms, and acts across tabs. ⚠️ July 2026 research showed rogue-extension prompt-injection risks; review permissions before use.
- [Perplexity Comet](https://www.perplexity.ai/comet) - Perplexity's agentic AI browser with Comet Assistant (background agent); free tier since Oct 2025; Perplexity raised $200M for Comet in June 2026.
- [Safari MCP Server](https://developer.apple.com/safari/technology-preview/) - 🆕 **July 1, 2026 (Safari Technology Preview 247)**. Apple's native browser-level MCP integration — Safari exposes browsing context, tab management, and page content to MCP clients. First major browser to ship native MCP support. Developer preview only.

---

## 🗣️ Voice & Multimodal Agents

*Voice-enabled and multimodal AI agent platforms.*

- [ByteDance Seedance 2.5](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5) - 🆕 **July 31, 2026**. First large-scale AI video generation model supporting single-shot 30-second audio+video synthesis with multi-round extensions; up to **30 images + 10 video clips + 10 audio clips** as multi-modal reference input in a single pass; local video editing. Rolling out on Jimeng AI and Doubao Pro; API via BytePlus ModelArk pre-release.
- [xAI Grok Voice Think Fast 2.0](https://x.ai/) - 🆕 **2026-07-29** (`grok-voice-latest` auto-upgraded from 2026-08-05). Next-gen speech-to-speech: first-byte audio latency **1.25s → 0.70s**; transcription accuracy +1.4× across 24 languages; reasoning token usage −60%; $0.08/min.
- [AgentLine](https://agentline.cloud/) - ⚠️ **Unverified.** Telephony infrastructure for AI agents — provision phone numbers, make/receive calls, real-time transcription to JSON webhooks. Pitched as a thinner alternative to Twilio for agent voice pipelines; submitter claims 30+ paid users, no third-party adoption signal yet.
- [ElevenLabs](https://elevenlabs.io/) - AI voice platform with conversational AI agents and realistic speech synthesis. **July 2026 update**: Music Finetunes API (programmatic custom model management), per-agent sentiment analysis, nested agent transfers, RAG knowledge-base queries, auto-translated transcripts, faster generation with improved tonal consistency for long audio. **[$500M Series D at an $11B valuation](https://elevenlabs.io/blog/series-d)** (closed February 4, 2026, led by Sequoia; total funding >$781M), alongside crossing **$500M ARR** — the best-funded pure-play voice-AI vendor going into H2 2026.
- [Vapi](https://github.com/VapiAI/server-sdk-python) - Enterprise voice AI platform — build, test, and deploy voice agents. **$50M Series B announced May 12, 2026** after crossing 1B platform calls; May 2026 updates ship Squads v2 (multi-assistant orchestration), Composer alpha (prompt-built agents), Simulations alpha (systematic AI-powered testing), and GA of the Soniox low-latency multilingual transcriber. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FVapiAI%2Fserver-sdk-python&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Retell AI](https://www.retellai.com/) - Build production-ready conversational voice AI agents.
- [Bland AI](https://www.bland.ai/) - AI phone calling platform — enterprise-grade conversational AI.
- [Hermes](https://buildwithhermes.com/) - 🆕 ⚠️ **Unverified (founders' beta).** White-label voice agent platform aimed at agencies: agents, native CRM, outbound/inbound campaign orchestration, and per-client usage billing in one system. Sits a layer above raw voice APIs (Vapi/Retell) by bundling the CRM and billing an agency would otherwise assemble itself. Paid plans start at $149/mo with included minutes. No independent adoption data yet.
- [LiveKit Agents](https://github.com/livekit/agents) - Realtime voice/video agent framework; 1.8.0 adopts OpenTelemetry GenAI conventions with migration notes for tracing consumers; [livekit-agents@1.8.0](https://github.com/livekit/agents/releases/tag/livekit-agents%401.8.0) (2026-09-05). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flivekit%2Fagents&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ByteDance SeedRealtime](https://technode.com/2026/08/05/bytedance-launches-seedrealtime-full-duplex-audio-video-model/) - 🆕 🇨🇳 **August 5, 2026**. Native audio-visual full-duplex LLM from ByteDance — continuously processes audio, video, and text streams, watching, listening, and speaking simultaneously in real time. Replaces traditional cascaded voice-agent pipelines; integrated into the Doubao app. No public API or model weights yet.
- [Pipecat](https://github.com/pipecat-ai/pipecat) - Python framework for voice and multimodal conversational agents; BSD-2-Clause; [v1.8.1](https://github.com/pipecat-ai/pipecat/releases/tag/v1.8.1) (2026-08-27). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fpipecat-ai%2Fpipecat&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Vocode](https://github.com/vocodedev/vocode-core) - 💤 **Stale** (last release June 2024). Open-source library for building voice-based LLM agents. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvocodedev%2Fvocode-core&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Bolna](https://github.com/bolna-ai/bolna) - End-to-end open-source voice AI agents framework. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbolna-ai%2Fbolna&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Cartesia](https://www.cartesia.ai/) - Ultra-low-latency voice AI for real-time conversational agents.
- [Meta Voice AI](https://ai.meta.com/) - Former PlayHT/Play.ai team's tech, integrated into Meta AI, AI Characters, and Meta wearables after July 2025 acquisition. Original Play.ai platform shut down Dec 31, 2025.
- [Sesame](https://www.sesame.com/) - Voice AI companion with emotional understanding and natural conversation.
- [ElevenAgents](https://elevenlabs.io/agents) - 🆕 ElevenLabs' full-stack voice-agent platform (April-May 2026 updates): MCP, multimodal messages, conversation topic discovery, knowledge-base search, pre-tool speech controls. First voice-agent platform to earn AIUC-1 certification.
- [Cartesia Line](https://cartesia.ai/blog/introducing-line-for-voice-agents) - Code-first voice-agent platform (launched Aug 2025) built on Cartesia's Sonic TTS + Ink STT with background reasoning and on-prem deployment options; ~40-90ms time-to-first-audio.
- [Deepgram Voice Agent API](https://deepgram.com/product/voice-agent-api) - 🆕 Single endpoint bundling STT (Nova-3) + LLM routing + TTS (Aura-2) + Flux conversational STT with mid-call language switching across 10 languages.
- [OpenAI Realtime API (GPT-Realtime-2)](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/) - 🆕 **May 7, 2026**. GPT-5-class reasoning over voice with parallel tool calls, 128K context; shipped alongside GPT-Realtime-Translate and GPT-Realtime-Whisper. Updated to gpt-realtime-2.1 / 2.1-mini on July 6, 2026 (better alphanumeric recognition, noise handling, lower latency).
- [Dograh](https://github.com/dograh-hq/dograh) - Open-source, self-hostable voice AI platform — an alternative to Vapi / Retell. On-prem, BYOK across Speech-to-Speech or LLM/STT/TTS, visual workflow builder, MCP-native, telephony support. BSD-2-Clause, 4K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdograh-hq%2Fdograh&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Hume TADA](https://github.com/HumeAI/tada) - Speech-language models using 1:1 text/acoustic alignment, with TADA-1B and multilingual TADA-3B-ML checkpoints; code is MIT and weights use the Llama 3.2 Community License. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FHumeAI%2Ftada&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenYabby](https://github.com/OpenYabby/OpenYabby) - Open-source macOS voice-driven multi-agent orchestrator — Realtime API + CLI runners + multi-channel orchestration. A lead agent plans the work and delegates to sub-agents for review and QA. MIT. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FOpenYabby%2FOpenYabby&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Grok Voice Agent Builder](https://x.ai/news/grok-voice-agent-builder) - 🆕 **July 1, 2026**. xAI's no-code platform for production voice agents on Grok Voice — telephony with free provisioned numbers, knowledge collections, tools/MCP connectors, guardrails, 80+ voices plus ~2-minute voice cloning; $0.05/min in beta.
- [GPT Voice](https://openai.com/) - 🆕 **July 23, 2026**. OpenAI's voice interface for ChatGPT Work — powered by GPT-Live technology, allows users to direct multi-step agent workflows through natural voice commands.

## 📱 Personal AI Agents

*AI agents designed for personal use, productivity, and daily life assistance.*

- [OpenClaw](https://github.com/openclaw/openclaw) - Personal-agent runtime with channels, skills, memory, and scheduled tasks; 2026.9.3 adds safer staged updates and performance fixes; [v2026.9.3](https://github.com/openclaw/openclaw/releases/tag/v2026.9.3) (2026-09-08). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopenclaw%2Fopenclaw&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Rabbit R1](https://www.rabbit.tech/) - Dedicated AI hardware device with a large action model for personal assistance.
- [Limitless](https://www.limitless.ai/) - 📦 **Acquired by Meta (late 2025)**; pendant sales discontinued. Personalized AI powered by what you've seen, said, and heard (formerly Rewind); team folded into Meta's AI-wearables effort.
- [Open Interpreter](https://github.com/openinterpreter/openinterpreter) - A natural language interface for computers — let LLMs run code locally. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopeninterpreter%2Fopeninterpreter&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [01 Light](https://github.com/OpenInterpreter/01) - 💤 **Stale** (no commits since 2024-11). Open-source voice interface for computers. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FOpenInterpreter%2F01&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Leon](https://github.com/leon-ai/leon) - Open-source personal assistant — lives on your server. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fleon-ai%2Fleon&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Khoj](https://github.com/khoj-ai/khoj) - Personal AI second brain — search and chat with your notes, docs, and images. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fkhoj-ai%2Fkhoj&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Humane AI Pin](https://humane.com/) - ⚠️ **Discontinued Feb 28, 2025** (acquired by HP, device shut down). Originally a wearable AI device with a screenless, ambient computing experience.
- [Arahi AI](https://arahi.ai/) - Personal productivity and business automation assistant.
- [Lindy AI](https://www.lindy.ai/) - No-code AI agent for email, calendar, and workflow automation.
- [MuleRun](https://mulerun.com/) - 🆕 Always-on agents for recurring tasks and background automation.
- [Gemini Intelligence](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/) - 🆕 **May 12, 2026** (Android Show: I/O Edition). Proactive agentic AI features integrated into Googlebooks laptops, Wear OS, Android Auto, Android XR, and starting on the latest Samsung Galaxy + Pixel devices. Auto-creates shopping carts from grocery lists, books spin classes, filler-word removal via the Rambler speech-to-text.
- [Gemini Spark](https://gemini.google/overview/agent/spark/) - 🆕 **I/O 2026 (May 19, 2026)**. Google's 24/7 autonomous agent in the Gemini app — runs multi-step processes proactively with Gmail/Workspace integration; expanded to a native Mac app July 1, 2026. **July 2026**: expanded from Gemini Ultra to Pro tier; handles scheduling, drafting, and inbox triage autonomously.
- [Gemini Notebook](https://notebooklm.google.com/) - 🆕 **July 2026 (rebranded from NotebookLM)**. Rebranded and upgraded: adds code execution, chart generation, and automatic source citation alongside the existing audio overviews and Q&A capabilities.
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw) - 🇨🇳 **May 2026 rebrand from CoPaw**. Self-hostable personal assistant in the Qwen / AgentScope family. Local-first memory, hot-loadable skills, multi-agent collaboration, multi-channel (DingTalk / Feishu / WeChat / Discord / Telegram), tool guard + skill scanner. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fagentscope-ai%2FQwenPaw&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [AI Growth Agents for Marketers](https://github.com/thaolst/ai-growth-agents-for-marketers) - ⚠️ **Unverified** (early-stage). Growth marketing prompts and Python agents built from real fintech campaigns in Southeast Asia. Covers campaign briefs, MEU planning, and A/B test analysis with multi-agent workflows. Agent Skills format — installable via `npx skills add`. Bilingual VI + EN. MIT. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fthaolst%2Fai-growth-agents-for-marketers&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Microsoft Scout](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) - **Build 2026 (June 2, 2026)**. Microsoft's always-on personal agent built on the OpenClaw framework — proactive across cloud / desktop / web, connects to Teams / Outlook / OneDrive / SharePoint. Each agent runs under its own Entra identity with continuous policy-conformance checks and audit trails. Private preview via the Microsoft Frontier program; requires Intune policy + GitHub Copilot license.
- [Lenovo Qira / Motorola Qira](https://news.lenovo.com/pressroom/press-releases/lenovo-unveils-lenovo-and-motorola-qira/) - **CES 2026 (Jan 6, 2026)**. Cross-device "Personal Ambient Intelligence System" co-developed by Lenovo and Motorola — context-aware AI that perceives, thinks, and acts across PCs / phones / tablets / wearables. Rolling out on select Lenovo devices in Q1 2026, expanding to Motorola phones thereafter; first major OEM ambient-AI play.
- [Yao Agents](https://yaoagents.com) - 🇨🇳 **May 2026**. Local-first AI execution platform with 30+ domain Experts (coding, writing, data analysis, PM) and autonomous Robot workers. Features a 5-stage Pipeline (Inspiration→Goals→Tasks→Validation→Delivery), Docker sandbox isolation, multi-platform messaging (WeChat/Feishu/DingTalk/Telegram/Discord), MCP support, BYOK model configuration, and Tai Link for cross-device agent orchestration. Open-source engine: [YaoApp/yao](https://github.com/YaoApp/yao).
- [AgentArk](https://github.com/agentark-ai/AgentArk) - 🆕 🧪 **June 2026** (v0.0.1, beta — not for production). Personal AI OS prioritizing local control and security; self-learning via the GEPA optimizer runtime. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fagentark-ai%2FAgentArk&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [nanobot](https://github.com/HKUDS/nanobot) - Ultra-lightweight open-source personal AI agent (41K+ stars). April 2026 releases (v0.1.5.x) added thread-scoped sessions, auto-compact memory, Dream consolidation, DeepSeek-V4 support, and Windows support. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FHKUDS%2Fnanobot&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenBot](https://github.com/CopilotKit/OpenBot) - 🆕 🧪 **August 17, 2026 (alpha)**. CopilotKit's self-hosted AG-UI coworker platform: each agent gets its own computer (browser, files, granted tools), fail-closed knowledge permissions, and a visible screen you can take over. MIT, 2.8K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FCopilotKit%2FOpenBot&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Cumora](https://github.com/yetone/cumora) - 🆕 **August 17, 2026** (invite-only preview). Cross-platform team chat where AI agents are first-class teammates (persona, memory, initiative, email) — cloud pods or BYOA to local Claude Code / Codex / Grok Build / Cursor Agent. MIT, 3.1K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fyetone%2Fcumora&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

---

## 📱 Mobile Agents

*GUI agents that drive Android/iOS phones — the next frontier after desktop computer-use. Most major model providers now ship a mobile-grounded variant.*

- [Mobile-Agent](https://github.com/X-PLUG/MobileAgent) - 🇨🇳 Alibaba's flagship multimodal phone-control agent family (v1 → v3, plus Mobile-Agent-E and Mobile-Agent-V). State-of-the-art on Android benchmarks. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FX-PLUG%2FMobileAgent&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [AppAgent](https://github.com/TencentQQGYLab/AppAgent) - 💤 Tencent's multimodal agent that operates smartphone apps by tapping/swiping. Influential early implementation; succeeded by AppAgentX (Mar 2025). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTencentQQGYLab%2FAppAgent&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Apple Intelligence](https://www.apple.com/apple-intelligence/) - On-device agent layer in iOS / iPadOS / macOS. App Intents and screen-aware actions across the OS.
- [Samsung Galaxy AI](https://www.samsung.com/us/galaxy-ai/) - AI features integrated into supported Galaxy devices; feature availability varies by device, language, region, and network requirements.
- [Google Gemini for Android](https://gemini.google/) - Replaces Google Assistant on Android with full Gemini-powered, app-aware actions including system intents and Workspace.
- [Magma](https://microsoft.github.io/Magma/) - Microsoft Research foundation model for multimodal agents — grounds across UI, robotics, and physical action; targets phones, web, and embodied tasks.
- [mobile-use](https://github.com/minitap-ai/mobile-use) - Open-source framework (Apache-2.0, 2.5K+ stars) letting AI agents drive real Android and iOS apps as if they were a human — UI-aware navigation, natural-language control. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fminitap-ai%2Fmobile-use&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [agent-device (Callstack)](https://github.com/callstack/agent-device) - **February 2026**. Lightweight, token-efficient CLI for automating iOS and Android devices + simulators. Command model designed for AI agents and CI; MIT, 2.6K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcallstack%2Fagent-device&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [iOS 27 Siri AI (preview)](https://www.apple.com/ios/) - 🆕 **Preview July 2026 (GA fall 2026)**. Apple's completely rebuilt Siri powered by Apple Intelligence — cross-app context awareness, natural language Shortcuts automation, multi-AI-model marketplace anticipated in iOS 27. Developer beta available July 2026.
- [EU Android AI Openness Ruling](https://ec.europa.eu/) - 🆕 **July 17, 2026**. European Commission orders Google to provide rival AI assistants deeper Android access — camera, microphone, and app-control APIs — paving the way for third-party mobile AI agents. Must be implemented by August 2027 in Android 18.

---

## 🏢 Enterprise Agent Platforms

*Enterprise-grade platforms for deploying AI agents at scale.*

- [GPTBots.ai LoopAgent](https://www.gprbots.ai/) - 🆕 **2026-08-03**. Production-grade execution engine for enterprise AI agents: sandboxed code execution, lazy-loaded Skills, versioned System Identity Prompt Diff, seamless human-handoff context summaries. ⚠️ Unverified (GlobeNewswire announcement; primary URL unverified).
- [Salesforce Agentforce 360](https://www.salesforce.com/agentforce/what-is-new/) - Autonomous AI agents for enterprise CRM — sales, service, and marketing. **Spring 2026 release** ships Agentforce Builder (conversational agent authoring), Agent Script (deterministic behavior control), Agentforce Voice (Amazon Connect / Five9 / Genesys / NiCE / Vonage + SIP), and Intelligent Context on top of the new Data 360. Customers across 124 countries report ~85% autonomous query resolution.
- [Microsoft Copilot Studio](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio) - Build and customize AI agents and copilots for your organization.
- [Gemini Enterprise Agent Platform](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform) - **April 22, 2026** (Google Cloud Next '26). Evolution of Vertex AI into a unified hub for building, scaling, governing, and optimizing enterprise agents. Supports Gemini 3.1 Pro/Flash, Lyria 3, plus third-party models (Claude Opus/Sonnet/Haiku). Integrated agent DevOps, security, and orchestration.
- [Google Vertex AI Agent Builder](https://cloud.google.com/products/agent-builder) - **Renamed April 2026** — Vertex AI's agent-building capabilities are now part of the Gemini Enterprise Agent Platform (see above): Agent Studio, Model Garden, Google Antigravity orchestration.
- [Amazon Bedrock Agents](https://aws.amazon.com/bedrock/agents/) - Build AI agents that can execute multi-step tasks across company systems.
- [ServiceNow AI Agents](https://www.servicenow.com/products/ai-agents.html) - AI agents for enterprise IT service management with AI Control Tower. 🆕
- [ServiceNow Action Fabric (MCP Server)](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-opens-its-full-system-of-action-to-every-AI-Agent-in-the-enterprise/default.aspx) - 🆕 **May 5, 2026**. ServiceNow opens its AI Platform to any AI agent (Claude, Copilot, custom) via a GA MCP Server bundled with every Now Assist and AI Native SKU. Every action runs through AI Control Tower — identity-verified, permission-scoped, audited; OAuth, consumption metering, role-based tool packages out of the box. Anthropic (Claude Cowork) is first design partner.
- [IBM watsonx Orchestrate](https://www.ibm.com/products/watsonx-orchestrate) - AI assistant platform to automate work across enterprise applications.
- [Oracle AI Agents](https://www.oracle.com/artificial-intelligence/) - Enterprise AI agents integrated with Oracle Fusion Cloud ERP. 🆕
- [Moveworks](https://www.moveworks.com/) - Enterprise copilot platform — AI that works across every system. Acquired by ServiceNow (closed December 15, 2025).
- [UiPath Agentic Automation](https://www.uipath.com/) - Agentic reasoning layered onto RPA bot estates for intelligent process automation.
- [AgentX](https://www.agentx.so/) - Agentic enterprise solution for scalable AI automation with plug-and-play chatbots.
- [Sistava](https://sistava.com) - ⚠️ "AI employees on demand" for sales, marketing, support, recruiting, and operations — agents work inside your tools with persistent memory; from $19/month.
- [Sema4.ai](https://sema4.ai/) - Enterprise AI agent platform with Python-first approach and built-in governance.
- [SAP Business AI Platform + Autonomous Suite](https://news.sap.com/2026/05/sap-sapphire-sap-unveils-autonomous-enterprise/) - 🆕 **SAP Sapphire 2026 (May 12, 2026)**. SAP unveils the "Autonomous Enterprise": SAP Business AI Platform as the unified AI foundation; SAP Autonomous Suite adding agents to existing apps across finance, supply chain, procurement, HR, and CX; Joule Studio for building enterprise agents and agentic workflows; Joule Work UX; and seven Industry AI solutions. Claude is among the foundation models powering Joule agents.
- [Microsoft Agent 365 + Microsoft 365 E7](https://techcommunity.microsoft.com/blog/agent-365-blog/microsoft-365-e7--agent365-from-where-you-are-to-enterprise-ai-at-scale/4519969) - **May 1, 2026 GA** with extended May rollouts. Identity-first control plane for governing and securing AI agents across enterprise environments; $15/user/month standalone, $99/user/month inside the new Microsoft 365 E7 "Frontier" suite. May 2026 update adds AWS Bedrock + Google Cloud registry sync, Intune/Defender preview policies, and SASE for agents.
- [OpenAI Guaranteed Capacity (Compute Annual Pass)](https://openai.com/business/guaranteed-capacity/) - 🆕 **May 19, 2026**. Long-term enterprise compute reservations (1 / 2 / 3-year terms, larger discounts at longer terms) sold as a structured product. Designed to derisk enterprise rollout of GPT-5.5-class agents — OpenAI's reply to the Anthropic Priority Tier model.
- [Bristol Myers Squibb ↔ Claude Enterprise](https://news.bms.com/news/corporate-financial/2026/Bristol-Myers-Squibb-Announces-Strategic-Agreement-with-Anthropic-to-Position-Claude-Enterprise-as-the-Shared-Intelligence-Platform-Across-Its-Global-Operations/default.aspx) - **May 20, 2026**. BMS standardises on Claude Enterprise as its shared intelligence platform for **30,000+ employees**, embedding agentic Claude into drug-discovery / development / delivery pipelines. First top-5 pharma to make a public, company-wide Claude commitment.
- [Kore.ai Artemis Agent Platform](https://www.kore.ai/news/kore-ai-launches-artemis-the-new-generation-of-the-kore-ai-agent-platform-for-building-governing-and-optimizing-enterprise-ai) - 🆕 **May 21, 2026** (launched on Azure). AI-native enterprise agent platform built around the new YAML-style **Agent Blueprint Language (ABL)** for declarative multi-agent workflows. Kore.ai's structural challenge to Copilot Studio and Agentforce.
- [FPT Flezi Foundry](https://fptsoftware.com/newsroom/news-and-press-releases/press-release/fpt-launches-flezi-foundry-advancing-ai-augmented-delivery-for-global-enterprises) - FPT delivery platform combining Agentic Development Lifecycle (ADLC) and Agentic Managed Services (AMS), with human supervision and service governance.
- [Amazon Bedrock AgentCore Payments](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-payments-preview/) - **May 7, 2026 (preview)**. Managed payments for AgentCore agents — autonomous payment for APIs, MCP servers, web content, and other agents via Coinbase (CDP wallet, x402 Bazaar) and Stripe (Privy wallet) integrations; spending limits and transaction observability across four AWS regions.
- [OutSystems Agentic Systems Platform](https://www.outsystems.com/) - **June 2026**. OutSystems positions its low-code platform as an "AI-native" agentic development environment. Open and governed AI, BYO model, multi-agent orchestration, and enterprise compliance tooling. Challenger to Copilot Studio and Agentforce.
- [Databricks Genie One](https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents) - **June 16, 2026 (Data + AI Summit)**. Agentic "data coworker" that automates and orchestrates work across structured and unstructured data — inside or outside Databricks — grounded in the new **Genie Ontology** (an organization-wide knowledge graph) and governed by Unity Catalog. Ships with Genie Agents; Databricks reports 84.5% first-attempt accuracy in internal testing.
- [ZenseAI.AgentMesh (Zensar)](https://www.prnewswire.com/news-releases/zensar-technologies-launches-zenseaiagentmesh-to-accelerate-enterprise-ai-adoption-at-scale-302805437.html) - **June 19, 2026**. Zensar's enterprise-grade agentic AI platform — a "universal enterprise operating system for agentic AI" to discover, build, deploy, and govern autonomous agents at scale, with a catalogue of 80+ pre-built industry and cross-functional agents and a stated 6–8 week pilot-to-production path.
- [Meta Business Agent](https://about.fb.com/news/2026/06/meta-business-agent/) - **June 3, 2026 (global rollout)**. Meta's AI business agent for WhatsApp, Instagram, and Messenger — answers customer questions, recommends catalog products, books appointments, qualifies leads, and closes sales, handing off to a human when needed. 1M+ businesses already on it; a **Meta Business Agent Platform** lets enterprises configure agents and connect Shopify / Zendesk / Shopee — free to activate today, paid subscription tiers coming.
- [Snyk Evo Agentic Development Security (ADS)](https://snyk.io/news/snyk-launches-evo-agentic-development-security/) - **June 2026**. Security and governance platform built specifically for autonomous AI coding agents; governs what agents use, what they do, and the code they generate in real-time.
- [Cognizant Neuro AI + ServiceNow AI Agent](https://news.cognizant.com/2026-06-18-Cognizant-expands-cross-platform-agentic-AI-with-new-ServiceNow-AI-Agent-interoperability) - **June 2026**. Cross-platform enterprise orchestration enabling ServiceNow agents to work natively within Cognizant's Multi-Agent Accelerator.
- [Talkdesk Agent Builder](https://www.cmswire.com/contact-center/customer-contact-week-2026-capturing-the-ai-announcements-in-contact-center-technology/) - **June 2026**. Low-code builder allowing business users to deploy production-grade AI agents in the contact center in hours instead of weeks.
- [HelloTwin Digital Authority](https://siliconangle.com/2026/06/24/hellotwin-launches-digital-authority-bring-governed-ai-agents-enterprise/) - **June 2026**. AI twin designed as a single, auditable source of truth to govern agentic workflows with clear boundaries.
- [Hellomatik](https://hellomatik.com) - 💰 ⚠️ **Freemium / Unverified**. AI agent platform that turns a company's knowledge base into agents that answer, sell, and book across WhatsApp, email, and web. Integrations: Shopify, Stripe, Sage. Claimed 25–30% chat-to-sale conversion.
- [OpenAI Presence](https://openai.com/) - 🆕 **July 22, 2026**. OpenAI's enterprise agent deployment platform — enables businesses to deploy AI agents at scale for customer service and operations. Claimed 75% of phone support interactions handled without human escalation.

## 📊 Agent Evaluation & Observability

*Tools for testing, evaluating, and monitoring AI agents in production.*

- [AgentBench](https://github.com/THUDM/AgentBench) - Multi-dimensional benchmark for evaluating LLMs as agents. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTHUDM%2FAgentBench&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [PerspectiveGap](https://github.com/WhymustIhaveaname/PerspectiveGap) - 🆕 **2026 (arXiv 2606.08878)**. First benchmark for **multi-agent orchestration prompt writing** — 110 scenarios across 10 communication topologies (chain, star, tree, mesh, etc.), testing whether LLMs can compose prompts that make sub-agents coordinate effectively. Measures role-fragment assignment, information leakage rate, and topology-aware prompt design. Key finding: average combined pass rate only 17.2% across 33 models; GPT-5.5 leads at 62.0%. Opus 4.8 shows surprising weakness in orchestration prompting despite strong coding scores. MIT-licensed benchmark data + eval scripts; merged into OpenCompass and Inspect Evals (role-fragment + free-form prompt writing tasks, June 2026). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FWhymustIhaveaname%2FPerspectiveGap&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ClawBench](https://github.com/TIGER-AI-Lab/ClawBench) - 🆕 Live-web benchmark for browser and computer-use agents — **153 everyday online tasks across 144 real platforms in 15 categories** (purchases, appointments, job applications), run against *production* websites rather than offline sandboxes. An interception layer captures and blocks the final submission request so nothing actually happens in the real world, then a two-stage scorer (HTTP interception → LLM judge) checks whether the agent submitted the right thing. Headline result: frontier models complete only a small fraction — Claude Sonnet 4.6 at 33.3%. [Paper](https://arxiv.org/abs/2604.08523) · [Leaderboard](https://claw-bench.com) ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTIGER-AI-Lab%2FClawBench&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LangSmith](https://www.langchain.com/langsmith) - Platform for debugging, testing, evaluating, and monitoring LLM applications.
- [Helicone](https://github.com/Helicone/helicone) - Open-source LLM observability platform — logs, metrics, and traces. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FHelicone%2Fhelicone&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Braintrust](https://www.braintrust.dev/) - Enterprise-grade stack for building AI products — evals, prompt playground, logging. SDKs: [braintrust-sdk-javascript](https://github.com/braintrustdata/braintrust-sdk-javascript) and braintrust-sdk-python (repo split/renamed from braintrust-sdk).
- [Arize Phoenix](https://github.com/Arize-ai/phoenix) - AI observability & evaluation — traces, evals, and datasets. **July 7, 2026**: Metric Charts, Trace Search, expanded REST API; July 1 added granular LLM + tool span attributes via new OpenInference span attrs. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FArize-ai%2Fphoenix&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Langfuse](https://github.com/langfuse/langfuse) - Self-hostable LLM observability, evaluation, and prompt-management platform; the v4 line has shipped; [v4.32.0](https://github.com/langfuse/langfuse/releases/tag/v4.32.0) (2026-09-08). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flangfuse%2Flangfuse&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenLLMetry](https://github.com/traceloop/openllmetry) - Open-source observability for LLM applications based on OpenTelemetry. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Ftraceloop%2Fopenllmetry&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Weights & Biases Weave](https://github.com/wandb/weave) - Toolkit for developing, evaluating, and monitoring AI applications. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fwandb%2Fweave&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [SWE-bench](https://github.com/SWE-bench/SWE-bench) - Benchmark for evaluating LLMs on real-world software engineering problems. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FSWE-bench%2FSWE-bench&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Terminal-Bench](https://www.tbench.ai/) - Benchmark for terminal-based coding agent evaluation. Maintained by Harbor Framework. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fharbor-framework%2Fterminal-bench&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Harbor](https://github.com/harbor-framework/harbor) - 🆕 Framework for evaluating and optimizing agents and LLMs at scale — run Terminal-Bench 2.x and custom benchmarks across thousands of cloud sandboxes, generate RL rollouts; a Stanford × Laude Institute collaboration. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fharbor-framework%2Fharbor&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Arena (formerly LMArena / LMSYS Chatbot Arena)](https://arena.ai/) - Crowdsourced AI benchmark using human preference voting; leaderboards now cover LLMs, image generation, and code models. LMSYS → LMArena (2025) → Arena (2026).
- [Patronus AI](https://www.patronus.ai/) - 💰 LLM evaluation/red-teaming company now positioned as a frontier research lab building digital world models and simulation infrastructure for agent training ($50M Series B); research artifacts include Lynx, FinanceBench, and GLIDER.
- [DeepEval](https://github.com/confident-ai/deepeval) - Pytest-style LLM eval framework with 14+ built-in metrics (G-Eval, hallucination, faithfulness). Most-starred open-source eval lib in 2026. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fconfident-ai%2Fdeepeval&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Agenta](https://github.com/agenta-ai/agenta) - Open-source LLMOps platform combining prompt playground, prompt management, evaluation, and observability. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fagenta-ai%2Fagenta&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LangSmith SDK](https://github.com/langchain-ai/langsmith-sdk) - Official client SDK for LangChain's hosted observability platform. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flangchain-ai%2Flangsmith-sdk&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [AutoEvals](https://github.com/braintrustdata/autoevals) - Standalone library of best-practice LLM eval scorers (factuality, JSON validity, semantic similarity, etc.) by Braintrust. Drop-in for any framework. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbraintrustdata%2Fautoevals&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [BenchClaw](https://github.com/Agnuxo1/benchclaw) - ⚠️ **Unverified.** Self-described multi-dimensional agent evaluation harness (17-judge tribunal, deception detectors, 10 scoring dimensions). Repo is single-maintainer with very low independent adoption; the same submission was sent to 8+ awesome lists in parallel — one was merged at [eudk/awesome-ai-tools](https://github.com/eudk/awesome-ai-tools/pull/229), the rest are pending or declined. Listed for visibility, evaluate before relying on its scores. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FAgnuxo1%2Fbenchclaw&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [PromptEden](https://www.prompteden.com) - ⚠️ **Unverified.** Commercial AI-visibility monitoring service — tracks how ChatGPT, Claude, Gemini, Perplexity, Copilot, and Grok describe brands and which competitors they recommend, refreshed daily across 9+ platforms. Submitted to 10 awesome lists on the same day — promising category but listed for visibility only, evaluate before purchasing.
- [Laminar](https://github.com/lmnr-ai/lmnr) - Open-source observability platform purpose-built for long-running AI agents (Apache-2.0, YC S24). OpenTelemetry-native, transcript view, Signals, SQL over traces, browser-agent session replay. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flmnr-ai%2Flmnr&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LangSmith Engine](https://www.langchain.com/blog/interrupt-2026-overview) - **May 2026 (Interrupt 2026)**. Autonomous failure-diagnosis layer for LangSmith — clusters production failures into prioritised issues, root-causes them across traces and code, and proposes fixes for human review. Companion to the new SmithDB (Rust + DataFusion-backed agent observability database).
- [AgentSight](https://github.com/eunomia-bpf/AgentSight) - Zero-instrumentation eBPF observability for LLM/coding agents. Captures syscall-level traces (process, file, network) without modifying the agent, enabling full-stack behavioral analysis. MIT. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Feunomia-bpf%2FAgentSight&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Prismix](https://prismix.dev) - Real-time status monitoring for 77+ AI services (OpenAI, Anthropic, Cursor, etc.) with status badges and API, AI news aggregator from 71+ sources, and an MCP server directory with 80+ servers. Free, no signup.
- [Ceros (by Beyond Identity)](https://www.prnewswire.com/news-releases/ceros-launches-providing-unified-identity-observability-and-governance-for-every-ai-agent-and-workflow-302800721.html) - 🆕 **June 16, 2026**. Agentic AI trust layer for unified identity, observability, and governance — discovery/inventory, runtime policy enforcement, audit trails. (Unrelated to the interactive-content company of the same name.)
- [Zoom Agent Performance Suite](https://news.zoom.com/introducing-agent-architect-and-agent-performance-suite-for-zoom-virtual-agent/) - **June 2026**. Dedicated suite to test, validate, and optimize autonomous agent performance in customer-facing scenarios.
- [AgentOps](https://github.com/AgentOps-AI/agentops) - 🆕 Agent monitoring, compliance, and testing toolkit with session replays; MCP server for zero-config observability of any MCP-connected agent; 5K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FAgentOps-AI%2Fagentops&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenTelemetry GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions-genai) - Standardized spans, metrics, and events for GenAI clients, agents, tool invocations, and MCP — vendor-neutral tracing across any OTel backend (Arize, Langfuse, Helicone, Jaeger, etc.). Moved out of the core semconv repo into a dedicated GenAI repository.
- [Tracecat](https://github.com/TracecatHQ/tracecat) - 🆕 Open-source security-automation platform that captures complete agent traces for SOC workflows — integrates AI agents with detection, enrichment, and response pipelines. AGPL-3.0 (with enterprise-edition exceptions). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTracecatHQ%2Ftracecat&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Langfuse v4](https://github.com/langfuse/langfuse/releases/tag/v4.0.0) - 🆕 **v4.0.0, July 29, 2026**. Major release for the self-hostable LLM observability stack: full-text search across inputs/outputs/metadata, a new filter search bar, monitors & alerts, and rebuilt Observations API v2 / Metrics API v2 that the project claims are up to **165× faster**.
- [AcruxCore](https://github.com/AcruxCore/AcruxCore) - ⚠️ **Unverified** (new repo, single maintainer, no third-party adoption yet). Self-hosted or SaaS LLM-ops platform — prompt versioning, an AI gateway, tracing, a tool catalog, and evaluation runs. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FAcruxCore%2FAcruxCore&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [AOTrust](https://github.com/GitSerge-crypto/aotrust-skills) - ⚠️ **Unverified** (single maintainer; independent adoption and service guarantees unverified). Artifact-hash/timestamp receipt service with a public MIT specification, offline parser, MCP interface and GitHub Action; signed receipts do not establish that an artifact’s contents are correct. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FGitSerge-crypto%2Faotrust-skills&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

## 🔬 AI Research Tools

*Tools and platforms for AI/ML research, experimentation, and development.*

- [Hugging Face](https://huggingface.co/) - The AI community's platform — models, datasets, and Spaces for ML research.
- [Hugging Face Transformers](https://github.com/huggingface/transformers) - Model-definition and training/inference library; 5.16.1 adds GLM-5.3-Flash support; [v5.16.1](https://github.com/huggingface/transformers/releases/tag/v5.16.1) (2026-08-26). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhuggingface%2Ftransformers&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [vLLM](https://github.com/vllm-project/vllm) - LLM serving engine; 0.28.0 includes Kimi-K3 and DeepSeek V4 execution optimizations; [v0.28.0](https://github.com/vllm-project/vllm/releases/tag/v0.28.0) (2026-08-26). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvllm-project%2Fvllm&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Ollama](https://github.com/ollama/ollama) - Run LLMs locally with a simple API. Supports Llama, Mistral, Qwen, and more. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Follama%2Follama&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LM Studio](https://lmstudio.ai/) - Desktop app for running local LLMs with a user-friendly interface.
- [SGLang](https://github.com/sgl-project/sglang) - Model serving framework; 0.5.19 adds model integrations including Qwen3.8; [v0.5.19](https://github.com/sgl-project/sglang/releases/tag/v0.5.19) (2026-09-05). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fsgl-project%2Fsglang&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - LLM inference in C/C++ — run models on consumer hardware. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fggml-org%2Fllama.cpp&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [MLX](https://github.com/ml-explore/mlx) - Apple's array framework for ML on Apple silicon. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fml-explore%2Fmlx&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Unsloth](https://github.com/unslothai/unsloth) - Open-source tooling for model training, fine-tuning, and reinforcement learning; performance depends on the workload. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Funslothai%2Funsloth&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [OpenRouter](https://openrouter.ai/) - Unified API for accessing 400+ AI models from 70+ providers.
- [Weights & Biases](https://wandb.ai/) - ML experiment tracking, dataset versioning, and model management.
- [Label Studio](https://github.com/HumanSignal/label-studio) - Multi-type data labeling and annotation tool. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FHumanSignal%2Flabel-studio&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [SmithDB](https://www.langchain.com/blog/interrupt-2026-overview) - **May 2026 (Interrupt 2026)**. LangChain's purpose-built agent observability database. Rust on top of Apache DataFusion + Vortex, with object-storage backing for trace data — designed for the volumes and access patterns of agent traces.
- [Strands Evals (AWS)](https://github.com/strands-agents/evals) - 🆕 AWS's evaluation framework for agent workflows — Case/Experiment/Evaluator structure with LLM-as-judge support; companion to Strands Agents SDK. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fstrands-agents%2Fevals&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [DSPy](https://github.com/stanfordnlp/dspy) - Programming — not prompting — language models; widely used in research for systematically optimizing prompts and pipelines. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fstanfordnlp%2Fdspy&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Elicit](https://elicit.com/) - 🆕 AI research assistant for literature and systematic review over a very large academic-paper corpus. **July 15, 2026**: shipped a public [API and MCP server](https://elicit.com/blog/elicit-api) so agents and workflows can call its search and review capabilities directly. **July 17, 2026**: published a paper-search evaluation reporting it outperformed five other search systems on BioASQ (vendor-run evaluation).
- [IdeaHunter](https://ideahunter.today) - AI research tool for solo founders — surfaces demand-backed app and micro-SaaS ideas from public signals, buyer pain, market evidence, MVP scope, and monetization paths. Freemium.

---

## 📚 Learning Resources

*Papers, courses, tutorials, and guides for understanding and building AI agents.*

### Papers

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) - The foundational paper on reasoning + acting in LLMs.
- [Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761) - Teaching LLMs to use external tools autonomously.
- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) - Stanford's generative agent architecture with memory and reflection.
- [A Survey on Large Language Model based Autonomous Agents](https://arxiv.org/abs/2308.11432) - Comprehensive survey of LLM-based autonomous agents.
- [The Rise and Potential of Large Language Model Based Agents](https://arxiv.org/abs/2309.07864) - In-depth analysis of LLM agent capabilities and future directions.
- [Agent Hospital](https://arxiv.org/abs/2405.02957) - A simulacrum of hospital with evolvable medical agents.
- [ComBodied Agents: a New Paradigm of Human-Centric Agentic AI](https://arxiv.org/abs/2608.10915) - 🆕 **August 11, 2026**. Human-centric agent paradigm combining multimodal perception, longitudinal memory, and personal world models that track human-state trajectories. Top Hugging Face daily paper on Aug 12, 2026.
- [Co-Evolution in Agentic Systems: Toward Self-Directed Evolution Beyond Human Design](https://arxiv.org/abs/2608.10299) - 🆕 **August 10, 2026**. Survey of agent-agent / agent-environment co-evolution and self-directed evolutionary mechanisms in agentic systems.

### Courses & Tutorials

- [DeepLearning.AI — AI Agents in LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) - Short course on building agents with LangGraph.
- [DeepLearning.AI — Multi AI Agent Systems with crewAI](https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/) - Course on building multi-agent systems.
- [DeepLearning.AI — A2A Protocol](https://www.deeplearning.ai/short-courses/a2a-the-agent2agent-protocol/) - Free course on Google's Agent-to-Agent protocol.
- [LangChain Academy](https://academy.langchain.com/) - Free courses on LangChain, LangGraph, and agent development.
- [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - Short AI courses covering the major frameworks / protocols.
- [Hugging Face — Building AI Agents](https://huggingface.co/learn/agents-course/) - Open course on building AI agents with open-source tools.
- [LLM Agents MOOC (Berkeley)](https://llmagents-learning.org/) - UC Berkeley course on LLM agents (root site redirects to the latest iteration).
- [Microsoft Agent Framework Docs](https://learn.microsoft.com/en-us/agent-framework/) - Official documentation for Microsoft's unified agent framework.
- [Hugging Face Agents Course](https://github.com/huggingface/agents-course) - Free 5-unit course (notebooks + videos) on building production agents with smolagents, LangGraph, and Llama-Index. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhuggingface%2Fagents-course&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) - Official notebooks for tool use, computer use, agent patterns, prompt engineering, and Claude Code recipes. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fanthropics%2Fclaude-cookbooks&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Google Gemini Cookbook](https://github.com/google-gemini/cookbook) - Official Gemini API examples covering grounding, function calling, multimodal, and live audio. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgoogle-gemini%2Fcookbook&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LLM Course (Maxime Labonne)](https://github.com/mlabonne/llm-course) - End-to-end LLM curriculum from fundamentals to fine-tuning, with Colab notebooks. 79K stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmlabonne%2Fllm-course&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Anthropic Courses](https://github.com/anthropics/courses) - Anthropic's official educational courses on prompt engineering, real-world prompts, evals, and tool use. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fanthropics%2Fcourses&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Hugging Face Robotics Course](https://huggingface.co/learn/robotics-course/unit0/1) - Free course connecting classical robotics and learned policies with LeRobot, real robot datasets and practical implementation exercises.

### Curated Lists

- [awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) - 💤 **Stale** (last update 2025-02). Curated list of AI autonomous agents by E2B — pre-2026 reference. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fe2b-dev%2Fawesome-ai-agents&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [awesome-llm-agents](https://github.com/kaushikb11/awesome-llm-agents) - Curated list of LLM-powered agent resources. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fkaushikb11%2Fawesome-llm-agents&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - Curated list of MCP server implementations. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fpunkpeye%2Fawesome-mcp-servers&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [awesome-ai-agent-papers (VoltAgent)](https://github.com/VoltAgent/awesome-ai-agent-papers) - Curated collection of 2026 AI-agent research papers — agent engineering, memory, evaluation, workflows, autonomous systems. Updated weekly from arXiv. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FVoltAgent%2Fawesome-ai-agent-papers&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [awesome-cli-coding-agents](https://github.com/bradAGI/awesome-cli-coding-agents) - Curated directory of terminal-native AI coding agents + the harnesses that orchestrate them — open-source tools (Pi, OpenCode, Aider, Goose), platform agents (Claude Code, Codex, Gemini CLI), parallel runners, autonomous loops. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FbradAGI%2Fawesome-cli-coding-agents&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

---

## 🇨🇳 Chinese AI Ecosystem

*Major projects from mainland-China teams or primarily targeting the Chinese market. Listed because the China stack is increasingly its own parallel ecosystem with distinct frameworks, models, and developer culture.*

*Foundation models from Chinese labs (Qwen, DeepSeek, GLM, Doubao, Kimi, Hunyuan, ERNIE) are listed under [🧠 Foundation Models](#-foundation-models-2026) directly.*

### Agent Platforms & Frameworks

- [Dify](https://github.com/langgenius/dify) - Open-source LLM app development platform with visual agent builder. The dominant low-code agent canvas in Chinese tech. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flanggenius%2Fdify&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LobeHub](https://github.com/lobehub/lobehub) - Agent management platform (formerly Lobe Chat) — organizes agents into 7×24 operation with hiring/scheduling/reporting on your AI team. One of the highest-starred TypeScript AI projects (80K+ stars). Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flobehub%2Flobehub&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Coze Loop](https://github.com/coze-dev/coze-loop) - 🆕 ByteDance's open-source agent optimization platform from the Coze team. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcoze-dev%2Fcoze-loop&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [AgentScope](https://github.com/agentscope-ai/agentscope) - Alibaba ModelScope's multi-agent framework with visual debugging and distributed execution. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fagentscope-ai%2Fagentscope&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Bisheng](https://github.com/dataelement/bisheng) - Open enterprise LLM DevOps platform: workflows, RAG, agents, fine-tuning, evals. Apache-2.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdataelement%2Fbisheng&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - Multi-agent collaboration framework that assigns SOP roles (PM, architect, engineer) to LLMs. Now maintained under the FoundationAgents org. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FFoundationAgents%2FMetaGPT&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

### RAG / Knowledge

- [FastGPT](https://github.com/labring/FastGPT) - Knowledge-base-first platform on top of LLMs: data ingestion, RAG retrieval, visual workflow orchestration. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flabring%2FFastGPT&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [QAnything](https://github.com/netease-youdao/QAnything) - 💤 NetEase Youdao's question-answering engine over arbitrary local documents (PDF/Word/Excel/PPT). ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fnetease-youdao%2FQAnything&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [RAGFlow](https://github.com/infiniflow/ragflow) - Deep-document-understanding RAG engine — strong on scanned PDFs, tables, and charts. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Finfiniflow%2Fragflow&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [LightRAG](https://github.com/HKUDS/LightRAG) - HKU Data Science Lab's lightweight graph-based RAG engine. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FHKUDS%2FLightRAG&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)

### Personal & Productivity

- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - Open-source Notion alternative with AI workspace agents. AGPL-3.0. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FAppFlowy-IO%2FAppFlowy&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Manus AI](https://manus.im/) - General-purpose autonomous agent by Butterfly Effect (Chinese-founded, relocated to Singapore). Meta announced a ~$2B acquisition on Dec 30, 2025, but **[China's NDRC blocked the takeover on April 27, 2026](https://www.theguardian.com/world/2026/apr/27/china-blocks-meta-takeover-manus-ai-agent-developer)**. ✅ **Resolved August 11, 2026**: Manus [announced it will resume operating as an independent company](https://www.cnbc.com/2026/08/11/manus-china-meta-acquisition.html) as Meta unwinds the acquisition per Beijing's order; a user data-deletion process has begun.
- [Coze (扣子)](https://www.coze.cn/) - ByteDance's no-code agent builder. Mainland-only consumer surface; international counterpart is coze.com.
- [Qwen App (千问)](https://www.qwen.ai/) - Alibaba's mass-market consumer agent (rebranded from Tongyi Qianwen), integrated across Taobao / DingTalk / Quark.
- [Doubao Agents](https://www.doubao.com/) - ByteDance's flagship consumer assistant on top of the Doubao model family.
- [Resume Roaster](https://resume.roastlabai.com/) - AI-powered resume critique with ATS keyword gap analysis. Upload your resume and any job description to get specific AI feedback on what to improve before applying. Built for job seekers wanting edge in competitive markets.

### Developer Tools

- [Trae](https://www.trae.ai/) - ByteDance's AI IDE and "10x AI coding engineer" — the highest-profile Chinese challenger to Cursor.
- [CoderPlan](https://coderplan.ai/) - China-first unified LLM API gateway (Claude / OpenAI / Gemini, one-line config for Claude Code). Pay-as-you-go with Alipay & WeChat Pay.
- [Cherry Studio](https://github.com/CherryHQ/cherry-studio) - Most-installed open-source desktop client for LLMs in Chinese dev circles — multi-provider chat with knowledge base. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FCherryHQ%2Fcherry-studio&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-code) - **June 6, 2026**. Moonshot AI's terminal coding agent (MIT, TypeScript) — built-in coder / explore / plan sub-agents in isolated contexts, conversational MCP setup. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FMoonshotAI%2Fkimi-code&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Qwen Code](https://github.com/QwenLM/qwen-code) - Alibaba Qwen team's open-source terminal coding agent — agent teams, auto-memory, IDE integrations, multi-provider (OpenAI / Anthropic / Gemini / Qwen). 26K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FQwenLM%2Fqwen-code&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Coze Studio](https://github.com/coze-dev/coze-studio) - ByteDance's open-source counterpart to Coze.com — all-in-one visual agent builder with debugging and deployment tools. Apache-2.0, 20K+ stars. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcoze-dev%2Fcoze-studio&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [ScienceOne 100 / 磐石100](https://english.cas.cn/newsroom/cas-in-media/202604/t20260429_1158251.shtml) - Chinese Academy of Sciences scientific reasoning agent system, 50+ CAS institutes, 2,000+ research tools.

### Notable 2026 Models (Chinese Labs)

- [Kimi K3](https://huggingface.co/moonshotai/Kimi-K3) - Open-weight multimodal MoE; custom Kimi K3 License.
- [Qwen3.8 family](https://huggingface.co/Qwen/Qwen3.8-27B) - 27B uses Apache-2.0; full Max and Flash-Next checkpoints have separate Qwen terms.
- [GLM-5.3 / GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3) - Both have downloadable weights; GLM-5.3 uses a custom license, while Flash uses MIT.
- [DeepSeek V4](https://api-docs.deepseek.com/quick_start/pricing/) - Current API checkpoints are Pro-0813 and Flash-0731; Flash Vision is experimental.
- [Seed 2.1](https://seed.bytedance.com/en/seed2_1) - ByteDance model for general agents and coding; see the primary model page for access.

---

## 📝 Compare — Side-by-Side Tables

*Quick decision matrices for the most common "which one do I pick?" questions in 2026.*

### 🏗️ Agent Frameworks

| Tool | Language | Purpose | License / terms |
| --- | --- | --- | --- |
| [LangGraph](https://github.com/langchain-ai/langgraph) | Python / JS | Stateful graph orchestration, persistence, interrupts | MIT |
| [CrewAI](https://github.com/crewAIInc/crewAI) | Python | Agent crews and event-driven Flows | MIT |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Python / .NET | Agents and graph-based workflows; successor path for Microsoft AutoGen | MIT |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | Python / TypeScript | Handoffs, guardrails, sessions, tracing | MIT |
| [Mastra](https://github.com/mastra-ai/mastra) | TypeScript | Agents, workflows, memory, observability | Apache-2.0 core; enterprise exceptions |
| [Google ADK](https://github.com/google/adk-python) | Python | Tools, workflows, multi-agent composition | Apache-2.0 |
| [DSPy](https://github.com/stanfordnlp/dspy) | Python | Typed model programs and optimizers | MIT |
| [Agno](https://github.com/agno-agi/agno) | Python | Agents, teams, workflows, knowledge | Apache-2.0 |

---

### 🧪 Sandboxes (running agent-generated code)

| Tool | Purpose | Deployment / status | License / terms |
| --- | --- | --- | --- |
| [E2B](https://github.com/e2b-dev/E2B) | Code execution in sandbox environments | Managed cloud; infrastructure available separately | Apache-2.0 |
| [Daytona](https://github.com/daytonaio/daytona) | Agent development and execution environments | Managed service; public core no longer maintained | Historical snapshot has separate license; current core private |
| [Modal](https://modal.com/) | Serverless functions, GPUs, sandboxes | Managed cloud | Commercial service |
| [Microsandbox](https://github.com/superradcompany/microsandbox) | Programmable local microVMs | Self-host | Apache-2.0 |
| [SandboxFusion](https://github.com/bytedance/SandboxFusion) | Multi-language code evaluation | Self-host; configure isolation explicitly | Apache-2.0 |
| [OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) | Sandbox APIs, SDKs, network controls | Docker / Kubernetes; selectable isolation runtime | Apache-2.0 |

Cold-start figures are omitted: results depend on image, region, resources, and warm-cache state.

---

### 🌐 Browser-Use Stacks

| Tool | Purpose | Deployment / status | License / terms |
| --- | --- | --- | --- |
| [Browser Use](https://github.com/browser-use/browser-use) | Model-driven browser automation | Python library; cloud service optional | MIT |
| [Stagehand](https://github.com/browserbase/stagehand) | act / extract / observe | Local browser or Browserbase | MIT |
| [Steel Browser](https://github.com/steel-dev/steel-browser) | Browser sessions and automation API | Self-host or cloud | Apache-2.0 |
| [Skyvern](https://github.com/Skyvern-AI/skyvern) | Vision-based browser workflows | Self-host or cloud | AGPL-3.0 |
| [AgentQL](https://github.com/tinyfish-io/agentql) | Semantic web extraction and automation | SDK with hosted API | MIT SDK; service terms apply |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Browser accessibility snapshots and actions over MCP | Local MCP server | Apache-2.0 |

---

### 📊 Eval & Observability

| Tool | Purpose | Deployment / status | License / terms |
| --- | --- | --- | --- |
| [Langfuse](https://github.com/langfuse/langfuse) | Tracing, evaluation, prompt management | Cloud / self-host | MIT core; enterprise exceptions |
| [Helicone](https://github.com/Helicone/helicone) | LLM gateway and observability | Cloud / self-host | Apache-2.0 |
| [Arize Phoenix](https://github.com/Arize-ai/phoenix) | OpenTelemetry/OpenInference tracing and evaluation | Self-host / managed option | Elastic-2.0 |
| [LangSmith](https://docs.langchain.com/langsmith/self-hosted) | Tracing, evaluation, prompts, deployment | Cloud; self-host is Enterprise add-on | Commercial |
| [Braintrust](https://www.braintrust.dev/docs/admin/self-hosting/architecture) | Experiments, datasets, traces, evaluation | Self-hostable data plane; SaaS control plane | Commercial platform |
| [DeepEval](https://github.com/confident-ai/deepeval) | Test-driven LLM evaluation library | Local library; optional hosted platform | Apache-2.0 |
| [Agenta](https://github.com/agenta-ai/agenta) | Prompt playground, evaluation, observability | Cloud / self-host | MIT core; enterprise exceptions |
| [OpenLLMetry](https://github.com/traceloop/openllmetry) | OpenTelemetry instrumentation | Library; bring a telemetry backend | Apache-2.0 |

---

### 💻 Coding Agents — Headline Picks

| Tool | Surface | Purpose | Cost model / availability |
| --- | --- | --- | --- |
| [Claude Code](https://code.claude.com/docs/en/overview) | CLI / IDE | Repository exploration, editing, tools | Paid plan or API billing |
| [Codex CLI](https://github.com/openai/codex) | CLI | OpenAI coding-agent runtime | Open-source client; model access billed separately |
| [Cursor](https://www.cursor.com/) | IDE / CLI | Agent-assisted development | Proprietary; plan limits apply |
| [Cline](https://github.com/cline/cline) | IDE | Tool-using coding agent with approvals | Open-source client; provider charges apply |
| [Aider](https://github.com/Aider-AI/aider) | CLI | Git-aware pair programming | Open-source client; provider charges apply |
| [Devin](https://devin.ai/) | Cloud / Desktop | Delegated software-engineering tasks | Commercial service |
| [OpenHands](https://github.com/OpenHands/OpenHands) | Self-host / cloud | Software-engineering agent platform | Core available; compute/model costs separate |

Benchmark results require a named model, harness, dataset version, and evaluation date; they are not permanent properties of an editor or CLI.

---

### 💰 Foundation Models — API Cost & Context

*Official standard API rates checked 2026-09-08; USD per million tokens, excluding tools, tax and cache writes. Context is not the maximum input allowance.*

| Model | Provider | Context | Max output | Input $/1M | Output $/1M | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| [GPT-6 Astra](https://developers.openai.com/api/docs/models/gpt-6-astra) | OpenAI | 1.05M | 128K | $10.00 | $50.00 | Limited organizational rollout; not GA |
| [GPT-5.6 Sol](https://developers.openai.com/api/docs/pricing) | OpenAI | 1.05M | 128K | $4.00 | $20.00 | General agentic work |
| [GPT-5.6 Terra](https://developers.openai.com/api/docs/pricing) | OpenAI | 1.05M | 128K | $2.00 | $12.00 | Balanced production tier |
| [GPT-5.6 Luna](https://developers.openai.com/api/docs/pricing) | OpenAI | 1.05M | 128K | $0.20 | $1.20 | Throughput and cost |
| [Claude Fable 5.1](https://platform.claude.com/docs/en/about-claude/pricing) | Anthropic | 1M | 128K | $10.00 | $50.00 | Cache reads $0.25/M |
| [Claude Opus 5](https://platform.claude.com/docs/en/about-claude/pricing) | Anthropic | 1M | 128K | $5.00 | $25.00 | Opus tier |
| [Claude Sonnet 5](https://platform.claude.com/docs/en/about-claude/pricing) | Anthropic | 1M | 128K | $2.00 | $10.00 | Standard pricing; no September increase |
| [Claude Haiku 4.5](https://platform.claude.com/docs/en/models/overview) | Anthropic | 200K | 64K | $1.00 | $5.00 | Latency-sensitive tasks |
| [Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/pricing) | Google | 1,048,576 | 65,536 | $0.75 | $3.75 | Intro price through 2026-12-31 |
| [Gemini 3.1 Pro Preview](https://ai.google.dev/gemini-api/docs/pricing) | Google | 1M | 65,536 | $2.00 | $12.00 | Base rates for prompts ≤200K |
| [DeepSeek V4-Pro](https://api-docs.deepseek.com/quick_start/pricing/) | DeepSeek | 1M | 384K | $1.32 / $0.66 | $3.96 / $1.98 | Peak / off-peak; cache miss |
| [DeepSeek V4-Flash](https://api-docs.deepseek.com/quick_start/pricing/) | DeepSeek | 1M | 384K | $0.44 / $0.22 | $1.32 / $0.66 | Peak / off-peak; cache miss |
| [Grok 4.6](https://x.ai/news/grok-4-6) | SpaceXAI | 500K | — | $2.00 | $6.00 | Fast tier costs 2× |

For the listed OpenAI models, prompts above 272K use 2× input/cache and 1.5× output rates; Astra allows up to 922K input tokens. Gemini Pro long-context pricing differs above 200K. Gemini 3.8 Flash becomes $1.50/$7.50 on 2027-01-01. DeepSeek peak hours: 01:00–04:00 and 06:00–10:00 UTC. Recheck the linked provider rates for caching, batch, region and service-tier modifiers.

---

### 💻 Foundation Models — Local Deployment

*Licenses and availability checked 2026-09-08. Storage is an arithmetic illustration: published total parameters × 0.5 bytes, in decimal GB; it is neither a tested Q4 build size nor a minimum GPU requirement.*

| Model | Parameter scale | Ideal 4-bit weight storage | Official weights | License |
| --- | --- | --- | --- | --- |
| Gemma 4 E4B | ~8B stored | ~4 GB | [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | Apache-2.0 |
| Gemma 4 12B | 12B | ~6 GB | [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | Apache-2.0 |
| Phi-4 | 14B | ~7 GB | [microsoft/phi-4](https://huggingface.co/microsoft/phi-4) | MIT |
| Gemma 4 26B A4B | 26B / 4B active | ~13 GB | [google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it) | Apache-2.0 |
| Qwen3.8-27B | 27B | ~13.5 GB | [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Apache-2.0 |
| Muse Glimmer 30B | 30B | ~15 GB | [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | Apache-2.0 |
| Gemma 4 31B | 31B | ~15.5 GB | [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | Apache-2.0 |
| Qwen3.6-35B-A3B | 35B / 3B active | ~17.5 GB | [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Apache-2.0 |
| Llama 3.3 70B | 70B | ~35 GB | [meta-llama/Llama-3.3-70B-Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) | Llama Community |
| Mistral Small 4 | 119B / 6B active | ~59.5 GB | [mistralai/Mistral-Small-4-119B-2603](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603) | Apache-2.0 |
| Qwen3.8-Flash-Next | 125B + 51B tables + 4B MTP | ~90 GB | [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen Community 1.0 |
| Qwen3 235B A22B | 235B / 22B active | ~117.5 GB | [Qwen/Qwen3-235B-A22B](https://huggingface.co/Qwen/Qwen3-235B-A22B) | Apache-2.0 |
| Inkling-Small | 276B / 12B active | ~138 GB | [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | Apache-2.0 |
| DeepSeek V4-Flash | 284B / 13B active | ~142 GB | [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | MIT |
| GLM-5.3-Flash | 320B / 18B active | ~160 GB | [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | MIT |
| MiniMax-M3 | MoE | — | [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMax Community |
| GLM-5.3 | MoE | — | [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | GLM-5.3 License |
| Inkling | 975B / 41B active | ~487.5 GB | [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | Apache-2.0 |
| DeepSeek V4-Pro | 1.6T / 49B active | ~800 GB | [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | MIT |
| Kimi K3 | 2.8T / 104B active | ~1,400 GB | [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | Kimi K3 License |

Budget additional space for quantization scales, unquantized tensors, runtime buffers and KV cache. MoE active parameters describe compute, not total weight memory. CPU/offload strategies change GPU residency and throughput; benchmark the exact checkpoint, backend, quantization, context and concurrency. Read custom weight licenses separately from inference-code licenses.

---

### 🧠 Agent Memory Systems

| Tool | Purpose | Deployment / status | License / terms |
| --- | --- | --- | --- |
| [Mem0](https://github.com/mem0ai/mem0) | Persistent memory with vector/graph integrations | Library / managed platform | Apache-2.0 |
| [Basic Memory](https://github.com/basicmachines-co/basic-memory) | Markdown-based knowledge and MCP access | Local / self-host | AGPL-3.0 |
| [Graphiti](https://github.com/getzep/graphiti) | Temporal knowledge graph | Self-host; backing databases required | Apache-2.0 |
| [Zep](https://github.com/getzep/zep) | Managed agent context; repository contains SDKs/examples | Cloud; old Community Edition deprecated | Service and SDK terms differ |
| [Memary](https://github.com/kingjulio8238/Memary) | Experimental agent memory | Stale; last repository push 2024-10 | MIT |
| [Hindsight](https://github.com/vectorize-io/hindsight) | retain / recall / reflect | Self-hostable memory service | MIT |
| [Letta](https://github.com/letta-ai/letta) | Stateful agent runtime with managed memory blocks | Self-host / cloud | Apache-2.0 |

---

### 🎙️ Voice & Audio Models

*Capabilities checked 2026-09-08. STT, TTS and speech-to-speech are different products; latency depends on endpointing, transport and workload, so no universal millisecond ranking is implied.*

| Model / API | Task | Deployment | License / access | Integration note |
| --- | --- | --- | --- | --- |
| [Eleven v3](https://elevenlabs.io/docs/overview/models) | Speech generation | Hosted | Provider terms | Expressive TTS; evaluate streaming latency separately |
| [Whisper large-v3](https://github.com/openai/whisper) | Speech recognition | Open weights | MIT | Offline transcription; streaming needs a wrapper |
| [Deepgram Nova-3](https://developers.deepgram.com/docs/models-languages-overview) | Speech recognition | Hosted | Provider terms | STT; Aura is a separate TTS family |
| [Gemini 3.1 Flash Live](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-live-preview) | Speech-to-speech | Hosted | Provider terms | Live API preview |
| [GPT-Realtime-2.1](https://developers.openai.com/api/docs/models/gpt-realtime-2.1) | Speech-to-speech | Hosted | Provider terms | Realtime API; separate text/audio billing |
| [Qwen3-ASR](https://huggingface.co/Qwen/Qwen3-ASR-1.7B) | Speech recognition | Open weights | Apache-2.0 | Streaming and offline |
| [Qwen3-TTS](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | Speech generation | Open weights | Apache-2.0 | Choose Base, CustomVoice or VoiceDesign |
| [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) | Speech generation | Open weights | Apache-2.0 | Compact local TTS |
| [Voxtral Realtime](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602) | Speech recognition | Open weights | Apache-2.0 | Streaming transcription |
| [Voxtral TTS](https://docs.mistral.ai/models/voxtral-tts-26-03) | Speech generation | Open weights | CC-BY-NC-4.0 | Commercial use needs separate permission |
| [Muse Voice Transcribe](https://research.meta.ai/blog/introducing-muse-voice-transcribe) | Speech recognition | Hosted | Provider terms | Streaming ASR and diarization |
| [MAI-Transcribe-2](https://microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/) | Speech recognition | Hosted | Provider terms | Speaker labels and word timestamps |

---

### 🎨 Image Generation Models

*2026-09-08 snapshot. Compare the same task, size and quality setting; a flat per-image figure is misleading across different token billing and subscription plans.*

| Model | Access | Main use | Important distinction |
| --- | --- | --- | --- |
| [gpt-image-2](https://developers.openai.com/api/docs/models/gpt-image-2) | Hosted | Generation and editing | Token/size/quality-dependent pricing |
| [FLUX.2](https://docs.bfl.ai/quick_start/generating_images) | API / selected open weights | Image and reference editing | Pro/Flex/Dev/Klein have different terms |
| [Midjourney V8.1 / V8.2 Edit](https://updates.midjourney.com/alpha-changelog-9-2-26/) | Web | Generation and editing | V8.2 Edit is alpha |
| [Stable Diffusion 3.5](https://huggingface.co/stabilityai/stable-diffusion-3.5-large) | Open weights | Self-hosted image generation | Stability AI Community License |
| [Seedream 5.0 Pro](https://seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro) | Hosted | Layouts and image/text design | ByteDance image family |
| [Nano Banana Pro](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-image) | Hosted | Image generation/editing | gemini-3-pro-image |
| [Nano Banana 2](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-image) | Hosted | Image generation/editing | gemini-3.1-flash-image |
| [Nano Banana 2 Lite](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite-image) | Hosted | Efficient image generation | gemini-3.1-flash-lite-image |
| [Ideogram 4.0](https://ideogram.ai/models/4.0/) | Hosted / open quantized weights | Typography and layout editing | Noncommercial weights; commercial license separate |

---

### 🎥 Video Generation Models

*2026-09-08 snapshot. Native clip duration, extension chains, editor timelines and upscaled resolution are different limits; the table does not combine them into a fictional maximum.*

| Model | Workflow | Deployment | Verified limit / status |
| --- | --- | --- | --- |
| [Gemini Omni Flash 1.1](https://ai.google.dev/gemini-api/docs/omni) | Generation and multi-turn editing | Hosted | Preview; uploaded-video editing varies by region |
| [Veo 3.1 / Fast / Lite](https://ai.google.dev/gemini-api/docs/veo) | Video with audio, frame control | Hosted | Preview; 4/6/8s per generation, distinct extension limits |
| [Runway Gen-4.5](https://docs.dev.runwayml.com/guides/models/) | Text/image-to-video | Hosted | API model: gen4.5 |
| [Runway Aleph 2.0](https://docs.dev.runwayml.com/guides/models/) | Video editing | Hosted | API model: aleph2 |
| [Kling VIDEO 3.0](https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be/) | Video generation with audio | Hosted | Consult exact model/mode; no 3-minute native-clip claim |
| [Seedance 2.5](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5) | Reference-guided video | Hosted | 30s one-shot generation; extension is separate |
| [MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | Video and native stereo audio | Open weights | Up to 15s/2K; custom license |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Multishot video/audio generation | Open weights | Model-specific commercial terms |
| [Sora 2 API](https://developers.openai.com/api/docs/deprecations) | Legacy integration only | Hosted | Deprecated; shutdown 2026-09-24 |

---

### 🔍 RAG Frameworks

| Tool | Purpose | License / terms |
| --- | --- | --- |
| [LlamaIndex](https://github.com/run-llama/llama_index) | Document ingestion, indexing, retrieval, agent workflows | MIT |
| [Haystack](https://github.com/deepset-ai/haystack) | Composable search and RAG pipelines | Apache-2.0 |
| [LangChain](https://github.com/langchain-ai/langchain) | Model, document-loader, and retriever integrations | MIT |
| [RAGFlow](https://github.com/infiniflow/ragflow) | Document parsing and retrieval application platform | Apache-2.0 |
| [Cognee](https://github.com/topoteretes/cognee) | Graph and vector knowledge retrieval | Apache-2.0 |
| [txtai](https://github.com/neuml/txtai) | Embedding search and workflow pipelines | Apache-2.0 |
| [Verba](https://github.com/weaviate/Verba) | 📦 Archived Weaviate RAG chatbot; historical reference | BSD-3-Clause |

---

### 🗄️ Vector Databases

| Tool | Purpose | License / terms |
| --- | --- | --- |
| [Qdrant](https://github.com/qdrant/qdrant) | Vector database with filtering and hybrid retrieval | Apache-2.0 |
| [Weaviate](https://github.com/weaviate/weaviate) | Vector database with keyword/vector search | BSD-3-Clause |
| [Pinecone](https://www.pinecone.io/) | Managed vector database service | Commercial service |
| [Chroma](https://github.com/chroma-core/chroma) | Embedding database with local/server modes and a cloud service | Apache-2.0 |
| [Milvus](https://github.com/milvus-io/milvus) | Distributed vector database; 3.x and 2.6.x are separate release lines | Apache-2.0 |
| [pgvector](https://github.com/pgvector/pgvector) | Vector similarity search extension for PostgreSQL | PostgreSQL |
| [FAISS](https://github.com/facebookresearch/faiss) | Similarity-search library; persistence and serving must be integrated separately | MIT |

---

### 📱 Personal AI Assistants (2026)

| Tool | Purpose | Hosting / model access |
| --- | --- | --- |
| [OpenClaw](https://github.com/openclaw/openclaw) | Messaging channels, skills, memory, scheduled tasks | Self-hosted runtime; local or hosted models |
| [Khoj](https://github.com/khoj-ai/khoj) | Personal knowledge search and research | Self-host / managed option |
| [Jan](https://github.com/janhq/jan) | Desktop model chat client | Local models and remote-provider integrations |
| [LM Studio](https://lmstudio.ai/) | Local model management, chat, API server | Desktop application; hardware/model dependent |
| [Perplexity](https://www.perplexity.ai/) | Search-backed answers and research | Managed service |
| [Claude](https://claude.ai/) | Chat, projects, and connected tools | Managed service; features vary by plan |
| [Zo Computer](https://zo.computer/) | Personal cloud computer with agent assistance | Managed cloud computer |

---

### 🔌 MCP Servers — Top Integrations

| Tool | Purpose | Authentication / status |
| --- | --- | --- |
| [GitHub MCP](https://github.com/github/github-mcp-server) | Repositories, issues, PRs, Actions | Official remote server or local server; scoped credentials |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Browser automation | Local process; browser sessions carry permissions |
| [Filesystem MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | Local filesystem access | Reference implementation; restrict allowed directories |
| [Brave Search MCP](https://github.com/brave/brave-search-mcp-server) | Web, image, video, news search | Official Brave server; API key |
| [Notion MCP](https://developers.notion.com/guides/mcp/overview) | Notion workspace access | Official remote server; OAuth; preferred over legacy local repo |
| [Slack reference](https://github.com/modelcontextprotocol/servers-archived) | Historical Slack example | 📦 Archived; no maintenance |
| [PostgreSQL reference](https://github.com/modelcontextprotocol/servers-archived) | Historical PostgreSQL example | 📦 Archived; not a production recommendation |
| [Google Maps reference](https://github.com/modelcontextprotocol/servers-archived) | Historical Maps example | 📦 Archived; no maintenance |

Official ownership does not imply an independent security audit; review permissions, provenance, maintenance, and network access for each server.

---

### 🏢 Enterprise AI Agent Platforms

| Tool | Purpose | Deployment considerations |
| --- | --- | --- |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Python/.NET agents and workflows | MIT library; infrastructure is chosen separately |
| [Salesforce Agentforce](https://www.salesforce.com/agentforce/) | Agents for Salesforce business workflows | Confirm product entitlements and data scopes |
| [SAP Joule](https://www.sap.com/products/artificial-intelligence/ai-assistant.html) | Role- and process-aware assistants for SAP workflows | Confirm supported SAP applications and regions |
| [Google Gemini Enterprise](https://cloud.google.com/gemini-enterprise) | Enterprise agents and connected business data | Google Cloud product; check connector permissions |
| [IBM watsonx](https://www.ibm.com/products/watsonx) | AI development, orchestration, and governance products | Deployment options depend on the selected product |
| [ServiceNow AI Agents](https://www.servicenow.com/products/ai-agents.html) | Agents integrated with ServiceNow data and workflows | Agent Studio, Agent Fabric, and Control Tower have distinct roles |
| [Dify](https://github.com/langgenius/dify) | Visual LLM application and agent workflow platform | Self-hostable; Dify Open Source License includes additional conditions |

Product names and framework licenses do not establish compliance: verify the chosen service, region, contract, controls, and data flows.

---

### 📏 Embedding Models

*Official specifications checked 2026-09-08. “Local” means downloadable weights, not a guarantee of commercial permission or hardware fit. Approximate MTEB scores from incompatible tracks have been removed.*

| Model | Dimensions | Input limit | Input | Deployment | License |
| --- | --- | --- | --- | --- | --- |
| [text-embedding-3-large / small](https://developers.openai.com/api/docs/guides/embeddings) | 3072 / 1536 | 8192 | Text | Hosted | Provider terms |
| [Cohere Embed v4](https://docs.cohere.com/docs/cohere-embed) | 256–1536 | 128K | Multimodal | Hosted | Provider terms |
| [Gemini Embedding 2](https://ai.google.dev/gemini-api/docs/embeddings) | 128–3072 | 8192 | Multimodal | Hosted | Provider terms |
| [BGE-M3](https://huggingface.co/BAAI/bge-m3) | 1024 | 8192 | Text | Open weights | MIT |
| [Jina Embeddings v4](https://huggingface.co/jinaai/jina-embeddings-v4) | 128–2048 | 32768 | Multimodal | Open weights | Qwen Research License |
| [Nomic Embed Text v2 MoE](https://huggingface.co/nomic-ai/nomic-embed-text-v2-moe) | 256–768 | 512 | Text | Open weights | Apache-2.0 |
| [Voyage 4 / large / lite](https://docs.voyageai.com/docs/embeddings) | 256 / 512 / 1024 / 2048 | 32000 | Text | Hosted | Provider terms |
| [Voyage Code 4](https://docs.voyageai.com/docs/embeddings) | 256 / 512 / 1024 / 2048 | 32000 | Code/text | Hosted | Provider terms |
| [Voyage 4 Nano](https://huggingface.co/voyageai/voyage-4-nano) | 256 / 512 / 1024 / 2048 | 32000 | Text | Open weights | Apache-2.0 |
| [Qwen3-Embedding-8B](https://huggingface.co/Qwen/Qwen3-Embedding-8B) | 32–4096 | 32K | Text | Open weights | Apache-2.0 |
| [Qwen3-Embedding-4B](https://huggingface.co/Qwen/Qwen3-Embedding-4B) | 32–2560 | 32K | Text | Open weights | Apache-2.0 |
| [Qwen3-Embedding-0.6B](https://huggingface.co/Qwen/Qwen3-Embedding-0.6B) | 32–1024 | 32K | Text | Open weights | Apache-2.0 |
| [Qwen3-VL-Embedding-2B / 8B](https://huggingface.co/Qwen/Qwen3-VL-Embedding-8B) | 64–2048 / 4096 | 32K | Multimodal | Open weights | Apache-2.0 |

Choose dimensions, modality and chunk length using your retrieval evaluation. [Qwen3-VL-Reranker](https://huggingface.co/Qwen/Qwen3-VL-Reranker-8B) reranks query/document pairs after retrieval; it does not replace an embedding index. Re-embed stored documents when changing to an incompatible vector space.

---

### 🛡️ Agent Security Tools

| Tool | Purpose | Deployment / status |
| --- | --- | --- |
| [Snyk Agent Scan (formerly mcp-scan)](https://github.com/snyk/agent-scan) | Discover and scan agents, MCP servers, and skills | CLI; output schema experimental |
| [Lakera Guard](https://www.lakera.ai/) | Prompt-injection detection service | Commercial service |
| [Zenity](https://www.zenity.io/) | Enterprise agent security and governance | Commercial platform |
| [Prompt Armor](https://promptarmor.com/) | Prompt-injection detection | Commercial service |
| [Azure Prompt Shields](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection) | Detect direct and indirect prompt attacks | Azure AI Content Safety |
| [Rebuff](https://github.com/protectai/rebuff) | Historical prompt-injection detector | 📦 Archived; no longer maintained |

Detection is a defense layer, not an isolation boundary or a guarantee that malicious instructions cannot execute.

---

### 🖥️ Computer Use & Desktop Agents

| Tool | Purpose | Deployment / boundary |
| --- | --- | --- |
| [Claude Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) | Model-driven screenshot, mouse, and keyboard actions | API; application supplies the computer environment |
| [UFO](https://github.com/microsoft/UFO) | Windows application automation agents | Windows; model backends configurable |
| [OSWorld](https://github.com/xlang-ai/OSWorld) | Computer-use benchmark and execution environment | Evaluation infrastructure; not a consumer desktop agent |
| [NeMo Agent Toolkit](https://github.com/NVIDIA/NeMo-Agent-Toolkit) | Agent workflow profiling, evaluation, and integrations | General toolkit; not a desktop-control model |
| [Screenpipe](https://github.com/screenpipe/screenpipe) | Local screen recording and context for agents | Recording/memory layer; configure downstream model access |

---

### 🤖 Physical AI Platforms

| Platform | Scope | Code / weights | Interface | Simulation / evaluation |
|---|---|---|---|---|
| [NVIDIA Isaac GR00T N1.7](https://github.com/NVIDIA/Isaac-GR00T) | Humanoid VLA | Apache-2.0 | Policy API / fine-tuning | Isaac / LIBERO |
| [ROS 2 Lyrical Luth](https://docs.ros.org/en/rolling/Get-Started/Releases/Release-Lyrical-Luth.html) | Robot middleware; LTS to May 2031 | Open source; package-specific licenses | C++ / Python | Gazebo |
| [Gemini Robotics ER 2](https://ai.google.dev/gemini-api/docs/robotics-overview) | Embodied reasoning | Proprietary / preview | Gemini API / Live API | Bring your robot tools |
| [Unitree SDK2](https://github.com/unitreerobotics/unitree_sdk2) | Robot control | BSD-3-Clause | C++ / DDS | Model-specific integrations |
| [Boston Dynamics Spot SDK](https://dev.bostondynamics.com/) | Spot applications | SDK source available; hardware proprietary | Python / gRPC | Hardware / payload integration |
| [Genesis](https://github.com/Genesis-Embodied-AI/genesis-world) | Robot physics | Apache-2.0 | Python | Native simulation |
| [Newton](https://github.com/newton-physics/newton) | Differentiable robot physics | Apache-2.0 | Python / Warp | Native simulation |
| [LeRobot](https://github.com/huggingface/lerobot) | Robot learning | Apache-2.0 code; model-specific weights | Python | Policy / dataset evaluation |

---

### 🇨🇳 Chinese AI Models — Head-to-Head

*2026-09-08 snapshot. These are capability/access comparisons, not a common Chinese-language benchmark ranking. Hosted price and regional terms vary by exact endpoint.*

| Model | Provider | Task / modality | Weight availability | License / access |
| --- | --- | --- | --- | --- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Alibaba | Multimodal | ✅ | Apache-2.0 |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Alibaba | Multimodal | ✅ | Qwen Community 1.0 |
| [DeepSeek V4-Flash / Pro](https://api-docs.deepseek.com/quick_start/pricing/) | DeepSeek | Text reasoning / coding | ✅ | MIT |
| [Kimi K3](https://huggingface.co/moonshotai/Kimi-K3) | Moonshot AI | Multimodal | ✅ | Kimi K3 License |
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | Z.ai | Text reasoning / coding | ✅ | GLM-5.3 License |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | Z.ai | Multimodal | ✅ | MIT |
| [MiniMax M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMax | Multimodal | ✅ | MiniMax Community |
| [Hunyuan Hy3](https://huggingface.co/tencent/Hy3) | Tencent | Reasoning / tool use | ✅ | Apache-2.0 |
| [Step 3.7 Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | StepFun | Multimodal | ✅ | Apache-2.0 |
| [Seed 2.1](https://seed.bytedance.com/en/seed2_1) | ByteDance | General agents / coding | Hosted | Provider terms |
| [ERNIE 5.1](https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/) | Baidu | Reasoning / generation | Hosted | Provider terms |
| [Baichuan-M3-235B](https://huggingface.co/baichuan-inc/Baichuan-M3-235B) | Baichuan | Medical-domain text | ✅ | Apache-2.0 |

---

### 📦 Agent Frameworks — TypeScript / JavaScript

| Tool | Purpose | License / terms |
| --- | --- | --- |
| [Mastra](https://github.com/mastra-ai/mastra) | Agents, workflows, memory, MCP | Apache-2.0 core; enterprise exceptions |
| [Vercel AI SDK](https://github.com/vercel/ai) | Model integrations, generation, tool loops, UI streaming | Apache-2.0 |
| [LangChain.js](https://github.com/langchain-ai/langchainjs) | Agent and model integration libraries | MIT |
| [Genkit](https://github.com/genkit-ai/genkit) | Typed generation and agent flows | Apache-2.0 |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-js) | Handoffs, guardrails, tools, realtime agents | MIT |
| [Rivet](https://github.com/Ironclad/rivet) | Visual graph-based AI application builder | MIT |
| [Flowise](https://github.com/FlowiseAI/Flowise) | 📦 Archived visual workflow builder; historical reference | Apache-2.0 |

---

### 📊 Meta-Comparison — Orchestration vs Framework vs IDE

| Category | Example Tools | Best For | Abstraction Level | Flexibility |
|---------|--------------|----------|--------------------|-------------|
| **Orchestration Platform** | Dify, n8n, Langflow | Non-engineers, fast deployment | Very high | Low-medium |
| **Agent Framework** | LangGraph, CrewAI, Mastra, OpenAI Agents SDK | Engineers building custom agents | Medium | High |
| **Agent IDE / Coding Agent** | Claude Code, Cursor, Cline, Devin | Developers pair-programming | Low | Very high |
| **Low-code Builder** | Voiceflow, Botpress, Microsoft Copilot Studio | Business / product teams | Very high | Low |
| **AI-native App Platform** | Vertex AI Agent Builder, Azure AI Foundry | Enterprise with managed infra | High | Medium |

---

### 📱 Mobile AI Frameworks

| Tool | Purpose | Boundary |
| --- | --- | --- |
| [MLX](https://github.com/ml-explore/mlx) | Array framework for Apple silicon | Device/OS support depends on the relevant bindings |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ model inference with quantized model support | Mobile integration requires device-specific build and memory sizing |
| [MediaPipe](https://github.com/google-ai-edge/mediapipe) | Cross-platform ML tasks and pipelines | Supported models and tasks vary by platform |
| [Core ML](https://developer.apple.com/documentation/coreml) | Model inference in Apple applications | Convert and test models for supported Apple hardware |
| [Google AI Edge](https://developers.google.com/edge) | On-device AI deployment tooling | Choose the appropriate runtime and supported model |
| [Ollama (mobile client)](https://ollama.com/) | Mobile app accesses an Ollama server API | Inference runs on the server; not automatically on the phone |
| [Qualcomm AI Hub](https://aihub.qualcomm.com/) | Model optimization and deployment for supported devices | Check target chipset and model compatibility |

---

## 🗺️ Scenario Guide — What Should I Use For…

*50+ curated scenarios matching your goal to the right tool or stack. Updated weekly.*

---

### 🏗️ Building: Coding Agents

These are implementation starting points, not benchmark rankings or fixed-price quotations.

**I want to build a coding agent for my startup**
→ Start with **Deep Agents** or **OpenHands**, an **E2B/OpenSandbox** execution environment, and **Langfuse** traces; measure success and total model/compute cost on your own repository tasks.

**I want an enterprise coding agent with security controls**
→ Compare **GitHub Copilot**, **Cursor**, and **Devin** against your identity, audit, retention, and network requirements; Cursor [Privacy Mode](https://cursor.com/security) prevents training on your data but does not mean all processing stays on your infrastructure.

**I want an open-source self-hosted coding agent**
→ Use **OpenHands** for a software-agent platform, **Cline** for IDE interaction, or **Aider** for terminal/git workflows; check model access, sandbox isolation, and each component license.

**I want a browser automation / web scraping agent**
→ Use **Browser Use** for model-driven browsing, **Stagehand** for `act/extract/observe`, or **Firecrawl/Crawl4AI** for document extraction; test authentication, dynamic pages, and failure recovery.

**I want a document processing / PDF analysis agent**
→ Combine **Docling** or **Unstructured** parsing with **LlamaIndex** or **Haystack** retrieval; preserve page/table provenance and select a model using the model tables.

**I want a customer service / support agent**
→ Choose **Dify** for visual workflows, **LangGraph** for custom stateful ticket handling, or **Agentforce** for Salesforce workflows; evaluate escalation and permission boundaries with real support cases.

**I want a research / deep-research agent**
→ Use **Perplexity** for a managed starting point, **Khoj** for personal knowledge, or **Deep Agents** with search/document tools; retain citations and assess factual support, not just report length.

**I want a data analysis / BI agent**
→ Combine **LangChain/Deep Agents** with a scoped database connector and sandboxed code execution; verify generated queries, calculations, and chart inputs against the source data.

**I want a computer use / desktop automation agent**
→ Use **Claude Computer Use** with an application-provided environment or **UFO** for Windows automation; **Screenpipe** supplies recorded context and should not be confused with a complete desktop-control agent.

**I want a voice / conversational agent**
→ Use **LiveKit Agents** or **Pipecat** for a programmable voice pipeline, and choose realtime or STT/LLM/TTS models from the audio tables; measure end-to-end latency, interruptions, and telephony costs.

**I want a multi-agent orchestration system**
→ Choose **LangGraph** for custom graphs, **OpenAI Agents SDK** for handoffs, **Google ADK** for agent composition, or **Mastra** for TypeScript workflows; define ownership and stop conditions for delegated work.

**I want a personal AI assistant (self-hosted)**
→ Use **OpenClaw** for channels and scheduled work, **Khoj** for personal knowledge, or **Jan/LM Studio** for local model chat; verify all enabled tools and model endpoints before claiming offline operation.

**I want a personal AI assistant (managed / easy setup)**
→ Compare **ChatGPT**, **Claude**, and **Perplexity** using your actual writing, research, and file tasks; check current plan limits and connector access.

**I want to build a RAG application**
→ Start with **LlamaIndex/Haystack**, **Qdrant/pgvector**, and an embedding/reranking pair appropriate to your language and documents; evaluate retrieval separately from answer generation.

**I want a financial analysis agent**
→ Use a stateful workflow, authorized data sources, and sandboxed calculations; preserve source timestamps and reconcile numeric outputs before review.

**I want a legal document agent**
→ Use **LlamaIndex/Docling** for document handling and the official **Claude for Legal** plugins where suitable; preserve citations and route conclusions to a qualified reviewer.

**I want an education / tutoring agent**
→ Build a **LangGraph** learning workflow with curriculum-grounded retrieval and explicit progress state; test answer correctness, age-appropriate behavior, and teacher handoff.

**I want a creative writing assistant**
→ Pair a model from the selection tables with a document store for outlines, character notes, and revisions; evaluate consistency on your own writing samples.

**I want an IoT / physical AI agent**
→ Use the physical-AI section to choose **ROS 2**, a simulator, and a robot-compatible policy; validate in simulation before enabling physical actions.

**I want a game playing / simulation agent**
→ Choose environments and evaluation tasks from the simulation section; keep observation, action, reward, and episode termination explicit.

**I want a security scanning / vulnerability agent**
→ Combine deterministic code scanning with **Snyk Agent Scan**, **Garak**, or **PyRIT** as appropriate to the target; validate findings and keep test execution isolated.

**I want a healthcare AI tool (administrative)**
→ Use scoped document retrieval, access controls, and an auditable workflow; evaluate with the organization’s approved data and keep clinical judgments with qualified professionals.

**I want a code review / PR agent**
→ Run your coding agent on an immutable diff, combine its review with CI and static checks, and verify findings against the changed execution paths.

**I want a social media / content creation agent**
→ Use **n8n** or **Dify** to connect drafting, asset creation, review, and your publishing service; keep publication approval distinct from content generation.

**I want a translation / localization agent**
→ Combine terminology and translation memory with a model selected on your language pair; validate links, placeholders, formatting, and terminology across every locale.

---

### 🧠 Model Selection

**I need a model for complex multi-step reasoning**
→ Compare **GPT-6 Astra** and **Claude Fable 5.1** on your own tasks; **Claude Opus 5**, **GPT-5.6 Sol** and **Gemini 3.8 Flash** offer different cost/capability tradeoffs. Check access and the API table before committing a workload.

**I need inexpensive high-volume inference**
→ Evaluate **GPT-5.6 Luna**, **Gemini 3.8 Flash** and **DeepSeek V4-Flash** with realistic output lengths, cache-hit rates and retries. DeepSeek's **peak**, not off-peak, hours are 01:00–04:00 and 06:00–10:00 UTC.

**I need Chinese-language agents**
→ Shortlist **Qwen3.8**, **Kimi K3**, **DeepSeek V4**, **GLM-5.3 / GLM-5.3-Flash** and **Seed 2.1**. Test domain terminology and tool schemas; the Chinese comparison table separates hosted access, downloadable weights and custom licenses.

**I have around 16 GB of GPU memory**
→ Start with a supported quantization of **Phi-4** or **Gemma 4 12B**, then measure real memory use. A 35B MoE does not fit because only 3B parameters are active; its full weights and KV cache still need storage.

**I have a larger local workstation or GPU cluster**
→ **Qwen3.8-27B**, **Gemma 4 31B** and **Muse Glimmer 30B** are workstation candidates after quantization. Large MoEs such as **DeepSeek V4**, **GLM-5.3-Flash** and **Inkling** require substantially more aggregate memory or offloading; use the storage table, not active-parameter counts.

**I need a coding model**
→ Use **Claude Sonnet 5** or **GPT-5.6 Sol** as a baseline, then evaluate **GPT-6 Astra**, **Claude Fable 5.1** or **Muse Spark 1.3** on harder tasks. For self-hosting, compare **GLM-5.3**, **GLM-5.3-Flash**, **DeepSeek V4** and smaller **Qwen3.8-27B** under their respective licenses.

**I need multimodal understanding**
→ **Gemini 3.8 Flash** accepts text, images, audio, video and PDFs but outputs text. **Qwen3.8-27B** and **Gemma 4** offer local options; **Inkling** accepts text, images and audio. Confirm the exact model supports your input and output modalities.

**I need at least 500K tokens of context**
→ Compare **GPT-6 Astra**, **Claude Fable 5.1 / Sonnet 5**, **Gemini 3.8 Flash**, **DeepSeek V4** and **Kimi K3**. Context windows include more than user input; account for output, thinking, modality tokens, service limits and long-context surcharges.

**I need real-time voice**
→ For native voice interaction, evaluate **GPT-Realtime-2.1** or **Gemini 3.1 Flash Live**. For a pipeline, choose STT (**Qwen3-ASR**, **Voxtral Realtime**, **Muse Voice Transcribe**) separately from TTS (**Qwen3-TTS**, **Kokoro**, **Eleven v3**).

**I need image generation or editing**
→ Compare **gpt-image-2**, **Nano Banana 2 / Pro**, **Seedream 5.0 Pro** and **FLUX.2** using your reference images and layouts. **Midjourney V8.2 Edit** is alpha; **Stable Diffusion 3.5** offers local weights under its community license.

**I need video generation or editing**
→ Start with **Gemini Omni Flash 1.1** for conversational editing, **Veo 3.1** for frame control/extension, or **Runway Gen-4.5 / Aleph 2.0** for production editing. **Seedance 2.5**, **MiniMax H3** and **LTX-2.5** are additional candidates; compare native clips separately from extended timelines.

**I need MIT or Apache-2.0 model weights**
→ Consider **Qwen3.8-27B**, **Gemma 4**, **Mistral Small 4**, **DeepSeek V4**, **GLM-5.3-Flash** and **Inkling**. Do not transfer those licenses to **Qwen3.8-Flash-Next**, **GLM-5.3**, **Kimi K3**, **MiniMax M3** or **Llama**, which have different terms.

**I need embeddings and reranking**
→ Evaluate **Qwen3-Embedding**, **Qwen3-VL-Embedding**, **Cohere Embed v4**, **Gemini Embedding 2** or **Voyage 4** on your corpus. Use a dedicated reranker for the retrieved candidates; compare recall, latency and total indexing cost rather than mixed leaderboard scores.

**I need document parsing or content moderation**
→ Use specialized interfaces such as **Mistral OCR 4.1** for structured document extraction and **Shieldstral 1.0** for policy classification. Treat their confidence or policy labels as inputs to your workflow, and validate representative failure cases.

---

### 🏗️ Infrastructure

Validate deployment assumptions with the selected components and workload.

**I want to run everything locally**
→ Use **Ollama/llama.cpp**, a local UI, and **Qdrant/pgvector**; verify model, embedding, telemetry, connector, and network settings before asserting that data stays local.

**I want to minimize API costs**
→ Use the current model price table, measure tokens/tool calls/retries, cache stable context, and enforce a budget outside the model; compare cost per successful task rather than input-token price alone.

**I want to scale to enterprise workloads**
→ Choose a managed or self-hosted runtime with explicit quotas, durable state, retries, and observability; load-test your actual concurrency and provider rate limits.

**I want an air-gapped or regulated deployment**
→ Inventory model weights, licenses, package mirrors, telemetry, updates, and connector egress; a self-hosted library alone does not establish an air gap or regulatory compliance.

**I want edge / mobile deployment**
→ Select **Core ML**, **Google AI Edge**, or **llama.cpp** according to the device; benchmark a supported quantized model on-device for memory, battery use, latency, and task quality.

**I need multiple model providers**
→ Use a gateway such as **Bifrost** and keep workflow state in your own database; test tool schemas, streaming, errors, and fallback behavior per provider.

**I want to self-host the full stack**
→ Combine local inference, **Qdrant/pgvector**, **Langfuse**, and an agent framework; size memory for weights, KV cache, context, concurrency, and runtime overhead instead of promising a universal GPU configuration.

---

### 📊 Evaluation & Monitoring

Measure the complete agent workflow and document evaluator limitations.

**I want to evaluate agent output quality**
→ Use **DeepEval**, **LangSmith**, or **Agenta** with representative cases and explicit rubrics; pair judge scores with deterministic checks and sampled human review.

**I want to debug why my agent is failing**
→ Capture tool calls, model requests, latency, errors, and state transitions with **Langfuse** or **Phoenix**; reproduce the failed trajectory before changing prompts or models.

**I want to monitor production agents**
→ Use **OpenTelemetry/OpenInference** with **Langfuse**, **Phoenix**, or **Helicone**; monitor task outcomes, costs, latency, and errors, and redact sensitive trace fields.

**I want to compare models or prompts**
→ Use **Braintrust**, **LangSmith**, or **Agenta** experiments; hold datasets, tools, budgets, and scoring constant, and record exact model snapshots.

**I want to benchmark models on my tasks**
→ Build a held-out set of real cases with expected outcomes; report success, regressions, cost, and latency, and repeat stochastic runs instead of substituting a public leaderboard rank.

**I want to evaluate MCP server security**
→ Use **Snyk Agent Scan** for agent/MCP/skill scanning, then review tool permissions, credential scope, source provenance, and sandbox/network controls; a clean scan is not a security guarantee.

---

### 🌍 Ecosystem Choices

**I want to build within the OpenAI ecosystem**
→ **OpenAI Agents SDK** with **GPT-5.6 Terra** for balanced workloads, **GPT-5.6 Luna** for throughput, or **GPT-6 Astra** for demanding tasks; add a sandbox and evaluation appropriate to the application.

**I want to build within the Anthropic Claude ecosystem**
→ **Claude Code** with **Claude Sonnet 5 / Opus 5 / Fable 5.1**, **MCP** for tool connections, and **Langfuse** for observability; evaluate the model and harness together.

**I want to build within the Google Gemini ecosystem**
→ **Google ADK** with **Gemini 3.8 Flash** or **Gemini 3.1 Pro Preview**, plus Google Cloud deployment and evaluation services; verify the selected endpoint's region and preview status.

**I want to build for the Chinese market**
→ Compare **Qwen3.8**, **Seed 2.1**, **ERNIE 5.1** and **Kimi K3** through the required regional endpoints. Provider choice alone does not establish data residency or regulatory compliance.

**I want a TypeScript-first stack**
→ **Mastra** or **LangChain.js / LangGraph.js**, **Vercel AI SDK**, **Qdrant JS client** and **Langfuse JS SDK** are integration options; check each component's current license and feature support.

**I want a self-hosted stack with permissive model weights**
→ Use a compatible local runtime with **Qwen3.8-27B** or **Gemma 4**, then add **LangGraph**, **Qdrant** and an observability service. Self-host every required component and inspect optional hosted features separately.

---

## 📋 Stack Recipes — Curated Tool Combinations

*Eight illustrative starting configurations. Integration, licensing, data flows and runtime quality must be validated for the chosen deployment.*

| # | Recipe Name | Stack | Best For |
|---|------------|-------|----------|
| 1 | **Lean Coding Agent** | Claude Code + E2B + Langfuse | Coding workflow with separate sandbox and tracing |
| 2 | **Local-Model SWE Agent** | OpenHands + Ollama + Qwen3.8-27B + Qdrant | Local-model coding after configuring every service endpoint |
| 3 | **Enterprise RAG** | LlamaIndex + Qdrant + Qwen3-Embedding-8B + Langfuse + Claude Sonnet 5 | Retrieval and evaluation for internal documents |
| 4 | **Voice Assistant Pipeline** | LiveKit + Whisper (STT) + Claude Sonnet 5 + ElevenLabs v3 (TTS) | Custom voice pipeline; measure end-to-end latency |
| 5 | **Browser Automation** | Browser Use + Stagehand + Claude Sonnet 5 + Langfuse | Browser tasks with explicit retry and validation |
| 6 | **Local-Only Privacy Stack** | Ollama + Qwen3.8-27B + Open WebUI + Qdrant + n8n | Local services after disabling remote connectors and telemetry |
| 7 | **TypeScript Agent** | Mastra + Vercel AI SDK + Gemini 3.8 Flash + Qdrant + Langfuse | TypeScript application starting point |
| 8 | **Chinese Market Stack** | Qwen3.8 API + RAGFlow + Milvus + Langfuse | China-region endpoints subject to provider terms and data-flow review |

---

## ⚠️ Anti-Picks — What NOT to Use For…

*Engineering tradeoffs to evaluate on your workload; these are not universal benchmark results.*

| ❌ Don’t Use | ❌ For This | ✅ Use Instead | Why |
|------------|-----------|---------------|-----|
| LangChain v0.x examples | New production agents | Current LangChain / **LangGraph** documentation | Old APIs and dependency pins need migration and regression checks |
| AutoGPT legacy demos | Unsupervised production work | A maintained runtime with explicit permissions and recovery | A demo does not establish reliability for your workload |
| GPT-3.5-Turbo by habit | New reasoning workloads | A currently supported model tested on your own eval | Compare measured quality, latency and total cost rather than model age alone |
| Pinecone Starter | A requirement to self-host the database | **Qdrant** or **pgvector** | Starter still exists as a free hosted plan; it is not a self-hosted offering ([pricing](https://www.pinecone.io/pricing/)) |
| Unvalidated LLM output | Direct financial execution | **Deterministic validation and execution limits** | Generated numbers and actions need independent checks |
| ChatGPT subscription alone | API authentication or API billing | **OpenAI API** project and billing | ChatGPT and API access are separate product surfaces |
| Free shared inference without capacity planning | Sustained production load | Reserved capacity or a measured self-hosted deployment | Quotas, concurrency and cold starts depend on the provider and workload |
| Autonomous agents without qualified review | Medical or legal decisions | A model plus **qualified human review** | Fluent output is not evidence of correctness or suitability |
| Unreviewed remote MCP endpoints | Sensitive documents | A reviewed local or contractually approved processing path | Check actual data flows, retention and access controls; an MCP label guarantees none of them |
| Multi-agent orchestration by default | A simple one-shot task | **Direct model/tool call** | Extra planning and handoffs can add cost and latency without helping |
| Unofficial Midjourney wrappers | A dependency on a supported generation API | A vendor-documented image API | Midjourney's documented web/Discord commands do not establish support for a third-party API ([docs](https://docs.midjourney.com/)) |
| Unmeasured general vision prompts | High-accuracy document OCR | A document OCR pipeline plus a representative evaluation set | Error rates and cost depend on language, layout and scan quality |
| Retired video endpoints | New video applications | A currently available vendor video API | Verify the endpoint, access region and service lifecycle before integrating |
| Vector search without retrieval evaluation | High-precision RAG | Evaluate hybrid search and reranking on your corpus | Reranking gains are dataset-dependent; no universal recall percentage applies |
| A fast model chosen only by price | Complex high-stakes reasoning | Compare capable models with task-specific evaluation and review | A provider tier name is not a reliability guarantee |
| An unreleased model name | Production dependency planning | A model whose **weights or API are available to you** | Verify the official model card and your actual entitlement |
| One leaderboard score | Choosing a coding agent | Multiple benchmarks plus **your own repository eval** | Harnesses, task distributions and test quality differ |

---

## 🌟 Notable Agent Projects of 2026

*Standout projects and developments that shaped the AI agent landscape in 2026.*

- [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol/servers) - Open protocol and reference servers for connecting AI applications to tools and data; adoption does not make every integration interoperable or safe by default. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmodelcontextprotocol%2Fservers&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [A2A Protocol](https://github.com/a2aproject/A2A) - Open protocol for communication between agent applications; [v1.0.0 was released March 12, 2026](https://github.com/a2aproject/A2A/releases/tag/v1.0.0), under Linux Foundation governance. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fa2aproject%2FA2A&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) - Anthropic’s coding agent for reading repositories, editing code and running development tools; benchmark results depend on model, harness and evaluation setup.
- [Kiro](https://kiro.dev/) - Spec-driven development tools with IDE and CLI workflows for turning requirements into designs, tasks and implementations.
- [Devin](https://www.cognition.ai/) - Cognition’s software-engineering agent for delegated repository tasks and longer development workflows.
- [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) - Microsoft framework for building agents and orchestrating workflows, bringing together capabilities developed in AutoGen and Semantic Kernel.
- [OpenAI Codex CLI](https://github.com/openai/codex) - OpenAI’s open-source terminal coding agent, maintained with repository editing, tool execution and configurable approval/sandbox controls. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fopenai%2Fcodex&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Browser Use](https://github.com/browser-use/browser-use) - Browser-automation library connecting language-model agents to web navigation and interaction. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbrowser-use%2Fbrowser-use&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Claude Computer Use](https://www.anthropic.com/) - Claude computer-use tools let agents inspect screenshots and request mouse/keyboard actions in supported environments; task reliability and permissions still require evaluation.
- [Manus AI](https://manus.im/) - General-purpose autonomous agent that can handle research, coding, and complex workflows. Meta's ~$2B December 2025 acquisition was **[blocked by China's NDRC on April 27, 2026](https://www.theguardian.com/world/2026/apr/27/china-blocks-meta-takeover-manus-ai-agent-developer)** — the first time Beijing used its foreign-investment security review to stop an AI acquisition. On **August 11, 2026** Manus announced it will [resume operating as an independent company](https://www.cnbc.com/2026/08/11/manus-china-meta-acquisition.html) as Meta unwinds the deal.
- [OpenHands](https://github.com/OpenHands/OpenHands) - Open software-development agent platform with an SDK, runtime and interfaces for repository tasks. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FOpenHands%2FOpenHands&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Dify](https://github.com/langgenius/dify) - Platform for building LLM applications and agent workflows with visual orchestration, retrieval and model integrations. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Flanggenius%2Fdify&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Cline](https://github.com/cline/cline) - Coding agent with editor integration, file edits, terminal tools and user approval controls. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fcline%2Fcline&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Mem0](https://github.com/mem0ai/mem0) - Memory layer for retaining and retrieving application-specific context across agent interactions. ![GitHub stars](https://img.shields.io/badge/dynamic/json?label=Stars&query=%24.stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmem0ai%2Fmem0&color=yellow&logo=github&logoColor=white&style=flat&cacheSeconds=300)
- [Sora discontinuation](https://help.openai.com/en/articles/20001152-what-you-need-to-know-about-the-sora-app-discontinuation) - Web and app experiences ended **April 26, 2026**; the API is scheduled to end **September 24, 2026**, so these are separate shutdown milestones.
- [Kling VIDEO 3.0](https://kling.ai/) - Kuaishou’s video-generation family; retained as a 2026 release milestone without an unsupported post-Sora market-leadership claim.
- [Cohere / Aleph Alpha planned combination](https://cohere.com/blog/cohere-alephalpha-join-forces) - **April 24, 2026 announcement** of a planned sovereign-AI combination; Schwarz Group committed €500M (about $600M) in structured financing for an upcoming round, rather than an already completed merger and funding close.
- [ScienceOne 100 / 磐石100](https://english.cas.cn/newsroom/cas-in-media/202604/t20260429_1158251.shtml) - **April 28-29, 2026**. Chinese Academy of Sciences launches specialized scientific AI system. 2,000+ research tools, 50+ CAS institutes. Flagship-level scientific reasoning and agent capabilities.
- [Google / Anthropic investment report](https://aibusiness.com/generative-ai/google-could-invest-another-40-billion-anthropic) - **Reported April 2026**: an initial $10B investment and up to $30B contingent on performance milestones; the maximum proposed package is not the amount already invested.
- [OpenAI Deployment Company (DeployCo)](https://openai.com/index/openai-launches-the-deployment-company/) - **May 11, 2026 announcement** of an OpenAI-majority-owned deployment business with over $4B of initial investment commitments; the announced Tomoro acquisition was subject to closing conditions and regulatory approvals.
- [Anthropic ↔ SpaceX Colossus 1](https://www.siliconrepublic.com/business/anthropic-joins-forces-with-spacex-for-colossus-capacity) - **May 6, 2026**. Anthropic takes all available capacity on the 300+ MW / 220K-GPU Colossus 1 Memphis cluster. SpaceX repositions itself as an AI infrastructure provider after its xAI acquisition; Anthropic doubles Claude Code rate limits for paid plans.
- [DeepSeek external-funding report](https://www.techtimes.com/articles/316717/20260516/chinas-state-ai-fund-backs-deepseek-4-billion-round-efficiency-challenge-nvidia-dependent.htm) - ⚠️ **May 2026 financing report** describing talks about a first external round; retained as a report, with deal completion, participants and valuation not independently confirmed here.
- [Pope Leo XIV → Vatican AI Commission](https://www.americamagazine.org/vatican-dispatch/2026/05/16/pope-leo-establishes-new-vatican-commission-on-artificial-intelligence/) - **May 16, 2026**. Pope Leo XIV publishes the rescriptum establishing an inter-dicasterial Vatican commission on artificial intelligence (Dicastery for Integral Human Development coordinating, with Doctrine of the Faith, Culture & Education, Communication, Pontifical Academies for Life / Sciences / Social Sciences). One-year renewable mandate. First AI-focused encyclical expected to follow.
- [Google I/O 2026 — Gemini / Omni / Spark](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/) - **May 19, 2026 keynote** introduced Gemini model and agent-product updates, including Omni and Spark; release-stage descriptions belong to the announcement date, not a current availability guarantee.
- [Alibaba Cloud Summit Hangzhou — Qwen 3.7-Max + Zhenwu M890](https://www.scmp.com/tech/big-tech/article/3354212/alibaba-unveils-new-qwen-model-custom-chips-bid-become-chinas-ai-factory) - **May 20, 2026**. Alibaba unveils Qwen 3.7-Max (agentic-coding flagship for long-horizon missions), the T-Head Zhenwu M890 AI accelerator, and a full-stack AI infrastructure upgrade — China's most aggressive bid yet to position itself as the country's "AI factory."
- [OpenAI Guaranteed Capacity (Compute Annual Pass)](https://openai.com/business/guaranteed-capacity/) - 🆕 **May 19, 2026**. Long-term enterprise compute reservations (1/2/3-year terms) sold as a structured product — OpenAI's structural answer to Anthropic's Priority Tier and the wider supply crunch for frontier-model inference.
- [JADEPUFFER — agentic threat research](https://www.sysdig.com/blog/jadepuffer-evolves-the-agentic-threat-actor-deploys-ransomware-built-to-destroy-ai-models) - **Sysdig research, July 2026**. Researchers describe agentic exploitation of Langflow and database extortion, followed by a July 20 report of model-targeting ransomware; autonomous operation is the researchers’ behavioral assessment.
- [Kimi K3 Open Weights](https://huggingface.co/moonshotai/Kimi-K3) - **July 27, 2026** open-weight release; consult the model card and Kimi K3 license for architecture, deployment requirements and commercial-use terms.
- [Robinhood Agentic Trading + Robinhood ↔ MCP](https://robinhood.com/us/en/newsroom/robinhood-is-now-open-to-agents/) - **May 27, 2026 beta announcement** of agent access via MCP, with trading restricted to an Agentic account and user notification/revocation controls; permissioned execution does not transfer legal custody to an agent.
- [Microsoft Scout + MAI-Code-1-Flash + MAI-Thinking-1 (Build 2026)](https://microsoft.ai/news/microsoft-build-2026-mai-keynote-transcript/) - **Build 2026 announcement** introducing Scout and MAI coding/reasoning models; product previews and model releases should be assessed separately from broad claims of provider independence.
- [Meta Business Agent (WhatsApp + Instagram)](https://techcrunch.com/2026/06/03/metas-ai-agent-for-whatsapp-business-is-now-available-globally/) - **Reported June 3, 2026** expansion of Meta’s business agent across WhatsApp and Instagram customer conversations; announced reach and vendor adoption figures are not independently measured utilization.
- [WWDC 2026 — Apple Intelligence / Siri AI](https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/) - **June 8, 2026 preview** of Apple Intelligence and Siri AI with screen context, cross-app actions and redesigned experiences; the announcement describes upcoming software, not simultaneous general release everywhere.
- [Google Antigravity 2.0 + Microsoft RAMPART + xAI Grok Build](https://antigravity.google/blog/introducing-google-antigravity-2-0) - **May 14–22, 2026**. Three structural agent-stack shifts in one week: Google's standalone multi-agent desktop + SDK at I/O 2026, Microsoft open-sourcing agentic-AI safety testing (RAMPART + Clarity), and xAI entering the CLI-agent race with **Grok Build** on `grok-code-fast-1`. Major / Anthropic-Google-Microsoft / xAI all show up with agent platforms within the same 8-day window.

---

## 📅 2026 AI Timeline

*Key milestones and events in the AI landscape of 2026.*

| Date | Event | Category |
|------|-------|----------|
| **Jan 6, 2026** | [Lenovo + Motorola Qira](https://news.lenovo.com/pressroom/press-releases/lenovo-unveils-lenovo-and-motorola-qira/) unveiled at CES 2026 — cross-device "Personal Ambient Intelligence" rolling to Lenovo Q1, Motorola later | Industry |
| **Jan 2026** | AMD Ryzen AI 400 Series unveiled at CES — mainstream AI PCs with 60 TOPS NPU | Hardware |
| **Feb 10, 2026** | [Snowflake Agent World Model](https://github.com/Snowflake-Labs/agent-world-model) open-sourced — 1,000 synthetic SQL-backed MCP environments + RL-trained agents for agentic RL at scale; later accepted to ICML 2026 | Research |
| **Feb 2026** | Claude Opus 4.6 released — agent team capabilities | Models |
| **Feb 2026** | Claude Sonnet 4.6 released — 1M token context, agentic search | Models |
| **Feb 2026** | Gemini 3.1 Pro released | Models |
| **Feb 2026** | Qwen3.5 Series launched — native multimodal, agentic coding | Models |
| **Feb 2026** | Qwen3-Coder-Next released — 80B MoE coding agent model | Models |
| **Feb 2026** | Cursor updated with 8 parallel agents | Tools |
| **Feb 2026** | GitHub Copilot expanded agent mode and model access | Tools |
| **Feb 26, 2026** | [1X NEO consumer humanoid preorders open](https://www.1x.tech/discover/neo-home-robot) — $20K early access, US home delivery in 2026 | Robotics |
| **Mar 10, 2026** | [Hume TADA](https://github.com/HumeAI/tada) — Text/acoustic alignment models; MIT code and Llama 3.2 Community License weights. | Models |
| **Mar 2026** | Gemini 3.1 Flash Lite released to developers | Models |
| **Mar 2026** | Mistral Forge launched — custom LLM training platform | Platforms |
| **Mar 2026** | Microsoft Agent Framework (AutoGen + Semantic Kernel) targets GA | Frameworks |
| **Mar 2026** | DeepSeek announces new model trained on latest Nvidia chips | Models |
| **Mar 2026** | MCP 2026 roadmap published — focus on production scaling and governance | Protocols |
| **Mar 2026** | Sora shutdown announced (app closes April 26) | Events |
| **Apr 2, 2026** | Qwen3.6-Plus proprietary flagship launched by Alibaba | Models |
| **Apr 3, 2026** | Microsoft AI Agent Governance Toolkit released (open-source) | Tools |
| **Apr 6, 2026** | Microsoft Agent Framework officially announced (AutoGen + Semantic Kernel unified) | Frameworks |
| **Apr 7, 2026** | GLM-5.1 open-sourced by Zhipu AI — 744B MoE, trained on Huawei Ascend | Models |
| **Apr 8-9, 2026** | Meta Muse Spark released — first model from Meta Superintelligence Labs | Models |
| **Apr 14, 2026** | Gemini Robotics ER-1.6 upgraded robotics AI with enhanced spatial reasoning | Robotics |
| **Apr 15, 2026** | Qwen3.6-35B-A3B open-sourced (Apache 2.0) by Alibaba | Models |
| **Apr 16, 2026** | Claude Opus 4.7 released — SWE-bench Verified 87.6%, `/think xhigh` reasoning | Models |
| **Apr 17–20, 2026** | [Apple CEO succession announced](https://www.sec.gov/Archives/edgar/data/0000320193/000114036126015711/ef20071035_8k.htm) — Tim Cook transitions to Executive Chair on **Sept 1, 2026** after 15 years; SVP Hardware Engineering **John Ternus** becomes CEO. First top-3-by-cap-table frontier-platform CEO change of the AI era | Industry |
| **Apr 18, 2026** | Qwen3.6-Max-Preview launched — top Chinese model on coding benchmarks | Models |
| **Apr 2026** | Claude Mythos Preview — gated cybersecurity research model (BenchLM 99, SWE-bench 93.9%) | Models |
| **Apr 2026** | Sora app officially shuts down | Events |
| **Apr 20-21, 2026** | Kimi K2.6 released by Moonshot AI — 1T MoE, 1,000-agent swarm | Models |
| **Apr 2026** | Gartner predicts 40% of enterprise apps will embed AI agents by end of 2026 | Industry |
| **Apr 2026** | Google commits up to $40B investment in Anthropic (initial $10B) | Industry |
| **Apr 22, 2026** | Qwen3.6-27B open-sourced by Alibaba — dense 27B multimodal | Models |
| **Apr 23, 2026** | Tencent open-sources Hunyuan Hy3 Preview — 295B/21B MoE, 256K context | Models |
| **Apr 23, 2026** | Claude Managed Agents Memory public beta — persistent cross-session agent memory | Tools |
| **Apr 23, 2026** | GPT-5.5 released by OpenAI — major agentic coding and reasoning upgrade | Models |
| **Apr 24, 2026** | DeepSeek V4 Pro & Flash released — 1.6T MoE, 1M context, MIT license | Models |
| **Apr 24, 2026** | Cohere merges with Germany's Aleph Alpha at ~$20B valuation + $600M funding | Industry |
| **Apr 27, 2026** | Alibaba Tianma AI image-to-video model enters beta | Models |
| **Apr 27, 2026** | LangGraph v0.3.19 released; LangGraph Swarm prebuilt agents | Frameworks |
| **Apr 28, 2026** | NVIDIA Nemotron 3 Nano Omni released — 30B multimodal (text/image/audio/video) | Models |
| **Apr 28-29, 2026** | CAS ScienceOne 100 / 磐石100 launched — scientific AI for 50+ research institutes | Models |
| **Apr 28, 2026** | [Anthropic Creative Tool Connectors](https://www.anthropic.com/news/claude-for-creative-work) — 9 MCP-based Claude connectors for Adobe / Blender / Autodesk Fusion / Ableton / Splice / Canva Affinity / SketchUp / Resolume | Tools |
| **Apr 30, 2026** | OpenAI begins rollout of GPT-5.5-Cyber via the Trusted Access for Cyber (TAC) program | Models |
| **Apr 30, 2026** | OpenAI publishes ["A practical guide to building agents"](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) | Resources |
| **May 1, 2026** | Anthropic launches Claude Security in public beta — Opus 4.7-powered codebase vulnerability scanner with auto-patches | Tools |
| **2026-05-01** | [Microsoft Agent 365](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/) — General availability begins for the agent observability, governance and security control plane; some integrations remain previews. | History |
| **May 1, 2026** | [Google Workspace MCP Server](https://workspaceupdates.googleblog.com/2026/05/agent-tools-and-security-updates-for-workspace-developers.html) rolls out — Workspace-native MCP for Gmail / Drive / Calendar / Docs / Sheets with admin-scoped OAuth | Protocols |
| **May 4, 2026** | Google retires [Project Mariner](https://deepmind.google/models/project-mariner/); browser-agent tech folded into Gemini Agent | Tools |
| **May 4, 2026** | Anthropic + Goldman Sachs + Blackstone announce **$1.5B Claude deployment JV** to embed Anthropic engineers in mid-market Wall Street firms | Industry |
| **May 5, 2026** | OpenAI rolls out **GPT-5.5 Instant** as the new default ChatGPT model — efficiency-first upgrade, hallucination rate down ~50% | Models |
| **May 5, 2026** | Anthropic launches **Claude Finance Agents** — 10 specialised agents for pitchbooks, KYC, month-end close, available as Claude Cowork plugins / Claude Code skills / Managed-Agents cookbooks | Tools |
| **May 5, 2026** | OpenAI ↔ PwC partnership announced for financial-services agents (forecasting, payments) | Industry |
| **May 6, 2026** | [AWS MCP Server GA](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-mcp-server/) — AWS-managed MCP endpoint exposes every AWS API with sandboxed Python and agent skills; first hyperscaler-first-party MCP server | Protocols |
| **May 7, 2026** | Google preparing **Agent Mode for Flow** (Veo-based AI filmmaking) — automated video production pipeline | Tools |
| **May 8, 2026** | OpenAI launches **GPT-Realtime-2 / Realtime-Translate / Realtime-Whisper** — voice agents, live translation, real-time transcription | Models |
| **May 9, 2026** | OpenAI rolls out **Workspace Agents** in ChatGPT Enterprise — repeatable workflow automation across connected apps | Tools |
| **May 11–13, 2026** | [Cursor 3.4 + SDK](https://cursor.com/changelog) — Microsoft Teams integration, parallel-agent plan execution, multi-repo / Dockerfile dev environments, async sub-agents (`/multitask`), Vulnerability Scanner, granular model controls; Cursor SDK ships v2.5 security patch | Tools |
| **May 11, 2026** | [OpenAI Deployment Company](https://openai.com/index/openai-launches-the-deployment-company/) launched — $4B+ enterprise services unit with TPG / Bain Capital / Brookfield + Bain & Company / Capgemini / McKinsey; Tomoro consulting acquisition folded in | Industry |
| **May 11-13, 2026** | [SAP Sapphire 2026 Orlando](https://news.sap.com/2026/05/sap-sapphire-sap-unveils-autonomous-enterprise/) — SAP Business AI Platform, **Joule Studio 2.0**, Autonomous Suite with 50+ Joule Assistants and 200+ agents; Joule Studio 2.0 GA from June 2026 | Industry |
| **2026-05-12** | [Gemini in Chrome for Android](https://blog.google/products-and-platforms/products/chrome/bringing-chrome-ai-to-android/) — Google announces Gemini and auto browse for Chrome on Android, with a staged US rollout starting in late June. | History |
| **2026-05-12** | [Vapi Series B](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/vapi-raises-50m-series-b-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-ai.html) — Vapi announces $50M in Series B funding and reports one billion platform calls. | History |
| **May 12, 2026** | [Claude for Legal](https://github.com/anthropics/claude-for-legal) — 20+ MCP connectors (iManage, NetDocuments, DocuSign, LexisNexis, Westlaw, Harvey, Everlaw, Relativity…) + 12 practice-area plugins on Claude Cowork | Tools |
| **May 12-15, 2026** | [Visual Studio 2026 Insiders](https://devblogs.microsoft.com/visualstudio/agent-skills-in-visual-studio/) — Copilot Chat "Agent Mode" with guided Agent Skills authoring inside the IDE | Tools |
| **2026-05-13** | [Claude Code v2.1.141](https://github.com/anthropics/claude-code/releases/tag/v2.1.141) — Release notes document hook, plugin, session-management and reliability updates. | History |
| **May 13, 2026** | [Claude for Small Business](https://www.anthropic.com/news/claude-for-small-business) — 15 pre-built agentic workflows + connectors for QuickBooks / PayPal / HubSpot / Canva / DocuSign / Google Workspace / Microsoft 365; 10-city US workshop tour | Tools |
| **May 13, 2026** | [Cursor 3.4 cloud agent environments](https://cursor.com/changelog) — multi-repo, Dockerfile-based config with build secrets, 70% faster cached layers, env version history, audit logs, scoped egress / secrets | Tools |
| **May 13-16, 2026** | [Figure Helix 02 live-stream](https://www.businessinsider.com/figure-ai-turned-a-humanoid-sorting-packages-must-see-tv-2026-5) — F.03 + Helix 02 stress-test on a package-sort line, ~22K in 8h, ~30K in 24h, ~88K over ~72h until mechanical failure | Robotics |
| **May 13, 2026** | [Runway Agent](https://runway.com/news/introducing-runway-agent) launches — conversational agent that takes a written brief and ships a multi-shot finished video end-to-end on Gen-4 / Aleph | Tools |
| **May 13, 2026** | [Microsoft Copilot Studio Computer-Using Agents GA](https://techcommunity.microsoft.com/blog/copilot-studio-blog/computer-using-agents-in-microsoft-copilot-studio-are-now-generally-available/4519427) — UI-driven website + desktop agents available across Microsoft 365 / Power Platform | Tools |
| **2026-05-14** | [Codex mobile preview](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) — Remote access from ChatGPT on iOS/Android to a connected macOS Codex host enters preview. | History |
| **2026-05-14** | [OpenClaw v2026.5.12](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12) — Published release includes agent-runtime, messaging and platform fixes; consult the versioned notes for the full scope. | History |
| **May 14, 2026** | [Anthropic ↔ Gates Foundation $200M partnership](https://www.anthropic.com/news/gates-foundation-partnership) — 4-year grants + Claude credits + Anthropic engineering on global health, life sciences, education, agriculture | Industry |
| **May 14, 2026** | [Anthropic ↔ PwC alliance expansion](https://www.pwc.com/us/en/about-us/newsroom/press-releases/anthropic-pwc-expand-alliance-agentic-enterprise.html) — global Claude Code + Cowork rollout, 30,000 PwC professionals certified, joint Agentic Enterprise Center of Excellence | Industry |
| **May 14, 2026** | [Genkit Middleware](https://developers.googleblog.com/announcing-genkit-middleware-intercept-extend-and-harden-your-agentic-apps/) — Google releases composable middleware for the open-source Genkit agent framework (TS / Go / Dart) | Frameworks |
| **May 14, 2026** | [Zyphra ZAYA1-8B-Diffusion-Preview](https://www.zyphra.com/post/zaya1-8b-diffusion-preview) — first MoE diffusion LM converted from an autoregressive LLM; first diffusion LM trained on AMD GPUs; up to 7.7× inference speedup | Models |
| **May 14, 2026** | [Grok Build (early beta)](https://x.ai/news/grok-build-cli) — xAI's agentic CLI coding agent powered by **grok-code-fast-1**; parallel sub-agents in isolated envs, SuperGrok Heavy gating | Tools |
| **May 14, 2026** | [iManage MCP Server](https://imanage.com/resources/resource-center/news/mcp-server-available-broader-ai-ecosystem/) launched — first major legal/professional-services SaaS to ship a public MCP endpoint | Tools |
| **May 16, 2026** | [Pope Leo XIV establishes Vatican AI Commission](https://www.americamagazine.org/vatican-dispatch/2026/05/16/pope-leo-establishes-new-vatican-commission-on-artificial-intelligence/) — inter-dicasterial body to coordinate the Church's response to AI; first AI-focused encyclical expected next | Industry |
| **May 16, 2026** | [OpenAI ↔ Malta partnership](https://openai.com/index/malta-chatgpt-plus-partnership/) — every Maltese resident 14+ gets free 1-year ChatGPT Plus after a 2-hour AI literacy course ("OpenAI for Countries") | Industry |
| **May 16, 2026** | [DeepSeek state-backed $4B raise](https://www.techtimes.com/articles/316717/20260516/chinas-state-ai-fund-backs-deepseek-4-billion-round-efficiency-challenge-nvidia-dependent.htm) at ~$50B valuation — National AI Industry Investment Fund + Big Fund III + Tencent close in on first external round | Industry |
| **May 18, 2026** | [OpenAI ↔ Dell Codex partnership](https://openai.com/news/company-announcements/) — Codex extended to hybrid/on-prem enterprise environments via Dell Technologies; first major non-cloud Codex distribution | Industry |
| **May 18, 2026** | [Alibaba Qwen 3.7-Max-Preview / Plus-Preview](https://www.scmp.com/tech/tech-trends/article/3354087/alibaba-teases-new-qwen-previews-highest-ranking-chinese-ai-models-arena) — highest-ranked Chinese models on LM Arena in text + vision | Models |
| **May 18, 2026** | [Boston Dynamics Atlas 100-lb manipulation](https://www.techtimes.com/articles/316854/20260519/boston-dynamics-reveals-how-atlas-learned-lift-100-pound-loads-hyundai-plans-30000-per-year.htm) + Hyundai commits to **25K+ Atlas units** across Hyundai/Kia plants starting 2028 (GA) | Robotics |
| **May 18, 2026** | [Figure F.03 vs human 8h sort challenge](https://incrypted.com/en/figure-ai-held-a-human-vs-robot-marathon/) — human wins narrowly 12,924 vs 12,732 packages (2.79 vs 2.83 s/item) | Robotics |
| **May 18, 2026** | [Anthropic briefs FSB on Claude Mythos](https://www.theguardian.com/technology/2026/may/18/anthropic-ai-claude-mythos-cyber-financial-stability-board-fsb) — first frontier-lab briefing to a G20 financial-stability regulator on offensive-cyber model capabilities | Industry |
| **May 18, 2026** | [ChatGPT safety systems update](https://www.edtechinnovationhub.com/news/openai-updates-chatgpt-safety-systems-to-track-risk-across-sensitive-conversations) — OpenAI adds cross-session risk tracking for suicide / self-harm / harm-to-others escalation cues | Industry |
| **2026-05-19** | [Claude Managed Agents update](https://claude.com/blog/new-in-claude-managed-agents) — Anthropic documents dreaming as a research preview, alongside outcomes, multiagent orchestration and webhooks. | History |
| **May 19, 2026** | **Google I/O 2026** — [Gemini 3.5 Flash](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/) launches as the new default Gemini app + Search AI Mode model (~4× faster than peers); Gemini 3.5 Pro slated for June | Models |
| **May 19, 2026** | **Google I/O 2026** — [Gemini Omni / Omni Flash](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/), Google DeepMind's new multimodal world-model line aimed at AGI (any input, any output, video first) | Models |
| **May 19, 2026** | **Google I/O 2026** — [Gemini Spark](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/), a 24/7 personal AI agent integrating ~30+ third-party tools via MCP, gated behind the new **Google AI Ultra ($100/mo)** tier | Tools |
| **May 19, 2026** | [OpenAI Guaranteed Capacity / Compute Annual Pass](https://openai.com/news/company-announcements/) launches — 1/2/3-year long-term compute reservations for enterprise AI products & agents | Industry |
| **May 19, 2026** | [OpenAI ↔ Google SynthID + C2PA content provenance](https://openai.com/index/advancing-content-provenance/) — first major frontier-lab interop on durable cross-platform AI image watermarking and a public verifier preview | Industry |
| **May 19, 2026** | [Anthropic: Widening the conversation on frontier AI](https://www.anthropic.com/news/widening-conversation-ai) — framework for engaging wisdom traditions in frontier-AI safety dialogue | Industry |
| **May 19, 2026** | [DeepSeek hires former Jane Street engineer to build AI harness team](https://www.scmp.com/tech/big-tech/article/3354113/deepseek-recruits-former-jane-street-engineer-catch-ai-agents-revenue-race) — DeepSeek pivoting from model R&D toward autonomous, revenue-generating agents | Industry |
| **May 19, 2026** | [Google Antigravity 2.0](https://antigravity.google/blog/introducing-google-antigravity-2-0) at I/O 2026 — standalone desktop app for multi-agent orchestration, scheduled / async runs, dynamic sub-agents, Antigravity CLI + SDK, enterprise edition inside Gemini Enterprise Agent Platform | Tools |
| **May 2026** | Macquarie Bank reports 130,000 hours saved in 7 months using Gemini Enterprise | Industry |
| **May 2026** | Google starts rolling Gemini into eligible vehicles, replacing Google Assistant (English-first, U.S. rollout) | Industry |
| **May 20, 2026** | **Alibaba Cloud Summit Hangzhou** — [Qwen 3.7-Max](https://www.scmp.com/tech/big-tech/article/3354212/alibaba-unveils-new-qwen-model-custom-chips-bid-become-chinas-ai-factory) GA, agentic-coding flagship for long-horizon multi-step missions; new T-Head **Zhenwu M890** AI chip + full-stack AI infrastructure upgrade | Models |
| **May 20, 2026** | [Bristol Myers Squibb ↔ Anthropic Claude Enterprise](https://news.bms.com/news/corporate-financial/2026/Bristol-Myers-Squibb-Announces-Strategic-Agreement-with-Anthropic-to-Position-Claude-Enterprise-as-the-Shared-Intelligence-Platform-Across-Its-Global-Operations/default.aspx) — 30K+ employees standardise on Claude Enterprise for drug discovery / development / delivery; first top-5 pharma full Claude deployment | Industry |
| **May 20, 2026** | [LlamaIndex ↔ Google Agents API](https://www.kucoin.com/news/flash/google-launches-agents-api-llama-index-integrates-llamaparse-for-unstructured-document-processing) — LlamaParse / LiteParse exposed inside the new Google Agents API sandbox; Sandboxed-Lit runtime + ParseBench (first OCR benchmark for agents) ship in the same wave | Frameworks |
| **May 20, 2026** | [Microsoft RAMPART + Clarity](https://www.microsoft.com/en-us/security/blog/2026/05/20/introducing-rampart-and-clarity-open-source-tools-to-bring-safety-into-agent-development-workflow/) open-sourced — pytest-native white-box safety/security testing framework for agentic AI + structured design-review companion; CI/CD-friendly successor to PyRIT | Tools |
| **May 21, 2026** | [MCP 2026-07 Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) published — stateless protocol core, extensions framework, MCP Apps server-rendered UI, hardened OAuth/OIDC alignment; [final spec shipped on schedule July 28, 2026](https://blog.modelcontextprotocol.io/posts/2026-07-28/) | Protocols |
| **May 22, 2026** | [Kore.ai Artemis Agent Platform](https://venturebeat.com/technology/kore-ai-launches-artemis-ai-agent-platform-expands-challenge-to-microsoft-and-salesforce) launched on Azure — AI-native enterprise platform with **Agent Blueprint Language (ABL)** for declarative multi-agent workflows | Industry |
| **May 22, 2026** | [FPT Flezi Foundry™](https://fptsoftware.com/newsroom/news-and-press-releases/press-release/fpt-launches-flezi-foundry-advancing-ai-augmented-delivery-for-global-enterprises) launched — AI-augmented delivery platform with Agentic Development Lifecycle (ADLC) and Agentic Managed Services (AMS) modes under "Service-as-a-Software" governance | Industry |
| **May 22, 2026** | [JetBrains Rider AI test-writing skill](https://blog.jetbrains.com/dotnet/2026/05/22/claude-codex-ai-agent-skill-for-writing-tests/) — surfaces .NET coverage data to Claude Code / Codex so agents focus tests on untested branches | Tools |
| **May 26, 2026** | [Coinbase Base MCP](https://fortune.com/2026/05/26/coinbase-pushes-further-into-ai-payments-with-new-mcp-for-base-network/) launched — first major exchange-grade MCP endpoint for on-chain trades and lending | Protocols |
| **May 27, 2026** | [Robinhood Agentic Trading](https://robinhood.com/us/en/newsroom/robinhood-is-now-open-to-agents/) beta — first major US broker to expose stock trading via MCP to AI agents | Industry |
| **May 28, 2026** | [Claude Opus 4.8](https://www.anthropic.com/claude/opus) released by Anthropic — codebase-scale migrations, dynamic-workflows research preview (hundreds of parallel sub-agents), effort-control panel, 3× cheaper Fast mode; teases upcoming **Mythos-class** models | Models |
| **May 28, 2026** | [Koog 1.0](https://blog.jetbrains.com/ai/2026/05/koog-1-0-is-out-stable-core-better-interop-and-multiplatform-observability/) released at KotlinConf 2026 — JetBrains' open-source Kotlin/Java AI-agent framework hits stable, Kotlin Multiplatform deployment, OpenTelemetry across targets | Frameworks |
| **May 28, 2026** | [Gemini Omni Flash conversational video editing](https://www.techtimes.com/articles/317309/20260528/google-gemini-omni-flash-brings-voice-controlled-ai-video-editing-future-conversational-ai.htm) starts rolling out via Gemini app / Google Flow / YouTube Shorts — voice-and-text-driven cinematic edits replace NLEs | Tools |
| **May 29, 2026** | [OpenAI Codex Computer Use on Windows](https://windowsforum.com/threads/openai-codex-computer-use-brings-agent-control-to-windows-desktop.421107/) — sandboxed Codex agent control of the Windows desktop reaches general availability | Tools |
| **Jun 2, 2026** | [Microsoft Build 2026](https://microsoft.ai/news/microsoft-build-2026-mai-keynote-transcript/) — MAI-Thinking-1 (first in-house reasoning), MAI-Code-1-Flash (5B coding model in GitHub Copilot), [Microsoft Scout](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) (always-on OpenClaw-based personal agent) all launched together | Models / Tools |
| **Jun 3, 2026** | [Meta Business Agent](https://techcrunch.com/2026/06/03/metas-ai-agent-for-whatsapp-business-is-now-available-globally/) goes global on WhatsApp + Instagram — first Meta-monetised AI agent product, ties into WhatsApp Business Premium tiers | Industry |
| **Jun 3, 2026** | [Perplexity Personal Computer for Windows](https://www.perplexity.ai/hub/products/computer-for-windows) announced — 19+ AI models orchestrated automatically across local files + native apps + web | Tools |
| **Jun 6, 2026** | [Kimi Code CLI](https://github.com/MoonshotAI/kimi-code) released by Moonshot AI — TypeScript / MIT terminal agent with built-in coder / explore / plan sub-agents in isolated contexts | Tools |
| **2026-06-07** | [PerspectiveGap](https://arxiv.org/abs/2606.08878) — First arXiv submission of the multi-agent orchestration prompting benchmark; v2 followed on July 12. | Benchmarks |
| **Jun 8, 2026** | **[WWDC 2026](https://www.techradar.com/news/live/apple-wwdc-2026-live)** — Apple unveils Gemini-powered Apple Intelligence + a redesigned, more conversational Siri (third-party ChatGPT handoff retired). iOS 27, iPadOS 27, macOS 27 "Golden Gate", watchOS 27, tvOS 27, visionOS 27 with deeper on-device AI; ~30% faster app launches, 70% faster Photos previews, 5× faster iPadOS file transfers; ships fall 2026 | Industry |
| **Jun 8, 2026** | **WWDC 2026 Apple Intelligence + Siri AI redesign** — Foundation Models framework adds image input, custom skills, unified Swift API for on-device + server models; SiriKit deprecated in favor of expanded App Intents; Siri AI runs on Google Gemini, not ChatGPT | Models / Tools |
| **Jun 9, 2026** | [Claude Fable 5 + Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) released — Anthropic's first generally-available **Mythos-class** models (Fable 5 public; Mythos 5 limited via Project Glasswing) | Models |
| **Jun 12, 2026** | [US export-control directive forces Anthropic to suspend Fable 5 + Mythos 5](https://www.anthropic.com/news/fable-mythos-access) for all customers — first government-forced takedown of a publicly deployed frontier model | Industry |
| **Jun 12, 2026** | [Kimi K2.7 Code](https://kimi.ai/) released by Moonshot AI — 1T MoE coding-first model (256K, Modified MIT) with ~30% lower reasoning-token use | Models |
| **Jun 13, 2026** | [GLM-5.2](https://z.ai/blog/glm-5.2) released by Zhipu AI — coding-first 744B MoE with a 1M-token context window, live across all GLM Coding Plan tiers | Models |
| **2026-06-14** | [OpenAI Partner Network](https://openai.com/index/introducing-openai-partner-network/) — OpenAI announces a $150M partner program with Select, Advanced and Elite tiers and a target of training 300,000 consultants by year-end. | History |
| **Jun 2026** | [OutSystems Agentic Systems Platform](https://www.outsystems.com/) launched — low-code platform pivots to "AI-native" multi-agent orchestration | Industry |
| **2026-06-22** | [Daybreak](https://openai.com/index/daybreak-securing-the-world/) — OpenAI describes defensive vulnerability validation, tested fixes and partner workflows in its Daybreak update. | History |
| **2026-06-25–26** | [GPT-5.6 preview](https://openai.com/blog/gpt-5-6) — The Sol, Terra and Luna family enters a limited preview, preceding its July general rollout. | History |
| **2026-06-26** | [GPT-4.5 ChatGPT retirement](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) — GPT-4.5 retires from ChatGPT; this is distinct from the gpt-4.5-preview API shutdown on July 14, 2025 ([API record](https://developers.openai.com/api/docs/deprecations)). | History |
| **2026-06-29** | [Accenture + ServiceNow](https://newsroom.accenture.com/news/2026/servicenow-and-accenture-launch-ai-powered-services-to-accelerate-the-shift-from-legacy-risk-platforms-to-agentic-ai) — The companies announce managed security services and AI-assisted migration from legacy risk platforms. | History |
| **Jun 30, 2026** | [Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) released — most agentic Sonnet yet, approaching Opus 4.8 performance on agentic tasks at lower cost; new default for Claude.ai Free/Pro | Models |
| **Jul 1, 2026** | [Claude Fable 5 global reinstatement](https://www.anthropic.com/news/redeploying-fable-5) — US Commerce Department lifts export controls on June 30; Anthropic restores worldwide access to Fable 5 across Claude.ai, API, Claude Code, and Claude Cowork with a new safety classifier. Mythos 5 remains restricted to vetted US entities | Models |
| **Jul 1, 2026** | [Devin Security Swarm](https://www.prnewswire.com/news-releases/cognition-launches-devin-security-swarm-to-tackle-the-vulnerability-backlog-302814800.html) launched by Cognition — parallel-agent vulnerability discovery, runtime exploit validation, and remediation PRs | Tools |
| **Jul 1, 2026** | [Grok Voice Agent Builder](https://x.ai/news/grok-voice-agent-builder) — xAI's no-code platform for production voice agents on Grok Voice; telephony, MCP connectors, 80+ voices, $0.05/min beta | Tools |
| **Jul 2, 2026** | [Sysdig discloses JADEPUFFER](https://hackread.com/sysdig-jadepuffer-first-agentic-ransomware-operation/) — first documented ransomware operation executed end-to-end by an autonomous AI agent, from initial RCE exploit to unrecoverable encryption and extortion | Industry |
| **Jul 2, 2026** | [Leanstral 1.5](https://mistral.ai/news/leanstral-1-5/) released by Mistral — open-weight Lean 4 formal-verification model (100% miniF2F); [ZCode](https://www.scmp.com/tech/tech-trends/article/3359170/zhipu-ai-releases-harness-glm-52-model-chinese-firm-takes-aim-anthropic) agent harness for GLM-5.2 released by Zhipu the same day | Models |
| **Jul 3, 2026** | AG2 v1.0.0b0 released — community-driven AutoGen fork; Microsoft placed AutoGen in maintenance mode in Q1 2026 | Frameworks |
| **Jul 6, 2026** | [Tencent Hunyuan Hy3](https://www.tencent.com/en-us/articles/2202386.html) officially released as open source (Apache 2.0) — 295B/21B-active MoE following the April preview; gpt-realtime-2.1 / 2.1-mini also ship on the OpenAI API | Models |
| **Jul 7, 2026** | [Meta Muse Image](https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/) launched — agentic image generation model from Meta Superintelligence Labs, integrated into Instagram Stories (US) and WhatsApp (limited countries); also previews Muse Video | Models |
| **Jul 7, 2026** | Arize Phoenix July 7 release: Metric Charts, Trace Search, expanded REST API | Tools |
| **Jul 8, 2026** | [Grok 4.5](https://x.ai/news/grok-4-5) released by xAI — coding and agentic flagship trained jointly with Cursor; 500K context window, $2/$6 per million in/out tokens; default model in Cursor | Models |
| **Jul 8, 2026** | [GPT-Live-1 / GPT-Live-1 mini](https://openai.com/index/introducing-gpt-live/) — full-duplex voice model replacing Advanced Voice Mode; GPT-Live-1 (paid) and GPT-Live-1 mini (free); real-time live translation | Models |
| **Jul 8, 2026** | [Robostral Navigate](https://mistral.ai/news/robostral-navigate/) — Mistral's first robotics model (8B embodied navigation from a single RGB camera); OpenAI audit of SWE-bench Pro reveals ~30% of tasks broken the same day | Models |
| **Jul 9, 2026** | [GPT-5.6 Sol / Terra / Luna](https://openai.com/index/gpt-5-6/) GA — full GPT-5.6 family generally available on ChatGPT, Codex, and API after the trusted-partner preview; [ChatGPT Work](https://openai.com/index/chatgpt-for-your-most-ambitious-work/) launches alongside, and Codex integrates into the ChatGPT desktop app | Models |
| **Jul 9, 2026** | [Muse Spark 1.1](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) released by Meta — multimodal agentic model via new public Meta Model API preview; proprietary focus alongside open-source Llama line | Models |
| **Jul 10, 2026** | [Cursor 3.11](https://cursor.com/changelog) — Side Chats, conversation history search, Cloud Agent Hooks for granular agent observability | Tools |
| **Jul 14, 2026** | [Oracle adds AI-native Agentic Applications Builder](https://www.oracle.com/news/announcement/oracle-introduces-ai-native-builder-experience-2026-07-14/) to AI Agent Studio for Fusion — opens Fusion agentic apps to pro-code developers; no additional cost for Fusion customers | Frameworks |
| **Jul 15, 2026** | [Inkling](https://thinkingmachines.ai/inkling/) launched by Thinking Machines Lab (Mira Murati, former OpenAI CTO) — 975B MoE / 41B active, 45T-token pretraining, 1M context, Apache 2.0 open weights on Hugging Face; natively multimodal (text/image/audio/video); Inkling-Small (12B active) ships alongside | Models |
| **Jul 16, 2026** | [Kimi K3](https://kimi.ai/) launched by Moonshot AI — 2.8T-parameter sparse MoE (896 experts, 16 active), 1M-token context, $3/$15 per million tokens; full open weights promised late July | Models |
| **Jul 17, 2026** | EU Android AI Openness Ruling — European Commission orders Google to provide rival AI assistants deeper Android access (camera, microphone, app-control APIs); must be implemented by August 2027 in Android 18 | Industry |
| **Jul 19, 2026** | [Qwen 3.8-Max](https://qwenlm.github.io/) previewed by Alibaba at the World AI Conference — 2.4T parameters MoE preview; strong coding, math, and multimodal capabilities | Models |
| **Jul 20, 2026** | [Qwen-Image-3.0](https://qwenlm.github.io/) released by Alibaba — third-generation image generation model unveiled at the World AI Conference; photorealism, text rendering, multi-subject consistency improvements | Models |
| **Jul 22, 2026** | Grok 4.5 rolls out to all grok.com / X users; [Microsoft Agent Framework v1.12.1](https://learn.microsoft.com/en-us/agent-framework/) released; [OpenAI Presence](https://openai.com/) enterprise agent platform launched | Tools |
| **Jul 22, 2026** | [AMD ↔ Anthropic](https://ir.amd.com/news-events/press-releases/detail/1292/amd-and-anthropic-announce-strategic-partnership-to-deploy-up-to-2-gigawatts-of-amd-instinct-mi450-series-gpus) — Anthropic to deploy up to 2 GW of AMD Instinct MI450 (MI455X) in AMD Helios racks starting H1 2027; AMD commits a strategic equity investment of up to $5B in Anthropic | Industry |
| **Jul 23, 2026** | [GPT Voice](https://openai.com/) launched by OpenAI — voice interface for ChatGPT Work powered by GPT-Live technology | Tools |
| **Jul 23, 2026** | [FLUX 3](https://bfl.ai/blog/flux-3) enters early access — Black Forest Labs' first unified multimodal model (image + video + audio + action prediction in one architecture), 20s video with native synchronized audio | Models |
| **Jul 24, 2026** | [Claude Opus 5](https://www.anthropic.com/news/claude-opus-5) launched by Anthropic — fifth-generation flagship near Fable 5 performance at $5/$25 per million in/out tokens; 1M context, 128K output; default model on Claude Max; API: `claude-opus-5` | Models |
| **Jul 27, 2026** | [Kimi K3 open weights released](https://huggingface.co/moonshotai/Kimi-K3) by Moonshot AI — 2.8T total / 104B activated becomes the largest openly available language model at time of release; bespoke Kimi K3 License | Models |
| **Jul 27, 2026** | [Anthropic's position on open-weights models](https://www.anthropic.com/news/position-open-weights-models) — Dario Amodei rejects proposed US bans on Chinese open-weights models, backing chip export controls, anti-distillation deterrence, and mandatory pre-release safety testing for all capable models instead | Industry |
| **Jul 28, 2026** | [MCP 2026-07-28 specification shipped](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — stateless protocol core (no handshake, no sessions), Multi Round-Trip Requests, header-based routing, cacheable list results, RFC 9207 + CIMD authorization hardening, formal extensions framework, 12-month deprecation policy; TypeScript/Python/Go/C# SDKs updated day-one | Protocols |
| **Jul 29, 2026** | [Langfuse v4](https://github.com/langfuse/langfuse/releases/tag/v4.0.0) and [Milvus 3.0](https://github.com/milvus-io/milvus/releases/tag/v3.0.0) both ship — full-text search + monitors and a claimed 165× faster API for Langfuse; lake-native External Collections over Parquet/Lance/Iceberg for Milvus. [RufRoot / CVE-2026-59726](https://hackread.com/rufroot-vulnerability-attackers-hijack-ruflo-login/) also disclosed publicly: a CVSS 10.0 unauthenticated MCP bridge in Ruflo reaching 233 tools and poisonable agent memory | Tools / Industry |
| **Jul 30, 2026** | [Inkling-Small](https://thinkingmachines.ai/inkling/) weights released by Thinking Machines Lab — 276B total / 12B active, Apache-2.0, multimodal; HLE text 31.6% (outperforms 975B Inkling on this metric). | Models |
| **Jul 31, 2026** | [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) checkpoint released — same API/pricing, enhanced agentic capability, outperforms V4-Pro (Preview) on agent benchmarks; open weights on HF. GitHub Copilot deprecates Gemini 2.5 Pro and Gemini 3 Flash; adds new Visual Studio .NET/Azure agent and enterprise model policy controls | Models / Tools |
| **Aug 3–7, 2026** | [Cloudflare Agents Week](https://blog.cloudflare.com/agents-week-review-august-2026/) — Wallets/cloudflare.pay (Aug 4), WriteGuard private beta (Aug 5), WebMCP + Kitesurf serverless agent browser + MCPv2 + AI Search (Aug 6) | Tools / Protocols |
| **Aug 3, 2026** | [Qwen3.8-Max](https://alibabacloud.com/blog/qwen3-8-max) fully launched by Alibaba — 2.4T MoE / 95B active, 1M context, multimodal input; QwenWork enterprise platform in public beta | Models |
| **Aug 5, 2026** | [Muse Spark 1.2 + Muse Code beta](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) from Meta Superintelligence Labs — terminal coding agent + whole-repo-trained model. [ByteDance SeedRealtime](https://technode.com/2026/08/05/bytedance-launches-seedrealtime-full-duplex-audio-video-model/) full-duplex audio-video model launches. UK AISI [discloses agent containment incident](https://www.helpnetsecurity.com/2026/08/05/ai-agent-deception-in-cyber-tests/) INC-2026-07-28-01 | Models / Industry |
| **Aug 6, 2026** | [Wan 3.0 public beta](https://www.alibabacloud.com/en/blog/wan-3-0-next-gen-video-generation-model-public-beta-launched) — Alibaba's 30-second video model accepting documents/web pages as input. [Bedrock AgentCore Runtime Instances GA](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-bedrock-agentcore-runtime-instances-generally-available/) — 14-day agent sessions on EC2-backed compute | Models / Tools |
| **Aug 7, 2026** | [Grok Imagine Image 2.0](https://x.ai/news/grok-imagine-image-2) — #2 worldwide on Arena for text-to-image and editing at launch. [OpenAI slows Astra development](https://techcrunch.com/2026/08/07/openai-says-it-slowed-astra-model-development-over-security-concerns/) over possible "Critical" cyber capability; White House informed | Models / Industry |
| **Aug 10, 2026** | [Claude Sonnet 5 $2/$10 pricing made permanent](https://www.anthropic.com/news/claude-sonnet-5); [GPT-5.6-Cyber](https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows) ships via Daybreak Red; [Muse Glimmer 30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) open weights (Apache 2.0) | Models / Industry |
| **Aug 11, 2026** | [Manus resumes independent operations](https://www.cnbc.com/2026/08/11/manus-china-meta-acquisition.html) as Meta unwinds its $2B acquisition under Beijing's NDRC order. [Daybreak models land on AWS Bedrock](https://openai.com/index/daybreak-models-are-now-available-on-aws/). [Grok Bot early beta](https://docs.x.ai/docs/release-notes) — always-on AI teammates on persistent cloud computers. [ChatGPT ads test expands internationally](https://openai.com/index/testing-ads-in-chatgpt/) (UK, Mexico, Brazil, Japan, South Korea). [Nemotron 3.5 Lightning](https://ollama.com/library/nemotron-3.5-lightning) released | Industry / Models |
| **Aug 12, 2026** | [Grok 4.6](https://x.ai/news/grok-4-6) released — SpaceXAI flagship for long-running agents, matches GPT-5.6 Sol on Artificial Analysis Intelligence Index (61), $2/$6, new Cursor default. [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) open-weight video-audio world model ships. Qwen3.8-Max open weights appear on Hugging Face (`Qwen/Qwen3.8-2.4T-A95B`) | Models |
| **Aug 13, 2026** | [Gemini 3.7 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) — Google's new workhorse model ($0.75/$3.75 intro), shipped while 3.5 Pro stays unreleased and Gemini 4 trains. [DeepSeek-V4-Pro GA](https://api-docs.deepseek.com/news/news260813) with Responses API + reasoning effort; peak/off-peak pricing from Aug 16. [OpenAI Ultrafast preview](https://openai.com/index/previewing-ultrafast) — GPT-5.6 Sol at up to 14× speed on Cerebras. [Suno Studio 2.0](https://suno.com/release-notes) browser DAW | Models / Tools |
| **Aug 14, 2026** | [GLM-5.3](https://the-decoder.com/zhipu-ai-releases-glm-5-3-claims-its-the-strongest-open-weights-coding-model/) — Zhipu claims strongest open-weights coding model (+50% over GLM-5.2). [Anthropic ships Claude text watermarking](https://www.anthropic.com/news/claude-text-watermark) (SynthID-Text + C2PA) for EU AI Act compliance. [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) Apache-2.0 open weights. [Waymo cleared for 18 California counties](https://electrek.co/2026/08/14/waymo-cpuc-approval-california-expansion-18-counties/); [Pony.ai × Uber plan 2,000+ robotaxis in Europe](https://cnevpost.com/2026/08/14/pony-ai-uber-2000-robotaxis-europe/). Grok 4.6 lands in GitHub Copilot | Models / Robotics / Industry |
| **Aug 16, 2026** | DeepSeek peak/off-peak API pricing takes effect (16:00 UTC) as announced with [V4-Pro GA](https://api-docs.deepseek.com/news/news260813) | Models |
| **Aug 18, 2026** | [ChatGPT for Teens](https://openai.com/index/chatgpt-for-teens) launches; [ChatGPT Ads expands to 31 European markets](https://openai.com/index/chatgpt-ads-expands-across-europe) | Industry |
| **2026-08-19** | [Cursor cloud agents](https://cursor.com/changelog) — Cursor documents cloud agent subscriptions and subagents; [OpenAI Agents SDK v0.22.0](https://github.com/openai/openai-agents-python/releases/tag/v0.22.0) is recorded separately in its release notes. | History |
| **Aug 21, 2026** | [DeepSeek-V4-Flash-Vision-Exp](https://api-docs.deepseek.com/news/news260821) multimodal API + Files API; DeepSeek Harness **dsh-v0.1.1-rc.2**; [goose v1.47.0](https://github.com/aaif-goose/goose/releases/tag/v1.47.0); [OpenHands v1.15.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.15.0); [MAF python-1.15.0](https://github.com/microsoft/agent-framework/releases) | Models / Tools |
| **Aug 22, 2026** | [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) — post-`2026-07-28` priorities (agentic messaging, HTTP-native transport, agent identity); MAF **dotnet-1.19.0** | Protocols / Frameworks |
| **Aug 24, 2026** | [Agno v3.0.0](https://github.com/agno-agi/agno/releases/tag/v3.0.0) breaking release (tool/media offload, CodeMode); [Embabel Agent v1.5.1](https://github.com/embabel/embabel-agent/releases/tag/v1.5.1); [Pydantic AI v2.34.0](https://github.com/pydantic/pydantic-ai/releases/tag/v2.34.0); Codex CLI **v0.149.1** | Frameworks / Tools |
| **Aug 25, 2026** | [OpenAI Jalapeño](https://openai.com/index/jalapeno-first-results) first custom-inference-chip results; Claude Code **v2.1.245** on npm | Models / Tools |
| **2026-08-26** | [Google ADK v2.8.0](https://github.com/google/adk-python/releases/tag/v2.8.0) — Published Python SDK release; older maintenance branches have separate versions. | Release / update |
| **2026-08-27** | [Terminal-Bench-Science 0.1](https://www.tbench.ai/news/terminal-bench-science-0-1) — Scientific terminal-workflow benchmark with 70 tasks. | Release / update |
| **2026-08-28** | [Terminal-Bench 4.0](https://www.tbench.ai/news/terminal-bench-4-0) — New tasks and resource budgets; scores are not interchangeable with older versions. | Release / update |
| **2026-09-01** | [Claude Fable 5.1 / Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1) — Fable generally available; Mythos limited to trusted-access programs. | Release / update |
| **2026-09-01** | [Muse Voice Transcribe](https://research.meta.ai/blog/introducing-muse-voice-transcribe) — Meta introduces streaming speech recognition with diarization and endpointing. | Release / update |
| **2026-09-01** | [Waymo](https://waymo.com/blog/2026/09/ride-in-denver-san-diego-tampa/) — Begins inviting first public riders in Denver, San Diego and Tampa; access expands gradually. | Release / update |
| **2026-09-02** | [Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3) — Meta Model API and Muse Code update; future open weights remain a roadmap commitment. | Release / update |
| **2026-09-02** | [Cursor workers](https://cursor.com/changelog) — Self-hosted worker machines for tool execution; model processing follows separate provider policies. | Release / update |
| **2026-09-03** | [GPT-6 Astra](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) — Limited organizational rollout documented by OpenAI; not generally available. | Release / update |
| **2026-09-03** | [MAI-Transcribe-2](https://microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/) — Speech recognition update with speaker diarization, word timestamps and transcript styles. | Release / update |
| **2026-09-03** | [MCP in LangChain](https://www.langchain.com/blog/mcp-in-langchain-stateless-protocol-elicitation-and-more) — Official integration update for stateless protocol support and elicitation. | Release / update |
| **2026-09-03** | [Figure / Nscale](https://www.figure.ai/news/figure-and-nscale-sign-strategic-partnership) — Compute partnership targets initial deployment in H2 2027; not already delivered capacity. | Release / update |
| **2026-09-04** | [Codex CLI v0.153.4](https://github.com/openai/codex/releases/tag/rust-v0.153.4) — Stable tagged release; subsequent alpha artifacts are separate previews. | Release / update |
| **2026-09-05** | [FastMCP v4.0.3](https://github.com/PrefectHQ/fastmcp/releases/tag/v4.0.3) — Published release for the Prefect MCP application framework. | Release / update |
| **2026-09-07** | [Hermes Agent v2026.9.7](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.7) — Published release; consult the versioned notes for runtime changes. | Release / update |
| **2026-09-08** | [OpenAI Agents SDK v0.22.1](https://github.com/openai/openai-agents-python/releases/tag/v0.22.1) — Published Python SDK release. | Release / update |
| **2026-09-08** | [OpenClaw v2026.9.3](https://github.com/openclaw/openclaw/releases/tag/v2026.9.3) — Release publication date differs from the date embedded in the tag. | Release / update |
| **2026-05** | [LangGraph v1.2](https://docs.langchain.com/oss/python/releases/changelog) — LangGraph records runtime and checkpointing improvements in its release history. | History |
| **2026-05** | [Grok 4.3 on Microsoft Foundry](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-grok-4-3-on-microsoft-foundry-latest-generation-agentic-capabilities/4517096) — Microsoft publishes its Grok 4.3 availability announcement for Foundry. | History |
| **2026 (ongoing)** | A2A Protocol grows to 150+ partner organizations | Protocols |
| **2026 (ongoing)** | 85% of developers regularly use AI coding tools | Industry |
| **2026 (ongoing)** | Enterprise agentic AI adoption accelerates — "Agents as a Service" emerges | Industry |
| **2026-06** | [ByteDance Seed 2.1 Pro / Turbo](https://seed.bytedance.com) — ByteDance lists the Seed 2.1 model family; see the official catalogue for model-specific access. | History |
| **2026-06** | [Fable 5 / Mythos 5 access statement](https://www.anthropic.com/news/fable-mythos-access) — Anthropic records restrictions and subsequent access updates; this historical statement is not the current model availability list. | History |

---


## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License


This list is released under [MIT License](LICENSE).

---

<div align="center">

**⭐ If you find this list useful, please give it a star! ⭐**

*910+ resources across 25 categories — from foundation models to agent protocols, agent economy, and generative AI.*

Made with ❤️ by [Zijian Ni](https://github.com/Zijian-Ni)

*Last updated: September 8, 2026*

</div>
