/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_DEV_URL?: string;
  readonly VITE_DEV_HOST?: string;
  readonly VITE_DEV_PORT?: string;
  readonly VITE_PREVIEW_PORT?: string;
  readonly VITE_BASE_PATH?: string;
  readonly VITE_SITE_TITLE?: string;
  readonly VITE_SITE_TAGLINE?: string;
  readonly VITE_AUTHOR_NAME?: string;
  readonly VITE_AUTHOR_HANDLE?: string;
  readonly VITE_DEFAULT_LANG?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_GITHUB_PROFILE_URL?: string;
  readonly VITE_REPO_PORTFOLIO_URL?: string;
  readonly VITE_REPO_FULLEND_URL?: string;
  readonly VITE_REPO_AGENT_TEAM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
