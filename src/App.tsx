import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  Check,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Globe,
  Layers,
  Mail,
  Radio,
  Server,
  Terminal as TerminalIcon,
} from "lucide-react";
import { siteConfig } from "@/config/env";
import { portfolioData, type Lang } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DigitalScrollRail, type ScrollSectionMeta } from "@/components/DigitalScrollRail";
import { DigitalStreamField } from "@/components/DigitalStreamField";
import { RetroGrid } from "@/components/magicui/RetroGrid";
import { MagicCard } from "@/components/magicui/MagicCard";
import { ShineBorder } from "@/components/magicui/ShineBorder";
import { NumberTicker } from "@/components/magicui/NumberTicker";
import { HyperText } from "@/components/magicui/HyperText";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/Terminal";

const categoryIcons: Record<string, typeof Server> = {
  backend: Server,
  frontend: Layers,
  data: Database,
  "ai-infra": Cpu,
};

const EASE_TECH: [number, number, number, number] = [0.2, 0, 0, 1];

export default function App() {
  const [lang, setLang] = useState<Lang>(siteConfig.defaultLang);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copied, setCopied] = useState(false);

  const t = portfolioData[lang];

  const sections: ScrollSectionMeta[] = useMemo(
    () => [
      { id: "overview", code: "01", label: t.nav.overview },
      { id: "architecture", code: "02", label: t.nav.architecture },
      { id: "capabilities", code: "03", label: t.nav.capabilities },
      { id: "experience", code: "04", label: t.nav.experience },
      { id: "projects", code: "05", label: t.nav.projects },
      { id: "connect", code: "06", label: t.nav.connect },
    ],
    [t.nav]
  );

  // Hero scroll parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "24%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.85], [1, 0.12]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.96]);

  // Experience optical conduit scroll fill
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });

  const visibleCategories = useMemo(() => {
    if (activeCategory === "all") return t.capabilities.categories;
    return t.capabilities.categories.filter((c) => c.id === activeCategory);
  }, [activeCategory, t.capabilities.categories]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.contactEmail}`;
    }
  };

  return (
    <div className="relative min-h-screen bg-void text-ice-50">
      <DigitalStreamField />
      <DigitalScrollRail sections={sections} />

      {/* Sticky Cyber-HUD Header */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-line/80 bg-void/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a
            href="#overview"
            className="flex cursor-pointer items-center gap-2.5 font-mono text-sm font-semibold tracking-wider text-ice-50 transition-colors hover:text-cyber-300"
          >
            <span className="flex h-7 w-7 items-center justify-center border border-cyber-500/60 bg-cobalt-600/25 text-xs text-cyber-300">
              ML
            </span>
            <span>{siteConfig.authorHandle}</span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 text-xs font-medium text-ice-400 md:flex"
          >
            {sections.slice(1).map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="cursor-pointer transition-colors hover:text-cyber-300"
              >
                <span className="mr-1.5 font-mono text-[10px] text-cobalt-400">
                  {sec.code}
                </span>
                {sec.label}
              </a>
            ))}
          </nav>

          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center border border-line bg-abyss/90 p-0.5 font-mono text-xs"
          >
            {(["zh", "en", "ja"] as Lang[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`cursor-pointer px-2.5 py-1 transition-colors ${
                  lang === code
                    ? "bg-cobalt-600 text-ice-50 shadow-[0_0_12px_rgba(37,99,235,0.5)]"
                    : "text-ice-400 hover:text-ice-50"
                }`}
              >
                {code === "zh" ? "繁中" : code === "en" ? "EN" : "日本語"}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* 01 // OVERVIEW HERO */}
        <section
          id="overview"
          ref={heroRef}
          className="relative flex min-h-screen items-center overflow-hidden border-b border-line/60 px-5 pb-20 pt-28 sm:px-6"
        >
          <RetroGrid
            angle={66}
            cellSize={54}
            opacity={0.42}
            lineColor="rgba(0, 212, 255, 0.28)"
          />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
            className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12"
          >
            {/* Left Identity Column */}
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2.5 border border-cyber-500/35 bg-abyss/85 px-3.5 py-1.5 font-mono text-xs text-cyber-300 backdrop-blur-sm">
                <Radio className="h-3.5 w-3.5 animate-pulse text-cyber-400" />
                <span>{t.hero.status}</span>
              </div>

              <h1 className="font-display text-5xl font-bold tracking-tight text-ice-50 sm:text-6xl lg:text-7xl">
                <HyperText duration={700} className="font-display tracking-tight">
                  {t.hero.name}
                </HyperText>
              </h1>

              <p className="mt-3 font-mono text-sm text-cyber-300 sm:text-base">
                {t.hero.roleLine}
              </p>

              <p className="mt-2 text-base font-medium text-ice-200 sm:text-lg">
                {t.hero.nativeName}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ice-400 sm:text-base">
                {t.hero.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button asChild size="lg" variant="primary">
                  <a href="#architecture">
                    {t.hero.ctaPrimary}
                    <ArrowDown className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={siteConfig.githubProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    {t.hero.ctaSecondary}
                  </a>
                </Button>
              </div>

              <div className="mt-7 inline-flex items-center gap-2 border-l-2 border-cyber-500/70 pl-3 font-mono text-xs text-ice-400">
                <Globe className="h-3.5 w-3.5 text-cyber-400" />
                <span>{siteConfig.siteUrl}</span>
              </div>
            </div>

            {/* Right Telemetry Terminal (Fullend Magic UI) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <ShineBorder
                  borderWidth={1}
                  duration={12}
                  shineColor={["#00D4FF", "#2563EB", "#60A5FA"]}
                />
                <Terminal
                  sequenceKey={lang}
                  title={t.hero.terminalTitle}
                  statusText="SYNCED"
                >
                  <TypingAnimation className="text-cyber-300">
                    {t.hero.terminalLines.command}
                  </TypingAnimation>
                  {t.hero.terminalLines.outputs.map((line) => (
                    <AnimatedSpan key={line.key}>
                      <div className="flex flex-wrap items-baseline gap-2 border-l border-line pl-2.5">
                        <span className="min-w-[74px] text-[11px] text-cobalt-400">
                          {line.key}
                        </span>
                        <span
                          className={
                            line.accent ? "text-cyber-200" : "text-ice-200"
                          }
                        >
                          {line.value}
                        </span>
                      </div>
                    </AnimatedSpan>
                  ))}
                </Terminal>
              </div>
            </div>
          </motion.div>

          {/* Bottom scroll cue */}
          <a
            href="#architecture"
            className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1.5 font-mono text-[11px] text-ice-400 transition-colors hover:text-cyber-300"
          >
            <span>{t.hero.scrollPrompt}</span>
            <ArrowDown className="h-4 w-4 animate-bounce text-cyber-400" />
          </a>
        </section>

        {/* 02 // ARCHITECTURE & TELEMETRY */}
        <section
          id="architecture"
          className="mx-auto max-w-6xl px-5 py-24 sm:px-6 lg:py-28"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: EASE_TECH }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 font-mono text-xs text-cyber-400">
              <span>{t.architecture.index}</span>
              <span className="h-[1px] w-10 bg-cyber-500/60" />
              <span>ARCHITECTURE &amp; TELEMETRY</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ice-50 sm:text-4xl">
              {t.architecture.title}
            </h2>
            <p className="mt-3 text-base text-cyber-200/90">
              {t.architecture.subtitle}
            </p>
            <p className="mt-5 text-sm leading-loose text-ice-400 sm:text-base">
              {t.architecture.bio}
            </p>
          </motion.div>

          {/* Live Metrics Strip */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.architecture.metrics.map((metric) => (
              <MagicCard key={metric.label} className="p-5">
                <p className="font-mono text-xs text-ice-400">{metric.label}</p>
                <div className="mt-3 flex items-baseline gap-1 font-display text-3xl font-bold text-cyber-300 sm:text-4xl">
                  <NumberTicker value={metric.value} className="text-cyber-300" />
                  {metric.suffix && (
                    <span className="text-2xl text-cobalt-400">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-mono text-[11px] text-ice-600">
                  {metric.detail}
                </p>
              </MagicCard>
            ))}
          </div>

          {/* 3 Architecture Pillars */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.architecture.pillars.map((pillar) => (
              <MagicCard key={pillar.code} className="p-6">
                <Badge variant="cyan">{pillar.code}</Badge>
                <h3 className="mt-4 font-display text-lg font-semibold text-ice-50">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ice-400">
                  {pillar.description}
                </p>
              </MagicCard>
            ))}
          </div>
        </section>

        {/* 03 // CAPABILITIES MATRIX */}
        <section
          id="capabilities"
          className="border-y border-line/70 bg-abyss/55 py-24 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 font-mono text-xs text-cyber-400">
                  <span>{t.capabilities.index}</span>
                  <span className="h-[1px] w-10 bg-cyber-500/60" />
                  <span>CAPABILITY MATRIX</span>
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ice-50 sm:text-4xl">
                  {t.capabilities.title}
                </h2>
                <p className="mt-3 text-sm text-ice-400 sm:text-base">
                  {t.capabilities.subtitle}
                </p>
              </div>

              {/* Interactive Layer Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={`cursor-pointer border px-3 py-1.5 font-mono text-xs transition-colors ${
                    activeCategory === "all"
                      ? "border-cyber-400 bg-cobalt-600/80 text-ice-50"
                      : "border-line bg-panel/70 text-ice-400 hover:border-cobalt-500/60 hover:text-ice-50"
                  }`}
                >
                  {t.capabilities.filterAll}
                </button>
                {t.capabilities.categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`cursor-pointer border px-3 py-1.5 font-mono text-xs transition-colors ${
                      activeCategory === cat.id
                        ? "border-cyber-400 bg-cobalt-600/80 text-ice-50"
                        : "border-line bg-panel/70 text-ice-400 hover:border-cobalt-500/60 hover:text-ice-50"
                    }`}
                  >
                    {cat.id}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {visibleCategories.map((cat) => {
                const Icon = categoryIcons[cat.id] ?? TerminalIcon;
                return (
                  <MagicCard key={cat.id} className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyber-500/40 bg-cobalt-600/20 text-cyber-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] tracking-wider text-cobalt-400">
                            {cat.layer}
                          </p>
                          <h3 className="font-display text-lg font-semibold text-ice-50">
                            {cat.name}
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-ice-600">
                        {cat.items.length}x
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {cat.items.map((skill) => (
                        <Badge key={skill} variant="subtle">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </MagicCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* 04 // SCROLL-LINKED EXPERIENCE CONDUIT */}
        <section
          id="experience"
          className="mx-auto max-w-6xl px-5 py-24 sm:px-6 lg:py-28"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-xs text-cyber-400">
              <span>{t.experience.index}</span>
              <span className="h-[1px] w-10 bg-cyber-500/60" />
              <span>DEPLOYMENT LOG</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ice-50 sm:text-4xl">
              {t.experience.title}
            </h2>
            <p className="mt-3 text-sm text-ice-400 sm:text-base">
              {t.experience.subtitle}
            </p>
          </div>

          <div ref={timelineRef} className="relative mt-12 pl-7 sm:pl-12">
            {/* Optical conduit track */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-2 top-0 w-[2px] bg-line sm:left-3"
            />
            <motion.div
              aria-hidden="true"
              style={{ scaleY: timelineScroll }}
              className="absolute bottom-0 left-2 top-0 w-[2px] origin-top bg-gradient-to-b from-cyber-400 via-cobalt-500 to-cyber-200 shadow-[0_0_12px_rgba(0,212,255,0.65)] sm:left-3"
            />

            <div className="space-y-10">
              {t.experience.items.map((exp) => (
                <div key={exp.id} className="relative">
                  <span
                    aria-hidden="true"
                    className="animate-pulse-node absolute -left-[25px] top-7 h-3 w-3 border border-cyber-300 bg-cyber-500 sm:-left-[41px]"
                  />

                  <MagicCard className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/80 pb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <Badge variant="cyan">{exp.period}</Badge>
                          <Badge variant="live">{exp.status}</Badge>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-bold text-ice-50 sm:text-2xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 font-mono text-xs text-cyber-300">
                          {exp.organization} · {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-ice-200 sm:text-base">
                      {exp.summary}
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {exp.deliverables.map((item) => (
                        <div
                          key={item.module}
                          className="border border-line/80 bg-void/70 p-4 transition-colors hover:border-cobalt-500/60"
                        >
                          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyber-200">
                            <GitBranch className="h-3.5 w-3.5 shrink-0 text-cobalt-400" />
                            <span>{item.module}</span>
                          </div>
                          <p className="mt-2.5 text-xs leading-relaxed text-ice-400 sm:text-sm">
                            {item.detail}
                          </p>
                          <div className="mt-3.5 flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-line/90 bg-abyss px-2 py-0.5 font-mono text-[10px] text-ice-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </MagicCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 // FEATURED SYSTEMS */}
        <section
          id="projects"
          className="border-t border-line/70 bg-abyss/55 py-24 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 font-mono text-xs text-cyber-400">
                <span>{t.projects.index}</span>
                <span className="h-[1px] w-10 bg-cyber-500/60" />
                <span>OPEN SYSTEMS</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ice-50 sm:text-4xl">
                {t.projects.title}
              </h2>
              <p className="mt-3 text-sm text-ice-400 sm:text-base">
                {t.projects.subtitle}
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.projects.items.map((proj) => (
                <div key={proj.id} className="relative h-full">
                  {proj.featured && (
                    <ShineBorder
                      borderWidth={1}
                      duration={10}
                      shineColor={["#00D4FF", "#2563EB", "#67E8F9"]}
                      className="z-20"
                    />
                  )}
                  <MagicCard className="flex h-full flex-col justify-between p-6">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <Badge variant={proj.featured ? "cyan" : "cobalt"}>
                          {proj.category}
                        </Badge>
                        {proj.featured && (
                          <span className="font-mono text-[10px] text-cyber-300">
                            {t.projects.featuredLabel}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 font-display text-xl font-bold text-ice-50">
                        {proj.name}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-ice-400">
                        {proj.summary}
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-line/70 pt-4 text-xs text-ice-200">
                        {proj.specs.map((spec) => (
                          <li key={spec} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-cyber-400" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-2">
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {proj.tech.map((item) => (
                          <Badge key={item} variant="subtle">
                            {item}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        asChild
                        variant={proj.featured ? "primary" : "outline"}
                        size="sm"
                        className="w-full"
                      >
                        <a href={proj.url} target="_blank" rel="noreferrer">
                          <Github className="h-3.5 w-3.5" />
                          {t.projects.viewRepo}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  </MagicCard>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 06 // CONNECT & RUNTIME FOOTER */}
      <footer
        id="connect"
        className="relative z-10 border-t border-line/80 bg-void/95 px-5 py-24 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 font-mono text-xs text-cyber-400">
                <span>{t.connect.index}</span>
                <span className="h-[1px] w-10 bg-cyber-500/60" />
                <span>CONNECT</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ice-50 sm:text-4xl">
                {t.connect.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ice-400 sm:text-base">
                {t.connect.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button asChild size="lg" variant="primary">
                  <a
                    href={siteConfig.githubProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    {t.connect.openGithub}
                  </a>
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={handleCopyEmail}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Mail className="h-4 w-4" />
                  )}
                  {copied ? t.connect.copiedEmail : t.connect.copyEmail}
                  {!copied && <Copy className="h-3.5 w-3.5 text-ice-400" />}
                </Button>

                <Button asChild size="lg" variant="ghost">
                  <a href="#overview">
                    <ArrowUp className="h-4 w-4" />
                    {t.connect.backToTop}
                  </a>
                </Button>
              </div>
            </div>

            {/* .env Runtime Metadata Card */}
            <div className="lg:col-span-5">
              <MagicCard className="p-5 font-mono text-xs">
                <p className="border-b border-line pb-2.5 text-[11px] text-cyber-300">
                  {t.connect.runtimeLabel}
                </p>
                <dl className="mt-3.5 space-y-2.5">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-ice-600">{t.connect.endpointLabel}</dt>
                    <dd className="truncate text-cyber-200">
                      <a
                        href={siteConfig.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {siteConfig.siteUrl}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-ice-600">{t.connect.sourceLabel}</dt>
                    <dd className="truncate text-ice-200">
                      <a
                        href={siteConfig.repos.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyber-300 hover:underline"
                      >
                        {siteConfig.authorHandle}/MasonKLiu.github.io
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-ice-600">EMAIL</dt>
                    <dd className="truncate text-ice-200">
                      {siteConfig.contactEmail}
                    </dd>
                  </div>
                </dl>
              </MagicCard>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-line/70 pt-7 font-mono text-xs text-ice-600 sm:flex-row">
            <span>
              © {new Date().getFullYear()} {siteConfig.authorName} (
              {siteConfig.authorHandle})
            </span>
            <span>{t.connect.poweredBy}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
