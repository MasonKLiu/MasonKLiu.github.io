import { siteConfig, type SupportedLang } from "@/config/env";

export type Lang = SupportedLang;

export interface MetricItem {
  label: string;
  value: number;
  suffix: string;
  detail: string;
}

export interface PillarItem {
  code: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  layer: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  status: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  deliverables: {
    module: string;
    detail: string;
    tags: string[];
  }[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  featured?: boolean;
  summary: string;
  specs: string[];
  tech: string[];
  url: string;
}

export interface PortfolioContent {
  nav: {
    overview: string;
    architecture: string;
    capabilities: string;
    experience: string;
    projects: string;
    connect: string;
  };
  hero: {
    status: string;
    roleLine: string;
    name: string;
    nativeName: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollPrompt: string;
    terminalTitle: string;
    terminalLines: {
      command: string;
      outputs: { key: string; value: string; accent?: boolean }[];
    };
  };
  architecture: {
    index: string;
    title: string;
    subtitle: string;
    bio: string;
    metrics: MetricItem[];
    pillars: PillarItem[];
  };
  capabilities: {
    index: string;
    title: string;
    subtitle: string;
    filterAll: string;
    categories: SkillCategory[];
  };
  experience: {
    index: string;
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  projects: {
    index: string;
    title: string;
    subtitle: string;
    viewRepo: string;
    featuredLabel: string;
    items: ProjectItem[];
  };
  connect: {
    index: string;
    title: string;
    summary: string;
    copyEmail: string;
    copiedEmail: string;
    openGithub: string;
    backToTop: string;
    runtimeLabel: string;
    endpointLabel: string;
    sourceLabel: string;
    poweredBy: string;
  };
}

export const portfolioData: Record<Lang, PortfolioContent> = {
  zh: {
    nav: {
      overview: "總覽",
      architecture: "架構定位",
      capabilities: "技術矩陣",
      experience: "工程履歷",
      projects: "系統專案",
      connect: "連線資訊",
    },
    hero: {
      status: "SYSTEM ONLINE · TAIPEI, TW",
      roleLine: "Systems Architect & Full-Stack Software Engineer",
      name: "MASON LIU",
      nativeName: "劉孟澤 · 企業系統架構師與全端工程師",
      summary:
        "專注於跨區域企業系統現代化、Go / .NET 高併發後端服務、Next.js / React / Vue 前端架構，以及本地優先的 AI Agent 與 MCP 工具鏈整合。",
      ctaPrimary: "檢視系統履歷",
      ctaSecondary: "前往 GitHub",
      scrollPrompt: "向下捲動瀏覽完整架構卷軸",
      terminalTitle: "telemetry://masonkliu.sys",
      terminalLines: {
        command: "$ inspect --profile masonkliu --env production",
        outputs: [
          { key: "NODE", value: `${siteConfig.siteUrl}`, accent: true },
          { key: "FOCUS", value: "Enterprise eRMA · MES · ERP · AI Agents" },
          { key: "REGIONS", value: "TW / CN / US / FR / JP (5 Production Nodes)" },
          { key: "STACK", value: "Go · TypeScript · C# · Next.js · GraphQL · SQL" },
          { key: "LIBRARY", value: "Fullend Design Engine (40 Modules / 37 Repos)", accent: true },
        ],
      },
    },
    architecture: {
      index: "02",
      title: "系統定位與工程原則",
      subtitle: "將複雜遺留系統轉化為可觀測、型別安全且可長期維運的數位架構",
      bio: "現任磐儀科技（ARBOR Technology）全端與後端軟體工程師，主導跨台灣、中國、美國、法國與日本據點的企業核心平台架構設計與遷移。工程實踐強調清晰的領域邊界、強型別 API 合約、自動化資料管線與低耦合微服務部署，同時持續建構本地優先的 AI Agent 協作與設計知識庫基礎設施。",
      metrics: [
        {
          label: "跨區部署節點",
          value: 5,
          suffix: "+",
          detail: "TW · CN · US · FR · JP",
        },
        {
          label: "Fullend 設計能力模組",
          value: 40,
          suffix: "",
          detail: "UI / 動態 / 3D / MCP 整合",
        },
        {
          label: "同步上游專案庫",
          value: 37,
          suffix: "",
          detail: "自動化索引與 RAG 片段",
        },
        {
          label: "工作語言能力",
          value: 3,
          suffix: "",
          detail: "繁體中文 · English · 日本語",
        },
      ],
      pillars: [
        {
          code: "SYS-A",
          title: "分層架構與強型別合約",
          description:
            "以 Clean Architecture 隔離核心業務邏輯與外部資料庫依賴，透過 GraphQL Schema、gqlgen 與 TypeScript 建立前後端一致的型別邊界。",
        },
        {
          code: "SYS-B",
          title: "跨庫資料流與系統現代化",
          description:
            "處理 SQL Server、Oracle（MES/ERP）與 PostgreSQL 間的異質資料遷移、批次預存程序優化、SSE 即時日誌串流與附件淨化流程。",
        },
        {
          code: "SYS-C",
          title: "本地優先 AI Agent 與 MCP",
          description:
            "設計多代理協作工作流（Orchestrator / Scout / Builder / Verifier）、本地知識圖譜、RAG 文件索引與標準化 MCP stdio / REST 服務介面。",
        },
      ],
    },
    capabilities: {
      index: "03",
      title: "技術棧與系統能力矩陣",
      subtitle: "橫跨後端高吞吐服務、現代前端介面、企業資料庫與 AI 工程基礎設施",
      filterAll: "全部模組",
      categories: [
        {
          id: "backend",
          name: "Backend & API Engineering",
          layer: "LAYER 01 · SERVICES",
          items: [
            "Go (Gin / gqlgen / GORM)",
            "C# (.NET 8 / .NET Core / Dapper)",
            "GraphQL & DataLoader",
            "RESTful API & SSE Streaming",
            "Dual-Token Auth (JWT + Redis)",
            "Clean Architecture",
          ],
        },
        {
          id: "frontend",
          name: "Frontend & Interactive UI",
          layer: "LAYER 02 · INTERFACE",
          items: [
            "Next.js 15 (App Router)",
            "React 18 & TypeScript",
            "Vue 2 / Vue 3 (Element Plus)",
            "Tailwind CSS & Shadcn UI",
            "Framer Motion & Magic UI",
            "Three.js & WebGL",
          ],
        },
        {
          id: "data",
          name: "Databases & Caching",
          layer: "LAYER 03 · PERSISTENCE",
          items: [
            "Microsoft SQL Server",
            "Oracle DB (MES / ERP)",
            "PostgreSQL",
            "SQLite (Local-First)",
            "Redis",
            "Qdrant Vector DB",
          ],
        },
        {
          id: "ai-infra",
          name: "AI Systems, Cloud & DevOps",
          layer: "LAYER 04 · RUNTIME",
          items: [
            "MCP Servers (stdio / HTTP)",
            "Claude Code & Multi-Agent",
            "Ollama / LangGraph / RAG",
            "Docker Compose & GitHub Actions",
            "Cloudflare Workers / KV / AWS",
            "Windows Server / IIS / PM2 / NSSM",
          ],
        },
      ],
    },
    experience: {
      index: "04",
      title: "工程履歷與系統交付軸",
      subtitle: "隨捲軸推進檢視跨區域企業系統重構與關鍵生產環境交付紀錄",
      items: [
        {
          id: "arbor-2025",
          period: "2025 — PRESENT",
          status: "ACTIVE PRODUCTION",
          role: "Full-Stack & Backend Software Engineer",
          organization: "ARBOR Technology Corp. (磐儀科技)",
          location: "Taipei, Taiwan · Global 5 Regions",
          summary:
            "主導跨國多區域企業核心平台從零建置與遺留系統重構，涵蓋全球 eRMA 售後維修平台、MES/ERP 資料庫整合服務與內部人才招募系統。",
          deliverables: [
            {
              module: "Global Multi-Region eRMA Platform",
              detail:
                "以 Go + Next.js 15 + GraphQL DataLoader 建置五區共用平台，整合動態排程 SSE 即時日誌串流、PDF 報表自動生成與跨庫 ERP/MES 保固分析。",
              tags: ["Go", "Next.js 15", "GraphQL", "SSE", "PDF"],
            },
            {
              module: "Cross-Region Schema & Attachment Migration",
              detail:
                "執行多國遺留 SQL Server 與遠端 ERP/MES 資料庫結構遷移，建立 UUID 附件安全淨化與多階段狀態同步管線，確保零遺失切換。",
              tags: ["SQL Server", "Oracle", "ETL", "UUID Pipeline"],
            },
            {
              module: "MES / ERP .NET Integration Service Refactor",
              detail:
                "重構 C# / .NET 整合服務為非同步 Dapper 倉儲架構，封裝 Oracle Stored Procedures 批次呼叫與 MailKit 自動告警通知機制。",
              tags: ["C#", ".NET 8", "Dapper", "Oracle SP", "MailKit"],
            },
            {
              module: "Arbor Resume & DISC Assessment Platform",
              detail:
                "獨立開發企業招募系統，支援內外部應徵分流、時效性邀請 Token 驗證與 16 題 DISC 性格分析模組。",
              tags: ["TypeScript", "Token Auth", "DISC Module"],
            },
          ],
        },
      ],
    },
    projects: {
      index: "05",
      title: "代表專案與開源系統",
      subtitle: "結合設計專案庫、多代理協作架構與自動化靜態部署的個人工程實作",
      viewRepo: "檢視 GitHub 原始碼",
      featuredLabel: "CORE ARCHITECTURE",
      items: [
        {
          id: "fullend",
          name: "Fullend · Agent Design Library",
          category: "AI DESIGN ENGINE / MCP",
          featured: true,
          summary:
            "本機設計與影音專案知識庫，收錄 40 項能力模組與 37 個上游開源專案（涵蓋 Magic UI、Shadcn UI、UI/UX Pro Max、Three.js、GSAP 等），提供正體中文管理介面、MCP stdio 工具、REST API、RAG 文件切片與多供應商 AI 引擎整合。",
          specs: [
            "Node.js 零第三方相依核心伺服器",
            "MCP stdio + REST API + JSONL RAG 匯出",
            "自動化版本比對與上游 fast-forward 同步",
          ],
          tech: ["Node.js", "MCP", "REST API", "RAG", "Multi-LLM"],
          url: siteConfig.repos.fullend,
        },
        {
          id: "agent-team",
          name: "agent-team",
          category: "MULTI-AGENT FRAMEWORK",
          summary:
            "專為 Claude Code 設計的 Orchestrator + Scout / Builder / Verifier 多代理協作框架，遵循 RFC-001 工程規範與可強制執行的 CI 驗證閘道。",
          specs: [
            "角色分工式多代理協調協定",
            "RFC-001 規格約束與自動化驗證",
            "可整合至現有軟體開發 CI/CD 流程",
          ],
          tech: ["Python", "Claude Code", "Multi-Agent", "RFC-001", "CI/CD"],
          url: siteConfig.repos.agentTeam,
        },
        {
          id: "portfolio-scroll",
          name: "MasonKLiu.github.io",
          category: "DIGITAL SCROLL PORTFOLIO",
          summary:
            "以 Fullend 專案庫為核心改寫的科技藍色數位卷軸個人網站，整合 .env 環境組態管理、即時捲動遙測軸與 GitHub Actions 自動化靜態部署。",
          specs: [
            "調用 Fullend Magic UI 與設計系統規範",
            "透過 .env 集中管理站點網址與執行參數",
            "支援繁體中文 / English / 日本語三語切換",
          ],
          tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
          url: siteConfig.repos.portfolio,
        },
      ],
    },
    connect: {
      index: "06",
      title: "建立連線與技術交流",
      summary:
        "歡迎針對企業核心系統重構、Go / Next.js 全端架構設計，或 AI Agent / MCP 本地工具鏈落地進行技術討論與合作。",
      copyEmail: "複製聯絡信箱",
      copiedEmail: "已複製信箱位址",
      openGithub: "開啟 GitHub 主頁",
      backToTop: "返回卷軸頂端",
      runtimeLabel: "RUNTIME CONFIG (.env)",
      endpointLabel: "SITE ENDPOINT",
      sourceLabel: "SOURCE REPO",
      poweredBy: "Built with React, TypeScript, Tailwind CSS & Fullend Design Library.",
    },
  },

  en: {
    nav: {
      overview: "Overview",
      architecture: "Architecture",
      capabilities: "Capabilities",
      experience: "Experience",
      projects: "Systems",
      connect: "Connect",
    },
    hero: {
      status: "SYSTEM ONLINE · TAIPEI, TW",
      roleLine: "Systems Architect & Full-Stack Software Engineer",
      name: "MASON LIU",
      nativeName: "Liu Meng Tse · Enterprise Systems & AI Workflow Engineer",
      summary:
        "Architecting multi-region enterprise modernizations, high-throughput Go / .NET services, modern Next.js / React / Vue frontends, and local-first AI Agent / MCP infrastructure.",
      ctaPrimary: "Explore System Scroll",
      ctaSecondary: "Open GitHub",
      scrollPrompt: "Scroll down to traverse the architecture log",
      terminalTitle: "telemetry://masonkliu.sys",
      terminalLines: {
        command: "$ inspect --profile masonkliu --env production",
        outputs: [
          { key: "NODE", value: `${siteConfig.siteUrl}`, accent: true },
          { key: "FOCUS", value: "Enterprise eRMA · MES · ERP · AI Agents" },
          { key: "REGIONS", value: "TW / CN / US / FR / JP (5 Production Nodes)" },
          { key: "STACK", value: "Go · TypeScript · C# · Next.js · GraphQL · SQL" },
          { key: "LIBRARY", value: "Fullend Design Engine (40 Modules / 37 Repos)", accent: true },
        ],
      },
    },
    architecture: {
      index: "02",
      title: "Architecture & Engineering Principles",
      subtitle:
        "Transforming legacy enterprise platforms into observable, type-safe, maintainable digital systems",
      bio: "Full-Stack & Backend Software Engineer at ARBOR Technology Corp., leading architecture and modernization for mission-critical platforms across Taiwan, China, USA, France, and Japan. Focused on clear domain boundaries, type-safe API contracts, resilient cross-database pipelines, and practical local-first AI agent tooling.",
      metrics: [
        {
          label: "Regional Production Nodes",
          value: 5,
          suffix: "+",
          detail: "TW · CN · US · FR · JP",
        },
        {
          label: "Fullend Library Modules",
          value: 40,
          suffix: "",
          detail: "UI / Motion / 3D / MCP",
        },
        {
          label: "Synced Upstream Repos",
          value: 37,
          suffix: "",
          detail: "Indexed Docs & RAG Chunks",
        },
        {
          label: "Working Languages",
          value: 3,
          suffix: "",
          detail: "ZH-TW · English · 日本語",
        },
      ],
      pillars: [
        {
          code: "SYS-A",
          title: "Layered Boundaries & Type-Safe Contracts",
          description:
            "Isolating core domain rules from infrastructure using Clean Architecture, GraphQL schemas, gqlgen, and strict TypeScript interfaces.",
        },
        {
          code: "SYS-B",
          title: "Cross-Database Pipelines & Modernization",
          description:
            "Executing heterogeneous migrations across SQL Server, Oracle (MES/ERP), and PostgreSQL with SSE real-time logging and sanitized file pipelines.",
        },
        {
          code: "SYS-C",
          title: "Local-First AI Agents & MCP Tooling",
          description:
            "Building orchestrated multi-agent pipelines, local RAG document indexes, and standardized MCP stdio / REST endpoints for engineering workflows.",
        },
      ],
    },
    capabilities: {
      index: "03",
      title: "Technical Stack & Capability Matrix",
      subtitle:
        "Spanning high-throughput backend services, interactive web interfaces, enterprise data stores, and AI infrastructure",
      filterAll: "All Modules",
      categories: [
        {
          id: "backend",
          name: "Backend & API Engineering",
          layer: "LAYER 01 · SERVICES",
          items: [
            "Go (Gin / gqlgen / GORM)",
            "C# (.NET 8 / .NET Core / Dapper)",
            "GraphQL & DataLoader",
            "RESTful API & SSE Streaming",
            "Dual-Token Auth (JWT + Redis)",
            "Clean Architecture",
          ],
        },
        {
          id: "frontend",
          name: "Frontend & Interactive UI",
          layer: "LAYER 02 · INTERFACE",
          items: [
            "Next.js 15 (App Router)",
            "React 18 & TypeScript",
            "Vue 2 / Vue 3 (Element Plus)",
            "Tailwind CSS & Shadcn UI",
            "Framer Motion & Magic UI",
            "Three.js & WebGL",
          ],
        },
        {
          id: "data",
          name: "Databases & Caching",
          layer: "LAYER 03 · PERSISTENCE",
          items: [
            "Microsoft SQL Server",
            "Oracle DB (MES / ERP)",
            "PostgreSQL",
            "SQLite (Local-First)",
            "Redis",
            "Qdrant Vector DB",
          ],
        },
        {
          id: "ai-infra",
          name: "AI Systems, Cloud & DevOps",
          layer: "LAYER 04 · RUNTIME",
          items: [
            "MCP Servers (stdio / HTTP)",
            "Claude Code & Multi-Agent",
            "Ollama / LangGraph / RAG",
            "Docker Compose & GitHub Actions",
            "Cloudflare Workers / KV / AWS",
            "Windows Server / IIS / PM2 / NSSM",
          ],
        },
      ],
    },
    experience: {
      index: "04",
      title: "Engineering Timeline & Deliverables",
      subtitle:
        "Scroll-linked record of enterprise architecture modernizations and production rollouts",
      items: [
        {
          id: "arbor-2025",
          period: "2025 — PRESENT",
          status: "ACTIVE PRODUCTION",
          role: "Full-Stack & Backend Software Engineer",
          organization: "ARBOR Technology Corp.",
          location: "Taipei, Taiwan · Global 5 Regions",
          summary:
            "Leading greenfield platform architecture and legacy system modernization across global eRMA, MES/ERP integration services, and internal recruiting tools.",
          deliverables: [
            {
              module: "Global Multi-Region eRMA Platform",
              detail:
                "Architected a 5-region platform using Go, Next.js 15, and GraphQL DataLoader with dynamic cron SSE live logs, automated PDF reports, and cross-DB ERP/MES warranty analytics.",
              tags: ["Go", "Next.js 15", "GraphQL", "SSE", "PDF"],
            },
            {
              module: "Cross-Region Schema & Attachment Migration",
              detail:
                "Led legacy SQL Server and remote ERP/MES schema migrations alongside UUID-based physical attachment sanitization and multi-stage sync pipelines.",
              tags: ["SQL Server", "Oracle", "ETL", "UUID Pipeline"],
            },
            {
              module: "MES / ERP .NET Integration Service Refactor",
              detail:
                "Refactored C# / .NET integration services into async Dapper repositories with batched Oracle Stored Procedures and automated MailKit alerts.",
              tags: ["C#", ".NET 8", "Dapper", "Oracle SP", "MailKit"],
            },
            {
              module: "Arbor Resume & DISC Assessment Platform",
              detail:
                "Built an internal/external candidate portal featuring expiring invite tokens and a 16-question DISC behavioral profiling module.",
              tags: ["TypeScript", "Token Auth", "DISC Module"],
            },
          ],
        },
      ],
    },
    projects: {
      index: "05",
      title: "Featured Systems & Repositories",
      subtitle:
        "Open-source design intelligence, multi-agent orchestration, and automated static infrastructure",
      viewRepo: "Inspect Repository",
      featuredLabel: "CORE ARCHITECTURE",
      items: [
        {
          id: "fullend",
          name: "Fullend · Agent Design Library",
          category: "AI DESIGN ENGINE / MCP",
          featured: true,
          summary:
            "Local-first design and motion/media library indexing 40 capability modules across 37 upstream repositories (Magic UI, Shadcn UI, UI/UX Pro Max, Three.js, GSAP) with MCP stdio tools, REST API, RAG chunk export, and multi-provider AI adapters.",
          specs: [
            "Zero-dependency Node.js runtime core",
            "MCP stdio + REST API + JSONL RAG export",
            "Safe fast-forward upstream sync & version audit",
          ],
          tech: ["Node.js", "MCP", "REST API", "RAG", "Multi-LLM"],
          url: siteConfig.repos.fullend,
        },
        {
          id: "agent-team",
          name: "agent-team",
          category: "MULTI-AGENT FRAMEWORK",
          summary:
            "Orchestrator + Scout / Builder / Verifier multi-agent framework built for Claude Code, governed by RFC-001 contracts and enforceable CI verification gates.",
          specs: [
            "Role-separated agent orchestration protocol",
            "RFC-001 governance with strict CI checks",
            "Composable verification pipelines for engineering repos",
          ],
          tech: ["Python", "Claude Code", "Multi-Agent", "RFC-001", "CI/CD"],
          url: siteConfig.repos.agentTeam,
        },
        {
          id: "portfolio-scroll",
          name: "MasonKLiu.github.io",
          category: "DIGITAL SCROLL PORTFOLIO",
          summary:
            "Blue digital scroll-driven engineering portfolio rewritten with the Fullend Design Library, driven by .env runtime configuration and automated GitHub Pages deployment.",
          specs: [
            "Built with Fullend Magic UI & HUD telemetry patterns",
            "Centralized .env site URL & runtime configuration",
            "Full ZH-TW / EN / JA internationalization",
          ],
          tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
          url: siteConfig.repos.portfolio,
        },
      ],
    },
    connect: {
      index: "06",
      title: "Connect & Runtime Endpoints",
      summary:
        "Open to discussions around enterprise system modernization, Go / Next.js architecture, and practical local-first AI Agent / MCP engineering.",
      copyEmail: "Copy Email",
      copiedEmail: "Email Copied",
      openGithub: "Visit GitHub",
      backToTop: "Back to Top",
      runtimeLabel: "RUNTIME CONFIG (.env)",
      endpointLabel: "SITE ENDPOINT",
      sourceLabel: "SOURCE REPO",
      poweredBy: "Built with React, TypeScript, Tailwind CSS & Fullend Design Library.",
    },
  },

  ja: {
    nav: {
      overview: "概要",
      architecture: "設計指針",
      capabilities: "技術スタック",
      experience: "職務経歴",
      projects: "プロジェクト",
      connect: "連絡先",
    },
    hero: {
      status: "SYSTEM ONLINE · TAIPEI, TW",
      roleLine: "Systems Architect & Full-Stack Software Engineer",
      name: "MASON LIU",
      nativeName: "劉孟澤 · 基幹システムアーキテクト・フルスタックエンジニア",
      summary:
        "複数拠点向け基幹システムの刷新、Go / .NET 高スループットバックエンド、Next.js / React / Vue フロントエンド、およびローカル優先の AI エージェント・MCP 基盤構築を専門としています。",
      ctaPrimary: "アーキテクチャを見る",
      ctaSecondary: "GitHub を開く",
      scrollPrompt: "スクロールしてシステム構成を展開",
      terminalTitle: "telemetry://masonkliu.sys",
      terminalLines: {
        command: "$ inspect --profile masonkliu --env production",
        outputs: [
          { key: "NODE", value: `${siteConfig.siteUrl}`, accent: true },
          { key: "FOCUS", value: "Enterprise eRMA · MES · ERP · AI Agents" },
          { key: "REGIONS", value: "TW / CN / US / FR / JP (5 Production Nodes)" },
          { key: "STACK", value: "Go · TypeScript · C# · Next.js · GraphQL · SQL" },
          { key: "LIBRARY", value: "Fullend Design Engine (40 Modules / 37 Repos)", accent: true },
        ],
      },
    },
    architecture: {
      index: "02",
      title: "設計指針とコア領域",
      subtitle: "複雑なレガシー基幹システムを、型安全で保守性の高いモダンアーキテクチャへ刷新",
      bio: "ARBOR Technology Corp.（磐儀科技）にてフルスタック・バックエンドエンジニアとして、台湾・中国・米国・フランス・日本の各拠点向け基幹プラットフォームの設計および移行を担当。クリーンアーキテクチャ、型安全な API 設計、信頼性の高いデータパイプラインと AI エージェント運用基盤を重視しています。",
      metrics: [
        {
          label: "グローバル展開拠点",
          value: 5,
          suffix: "+",
          detail: "TW · CN · US · FR · JP",
        },
        {
          label: "Fullend 設計モジュール",
          value: 40,
          suffix: "",
          detail: "UI / モーション / 3D / MCP",
        },
        {
          label: "管理対象リポジトリ",
          value: 37,
          suffix: "",
          detail: "自動インデックス・RAG 連携",
        },
        {
          label: "対応言語",
          value: 3,
          suffix: "",
          detail: "繁体字中国語 · 英語 · 日本語",
        },
      ],
      pillars: [
        {
          code: "SYS-A",
          title: "レイヤード設計と型安全コントラクト",
          description:
            "クリーンアーキテクチャにより業務ロジックとインフラを分離し、GraphQL Schema・gqlgen・TypeScript で厳密な型境界を維持します。",
        },
        {
          code: "SYS-B",
          title: "異種 DB 連携とレガシー刷新",
          description:
            "SQL Server・Oracle（MES/ERP）・PostgreSQL 間のスキーマ移行、ストアドプロシージャ最適化、SSE ログ配信および添付ファイル移行を設計します。",
        },
        {
          code: "SYS-C",
          title: "ローカル優先 AI エージェント・MCP",
          description:
            "マルチエージェント協調基盤、ローカル RAG 検索インデックス、標準化された MCP stdio / REST インターフェースを実装します。",
        },
      ],
    },
    capabilities: {
      index: "03",
      title: "技術スタック・システム能力",
      subtitle: "高負荷バックエンド、インタラクティブ UI、基幹データベース、AI インフラを横断",
      filterAll: "すべて表示",
      categories: [
        {
          id: "backend",
          name: "Backend & API Engineering",
          layer: "LAYER 01 · SERVICES",
          items: [
            "Go (Gin / gqlgen / GORM)",
            "C# (.NET 8 / .NET Core / Dapper)",
            "GraphQL & DataLoader",
            "RESTful API & SSE Streaming",
            "Dual-Token Auth (JWT + Redis)",
            "Clean Architecture",
          ],
        },
        {
          id: "frontend",
          name: "Frontend & Interactive UI",
          layer: "LAYER 02 · INTERFACE",
          items: [
            "Next.js 15 (App Router)",
            "React 18 & TypeScript",
            "Vue 2 / Vue 3 (Element Plus)",
            "Tailwind CSS & Shadcn UI",
            "Framer Motion & Magic UI",
            "Three.js & WebGL",
          ],
        },
        {
          id: "data",
          name: "Databases & Caching",
          layer: "LAYER 03 · PERSISTENCE",
          items: [
            "Microsoft SQL Server",
            "Oracle DB (MES / ERP)",
            "PostgreSQL",
            "SQLite (Local-First)",
            "Redis",
            "Qdrant Vector DB",
          ],
        },
        {
          id: "ai-infra",
          name: "AI Systems, Cloud & DevOps",
          layer: "LAYER 04 · RUNTIME",
          items: [
            "MCP Servers (stdio / HTTP)",
            "Claude Code & Multi-Agent",
            "Ollama / LangGraph / RAG",
            "Docker Compose & GitHub Actions",
            "Cloudflare Workers / KV / AWS",
            "Windows Server / IIS / PM2 / NSSM",
          ],
        },
      ],
    },
    experience: {
      index: "04",
      title: "職務経歴・主要デリバリー",
      subtitle: "スクロール連動タイムラインで振り返る基幹システム刷新と本番導入実績",
      items: [
        {
          id: "arbor-2025",
          period: "2025 — PRESENT",
          status: "ACTIVE PRODUCTION",
          role: "Full-Stack & Backend Software Engineer",
          organization: "ARBOR Technology Corp. (磐儀科技)",
          location: "台北・グローバル 5 拠点",
          summary:
            "グローバル 5 拠点向け eRMA 基盤の新規設計、MES/ERP 連携サービスのリファクタリング、および社内採用システムの構築を主導。",
          deliverables: [
            {
              module: "Global Multi-Region eRMA Platform",
              detail:
                "Go + Next.js 15 + GraphQL DataLoader でマルチリージョン基盤を構築。SSE リアルタイムログ配信、PDF 自動生成、ERP/MES 保証分析を統合。",
              tags: ["Go", "Next.js 15", "GraphQL", "SSE", "PDF"],
            },
            {
              module: "Cross-Region Schema & Attachment Migration",
              detail:
                "レガシー SQL Server および遠隔 ERP/MES からのスキーマ移行と、UUID ベースの安全な添付ファイル移行パイプラインを完遂。",
              tags: ["SQL Server", "Oracle", "ETL", "UUID Pipeline"],
            },
            {
              module: "MES / ERP .NET Integration Service Refactor",
              detail:
                "C# / .NET 連携サービスを非同期 Dapper リポジトリへ刷新し、Oracle ストアドプロシージャのバッチ実行と MailKit 自動通知を実装。",
              tags: ["C#", ".NET 8", "Dapper", "Oracle SP", "MailKit"],
            },
            {
              module: "Arbor Resume & DISC Assessment Platform",
              detail:
                "有効期限付き招待トークンと 16 問の DISC 性格診断を備えた社内・社外向け採用プラットフォームを開発。",
              tags: ["TypeScript", "Token Auth", "DISC Module"],
            },
          ],
        },
      ],
    },
    projects: {
      index: "05",
      title: "主要システム・オープンソース",
      subtitle: "設計知識ベース、マルチエージェント協調、自動静的デプロイ基盤の実装",
      viewRepo: "リポジトリを見る",
      featuredLabel: "CORE ARCHITECTURE",
      items: [
        {
          id: "fullend",
          name: "Fullend · Agent Design Library",
          category: "AI DESIGN ENGINE / MCP",
          featured: true,
          summary:
            "40 の設計・映像モジュールと 37 のオープンソースリポジトリ（Magic UI・Shadcn UI・UI/UX Pro Max・Three.js・GSAP 等）を統合管理するローカル設計ライブラリ。MCP stdio・REST API・RAG 索引・マルチ AI 接続を搭載。",
          specs: [
            "外部依存なしの Node.js コアサーバー",
            "MCP stdio + REST API + JSONL RAG エクスポート",
            "安全な fast-forward 同期とバージョン監査",
          ],
          tech: ["Node.js", "MCP", "REST API", "RAG", "Multi-LLM"],
          url: siteConfig.repos.fullend,
        },
        {
          id: "agent-team",
          name: "agent-team",
          category: "MULTI-AGENT FRAMEWORK",
          summary:
            "Claude Code 向けの Orchestrator + Scout / Builder / Verifier マルチエージェント協調フレームワーク（RFC-001 準拠・CI 検証ゲート搭載）。",
          specs: [
            "役割分離型マルチエージェント協調プロトコル",
            "RFC-001 仕様準拠と自動 CI 検証",
            "既存リポジトリへの段階的な組み込みに対応",
          ],
          tech: ["Python", "Claude Code", "Multi-Agent", "RFC-001", "CI/CD"],
          url: siteConfig.repos.agentTeam,
        },
        {
          id: "portfolio-scroll",
          name: "MasonKLiu.github.io",
          category: "DIGITAL SCROLL PORTFOLIO",
          summary:
            "Fullend 設計ライブラリを活用して刷新したブルーデジタル・スクロール型ポートフォリオ。.env による環境設定管理と GitHub Pages 自動デプロイに対応。",
          specs: [
            "Fullend Magic UI とテレメトリ設計を採用",
            ".env で公開 URL と実行パラメータを一元管理",
            "繁体字中国語・英語・日本語の 3 言語対応",
          ],
          tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
          url: siteConfig.repos.portfolio,
        },
      ],
    },
    connect: {
      index: "06",
      title: "お問い合わせ・ランタイム情報",
      summary:
        "基幹システムのモダナイゼーション、Go / Next.js フルスタック設計、AI エージェント・MCP 基盤構築についてお気軽にご連絡ください。",
      copyEmail: "メールをコピー",
      copiedEmail: "コピーしました",
      openGithub: "GitHub を開く",
      backToTop: "トップへ戻る",
      runtimeLabel: "RUNTIME CONFIG (.env)",
      endpointLabel: "SITE ENDPOINT",
      sourceLabel: "SOURCE REPO",
      poweredBy: "Built with React, TypeScript, Tailwind CSS & Fullend Design Library.",
    },
  },
};
