export type SupportedLang = "zh" | "en" | "ja";

function parseLang(raw: string | undefined): SupportedLang {
  if (raw === "en" || raw === "ja" || raw === "zh") return raw;
  return "zh";
}

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  siteUrl: stripTrailingSlash(
    import.meta.env.VITE_SITE_URL || "https://masonkliu.github.io"
  ),
  devUrl: stripTrailingSlash(
    import.meta.env.VITE_DEV_URL || "http://127.0.0.1:5173"
  ),
  basePath: import.meta.env.VITE_BASE_PATH || "/",
  siteTitle:
    import.meta.env.VITE_SITE_TITLE ||
    "Mason Liu | Systems Architect & Full-Stack Engineer",
  siteTagline:
    import.meta.env.VITE_SITE_TAGLINE ||
    "Digital Architecture & Systems Engineering Scroll",
  authorName: import.meta.env.VITE_AUTHOR_NAME || "Mason Liu",
  authorHandle: import.meta.env.VITE_AUTHOR_HANDLE || "MasonKLiu",
  defaultLang: parseLang(import.meta.env.VITE_DEFAULT_LANG),
  contactEmail:
    import.meta.env.VITE_CONTACT_EMAIL || "theworldstructure@gmail.com",
  githubProfileUrl:
    import.meta.env.VITE_GITHUB_PROFILE_URL || "https://github.com/MasonKLiu",
  repos: {
    portfolio:
      import.meta.env.VITE_REPO_PORTFOLIO_URL ||
      "https://github.com/MasonKLiu/MasonKLiu.github.io",
    fullend:
      import.meta.env.VITE_REPO_FULLEND_URL ||
      "https://github.com/MasonKLiu/Fullend",
    agentTeam:
      import.meta.env.VITE_REPO_AGENT_TEAM_URL ||
      "https://github.com/MasonKLiu/agent-team",
  },
} as const;
