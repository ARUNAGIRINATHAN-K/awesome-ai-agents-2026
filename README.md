<div align="center">

![](img/ARUNAGIRINATHAN-K.png)

# Awesome AI Agents 2026

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/ARUNAGIRINATHAN-K/awesome-ai-agents?style=social)](https://github.com/ARUNAGIRINATHAN-K/awesome-ai-agents/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Last Commit](https://img.shields.io/github/last-commit/ARUNAGIRINATHAN-K/awesome-ai-agents)](https://github.com/ARUNAGIRINATHAN-K/awesome-ai-agents/commits/main)
[![Tools Listed](https://img.shields.io/badge/tools_listed-426%2B-blue?style=flat-square)]()
[![License: CC0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg?style=flat-square)](LICENSE)

*The most comprehensive, structured guide to AI agent frameworks, tools, and resources.*  
*Updated weekly. Compared side-by-side. Built for developers who ship.*

**[Explore the Stack](#contents) • [Read the Docs](#contributing) • [Submit a Tool](https://github.com/ARUNAGIRINATHAN-K/awesome-ai-agents/issues/new)**

</div>

## Contents

- [Orchestration Frameworks](#orchestration-frameworks)
- [Coding Agents](#coding-agents)
- [Memory and Context](#memory-and-context)
- [Multi-Agent Systems](#multi-agent-systems)
- [Agent Communication Protocols](#agent-communication-protocols)
- [Browser and Computer Use Agents](#browser-and-computer-use-agents)
- [Agent Tooling and Infrastructure](#agent-tooling-and-infrastructure)
- [Low and No-Code Builders](#low-and-no-code-builders)
- [Voice and Multimodal Agents](#voice-and-multimodal-agents)
- [Safety Guardrails and Observability](#safety-guardrails-and-observability)
- [Agent Interfaces and UIs](#agent-interfaces-and-uis)
- [Agent Deployment and Hosting](#agent-deployment-and-hosting)
- [Agent Evaluation and Benchmarks](#agent-evaluation-and-benchmarks)
- [Learning Resources](#learning-resources)
- [Agent Communication](#agent-communication)
- [Data Pipeline and Workflow](#data-pipeline-and-workflow)
- [Secure Execution Environments](#secure-execution-environments)
- [Creative AI Agents](#creative-ai-agents)
- [Customer Support and CRM Agents](#customer-support-and-crm-agents)
- [Voice Agent Platforms](#voice-agent-platforms)
- [Deep Research Agents](#deep-research-agents)
- [Prompt-to-App Builders](#prompt-to-app-builders)
- [Multi-Agent Consumer Platforms](#multi-agent-consumer-platforms)
- [Open-Source Models for Agents](#open-source-models-for-agents)
- [Market Stats and Benchmarks 2026](#market-stats-and-benchmarks-2026)
- [Local and Self-Hosted AI](#local-and-self-hosted-ai)
- [AI Governance and Compliance](#ai-governance-and-compliance)
- [Cybersecurity Agents](#cybersecurity-agents)
- [Healthcare and Therapy Agents](#healthcare-and-therapy-agents)
- [Newsletters and Communities](#newsletters-and-communities)
- [Changelog](#changelog)
- [Star History](#star-history)

## Orchestration Frameworks

- [Agency Swarm](https://github.com/VRSEN/agency-swarm) - Orchestrates multi-agent systems built on the OpenAI Assistants API with role-based collaboration (🏷️ `Python` `OpenAI` `SDK`).
- [AgentScope](https://github.com/modelscope/agentscope) - Alibaba multi-agent framework with distributed deployment and fault tolerance for production use (🏷️ `Python` `Alibaba` `SDK`).
- [Agno](https://github.com/agno-agi/agno) - Multi-agent framework with a runtime and control plane for managing agent deployments at scale (`Python` `FastAPI` `Cloud`) (🏷️ `Python` `FastAPI` `Cloud`).
- [Anthropic SDK](https://github.com/anthropics/anthropic-sdk-python) - Official Claude SDK with tool use, computer control, and streaming for building Claude-native agents (🏷️ `Python` `Anthropic` `SDK`).
- [AutoGen](https://github.com/microsoft/autogen) - Event-driven multi-agent framework merged with Semantic Kernel for production workflows (🏷️ `Python` `Semantic Kernel` `SDK`).
- [AXME](https://github.com/axme-project/axme) - Durable multi-agent coordination with crash recovery, human approval gates, and kill switch across languages (🏷️ `Python` `Multi-Agent` `SDK`).
- [Bernstein](https://github.com/bernstein-ai/bernstein) - Deterministic orchestrator for parallel coding agents with test-driven verification using zero LLM tokens on coordination (🏷️ `Python` `Multi-Agent` `SDK`).
- [CAMEL](https://github.com/camel-ai/camel) - Role-based multi-agent simulation framework for collaborative reasoning and task completion (🏷️ `Python` `Research` `SDK`).
- [CopilotKit](https://github.com/CopilotKit/CopilotKit) - The open-source AI copilot platform for React, allowing developers to embed custom AI agents directly into their applications (🏷️ `TypeScript` `React` `SDK`).
- [CrewAI](https://github.com/crewAIInc/crewAI) - Role-playing agent orchestration for collaborative agent teams (🏷️ `Python` `LangChain` `SDK`).
- [DSPy](https://github.com/stanfordnlp/dspy) - Programmatically optimizes LLM prompts and chains using machine learning instead of manual prompt engineering (🏷️ `Python` `Stanford` `SDK`).
- [Google ADK](https://github.com/google/adk-python) - Modular agent dev kit integrating Gemini and Vertex AI natively (🏷️ `Python` `Vertex AI` `SDK`).
- [Haystack](https://github.com/deepset-ai/haystack) - Production-ready AI orchestration framework focused on building customizable LLM applications and RAG pipelines (🏷️ `Python` `RAG` `SDK`).
- [LangGraph](https://github.com/langchain-ai/langgraph) - Enterprise framework for stateful, graph-based agent workflows (🏷️ `Python` `LangChain` `SDK`).
- [Letta](https://github.com/letta-ai/letta) - Formerly MemGPT. Stateful agents with built-in long-term memory and a REST API server (🏷️ `Python` `REST` `SDK`).
- [LlamaIndex](https://github.com/run-llama/llama_index) - The leading framework for connecting LLMs to your data, with powerful indexing and retrieval capabilities (🏷️ `Python` `RAG` `SDK`).
- [MagiC](https://github.com/magic-agents/magic) - Kubernetes for AI agents that manages any agent from any framework with routing, cost control, and circuit breaker (🏷️ `Go` `Kubernetes` `Platform`).
- [Mastra](https://github.com/mastra-ai/mastra) - Opinionated TypeScript framework with RAG, observability, and MCP support built in (🏷️ `TypeScript` `Next.js` `SDK`).
- [MicroAgent](https://github.com/BuilderIO/micro-agent) - Lightweight agent framework with self-editing prompts and code for minimal-overhead agent loops (🏷️ `TypeScript` `Lightweight` `SDK`).
- [Miyabi](https://github.com/miyabi-dev/miyabi) - Issue-Driven Development framework with 7 coding and 14 business agents plus MCP 172+ tools using GitHub as OS (🏷️ `TypeScript` `GitHub` `SDK`).
- [Modus](https://github.com/hypermodeinc/modus) - Serverless framework for high-throughput agent workloads with minimal cold starts (🏷️ `WebAssembly` `Hypermode` `Serverless`).
- [Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) - Open-source phone agent model and framework for building mobile device automation agents (🏷️ `Python` `Mobile` `SDK`).
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) - Lightweight multi-agent SDK with tracing and guardrails from OpenAI (🏷️ `Python` `OpenAI` `SDK`).
- [Portia AI](https://github.com/portia-ai/portia) - Reliable agent framework focused on production stability with structured output guarantees (🏷️ `Python` `Production` `SDK`).
- [PraisonAI](https://github.com/MervinPraison/PraisonAI) - Production multi-agent framework with self-reflection, MCP integration, and workflow automation (🏷️ `Python` `Multi-Agent` `CLI`).
- [PydanticAI](https://github.com/pydantic/pydantic-ai) - Type-safe agent framework from the Pydantic team with a FastAPI-style developer experience (🏷️ `Python` `Pydantic` `SDK`).
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - Microsoft enterprise SDK for Python, C#, and Java with modular plugins, memory, and goal planning (🏷️ `C#` `Microsoft` `SDK`).
- [Smolagents](https://github.com/huggingface/smolagents) - Hugging Face code-first framework where agents write and execute Python instead of JSON tool calls (🏷️ `Python` `Hugging Face` `SDK`).
- [Strands Agents SDK](https://github.com/strands-agents/sdk-python) - AWS model-driven agent SDK with native Bedrock integration (🏷️ `Python` `AWS Bedrock` `SDK`).
- [Upsonic](https://github.com/Upsonic/Upsonic) - Minimalist agent framework with MCP support and rapid setup for quick prototyping (🏷️ `Python` `MCP` `SDK`).
- [Vercel AI SDK](https://github.com/vercel/ai) - Streaming-first primitives for AI UIs with React Server Components and edge runtime support (🏷️ `TypeScript` `Next.js` `SDK`).
- [VoltAgent](https://github.com/voltagent/voltagent) - TypeScript agent framework with built-in observability and a self-improving context engine (🏷️ `TypeScript` `React` `SDK`).

## Coding Agents

- [Aider](https://github.com/Aider-AI/aider) - Terminal-first pair programmer that edits code in local repos, preserves Git history, and supports multi-file changes (🏷️ `Python` `CLI` `Local`).
- [Amazon Q Developer](https://aws.amazon.com/q/developer) - AWS-native AI coding assistant with Lambda, CloudWatch, infrastructure support, and security scanning (🏷️ `Python` `AWS` `IDE`).
- [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) - Mature autonomous agent platform with Forge framework and public benchmarks for evaluating agent capabilities (🏷️ `Python` `Forge` `CLI`).
- [Caliber](https://github.com/caliber-agents/caliber) - CLI that fingerprints projects and generates AI agent configs like CLAUDE.md and Cursor rules with quality scoring (🏷️ `Python` `CLI` `Local`).
- [Claude Code](https://github.com/anthropics/claude-code) - Terminal-first agentic coding tool with multi-file edits, test running, and Git operations baked in (🏷️ `TypeScript` `CLI` `Local`).
- [Cline](https://github.com/cline/cline) - Autonomous coding agent in your IDE that creates/edits files, runs commands, and uses the browser with permission-gated steps (🏷️ `TypeScript` `VS Code` `IDE`).
- [CodeRabbit](https://coderabbit.ai) - AI-powered PR reviewer with inline suggestions, security scanning, and automatic code quality checks (🏷️ `Cloud` `GitHub` `Web`).
- [Codex CLI](https://github.com/openai/codex) - OpenAI's lightweight, open-source terminal coding agent with fast execution and strong benchmark scores (🏷️ `Python` `CLI` `Local`).
- [Codex-CLI](https://github.com/microsoft/Codex-CLI) - CLI tool that turns natural language commands into Bash, ZShell, and PowerShell equivalents (🏷️ `C#` `CLI` `Local`).
- [Continue](https://github.com/continuedev/continue) - Source-controlled AI checks enforceable in CI, powered by the open-source Continue CLI (🏷️ `TypeScript` `VS Code` `IDE`).
- [Cursor](https://cursor.com) - AI-native IDE (VS Code fork) with deep codebase awareness, multi-file refactoring, and agentic workflows (🏷️ `TypeScript` `Electron` `Desktop`).
- [Devika](https://github.com/stitionai/devika) - Open-source AI software engineer that understands high-level instructions and writes full-featured code autonomously (🏷️ `Python` `Docker` `Web`).
- [Devin](https://devin.ai) - Fully autonomous AI software engineer that plans, codes, tests, and deploys in a cloud sandbox (🏷️ `Cloud` `Web` `SaaS`).
- [gemini-cli](https://github.com/google-gemini/gemini-cli) - Open-source AI agent that brings the power of Gemini directly into your terminal (🏷️ `Go` `CLI` `Local`).
- [GitHub Copilot](https://github.com/features/copilot) - Agent Mode in VS Code with Copilot Workspace for issue-to-PR workflows across Claude, GPT, and Gemini (🏷️ `TypeScript` `VS Code` `IDE`).
- [Goose](https://github.com/aaif-goose/goose) - Open-source extensible AI agent that goes beyond code suggestions, installs, executes, edits, and tests with any LLM (🏷️ `Rust` `CLI` `Local`).
- [JetBrains AI](https://www.jetbrains.com/ai) - Deep AI integration across all JetBrains IDEs with context-aware completions and refactoring (🏷️ `Kotlin` `JetBrains` `IDE`).
- [Kilo Code](https://github.com/kilocode/kilo-code) - Structured coding agent with tighter context management and reduced hallucinations for VS Code (🏷️ `TypeScript` `VS Code` `IDE`).
- [Kiro](https://kiro.dev) - Spec-driven development agent that writes specs, auto-generates tasks, implements code, and automates DevOps workflows (🏷️ `Cloud` `AWS` `IDE`).
- [Open Interpreter](https://github.com/openinterpreter/open-interpreter) - Execute code locally via natural-language model instructions with a ChatGPT-like interface (🏷️ `Python` `CLI` `Local`).
- [opencode](https://github.com/anomalyco/opencode) - Open-source coding agent available as a desktop application with a visual interface (🏷️ `TypeScript` `Electron` `Desktop`).
- [OpenCode](https://github.com/opencode-dev/opencode) - BYOK terminal coding agent for developers seeking an open-source Cursor alternative (🏷️ `TypeScript` `CLI` `Local`).
- [OpenHands](https://github.com/OpenHands/OpenHands) - AI-driven development platform that writes, tests, and deploys code autonomously (🏷️ `Python` `Docker` `Web`).
- [PR-Agent](https://github.com/Codium-ai/pr-agent) - Open-source AI PR reviewer that auto-describes, reviews, and improves pull requests (🏷️ `Python` `GitHub` `CLI`).
- [Qodo](https://www.qodo.ai) - AI code review platform with context-aware PR validation and security analysis (🏷️ `Cloud` `Enterprise` `Web`).
- [RooCode](https://github.com/RooVetGit/Roo-Code) - Cline fork with structured modes and reduced hallucinations for more reliable code generation (🏷️ `TypeScript` `VS Code` `IDE`).
- [Snyk Code](https://snyk.io/product/snyk-code) - AI-powered security scanner with real-time vulnerability detection in agent-generated code (🏷️ `Cloud` `Security` `Platform`).
- [Sourcegraph Cody](https://sourcegraph.com/cody) - AI coding assistant that excels at large codebases with an enterprise context engine (🏷️ `TypeScript` `Enterprise` `IDE`).
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) - Takes a GitHub issue and tries to automatically fix it. Also used for cybersecurity and competitive coding (🏷️ `Python` `Docker` `CLI`).
- [Tabnine](https://www.tabnine.com) - Privacy-first AI code completion with on-premise deployment and codebase fine-tuning options (🏷️ `TypeScript` `Enterprise` `IDE`).
- [TaskWeaver](https://github.com/microsoft/TaskWeaver) - A code-first agent framework from Microsoft for seamlessly planning and executing data analytics tasks (🏷️ `Python` `Jupyter` `CLI`).
- [Windsurf](https://windsurf.com) - AI-native IDE with Cascade agent for multi-step autonomous tasks and team workflows (🏷️ `TypeScript` `Electron` `Desktop`).

## Memory and Context

- [Acontext](https://github.com/memodb-io/Acontext) - Manages agent skills and long-term memory as a layered data structure for persistent context (🏷️ `Python` `SDK` `Local`).
- [Chroma](https://github.com/chroma-core/chroma) - Lightweight, embeddable vector store for building memory-augmented AI agents with fast semantic retrieval (🏷️ `Python` `TypeScript` `SDK`).
- [cognee](https://github.com/topoteretes/cognee) - Knowledge engine for AI agent memory, set up in 6 lines of code with graph-based knowledge extraction (🏷️ `Python` `Neo4j` `SDK`).
- [Cortex Memory](https://github.com/prem-research/cortex) - Full-stack solution for agent memory covering extraction, vector search, and optimization (🏷️ `Python` `Vector DB` `SDK`).
- [graphiti](https://github.com/getzep/graphiti) - Build real-time knowledge graphs for AI agents with automatic entity extraction and linking (🏷️ `Python` `Knowledge Graph` `SDK`).
- [iGPT](https://github.com/igpt-ai/igpt) - Email Intelligence API that converts email threads into reasoning-ready JSON for agent consumption (🏷️ `Cloud` `Email` `API`).
- [LanceDB](https://github.com/lancedb/lancedb) - Serverless vector search database embedded directly in the agent process with no infrastructure needed (🏷️ `Rust` `Python` `SDK`).
- [Langmem](https://github.com/langchain-ai/langmem) - Helps agents learn and adapt from their interactions over time with persistent memory (🏷️ `Python` `LangChain` `SDK`).
- [Lorg](https://github.com/lorg-ai/lorg) - Permanent intelligence archive for AI agents with structured contributions and cryptographically backed trust scores (🏷️ `Python` `Archive` `SDK`).
- [Mem0](https://github.com/mem0ai/mem0) - Memory layer for AI applications with long-term, short-term, and semantic memory extraction (🏷️ `Python` `Vector` `Cloud`).
- [Memvid](https://github.com/memvid/memvid) - Replace complex RAG pipelines with a serverless, single-file memory layer for instant retrieval (🏷️ `Python` `Multimodal` `SDK`).
- [Milvus](https://github.com/milvus-io/milvus) - Scales vector search to billions of embeddings for large-scale agent knowledge bases (🏷️ `Go` `Python` `Platform`).
- [Motorhead](https://github.com/getmetal/motorhead) - Manages conversation context windows for agents with automatic background summarization (🏷️ `Rust` `Python` `SDK`).
- [Nex](https://github.com/nex-ai/nex) - Organizational context and memory for AI agents with 60-tool MCP server and 100+ integrations (🏷️ `TypeScript` `MCP` `Platform`).
- [Pathway](https://github.com/pathwaycom/pathway) - Live data RAG engine with real-time streaming for agents that need up-to-the-second knowledge (🏷️ `Python` `Streaming` `SDK`).
- [Pinecone](https://www.pinecone.io) - Managed serverless vector database with low-latency retrieval for production agent knowledge bases (🏷️ `Cloud` `Vector DB` `API`).
- [Qdrant](https://github.com/qdrant/qdrant) - High-performance vector similarity search engine with rich payload filtering for agent memory (🏷️ `Rust` `Python` `SDK`).
- [RAGFlow](https://github.com/infiniflow/ragflow) - Open-source RAG engine with agent capabilities and deep document understanding for knowledge bases (🏷️ `Python` `RAG` `Platform`).
- [SimpleMem](https://github.com/aiming-lab/SimpleMem) - Efficient lifelong memory for LLM agents supporting both text and multimodal inputs (🏷️ `Python` `SDK` `Local`).
- [Supermemory](https://github.com/supermemoryai/supermemory) - Extremely fast and scalable memory engine and API designed for the AI era (🏷️ `TypeScript` `Vector DB` `Web`).
- [Weaviate](https://github.com/weaviate/weaviate) - Stores and searches vector embeddings with hybrid keyword and semantic retrieval for agent knowledge (🏷️ `Go` `Python` `Platform`).
- [Zep](https://github.com/getzep/zep) - Enriches agent long-term memory with automatic summarization, entity extraction, and search (🏷️ `Python` `TypeScript` `SDK`).

## Multi-Agent Systems

- [AgentVerse](https://github.com/OpenBMB/AgentVerse) - Framework for building custom multi-agent environments to accomplish collaborative tasks (🏷️ `Python` `Benchmark` `SDK`).
- [EvoAgentX](https://github.com/EvoAgentX/EvoAgentX) - Evaluates and evolves agentic workflows over time using automatic optimization (🏷️ `Python` `Optimization` `SDK`).
- [Hivemoot](https://github.com/hivemoot/hivemoot) - Autonomous agent teams that collaboratively build software on GitHub (🏷️ `Python` `GitHub` `SDK`).
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - Simulates a full software company workflow from requirements to PRs using role-playing agents (🏷️ `Python` `Role-Playing` `SDK`).
- [Swarm](https://github.com/openai/swarm) - Lightweight framework for agent handoffs, context variables, and function calling patterns from OpenAI (🏷️ `Python` `OpenAI` `SDK`).
- [Swarms Framework](https://github.com/kyegomez/swarms) - Multi-agent orchestration for production use cases with scalability and reliability at its core (🏷️ `Python` `Production` `SDK`).

## Agent Communication Protocols

The protocol layer that enables agents to discover tools, communicate with each other, and interoperate across ecosystems.

| Protocol | Purpose             | Creator   | Status   |
| -------- | ------------------- | --------- | -------- |
| MCP      | Agent-to-tool       | Anthropic | Standard |
| A2A      | Agent-to-agent      | Google    | Growing  |
| ACP      | Agent communication | IBM/BeeAI | Early    |

### MCP (Model Context Protocol)

- [A2A Protocol](https://github.com/google/A2A) - Google's open protocol enabling AI agents to communicate, collaborate, and delegate tasks across frameworks (🏷️ `Protobuf` `Standard` `RPC`).
- [Agentify](https://github.com/agentify-cli/agentify) - CLI tool that transforms OpenAPI specs into 9 agent formats including MCP, AGENTS.md, and Claude tools (🏷️ `TypeScript` `CLI` `MCP`).
- [Arcade AI](https://github.com/ArcadeAI/arcade-mcp) - Tool-use platform with authentication, authorization, and logging for agent-tool interactions (🏷️ `Python` `Cloud` `API`).
- [Composio](https://github.com/ComposioHQ/composio) - Integration platform with 250+ pre-built tool connectors for AI agents and LLMs (🏷️ `TypeScript` `Cloud` `API`).
- [Docker MCP](https://github.com/docker/docker-mcp) - Docker's MCP gateway CLI plugin for running MCP servers in isolated containers (🏷️ `Go` `Docker` `CLI`).
- [Entroly](https://github.com/entroly/entroly) - Context engineering engine achieving 100% codebase visibility with 78% fewer tokens using knapsack-optimal selection (🏷️ `Rust` `MCP` `SDK`).
- [GNAP](https://github.com/nichochar/gnap) - Git-Native Agent Protocol that coordinates AI agent teams with 4 JSON files in any Git repo with no server required (🏷️ `JSON` `Git` `Protocol`).
- [HCS Agent Protocol](https://github.com/hashgraph/hedera-agent-kit) - Hedera open standards for agent identity with trustless P2P communication and 187K+ verified agents (🏷️ `TypeScript` `Hedera` `Protocol`).
- [MCP Registry](https://github.com/modelcontextprotocol) - Official Model Context Protocol specification and server implementations for standardized tool access (🏷️ `JSON` `Standard` `Registry`).
- [mcp-nest](https://github.com/CharanBharathula/mcp-nest) - Unified Model Context Protocol (MCP) server for executing code and managing files (🏷️ `Python` `MCP` `CLI`).
- [Toolhouse](https://toolhouse.ai) - Cloud-hosted tool infrastructure for agents with optimized execution and low-latency access (🏷️ `Python` `Cloud` `API`).
- [Zapier MCP Server](https://zapier.com/mcp) - Connect agents to 7,000+ app integrations via MCP, powered by Zapier's automation platform (🏷️ `Cloud` `Zapier` `API`).

## Browser and Computer Use Agents

- [Agent S2](https://github.com/simular-ai/Agent-S) - Open-source GUI automation framework for building desktop and browser agents with vision (🏷️ `Python` `Vision` `SDK`).
- [AgentQL](https://github.com/tinyfish-io/agentql) - AI-powered web scraping and automation with a semantic query language for page elements (🏷️ `Python` `Playwright` `SDK`).
- [Airtop](https://www.airtop.ai) - Enterprise-grade cloud browser infrastructure for AI agent automation at scale (🏷️ `Cloud` `Enterprise` `Platform`).
- [Amazon Nova Act](https://aws.amazon.com/ai/nova/act) - AWS-native browser and desktop automation agent with enterprise reliability guarantees (🏷️ `Cloud` `AWS` `Platform`).
- [Browser Use](https://github.com/browser-use/browser-use) - Open-source framework to let LLMs navigate and interact with any website programmatically (🏷️ `Python` `Playwright` `SDK`).
- [Browserbase](https://www.browserbase.com) - Scalable headless browser infrastructure purpose-built for running AI agents in production (🏷️ `Cloud` `Infrastructure` `Platform`).
- [Dia Browser](https://diabrowser.com) - AI-native browser from Atlassian and the Browser Company with built-in agent workflows (🏷️ `Cloud` `Desktop` `Browser`).
- [Fellou](https://fellou.ai) - Transparent agentic browser with visual workflow editing and persistent agentic memory (🏷️ `Cloud` `Desktop` `Browser`).
- [Genspark](https://www.genspark.ai) - On-device AI browser with 169+ local models that runs without internet connection (🏷️ `Cloud` `Desktop` `Browser`).
- [Grok Computer](https://x.ai) - Upcoming xAI desktop agent with mouse control and application automation capabilities (🏷️ `Cloud` `Desktop` `Platform`).
- [LaVague](https://github.com/lavague-ai/LaVague) - Large Action Model framework to turn natural language instructions into browser automation (🏷️ `Python` `Selenium` `SDK`).
- [Manus](https://manus.im) - Autonomous digital employee with Browser Operator extension acquired by Meta for web-based task execution (🏷️ `Cloud` `Meta` `Platform`).
- [MultiOn](https://multion.ai) - Reliable web automation API with CAPTCHA handling for building production browser agents (🏷️ `Cloud` `API` `Platform`).
- [onUI](https://github.com/nichochar/onui) - Open-source browser extension and MCP server for annotation-first UI pair programming with AI agents (🏷️ `TypeScript` `MCP` `Extension`).
- [OpenAI Atlas](https://atlas.openai.com) - AI-native browser with Agent Mode for autonomous web task completion (🏷️ `Cloud` `OpenAI` `Browser`).
- [OpenAI Operator](https://operator.openai.com) - ChatGPT autonomous web agent with human checkpoints using Computer Use Agent technology (🏷️ `Cloud` `OpenAI` `Platform`).
- [Plasmate](https://github.com/nichochar/plasmate) - Headless browser compiling HTML to structured JSON with 17.5x compression and 13 MCP tools (🏷️ `Rust` `MCP` `SDK`).
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - MCP server wrapping Playwright for seamless browser automation integration with LLM agents (🏷️ `TypeScript` `MCP` `SDK`).
- [Skyvern](https://github.com/Skyvern-AI/skyvern) - Automate browser-based workflows with computer vision and LLMs, no brittle selectors needed (🏷️ `Python` `Playwright` `Cloud`).
- [Stagehand](https://github.com/browserbase/stagehand) - AI web browsing framework built on Playwright with natural-language selectors and actions (🏷️ `TypeScript` `Playwright` `SDK`).

## Agent Tooling and Infrastructure

Sandboxes, web scrapers, browser automation, and networking layers that agents depend on.

- [AgentDock](https://github.com/agentdock/agentdock) - Framework for building and deploying production-ready AI agents with composable node architecture (🏷️ `Python` `Docker` `Platform`).
- [Crawl4AI](https://github.com/unclecode/crawl4ai) - Extracts structured data from web pages using LLM-friendly output formats optimized for agent ingestion (🏷️ `Python` `Playwright` `SDK`).
- [Docling](https://github.com/docling-project/docling) - Parses PDFs, DOCX, and slides into structured text with deep layout understanding for document agents (🏷️ `Python` `PDF` `SDK`).
- [E2B](https://github.com/e2b-dev/e2b) - Cloud sandboxes for AI agents to run code securely in isolated environments (🏷️ `TypeScript` `Cloud` `Sandbox`).
- [Engram](https://github.com/kwstx/engram_translator) - Universal bridge for multi-protocol AI agent systems with automated semantic mapping (🏷️ `Python` `Networking` `SDK`).
- [Firecrawl](https://github.com/firecrawl/firecrawl) - Web scraping API built for LLMs that converts websites to clean, structured markdown (🏷️ `TypeScript` `Cloud` `API`).
- [Jina Reader](https://github.com/jina-ai/reader) - Converts any URL to LLM-ready clean text via a simple API prefix for agent ingestion (🏷️ `TypeScript` `Cloud` `API`).
- [LlamaParse](https://github.com/run-llama/llama_cloud_services) - GenAI-native document parser designed to extract complex tables and layouts for RAG pipelines (🏷️ `Python` `Cloud` `API`).
- [Marker](https://github.com/datalab-to/marker) - Converts PDF documents to markdown with high accuracy for tables, equations, and figures (🏷️ `Python` `PDF` `CLI`).
- [Notte](https://github.com/nottelabs/notte) - Browser automation engine optimized for production AI pipelines (🏷️ `Python` `Browser` `SDK`).
- [Pilot Protocol](https://github.com/TeoSlayer/pilotprotocol) - Networking stack for distributed agent systems with encrypted tunnels (🏷️ `Go` `Networking` `SDK`).
- [Playwright](https://github.com/microsoft/playwright) - Automates Chromium, Firefox, and WebKit browsers with a single cross-language API for agent-driven testing (🏷️ `TypeScript` `Python` `SDK`).
- [ScrapeGraphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) - Python web-scraping library that uses LLMs to build intelligent scraping pipelines from natural-language instructions (🏷️ `Python` `LangChain` `SDK`).
- [Surya](https://github.com/datalab-to/surya) - Runs OCR and layout detection on documents in 90+ languages for multilingual document agents (🏷️ `Python` `PDF` `CLI`).
- [Tavily](https://github.com/tavily-ai/tavily-python) - Search API purpose-built for LLM agents providing real-time, accurate web data with source citations (🏷️ `Python` `Cloud` `API`).
- [Unstructured](https://github.com/Unstructured-IO/unstructured) - Ingests and preprocesses documents across 25+ file types for downstream LLM and agent pipelines (🏷️ `Python` `Pipeline` `SDK`).

## Low and No-Code Builders

- [Activepieces](https://github.com/activepieces/activepieces) - Open-source Zapier alternative with AI-powered automation nodes and visual workflow builder (🏷️ `TypeScript` `Docker` `Web`).
- [AgentGPT](https://github.com/reworkd/AgentGPT) - Deploy AI agents in the browser with zero local setup required (🏷️ `TypeScript` `Next.js` `Web`).
- [cstack](https://github.com/cstack-org/cstack) - Architecture pattern for autonomous agents using Claude Cowork, Notion, and MCP with no custom infrastructure (🏷️ `Cloud` `Anthropic` `Pattern`).
- [Dify](https://github.com/langgenius/dify) - Open-source LLM app development platform with visual workflow builder and RAG orchestration (🏷️ `Python` `FastAPI` `Web`).
- [FastAgency](https://github.com/airtai/fastagency) - Deploys multi-agent workflows as production APIs with minimal configuration and setup (🏷️ `Python` `FastAPI` `SDK`).
- [Flowise](https://github.com/FlowiseAI/Flowise) - Open-source drag-and-drop UI to build customized LLM flows, RAG pipelines, and agent systems (🏷️ `TypeScript` `React` `Web`).
- [Langflow](https://github.com/langflow-ai/langflow) - Visual drag-and-drop builder for LLM workflows, RAG agents, and multi-step pipelines (🏷️ `Python` `FastAPI` `Web`).
- [Lindy](https://www.lindy.ai) - No-code AI agent platform with 3000+ app integrations for business workflow automation (🏷️ `Cloud` `No-Code` `Platform`).
- [Make](https://www.make.com) - Visual workflow automation platform with AI capabilities and drag-and-drop scenario builder (🏷️ `Cloud` `No-Code` `Platform`).
- [Mission Control](https://github.com/mission-control-ai/mission-control) - Cockpit for managing AI agent swarms with autonomous daemon, Field Ops, and approval workflows (🏷️ `Python` `Multi-Agent` `Platform`).
- [n8n](https://github.com/n8n-io/n8n) - Open-source workflow automation with AI agent nodes combining visual and code-based orchestration (🏷️ `TypeScript` `Docker` `Platform`).
- [Relevance AI](https://relevanceai.com) - No-code AI agent builder for sales, support, and research use cases with team collaboration (🏷️ `Cloud` `No-Code` `Platform`).
- [Rivet](https://github.com/Ironclad/rivet) - Visual AI workflow builder with drag-and-drop interface for designing agent pipelines (🏷️ `TypeScript` `React` `Desktop`).
- [Temporal](https://github.com/temporalio/temporal) - Durable execution platform for long-running agent workflows with automatic retry and state persistence (🏷️ `Go` `Production` `Platform`).
- [Wordware](https://wordware.ai) - Web-hosted IDE where domain experts collaborate with AI engineers to build agent workflows (🏷️ `TypeScript` `Next.js` `Web`).
- [Zapier AI](https://zapier.com) - Connects 7000+ apps with natural language workflow creation for no-code agent automation (🏷️ `Cloud` `No-Code` `Platform`).

## Voice and Multimodal Agents

- [Agentset](https://github.com/agentset-ai/agentset) - Production RAG platform with reasoning, hybrid search, and full multimodal support (🏷️ `Python` `Multimodal` `Platform`).
- [LiveKit Agents](https://github.com/livekit/agents) - Framework for building real-time, multimodal AI agents with voice, video, and data channels (🏷️ `Python` `LiveKit` `SDK`).
- [Pipecat](https://github.com/pipecat-ai/pipecat) - Open-source framework for voice and multimodal conversational AI with streaming pipelines (🏷️ `Python` `WebRTC` `SDK`).
- [Rasa](https://github.com/RasaHQ/rasa) - Open-source conversational AI framework with self-hosted NLU training and dialogue management (🏷️ `Python` `NLU` `SDK`).
- [Vapi](https://github.com/VapiAI/server-sdk-python) - Platform for building voice AI agents with low-latency speech-to-speech capabilities (🏷️ `Python` `Cloud` `API`).
- [Vocode](https://github.com/vocodedev/vocode-python) - Open-source framework for building voice-based LLM agent applications with streaming support (🏷️ `Python` `Voice` `SDK`).

## Safety Guardrails and Observability

- [Agent OS](https://github.com/buildermethods/agent-os) - Kernel architecture for governing autonomous AI agents with policy enforcement (🏷️ `Python` `Policy` `SDK`).
- [AgentDoG](https://github.com/AI45Lab/AgentDoG) - Diagnostic guardrails that analyze full agent execution trajectories to detect instruction hijacking and tool misuse (🏷️ `Python` `Diagnostics` `SDK`).
- [AgentGuard](https://github.com/cyberark/agent-guard) - Runtime observability and guardrails for AI agents with loop detection and anomaly alerts (🏷️ `Python` `CyberArk` `SDK`).
- [agenttrace](https://github.com/luoyuctl/agenttrace) - Local-first TUI for AI coding agent session observability with tokens, cost, latency, tool failures, anomalies, reports, diffs, and CI health gates (🏷️ `Go` `Observability` `CLI`).
- [APort Agent Guardrails](https://github.com/aporthq/aport-agent-guardrails) - Pre-action authorization plugin for agent frameworks with policy-based access control (🏷️ `Python` `Authorization` `SDK`).
- [Arize Phoenix](https://github.com/Arize-ai/phoenix) - Open-source observability platform built on OpenTelemetry for tracing, evaluating, and debugging AI agents (🏷️ `Python` `OpenTelemetry` `Platform`).
- [Braintrust](https://www.braintrust.dev) - Eval-driven development platform with experiment tracking and prompt optimization for agent quality (🏷️ `TypeScript` `Evaluation` `Platform`).
- [DriftGuard](https://github.com/sujal-maheshwari2004/DriftGuard) - Semantic memory guardrails using causal graphs to prevent agents from repeating past failures (🏷️ `Python` `Memory` `SDK`).
- [Guardrails AI](https://github.com/guardrails-ai/guardrails) - Adds structural, type, and quality guarantees to LLM outputs for reliable agent responses (🏷️ `Python` `Validation` `SDK`).
- [Helicone](https://github.com/Helicone/helicone) - Open-source LLM observability with one-line integration for cost tracking and prompt analytics (🏷️ `TypeScript` `Observability` `Platform`).
- [Lakera Guard](https://www.lakera.ai) - Real-time protection against prompt injection, data leakage, and toxicity in agent interactions (🏷️ `Cloud` `Security` `API`).
- [Laminar](https://github.com/lmnr-ai/lmnr) - Open-source observability and analytics platform purpose-built for the full lifecycle of AI agents (🏷️ `Rust` `Observability` `Platform`).
- [Langfuse](https://github.com/langfuse/langfuse) - Open-source LLM observability platform for tracing, prompt versioning, and LLM-as-a-judge evaluations (🏷️ `TypeScript` `Next.js` `Platform`).
- [LangSmith](https://smith.langchain.com) - LangChain platform for tracing, testing, and evaluating agent performance with production monitoring (🏷️ `Cloud` `LangChain` `Platform`).
- [LLM Guard](https://github.com/protectai/llm-guard) - Security toolkit for scanning LLM inputs and outputs to prevent prompt injection and data leaks (🏷️ `Python` `Security` `SDK`).
- [Logfire](https://github.com/pydantic/logfire) - Python-native observability from the Pydantic team with deep integration for high-performance agent monitoring (🏷️ `Python` `Pydantic` `Platform`).
- [model-watchdog](https://github.com/model-watchdog/model-watchdog) - Auto-rollback system for AI agent config changes that monitors health and reverts on failure (🏷️ `Python` `Monitoring` `CLI`).
- [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails) - NVIDIA programmable guardrails toolkit for controlling and securing LLM-powered agent conversations (🏷️ `Python` `NVIDIA` `SDK`).
- [Orchard Kit](https://github.com/OrchardHarmonics/orchard-kit) - Modules for agent runtime security, self-audit trails, and collective cognition patterns (🏷️ `Python` `Security` `SDK`).
- [OWASP Top 10 for Agentic Apps](https://owasp.org/www-project-top-10-for-large-language-model-applications) - Security framework covering goal hijacking, tool misuse, and cascading failure mitigations for agents (🏷️ `Policy` `Security` `Framework`).
- [Prism Scanner](https://github.com/prism-scanner/prism) - Open-source security scanner for AI agent skills, plugins, and MCP servers with taint tracking (🏷️ `Python` `Security` `CLI`).
- [Rebuff](https://github.com/protectai/rebuff) - Self-hardening prompt injection detection system for securing agent inputs against adversarial attacks (🏷️ `Python` `Security` `SDK`).

## Agent Interfaces and UIs

Frontend workspaces and chat interfaces with built-in agent plugins and tool-use capabilities.

- [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) - All-in-one AI application with RAG, agents, and multi-model support for desktop and Docker (🏷️ `TypeScript` `Docker` `Desktop`).
- [DB-GPT](https://github.com/eosphoros-ai/DB-GPT) - Data interaction platform with local LLM support for 100% private database and analytics agents (🏷️ `Python` `Database` `Web`).
- [KinBot](https://github.com/kinbot/kinbot) - Self-hosted AI agent platform with persistent memory, 23+ providers, plugin store, and cron scheduling on SQLite (🏷️ `Python` `Self-Hosted` `Platform`).
- [LibreChat](https://github.com/danny-avila/LibreChat) - Self-hosted multi-model chat interface supporting all major AI providers with access control (🏷️ `TypeScript` `Docker` `Web`).
- [LobeChat](https://github.com/lobehub/lobe-chat) - Modern, open-source AI chat framework with a massive plugin ecosystem for autonomous agent capabilities (🏷️ `TypeScript` `Next.js` `Web`).
- [OpenClaw](https://github.com/nichochar/openclaw) - Self-hosted agent across WhatsApp, Telegram, Slack, Discord, and Signal with 5700+ community skills (🏷️ `TypeScript` `Multi-Channel` `Platform`).
- [openclaw-starter](https://github.com/nichochar/openclaw-starter) - Fork-and-run template for 24/7 autonomous AI agents with pre-configured SOUL.md and memory system (🏷️ `TypeScript` `Template` `Platform`).
- [OpenWebUI](https://github.com/open-webui/open-webui) - Extensible local AI interface with built-in RAG, tool use, and support for multi-agent workflows (🏷️ `TypeScript` `Svelte` `Web`).

## Agent Deployment and Hosting

- [AWS Bedrock AgentCore](https://github.com/awslabs/agentcore-samples) - Managed AWS infrastructure for Bedrock-based agents with compliance, scaling, and monitoring built in (🏷️ `TypeScript` `AWS` `Platform`).
- [Cerebras Inference](https://www.cerebras.net) - Fastest LLM inference delivering 1000+ tokens per second on Llama 3.3 70B with a free tier (🏷️ `Cloud` `Inference` `API`).
- [Fireworks AI](https://fireworks.ai) - Serverless LLM inference with fine-tuning, RAG support, and free credits for rapid prototyping (🏷️ `Cloud` `Inference` `API`).
- [Groq Cloud](https://groq.com) - Ultra-fast LPU-based LLM inference for Mixtral, Llama, and Gemma with a free API tier (🏷️ `Cloud` `Inference` `API`).
- [Modal](https://github.com/modal-labs/modal-client) - Serverless GPU compute purpose-built for AI workloads with fast cold starts and Python-native deployment (🏷️ `Python` `Serverless` `Cloud`).
- [Northflank](https://northflank.com/) - Full-stack platform with GPU orchestration, Git-based CI/CD, and bring-your-own-cloud support (🏷️ `Kubernetes` `Cloud` `Platform`).
- [Railway](https://railway.com/) - One-click deploy from GitHub with persistent volumes and databases for stateful agent deployments (🏷️ `Nix` `Cloud` `Platform`).
- [Together AI](https://www.together.ai) - Inference API hosting 200+ open models with fast generation and a free tier for developers (🏷️ `Cloud` `Inference` `API`).
- [Trigger.dev](https://github.com/triggerdotdev/trigger.dev) - Background job platform with cron, webhook, and event triggers purpose-built for long-running agent tasks (🏷️ `TypeScript` `Serverless` `Cloud`).

## Agent Evaluation and Benchmarks

- [AgentBench](https://github.com/THUDM/AgentBench) - Comprehensive benchmark for evaluating LLMs as agents across 8 distinct environments (🏷️ `Python` `Benchmark` `SDK`).
- [ARC-AGI-2](https://arcprize.org) - Frontier benchmark for measuring general intelligence capabilities in AI agents beyond pattern matching (🏷️ `Python` `Benchmark` `Research`).
- [GAIA Benchmark](https://huggingface.co/papers/2311.12983) - Benchmark for General AI Assistants measuring real-world reasoning and tool use (🏷️ `JSON` `Benchmark` `Dataset`).
- [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai) - Framework for evaluating large language models with composable tasks and scoring (🏷️ `Python` `Evaluation` `SDK`).
- [SWE-bench](https://github.com/SWE-bench/SWE-bench) - Benchmark for evaluating LLMs on real-world software engineering tasks from GitHub issues (🏷️ `Python` `Docker` `Benchmark`).
- [Terminal-Bench](https://github.com/terminal-bench/terminal-bench) - Benchmark for evaluating terminal-based coding agent performance across real-world tasks (🏷️ `Python` `Benchmark` `CLI`).
- [WebArena](https://github.com/web-arena-x/webarena) - Benchmark for web agent evaluation using real websites with realistic task completion metrics (🏷️ `Python` `Benchmark` `Web`).

## Learning Resources

- [AgentBench: Evaluating LLMs as Agents](https://arxiv.org/abs/2309.07864) - The benchmark paper for evaluating LLMs as agents across diverse environments (🏷️ `Paper` `ArXiv` `PDF`).
- [AI Agents in LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) - Short course on building production agents with LangGraph by Andrew Ng's platform (🏷️ `Course` `DeepLearning.ai` `Web`).
- [AI Engineering by Chip Huyen](https://www.oreilly.com/library/view/ai-engineering/9781098166298) - Comprehensive guide on AI systems design and deployment covering agent architecture patterns (🏷️ `Book` `O'Reilly` `Print`).
- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook) - Collection of Claude agent recipes and integration patterns from Anthropic (🏷️ `Guide` `Anthropic` `GitHub`).
- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) - Anthropic's guide on agent design patterns, evaluation strategies, and production best practices (🏷️ `Guide` `Anthropic` `Web`).
- [Google ADK Documentation](https://google.github.io/adk-docs) - Official documentation for Google Agent Development Kit with tutorials and best practices (🏷️ `Guide` `Google` `Web`).
- [Hugging Face Agents Course](https://huggingface.co/learn/agents-course) - Open-source course on building AI agents using Hugging Face tools and models (🏷️ `Course` `HuggingFace` `Web`).
- [LATS: Language Agent Tree Search](https://github.com/lapisrocks/LanguageAgentTreeSearch) - Combines Monte Carlo tree search with LLM reasoning for complex multi-step planning tasks (🏷️ `Paper` `Python` `Research`).
- [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) - Deep breakdown of LLM-powered agent components: planning, memory, and tool use (🏷️ `Blog` `Weng` `Web`).
- [Microsoft GenAI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) - 21-lesson course on generative AI concepts and agent development from Microsoft (🏷️ `Course` `Microsoft` `GitHub`).
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - Practical guides and recipes for building with OpenAI APIs including agent patterns (🏷️ `Guide` `OpenAI` `GitHub`).
- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) - Community-maintained guide covering prompt engineering techniques and agent strategies (🏷️ `Guide` `DAIR` `Web`).
- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) - The foundational paper behind the ReAct prompting pattern used in most agent frameworks (🏷️ `Paper` `ArXiv` `PDF`).
- [Reflexion](https://github.com/noahshinn/reflexion) - Research framework letting agents learn from past mistakes via iterative verbal self-reflection loops (🏷️ `Paper` `Python` `Research`).
- [Tree of Thoughts](https://github.com/princeton-nlp/tree-of-thought-llm) - Explores multiple parallel reasoning paths before committing to a final answer for complex problems (🏷️ `Paper` `Python` `Research`).

> **Deep dives:** [patterns/react-pattern.md](patterns/react-pattern.md) • [patterns/plan-and-execute.md](patterns/plan-and-execute.md) • [patterns/reflection-loop.md](patterns/reflection-loop.md) • [patterns/multi-agent.md](patterns/multi-agent.md) • [workflows/multi-step-reasoning.md](workflows/multi-step-reasoning.md)

## Agent Communication

Capabilities that let agents send messages, notifications, and reports across channels.

- [Apprise](https://github.com/caronc/apprise) - Sends agent notifications to 100+ services including Slack, Discord, and email from a single Python interface (🏷️ `Python` `Multi-Channel` `SDK`).
- [Discord.py](https://github.com/Rapptz/discord.py) - Lets agents interact with Discord channels and servers for team-facing real-time communication (🏷️ `Python` `Discord` `SDK`).
- [FastAPI-Mail](https://github.com/sabuhish/fastapi-mail) - Adds async email sending to FastAPI-based agent services with SMTP and OAuth2 support (🏷️ `Python` `FastAPI` `SDK`).
- [Novu](https://github.com/novuhq/novu) - Routes agent notifications across email, SMS, push, and chat from a unified API and workflow engine (🏷️ `TypeScript` `Python` `Platform`).
- [Ntfy](https://github.com/binwiederhier/ntfy) - Pushes real-time agent notifications to phones and desktops via a dead-simple HTTP API (🏷️ `Go` `Self-hosted` `API`).
- [Resend](https://github.com/resend/resend-node) - Sends transactional emails from agent workflows with a clean, developer-first API (🏷️ `TypeScript` `Cloud` `API`).
- [Slack Bolt](https://github.com/slackapi/bolt-python) - Enables agents to send, receive, and react to Slack messages with event-driven listeners (🏷️ `Python` `Slack` `SDK`).
- [Twilio](https://github.com/twilio/twilio-python) - Sends SMS and voice calls from agent workflows to any phone number worldwide (🏷️ `Python` `Cloud` `API`).

## Data Pipeline and Workflow

Frameworks for orchestrating data transformations and long-running agent-driven workflows.

- [AI for Database](https://www.aifordatabase.com) - Connects to any database for plain English queries with self-refreshing dashboards and automated workflows (🏷️ `Cloud` `Database` `Platform`).
- [Burr](https://github.com/dagworks-inc/burr) - Tracks and manages multi-step agent state machines with built-in observability and persistence (🏷️ `Python` `StateGraph` `SDK`).
- [Dagster](https://github.com/dagster-io/dagster) - Manages data assets and pipelines with built-in lineage tracking for data-intensive agent systems (🏷️ `Python` `Pipeline` `Platform`).
- [GPT Researcher](https://github.com/assafelovic/gpt-researcher) - Conducts multi-source autonomous web research and produces cited, structured long-form reports (🏷️ `Python` `LangChain` `Web`).
- [Hamilton](https://github.com/DAGWorks-Inc/hamilton) - Defines modular data transformations as Python functions wired automatically into a DAG for agent pipelines (🏷️ `Python` `DAG` `SDK`).
- [Hex AI](https://hex.tech) - Collaborative data platform with AI-powered analysis and notebook-based data exploration for teams (🏷️ `Cloud` `Data` `Platform`).
- [Julius AI](https://julius.ai) - Upload CSV or Excel files and analyze data using natural language questions for instant insights (🏷️ `Cloud` `Data` `Web`).
- [PandasAI](https://github.com/sinaptik-ai/pandas-ai) - Chat with your data using natural language queries that convert to Pandas and SQL operations (🏷️ `Python` `Data` `SDK`).
- [Prefect](https://github.com/PrefectHQ/prefect) - Orchestrates agent workflows and data pipelines with retries, caching, and built-in observability (🏷️ `Python` `Pipeline` `Platform`).
- [Signals CLI](https://signals.dev) - Intent signal CLI detecting LinkedIn engagers, keyword posters, and funding events with JSON output for agent pipelines (🏷️ `Cloud` `CLI` `Platform`).
- [STORM](https://github.com/stanford-oval/storm) - Generates Wikipedia-style long-form articles by autonomously researching and synthesizing multiple sources (🏷️ `Python` `Stanford` `Research`).

> **Deep dives:** [workflows/data-pipeline.md](workflows/data-pipeline.md) • [workflows/research-agent.md](workflows/research-agent.md)

## Secure Execution Environments

Infrastructure for running agent-generated code safely in isolated, sandboxed, or serverless environments.

> 💡 **Quick Decision Guide:**
>  - **Fastest hosted sandbox:** E2B, Daytona
>  - **Self-hosted VM isolation:** Firecracker, Kata Containers, gVisor
>  - **Container-based:** Docker, Podman, Sysbox
>  - **Serverless:** AWS Lambda, Google Cloud Run, Cloudflare Workers

| Tool                | Isolation          | Cold Start | Languages              |
| ------------------- | ------------------ | ---------- | ---------------------- |
| E2B                 | VM (Firecracker)   | ~300ms     | Python, TS, Go         |
| Daytona             | Container/VM       | ~2s        | Python, TS, Go         |
| Firecracker         | microVM            | ~125ms     | REST API               |
| Docker              | Namespace+cgroup   | ~500ms     | All                    |
| AWS Lambda          | Firecracker VM     | ~200ms     | Python, TS, Go         |
| Cloudflare Workers  | V8 isolate         | ~0ms       | TS, Rust (WebAssembly) |

- [agentnotary](https://github.com/CharanBharathula/agentnotary) - Notarize, govern, and audit AI agents — cryptographic seal, runtime guard, EU AI Act docs, and adversarial fuzzer (🏷️ `Python` `Compliance` `CLI`).
- [AWS Lambda](https://github.com/aws/aws-lambda-python-runtime-interface-client) - Serverless function runtime with Firecracker isolation for executing short-lived agent tasks at scale (🏷️ `Python` `AWS` `Serverless`).
- [Cloudflare Workers](https://github.com/cloudflare/workers-sdk) - Ultra-low-latency V8-isolate serverless runtime at the edge for lightweight agent task execution (🏷️ `TypeScript` `Cloudflare` `Serverless`).
- [CodeSandbox SDK](https://github.com/codesandbox/codesandbox-sdk) - Provides forked, snapshotted microVM environments for real-time collaborative agent code execution (🏷️ `TypeScript` `Python` `SDK`).
- [Daytona](https://github.com/daytonaio/daytona) - Self-hostable git-based developer environment manager for sandboxed agent code execution with fast provisioning (🏷️ `Python` `TypeScript` `Platform`).
- [Docker](https://github.com/moby/moby) - Standard container runtime providing namespace and cgroup isolation for packaging and running agent workloads (🏷️ `Go` `Docker` `Platform`).
- [Firecracker](https://github.com/firecracker-microvm/firecracker) - Lightweight microVM technology with 125ms boot time used by AWS Lambda and E2B under the hood (🏷️ `Rust` `AWS` `Infrastructure`).
- [Google Cloud Run](https://github.com/GoogleCloudPlatform/cloud-run-samples) - Fully managed serverless platform with gVisor isolation for running stateless agent containers at scale (🏷️ `Python` `GCP` `Serverless`).
- [gVisor](https://github.com/google/gvisor) - User-space kernel that intercepts syscalls to provide VM-level security with container-level overhead (🏷️ `Go` `Google` `Infrastructure`).
- [Kata Containers](https://github.com/kata-containers/kata-containers) - Combines VM-level security with the developer experience of containers using lightweight VMs (🏷️ `Go` `OCI` `Infrastructure`).
- [Podman](https://github.com/containers/podman) - Daemonless, rootless container engine ideal for running untrusted agent-generated code securely (🏷️ `Go` `Rootless` `CLI`).
- [Sysbox](https://github.com/nestybox/sysbox) - Enhanced container runtime that enables Docker-in-Docker securely for nested agent execution environments (🏷️ `Go` `Docker` `Infrastructure`).

> **Deep dives:** [environments/sandboxes.md](environments/sandboxes.md) • [environments/vms.md](environments/vms.md) • [environments/containers.md](environments/containers.md) • [environments/serverless.md](environments/serverless.md)

## Creative AI Agents

Tools for generating images, video, music, audio, and 3D assets using AI models.

### Image Generation

| Generator         | Strength           | Open Source | Pricing       |
| ----------------- | ------------------ | ----------- | ------------- |
| Midjourney v7     | Artistic quality   | No          | $10-120/mo    |
| FLUX 2            | Photorealism       | Yes         | Free / API    |
| Stable Diffusion  | Full control       | Yes         | Free (OSS)    |
| Ideogram v3       | Text rendering     | No          | Free / $7+/mo |
| Google Imagen 4   | Highest fidelity   | No          | API           |

- [Adobe Firefly 3](https://firefly.adobe.com) - Generates commercially safe images from text prompts using a model trained exclusively on licensed data (🏷️ `Cloud` `Adobe CC` `Web`).
- [DALL-E 3.5](https://openai.com/dall-e-3) - Generates detailed images from text prompts with 95% text accuracy integrated directly into ChatGPT (🏷️ `Cloud` `OpenAI` `API`).
- [FLUX 2](https://blackforestlabs.ai) - Open-weight photorealism model producing 4K output at 6x faster generation speed than its predecessor (🏷️ `Python` `Open-Weight` `API`).
- [Google Imagen 4](https://deepmind.google/technologies/imagen) - Produces state-of-the-art photorealistic images from text via Google DeepMind accessible through AI Studio (🏷️ `Cloud` `Google` `API`).
- [Ideogram v3](https://ideogram.ai) - Renders readable text inside generated images with near-zero spelling errors for logos and marketing (🏷️ `Cloud` `Freemium` `Web`).
- [InkOS](https://github.com/inkos-project/inkos) - Autonomous novel-writing CLI agent where agents collaborate to produce long-form fiction with continuity auditing (🏷️ `Python` `Open-Source` `CLI`).
- [Leonardo AI](https://leonardo.ai) - Multi-model image platform with Realtime Canvas and 3D gaming asset generation now owned by Canva (🏷️ `Cloud` `Canva` `Web`).
- [Midjourney v7](https://midjourney.com) - Produces the highest artistic quality images with unmatched aesthetics via Discord and web interface (🏷️ `Cloud` `Discord` `Web`).
- [Recraft](https://recraft.ai) - Design-first image generator with native vector art output and brand consistency tools for designers (🏷️ `Cloud` `Freemium` `Web`).
- [Stable Diffusion 3.5](https://stability.ai) - Open-source foundation model with full ControlNet, LoRA, and ComfyUI ecosystem for custom pipelines (🏷️ `Python` `Open-Source` `Local`).

### Video Generation

| Generator        | Max Length | Resolution | Open Source |
| ---------------- | ---------- | ---------- | ----------- |
| Sora 2           | 25 sec     | 1080p      | No          |
| Google Veo 3.1   | Variable   | 4K         | No          |
| Runway Gen-4.5   | Variable   | 1080p+     | No          |
| Kling 3.0        | 2 min      | 4K         | No          |
| Wan 2.1          | Unlimited  | Variable   | Yes         |
| HunyuanVideo     | Unlimited  | Variable   | Yes         |

- [Google Veo 3.1](https://deepmind.google/technologies/veo) - Generates the highest cinematic quality video with native audio from text prompts via Google DeepMind (🏷️ `Cloud` `Google` `API`).
- [HaiLuo AI](https://hailuoai.video) - Budget video generation platform offering 10 free videos per day with HD output quality (🏷️ `Cloud` `Freemium` `Web`).
- [HunyuanVideo](https://github.com/Tencent/HunyuanVideo) - Open-source video generation model from Tencent that runs on consumer-grade GPUs (🏷️ `Python` `Open-Source` `Local`).
- [Kling 3.0](https://klingai.com) - Generates 4K video up to 2 minutes long with native audio at the most competitive pricing available (🏷️ `Cloud` `Freemium` `Web`).
- [LTX Video](https://github.com/Lightricks/LTX-Video) - Commercially safe open-source video generation model trained on fully licensed data (🏷️ `Python` `Open-Source` `Local`).
- [Luma Dream Machine](https://lumalabs.ai/dream-machine) - Creates physics-accurate 4K HDR video scenes with 3D-style output for cinematic quality (🏷️ `Cloud` `Freemium` `Web`).
- [Pika 2.5](https://pika.art) - Beginner-friendly video generation tool with fast turnaround and intuitive editing controls (🏷️ `Cloud` `Freemium` `Web`).
- [Runway Gen-4.5](https://runwayml.com) - Professional video generation with Motion Brush and the highest benchmark scores for visual quality (🏷️ `Cloud` `Pro` `Web`).
- [Seedance 2.0](https://seedance.ai) - Quad-modal input video generator with built-in lip-sync and 2K resolution output (🏷️ `Cloud` `Freemium` `Web`).
- [Sora 2](https://sora.com) - Generates 25-second cinematic video clips with strong narrative coherence from text prompts by OpenAI (🏷️ `Cloud` `OpenAI` `Web`).
- [Wan 2.1](https://github.com/Wan-Video/Wan2.1) - Open-source self-hosted video generation model with unlimited length and no per-video costs (🏷️ `Python` `Open-Source` `Local`).

### Music and Audio Generation

- [ElevenLabs Music](https://elevenlabs.io/music) - Generates vocals and instrumentals with stem separation and per-section editing for audio production (🏷️ `Cloud` `ElevenLabs` `Web`).
- [Meta AudioCraft](https://github.com/facebookresearch/audiocraft) - Open-source audio generation suite including MusicGen and AudioGen with fine-grained prompt control (🏷️ `Python` `Open-Source` `Local`).
- [Stable Audio](https://stableaudio.com) - Generates instrumental audio tracks with a commercial license included by default for all outputs (🏷️ `Cloud` `Stability AI` `Web`).
- [Suno](https://suno.ai) - Generates complete songs with vocals, instruments, and lyrics from a single text prompt (🏷️ `Cloud` `Freemium` `Web`).
- [Udio](https://udio.com) - Produces high-fidelity music with fine-grained sectional control over generation and arrangement (🏷️ `Cloud` `Freemium` `Web`).

### 3D and Design Generation

- [Meshy](https://meshy.ai) - Generates 3D models from text or images for game assets and product visualization with multi-format export (🏷️ `Cloud` `Freemium` `Web`).
- [Tripo AI](https://tripo3d.ai) - Produces fast 3D model generation from text or images with multi-format export for rapid prototyping (🏷️ `Cloud` `Freemium` `Web`).
- [Vizcom](https://vizcom.ai) - Renders industrial design sketches into photorealistic 3D visuals in real-time for product designers (🏷️ `Cloud` `Pro` `Web`).

## Customer Support and CRM Agents

AI agents that automate customer support, CRM workflows, sales outreach, and ticket resolution at scale.

### Support Automation

| Platform         | Auto-Resolution | Best For           |
| ---------------- | --------------- | ------------------ |
| Intercom Fin     | 50%+ tickets    | SaaS teams         |
| Ada              | 60%+ tickets    | Complex resolution |
| Zendesk AI       | 30%+ tickets    | Enterprise         |
| Freshdesk Freddy | 25%+ tickets    | SMBs               |

- [Ada](https://www.ada.cx) - Resolves 60% of customer support tickets automatically with complex multi-turn query understanding (🏷️ `Cloud` `Enterprise` `Platform`).
- [Assembled](https://www.assembled.com) - Routes support tickets with workforce-aware scheduling and intelligent handoff to human agents (🏷️ `Cloud` `Enterprise` `Platform`).
- [Dixa](https://www.dixa.com) - CRM-first conversational support platform with AI-powered routing and customer context enrichment (🏷️ `Cloud` `Enterprise` `Platform`).
- [Freshdesk Freddy AI](https://www.freshworks.com/freddy-ai/) - Auto-triages and routes support tickets with smart AI suggestions for budget-conscious SMB teams (🏷️ `Cloud` `Freshworks` `Platform`).
- [Intercom Fin](https://www.intercom.com/fin) - Resolves 50% of SaaS support tickets by learning directly from your help center and knowledge base (🏷️ `Cloud` `Intercom` `Platform`).
- [Zendesk AI](https://www.zendesk.com/service/ai/) - Automates 30% of enterprise support tickets with deep integration into the existing Zendesk ecosystem (🏷️ `Cloud` `Zendesk` `Platform`).

### AI-Powered CRM Platforms

- [Creatio](https://www.creatio.com) - No-code CRM platform with pre-built AI agents for sales, marketing, and service automation (🏷️ `Cloud` `No-Code` `Platform`).
- [Dynamics 365 Copilot](https://www.microsoft.com/en-us/dynamics-365/solutions/ai) - Drafts, summarizes, and translates across Office 365 with deep Microsoft ecosystem integration (🏷️ `Cloud` `Microsoft` `Platform`).
- [HubSpot Breeze](https://www.hubspot.com/products/artificial-intelligence) - AI copilot with agent workflows and intelligence layer across marketing, sales, and service hubs (🏷️ `Cloud` `HubSpot` `Platform`).
- [Monday CRM Lexi](https://monday.com/crm) - AI sales agent with automated lead sourcing, qualification, and pipeline management for SMBs (🏷️ `Cloud` `Monday` `Platform`).
- [Pipedrive AI](https://www.pipedrive.com/en/features/ai-sales-assistant) - AI-powered email drafting, deal prioritization, and smart reporting for small sales teams (🏷️ `Cloud` `Pipedrive` `Platform`).
- [Salesforce Einstein](https://www.salesforce.com/artificial-intelligence) - Enterprise AI with predictions, autonomous agents, and CRM automation across the Salesforce platform (🏷️ `Cloud` `Salesforce` `Platform`).
- [Salesmate](https://www.salesmate.io) - CRM with AI-powered call summarization, lead qualification, and pipeline automation for small teams (🏷️ `Cloud` `CRM` `Platform`).
- [ServiceNow AI Agents](https://www.servicenow.com/products/ai-agents.html) - Orchestrates AI agents across IT, HR, and CRM workflows for enterprise service management (🏷️ `Cloud` `ServiceNow` `Platform`).
- [Zoho CRM Zia](https://www.zoho.com/zia/) - Predictive scoring, sentiment analysis, and voice commands for sales automation across Zoho products (🏷️ `Cloud` `Zoho` `Platform`).

### Sales and Outreach Agents

- [Apollo.io](https://www.apollo.io) - AI prospecting platform with 275M+ contacts, lead scoring, and automated email sequencing (🏷️ `Cloud` `Freemium` `Platform`).
- [Clay](https://www.clay.com) - Enriches leads from 70+ data providers and generates hyper-personalized outreach at scale (🏷️ `Cloud` `Pro` `Platform`).
- [Instantly](https://instantly.ai) - Generates AI cold emails with smart sender rotation and built-in domain warmup for deliverability (🏷️ `Cloud` `Pro` `Platform`).
- [Lavender](https://www.lavender.ai) - Coaches email writing in real-time with AI response scoring and recipient intelligence (🏷️ `Cloud` `Freemium` `Platform`).
- [Overloop CLI](https://overloop.com) - AI outbound CLI agent that sources 450M+ contacts and runs email plus LinkedIn campaigns with JSON output (🏷️ `Cloud` `CLI` `Platform`).

## Voice Agent Platforms

Platforms for building, deploying, and scaling voice-based AI agents across calls, support, and live conversations.

| Platform   | Latency | HIPAA | Best For                 |
| ---------- | ------- | ----- | ------------------------ |
| ElevenLabs | 75ms    | Yes   | Industry benchmark       |
| Vapi       | Low     | No    | Developer-first          |
| Bland AI   | Medium  | Yes   | Outbound call automation |
| PolyAI     | Low     | Yes   | Enterprise scale         |

- [AssemblyAI](https://www.assemblyai.com) - Speech-to-text API with speaker diarization, sentiment analysis, and summarization for voice agent pipelines (🏷️ `Cloud` `STT` `API`).
- [Bland AI](https://www.bland.ai) - Automates outbound phone calls at scale with SOC2 and HIPAA compliance and CRM integration (🏷️ `Cloud` `Telephony` `API`).
- [Deepgram](https://deepgram.com) - Sub-300ms speech-to-text and text-to-speech APIs purpose-built for real-time voice agent pipelines (🏷️ `Cloud` `STT/TTS` `API`).
- [ElevenLabs](https://elevenlabs.io) - Industry-leading voice AI with 75ms latency, Conversational AI 2.0, RAG, and HIPAA compliance (🏷️ `Cloud` `Voice` `Platform`).
- [HeyGen](https://www.heygen.com) - Creates AI talking avatars with voice cloning and lip-sync for video-based agent interactions (🏷️ `Cloud` `Avatar` `Web`).
- [PolyAI](https://poly.ai) - Enterprise voice AI platform for natural multi-turn conversations with high-volume call handling (🏷️ `Cloud` `Enterprise` `Platform`).
- [Retell AI](https://www.retellai.com) - Builds human-like voice agents with multi-language telephony support and low-latency responses (🏷️ `Cloud` `Telephony` `API`).
- [Synthesia](https://www.synthesia.io) - Generates AI video avatars that speak in 120+ languages for training and communication agents (🏷️ `Cloud` `Avatar` `Web`).
- [Synthflow](https://synthflow.ai) - No-code voice agent builder with pre-built templates for SMBs to deploy phone agents quickly (🏷️ `Cloud` `No-Code` `Platform`).
- [Voiceflow](https://www.voiceflow.com) - No-code builder for voice and chat agents with visual conversation design and team collaboration (🏷️ `Cloud` `No-Code` `Platform`).

## Deep Research Agents

AI platforms that conduct autonomous multi-step research, synthesize findings from multiple sources, and generate structured reports with citations.

| Agent            | Context Window | Approach                    |
| ---------------- | -------------- | --------------------------- |
| Claude Research  | 200K tokens    | Multi-step with citations   |
| ChatGPT Research | 128K tokens    | Extended reasoning + browse |
| Gemini Research  | 1M tokens      | Google Search + KG          |
| Perplexity Pro   | Variable       | Real-time cited search      |

- [ChatGPT Deep Research](https://openai.com/index/introducing-deep-research) - Conducts extended reasoning with web browsing to produce structured research reports with Canvas output (🏷️ `Cloud` `OpenAI` `Web`).
- [Claude Deep Research](https://www.anthropic.com/research) - Performs multi-step investigation with verified source citations and 200K token context window (🏷️ `Cloud` `Anthropic` `Web`).
- [DeerFlow](https://github.com/bytedance/deer-flow) - Multi-agent research system from ByteDance with planning and execution loops for autonomous investigation (🏷️ `Python` `Open-Source` `Research`).
- [Gemini Deep Research](https://blog.google/products/gemini/google-gemini-deep-research) - Leverages Google Search and Knowledge Graph integration with 1M token context for breadth-first research (🏷️ `Cloud` `Google` `Web`).
- [Perplexity Pro](https://www.perplexity.ai) - Provides real-time search answers with inline citations and follow-up threads for iterative research (🏷️ `Cloud` `Freemium` `Web`).

## Prompt-to-App Builders

Platforms that generate full-stack applications, components, or web apps from natural language prompts.

| Builder       | Output           | Hosting        |
| ------------- | ---------------- | -------------- |
| Bolt.new      | Full-stack app   | Browser/deploy |
| Lovable       | Full web app     | Auto-deploy    |
| v0 by Vercel  | React components | Vercel         |
| Replit Agent  | Full-stack       | Replit         |

- [Bolt.new](https://bolt.new) - Generates full-stack web applications in the browser from natural language prompts with instant deploy (🏷️ `Cloud` `Freemium` `Web`).
- [Dyad](https://github.com/dyad-sh/dyad) - Privacy-first open-source prompt-to-app builder that generates full-stack applications locally (🏷️ `TypeScript` `Open-Source` `Local`).
- [Google Project IDX](https://idx.google.com) - AI-powered cloud IDE with free Claude Opus access for building full projects across all frameworks (🏷️ `Cloud` `Google` `Web`).
- [Lovable](https://lovable.dev) - Iterates from chat to deployed web application with auto-deploy and real-time preview (🏷️ `Cloud` `Freemium` `Web`).
- [PlayCode Agent](https://playcode.io) - Browser-only lightweight web app creation tool with AI-assisted code generation (🏷️ `Cloud` `Pro` `Web`).
- [Replit Agent](https://replit.com/agent) - Builds and deploys full-stack projects from prompts with integrated hosting and collaboration (🏷️ `Cloud` `Freemium` `Web`).
- [v0 by Vercel](https://v0.dev) - Generates React and Tailwind UI components from text descriptions with one-click Vercel deployment (🏷️ `Cloud` `Freemium` `Web`).

## Multi-Agent Consumer Platforms

All-in-one AI platforms providing access to agents, tools, and models through consumer-facing interfaces without writing code.

| Platform   | Context | Flagship Features                          |
| ---------- | ------- | ------------------------------------------ |
| ChatGPT    | 128K    | GPTs, Deep Research, Canvas, Agent Mode    |
| Claude     | 200K    | Computer Use, MCP, Cowork                  |
| Gemini     | 1M      | Deep Think, Gems, NotebookLM               |
| Grok       | 131K    | Real-time X data, Grok Build               |

- [ChatGPT](https://openai.com/chatgpt) - General-purpose AI platform with GPTs, Deep Research, Canvas, and Agent Mode across the widest plugin ecosystem (🏷️ `Cloud` `OpenAI` `Web`).
- [Claude](https://www.anthropic.com/claude) - Reasoning-focused AI with Computer Use, MCP integration, and Chrome browsing for coding and long document analysis (🏷️ `Cloud` `Anthropic` `Web`).
- [Coze](https://www.coze.com) - No-code agent builder with a marketplace of 100+ custom agents and plugin integrations (🏷️ `Cloud` `ByteDance` `Web`).
- [Cursor AI Automated Team](https://github.com/cursor-team/automated-team) - 4-role AI team with PM, DEV, OPS, and QA agents in Cursor IDE with file-based task routing (🏷️ `TypeScript` `Cursor` `IDE`).
- [Gemini](https://deepmind.google/technologies/gemini) - Google's multimodal AI with 1M token context, Deep Think, Gems, and NotebookLM for workspace integration (🏷️ `Cloud` `Google` `Web`).
- [Grok](https://x.ai/grok) - Real-time AI with live X data access, Grok Build for 8-agent parallel code generation, and image generation (🏷️ `Cloud` `xAI` `Web`).
- [Meta AI](https://meta.ai) - Llama-powered AI integrated across WhatsApp, Messenger, and Instagram for conversational assistance (🏷️ `Cloud` `Meta` `Web`).
- [Microsoft Copilot](https://copilot.microsoft.com) - AI assistant integrated into Office 365, Teams, and Power Platform for enterprise productivity workflows (🏷️ `Cloud` `Microsoft` `Web`).
- [TeamHero](https://github.com/teamhero-ai/teamhero) - Open-source multi-agent orchestration with web dashboard, task lifecycle, knowledge base, and autopilot mode built on Claude Code (🏷️ `Python` `Claude` `Web`).

## Open-Source Models for Agents

Open-weight LLMs optimized for agentic tasks including tool use, planning, multi-step reasoning, and code generation.

| Model           | Organization | Parameters   | Agent Strength             |
| --------------- | ------------ | ------------ | -------------------------- |
| Llama 4         | Meta         | 8B-405B+     | Strong tool use            |
| Qwen 3          | Alibaba      | 0.6B-235B    | MCP-native, multilingual   |
| DeepSeek V3/R1  | DeepSeek     | 671B MoE     | 68x cheaper than GPT-4     |
| Gemma 3         | Google       | 1B-27B       | Efficient edge agents      |

- [Baichuan 3](https://huggingface.co/baichuan-inc) - Chinese-optimized open model family with strong domain performance for multilingual agent deployments (🏷️ `Python` `Open-Source` `Local`).
- [Command R+](https://cohere.com/command) - Cohere's 104B parameter model optimized specifically for RAG and enterprise tool use in agent workflows (🏷️ `Cloud` `Cohere` `API`).
- [DeepSeek V3](https://github.com/deepseek-ai/DeepSeek-V3) - 671B MoE model that delivers GPT-4 level reasoning at 68x lower cost for budget-conscious agent deployments (🏷️ `Python` `Open-Source` `Local`).
- [Falcon 3](https://huggingface.co/tiiuae) - Efficient open model from TII UAE with strong multilingual support across 10B to 180B parameter variants (🏷️ `Python` `Open-Source` `Local`).
- [Gemma 3](https://github.com/google-deepmind/gemma) - Efficient multimodal model from Google in 1B to 27B sizes ideal for edge and on-device agents (🏷️ `Python` `Google` `Local`).
- [Gemma 4](https://ai.google.dev/gemma) - Consumer and IoT-optimized model from Google in 2B to 31B sizes with E2B and E4B variants (🏷️ `Python` `Google` `Local`).
- [GLM-4](https://github.com/THUDM/GLM-4) - Zhipu AI's 744B MoE model achieving the lowest hallucination rate and 77.8% on SWE-bench (🏷️ `Python` `Open-Source` `Local`).
- [InternLM 3](https://github.com/InternLM/InternLM) - Shanghai AI Lab model with strong long-context reasoning capabilities for complex agent tasks (🏷️ `Python` `Open-Source` `Local`).
- [Llama 4](https://github.com/meta-llama/llama-models) - Meta's flagship open model family with Scout and Maverick variants and strong tool use capabilities (🏷️ `Python` `Meta` `Local`).
- [Mistral Large 2](https://mistral.ai/models) - Leading European open model at 123B parameters with strong function calling for agent workflows (🏷️ `Python` `Mistral` `API`).
- [Phi-4](https://huggingface.co/microsoft/phi-4) - Microsoft's compact 14B parameter model delivering strong reasoning for on-device and edge agent deployments (🏷️ `Python` `Microsoft` `Local`).
- [Qwen 3](https://github.com/QwenLM/Qwen3) - MCP-native multilingual model family from Alibaba with thinking mode across 0.6B to 235B sizes (🏷️ `Python` `Alibaba` `Local`).
- [Qwen 3.5-Omni](https://huggingface.co/Qwen/Qwen3-Omni) - Native multimodal model from Alibaba with text, image, and audio processing in a 397B MoE architecture (🏷️ `Python` `Alibaba` `Local`).
- [Qwen 3.6-Plus](https://qwenlm.github.io/blog/qwen3) - Agentic-focused model with 1M context window, repo-level coding, and MCP-native tool use (🏷️ `Python` `Alibaba` `Local`).
- [StarCoder 2](https://github.com/bigcode-project/starcoder2) - Code-focused open model trained on 600+ programming languages for specialized coding agents (🏷️ `Python` `BigCode` `Local`).
- [Yi-Lightning](https://github.com/01-ai/Yi) - 01.AI's multilingual model with long context and fast inference across 6B to 200B parameter sizes (🏷️ `Python` `Open-Source` `Local`).

## Market Stats and Benchmarks 2026

Key data points on the AI agent market covering adoption, growth, valuations, and fastest-growing open-source projects.

### Market Size

| Year | Market Size | Growth     |
| ---- | ----------- | ---------- |
| 2024 | $5.1B       | Baseline   |
| 2025 | $7.6B       | +49% YoY   |
| 2026 | $10.91B     | +43% YoY   |
| 2027 | $16.8B      | +54% YoY   |
| 2030 | $52.63B     | 46.3% CAGR |

### Adoption Rates

| Metric                                  | Value |
| --------------------------------------- | ----- |
| Orgs with agents in production          | 57%   |
| Devs using AI coding tools regularly    | 85%   |
| Companies planning agent deployment     | 72%   |
| Enterprises with dedicated agent budget | 41%   |

### Top Use Cases

| Use Case              | Share |
| --------------------- | ----- |
| Customer Service      | 26.5% |
| Research and Analysis | 24.4% |
| Workflow Automation   | 18.0% |
| Code Generation       | 15.0% |
| Data Processing       | 10.0% |

### Fastest Growing Open-Source Projects

| Project        | Stars (Jan 2026) | Stars (May 2026) | Growth |
| -------------- | ---------------- | ---------------- | ------ |
| Browser Use    | 10K              | 50K              | 5x     |
| Playwright MCP | 1K               | 10K              | 10x    |
| DeerFlow       | 5K               | 25K              | 5x     |

### Notable Valuations

| Company      | Valuation |
| ------------ | --------- |
| OpenAI       | $90B+     |
| Cursor       | $29.3B    |
| Anthropic    | $20B      |
| ElevenLabs   | $11B      |
| Mistral      | $6B       |
| Hugging Face | $4.5B     |

- [AI Agent Market Report 2026](https://www.marketsandmarkets.com) - Comprehensive market analysis projecting the AI agent market to reach $52.63B by 2030 at 46.3% CAGR (🏷️ `Report` `Market` `Research`).
- [State of AI Agents Survey](https://www.mckinsey.com) - Enterprise survey showing 57% of organizations now have AI agents in production workflows (🏷️ `Report` `Survey` `Research`).

## Local and Self-Hosted AI

Tools for running LLMs locally and self-hosting AI agent platforms with full privacy and control.

- [GPT4All](https://github.com/nomic-ai/gpt4all) - Open-source local chat application that runs LLMs on consumer hardware without cloud dependencies (🏷️ `C++` `Desktop` `Local`).
- [Jan](https://github.com/janhq/jan) - Open-source ChatGPT alternative that runs 100% offline with local model management and privacy guarantees (🏷️ `TypeScript` `Electron` `Desktop`).
- [Llamafile](https://github.com/Mozilla-Ocho/llamafile) - Distributes LLMs as single executable files with zero setup required from Mozilla (🏷️ `C++` `Portable` `Local`).
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - C/C++ LLM inference engine supporting CPU, GPU, and Apple Silicon as the foundation of local AI (🏷️ `C++` `Cross-Platform` `Local`).
- [LM Studio](https://lmstudio.ai) - Desktop application for running local LLMs with a polished UI across all major platforms (🏷️ `TypeScript` `Electron` `Desktop`).
- [LocalAI](https://github.com/mudler/LocalAI) - Drop-in OpenAI API replacement that runs models locally without requiring a GPU (🏷️ `Go` `Docker` `Local`).
- [Ollama](https://github.com/ollama/ollama) - Run LLMs locally with a dead-simple CLI interface and 162K+ GitHub stars (🏷️ `Go` `CLI` `Local`).
- [vLLM](https://github.com/vllm-project/vllm) - High-throughput LLM serving engine with PagedAttention for production-grade local inference (🏷️ `Python` `CUDA` `Local`).

## AI Governance and Compliance

Frameworks and tools for AI risk management, regulatory compliance, and governance as EU AI Act obligations take effect August 2026.

- [AuditOne](https://www.auditone.ai) - Automated risk assessments and audit-ready documentation for AI agent compliance workflows (🏷️ `Cloud` `Compliance` `Platform`).
- [Bifrost](https://github.com/bifrost-sec/bifrost) - Real-time security enforcement engine for agent pipelines with policy-based access controls (🏷️ `Python` `Security` `SDK`).
- [Credo AI](https://www.credo.ai) - End-to-end AI governance platform with EU AI Act policy packs and model inventory management (🏷️ `Cloud` `Governance` `Platform`).
- [EU AI Act](https://artificialintelligenceact.eu) - Official EU regulatory framework classifying AI systems by risk tier from unacceptable to minimal risk (🏷️ `Policy` `Regulation` `EU`).
- [IBM watsonx.governance](https://www.ibm.com/products/watsonx-governance) - Enterprise AI risk, compliance, and model monitoring platform for regulated industries (🏷️ `Cloud` `IBM` `Platform`).
- [Microsoft Agent Governance Toolkit](https://github.com/microsoft/agent-governance) - Runtime policy enforcement and guardrails for Azure-hosted AI agents (🏷️ `Cloud` `Microsoft` `Platform`).
- [NIST AI RMF](https://www.nist.gov/artificial-intelligence/risk-management-framework) - US framework for AI risk management covering Govern, Map, Measure, and Manage functions (🏷️ `Policy` `Framework` `US`).
- [OneTrust AI Governance](https://www.onetrust.com/solutions/ai-governance) - Risk classification, consent management, and compliance workflows for AI agent deployments (🏷️ `Cloud` `Compliance` `Platform`).

## Cybersecurity Agents

AI agents specialized in penetration testing, vulnerability discovery, threat detection, and security analysis.

- [CAI](https://github.com/aliasaria/cai) - AI-powered penetration testing and red teaming agent with human-in-the-loop vulnerability discovery (🏷️ `Python` `Security` `CLI`).
- [CrowdStrike Charlotte AI](https://www.crowdstrike.com/platform/charlotte-ai) - Enterprise AI security analyst for automated threat hunting and incident response (🏷️ `Cloud` `Enterprise` `Platform`).
- [Microsoft Security Copilot](https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-security-copilot) - Enterprise threat detection and incident response AI integrated across Microsoft security products (🏷️ `Cloud` `Microsoft` `Platform`).
- [PentestGPT](https://github.com/GreyDGL/PentestGPT) - GPT-powered penetration testing tool with automated reasoning for vulnerability assessment (🏷️ `Python` `Security` `CLI`).
- [YAWNING TITAN](https://github.com/dstl/YAWNING-TITAN) - Graph-based cybersecurity simulation environment for training and testing defensive AI agents (🏷️ `Python` `Simulation` `Research`).

## Healthcare and Therapy Agents

AI agents for mental health support, cognitive training, and therapy-adjacent applications with clinical validation.

- [Akili Interactive](https://www.akiliinteractive.com) - FDA-cleared video game-based digital medicine for ADHD using neuroplasticity-focused cognitive training (🏷️ `Cloud` `FDA-Cleared` `Medical`).
- [CittaVerse](https://github.com/cittaverse/cittaverse) - AI-assisted reminiscence therapy for elderly cognitive training with narrative quality scoring and life story book generation (🏷️ `Python` `Research` `Therapy`).
- [Elomia](https://elomia.com) - Clinician-designed AI therapy chatbot with natural conversation flow and anonymous interaction by design (🏷️ `Cloud` `Mental Health` `Web`).
- [Ginger](https://www.ginger.com) - On-demand mental healthcare platform combining AI coaching with live therapists using CBT and DBT approaches (🏷️ `Cloud` `Mental Health` `Mobile`).
- [Headspace Health](https://www.headspace.com) - Meditation and mental health platform with CBT-based courses, sleep programs, and clinical partnerships (🏷️ `Cloud` `Wellness` `Mobile`).
- [Replika](https://replika.com) - AI companion with Rogerian-style support, persistent memory, and mood tracking for social wellbeing (🏷️ `Cloud` `Companion` `Mobile`).
- [Sanvello](https://www.sanvello.com) - CBT tools with mood tracking and coaching covered by insurance plans for accessible mental healthcare (🏷️ `Cloud` `Mental Health` `Mobile`).
- [Talkspace AI](https://www.talkspace.com) - AI-assisted therapy matching platform with human therapist backup for personalized mental health care (🏷️ `Cloud` `Therapy` `Mobile`).
- [Tess by X2AI](https://www.x2ai.com) - SMS-based therapy coach using CBT with clinical validation showing 28% depression reduction (🏷️ `Cloud` `Mental Health` `SMS`).
- [Woebot](https://woebothealth.com) - CBT-based mental health chatbot that is FDA-cleared and Stanford-validated for therapeutic conversations (🏷️ `Cloud` `FDA-Cleared` `Mobile`).
- [Wysa](https://www.wysa.com) - NHS-approved AI mental health companion using CBT and DBT with anonymous design principles (🏷️ `Cloud` `Mental Health` `Mobile`).
- [Youper](https://www.youper.ai) - Emotional health assistant using CBT and ACT with Stanford-tested clinical effectiveness for mood tracking (🏷️ `Cloud` `Mental Health` `Mobile`).

## Newsletters and Communities

Curated newsletters, podcasts, and communities for staying current with AI agent development.

- [AI Engineering Newsletter](https://www.latent.space) - AI engineering podcast and newsletter by Swyx and Alessio covering agent architectures and tooling (🏷️ `Newsletter` `Podcast` `Web`).
- [aibtc.news](https://aibtc.news) - Bitcoin-focused agent news platform with bounties and classifieds for the agent economy (🏷️ `Newsletter` `Bitcoin` `Web`).
- [Awesome Agents Newsletter](https://awesomeagents.substack.com) - Weekly curated tools and reviews covering the latest in AI agent development (🏷️ `Newsletter` `Weekly` `Web`).
- [Ben's Bites](https://bensbites.beehiiv.com) - Daily AI newsletter with a builder focus covering tools, launches, and trends (🏷️ `Newsletter` `Daily` `Web`).
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI) - Reddit community for Claude users sharing agent workflows, prompts, and integration patterns (🏷️ `Community` `Reddit` `Forum`).
- [r/LangChain](https://www.reddit.com/r/LangChain) - Reddit community for agent developers using LangChain, LangGraph, and related frameworks (🏷️ `Community` `Reddit` `Forum`).
- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA) - Reddit community for self-hosted LLM users sharing local deployment and agent setup guides (🏷️ `Community` `Reddit` `Forum`).
- [State of Agent Engineering](https://www.stateofagentengineering.com) - Annual industry report surveying 1300+ practitioners on agent development trends (🏷️ `Report` `Annual` `Web`).
- [The Rundown AI](https://www.therundown.ai) - Daily AI digest reaching 600K+ subscribers with concise coverage of agent news and launches (🏷️ `Newsletter` `Daily` `Web`).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full update history.

## Contributing

Your contributions are what keep this list useful. Read [Contributing.md](Contributing.md) for the entry format, inclusion criteria, and style guide.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ARUNAGIRINATHAN-K/awesome-ai-agents&type=Date)](https://star-history.com/#ARUNAGIRINATHAN-K/awesome-ai-agents&Date)
