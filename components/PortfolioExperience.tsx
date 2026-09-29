"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Copy,
  Menu,
  Pause,
  Play,
  X,
} from "lucide-react";
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa6";
import { SiRust, SiTypescript, SiPython, SiJavascript } from "react-icons/si";
import {
  projects,
  contributions,
  servers,
  clientReviews,
  creatorReviews,
  skills,
  technologies,
} from "@/lib/portfolio-data";
const discord = "https://discord.com/users/1179751802393079838";
const github = "https://github.com/itarqos5";
const navigation = [
  ["Work", "projects"],
  ["Experience", "servers"],
  ["Reviews", "creator-reviews"],
  ["Toolkit", "skills"],
];
const biomes = [
  "/minecraft/ocean.jpg",
  "/minecraft/cherry.jpg",
  "/minecraft/snow.avif",
];
const skillIcons = [
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
  Code2,
  Code2,
  Code2,
];
const films = [
  {
    id: "RnnctM5Rf9I",
    title: "Beneath the surface",
    scene: "Soothing Underwater Scenes",
    poster: "/minecraft/ocean.jpg",
  },
  {
    id: "SZu6k3riYso",
    title: "A moment on the shore",
    scene: "Tranquil Beach",
    poster: "/minecraft/beach.webp",
  },
];
function Portrait({
  src,
  name,
  size = 44,
}: {
  src: string;
  name: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="portrait" style={{ width: size, height: size }}>
      {failed ? (
        <span>{name.slice(0, 2)}</span>
      ) : (
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          unoptimized
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [activeFilm, setActiveFilm] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const quiet = motionPaused || !!reducedMotion;
  const heroRef = useRef<HTMLElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1.035, 1.16]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);
  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText(discord);
      setCopied(true);
      setCopyError(false);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <MotionConfig reducedMotion={quiet ? "always" : "user"}>
      <div className={`site-shell${quiet ? " motion-paused" : ""}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <nav className="nav-shell" aria-label="Main navigation">
            <a href="#hero" className="brand" aria-label="Literal home">
              <span className="brand-block" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              literal<span className="brand-dot">.</span>
            </a>
            <div className="desktop-nav">
              {navigation.map(([label, id]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
            <div className="nav-actions">
              <a
                className="nav-contact"
                href={discord}
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord aria-hidden="true" /> Let’s talk{" "}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <button
                className="menu-toggle"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </nav>
          {menuOpen && (
            <div id="mobile-nav" className="mobile-nav">
              {navigation.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  {label}
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          )}
        </header>
        <main id="main">
          <section
            id="hero"
            className="hero"
            ref={heroRef}
            aria-labelledby="hero-title"
          >
            <motion.div
              className="hero-scene"
              style={quiet ? {} : { y: sceneY, scale: sceneScale }}
            >
              <Image
                src="/minecraft/complementary-ocean.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                unoptimized
                className="scene-image"
              />
            </motion.div>
            <div className="hero-shade" />

            <div className="hero-content">
              <h1 id="hero-title">
                A little <span>Literal.</span>
                <br />A lot of possibility.
              </h1>
              <p className="hero-role">
                Full-stack developer &amp; systems architect
              </p>
              <p className="hero-description">
                I build the systems behind the worlds.
                <br />
                Minecraft plugins, server infrastructure, and the web.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button-secondary">
                  Explore my work <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a
                  href={discord}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  <FaDiscord aria-hidden="true" /> Let’s build something
                </a>
              </div>
            </div>
            <div className="hero-bottom">
              <a href="#projects" className="scroll-cue">
                <span className="scroll-square">
                  <ArrowDown size={17} aria-hidden="true" />
                </span>
                <span>There’s more below</span>
              </a>
              <a href="#films" className="hero-biome film-shortcut">
                <Play size={13} aria-hidden="true" /> Watch the Minecraft scenes
              </a>
              <button
                className="motion-toggle"
                onClick={() => setMotionPaused(!motionPaused)}
                aria-pressed={motionPaused}
                disabled={!!reducedMotion}
                aria-label={
                  reducedMotion
                    ? "Motion reduced by system preference"
                    : motionPaused
                      ? "Resume motion"
                      : "Pause motion"
                }
              >
                {quiet ? (
                  <Play size={13} aria-hidden="true" />
                ) : (
                  <Pause size={13} aria-hidden="true" />
                )}
                <span>{quiet ? "Motion off" : "Motion on"}</span>
              </button>
            </div>
            <div className="block-edge" aria-hidden="true" />
          </section>
          <div className="intro-strip content-width">
            <div className="intro-person">
              <Portrait src="/profile.png" name="Literal" size={48} />
              <div>
                <strong>Hey, I’m Literal.</strong>
                <span>Developer. Problem solver. World builder.</span>
              </div>
            </div>
            <p>
              From the first block to the last byte.
              <br />
              <span>Java, Rust, TypeScript &amp; a little curiosity.</span>
            </p>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="View Literal on GitHub"
            >
              <FaGithub size={22} />
              <ArrowUpRight size={17} />
            </a>
          </div>
          <section
            id="projects"
            className="work-section content-width section-space"
            aria-labelledby="work-title"
          >
            <div className="section-header">
              <div>
                <h2 id="work-title">
                  Built from the <span>blocks up.</span>
                </h2>
                <p>
                  A few things I’ve put into the world. Open source, inside and
                  out.
                </p>
              </div>
              <a
                className="text-link"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                All repositories <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <a
                  className={`project project-${index}`}
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-image">
                    <Image
                      src={biomes[index]}
                      alt=""
                      fill
                      unoptimized
                      sizes="(max-width: 760px) 100vw, 50vw"
                    />
                    <span className="project-kind">
                      {index === 0
                        ? "Server infrastructure"
                        : index === 1
                          ? "Minecraft plugin"
                          : "Networking"}
                    </span>
                    <span className="project-open">
                      <ArrowUpRight size={23} aria-hidden="true" />
                    </span>
                    <span className="project-image-title" aria-hidden="true">
                      {project.name === "Essentials-MySQL" ? (
                        <>
                          Essentials
                          <br />
                          MySQL
                        </>
                      ) : (
                        project.name
                      )}
                    </span>
                  </div>
                  <div className="project-info">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="contributions">
              <div className="contributions-intro">
                <h3>A few shared builds.</h3>
                <p>Minecraft mods I helped develop.</p>
              </div>
              {contributions.map((mod) => (
                <a
                  href={mod.link}
                  key={mod.name}
                  target="_blank"
                  rel="noreferrer"
                  className="mod-link"
                >
                  <Portrait src={mod.icon} name={mod.name} size={48} />
                  <div>
                    <h4>{mod.name}</h4>
                    <p>{mod.description}</p>
                    <span>Modrinth</span>
                  </div>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
          <section
            id="servers"
            className="experience-section section-space"
            aria-labelledby="experience-title"
          >
            <div className="content-width experience-layout">
              <div className="experience-intro">
                <h2 id="experience-title">
                  Good worlds.
                  <br />
                  <span>Great people.</span>
                </h2>
                <p>
                  The servers, studios, and communities I’ve worked with along
                  the way.
                </p>
                <div className="experience-landscape">
                  <Image
                    src="/minecraft/beach.webp"
                    alt="A peaceful Minecraft beach with block-built trees and a campfire"
                    fill
                    unoptimized
                    sizes="(max-width: 760px) 100vw, 35vw"
                  />
                  <span>Better, together.</span>
                </div>
              </div>
              <div className="server-list">
                <div className="server-table-header">
                  <span>Server / organization</span>
                  <span>Status &amp; role</span>
                </div>
                {servers.map((server) => (
                  <div className="server-row" key={server.name}>
                    <Portrait src={server.icon} name={server.name} size={40} />
                    <div className="server-name">
                      {server.website ? (
                        <a
                          href={server.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {server.name}
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <strong>{server.name}</strong>
                      )}
                      {server.description && <p>{server.description}</p>}
                    </div>
                    <div className="server-meta">
                      <span
                        className={
                          server.status === "Working" ? "working" : "previous"
                        }
                      >
                        <i aria-hidden="true" />
                        {server.status}
                      </span>
                      {server.role && <small>{server.role}</small>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            id="creator-reviews"
            className="creator-section section-space"
            aria-labelledby="creator-title"
          >
            <div className="content-width">
              <div className="section-header">
                <div>
                  <h2 id="creator-title">
                    A few <span>familiar faces.</span>
                  </h2>
                  <p>Kind words from Minecraft creators I’ve worked with.</p>
                </div>
                <span className="creator-section-label">
                  The golden reviews
                </span>
              </div>
              <div className="creator-grid">
                {creatorReviews.map((review) => (
                  <figure
                    key={review.name}
                    className={`creator-review${review.name === "wSmoothie" ? " creator-spotlight" : ""}`}
                  >
                    <figcaption>
                      <Portrait
                        src={review.avatar}
                        name={review.name}
                        size={52}
                      />
                      <div>
                        <a
                          className="creator-name"
                          href={review.channel}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {review.name}{" "}
                          <ArrowUpRight size={19} aria-hidden="true" />
                        </a>
                        <a
                          className="creator-channel"
                          href={review.channel}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaYoutube aria-hidden="true" /> @{review.name}
                        </a>
                      </div>
                    </figcaption>
                    <blockquote>“{review.text}”</blockquote>
                    {review.href && (
                      <a
                        className="creator-work-link"
                        href={review.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Explore the mods{" "}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
          <section
            id="reviews"
            className="reviews-section content-width section-space"
            aria-labelledby="reviews-title"
          >
            <div className="section-header">
              <div>
                <h2 id="reviews-title">
                  From the other
                  <br />
                  <span>side of the screen.</span>
                </h2>
                <p>Real words from the people I’ve built with.</p>
              </div>
              <span className="review-count">
                {clientReviews.length} client reviews
              </span>
            </div>
            <div className="review-grid">
              {(showAllReviews ? clientReviews : clientReviews.slice(0, 3)).map(
                (review) => (
                  <figure className="review" key={review.name}>
                    <span className="quote-mark" aria-hidden="true">
                      “
                    </span>
                    <blockquote>{review.text}</blockquote>
                    <figcaption>
                      <Portrait
                        src={review.avatar}
                        name={review.name}
                        size={36}
                      />
                      {review.href ? (
                        <a href={review.href} target="_blank" rel="noreferrer">
                          {review.name}
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span>{review.name}</span>
                      )}
                    </figcaption>
                  </figure>
                ),
              )}
            </div>
            <button
              className="reviews-expand text-link"
              onClick={() => setShowAllReviews(!showAllReviews)}
              aria-expanded={showAllReviews}
            >
              {showAllReviews
                ? "Show fewer reviews"
                : `Read all ${clientReviews.length} reviews`}
              <ChevronDown
                size={17}
                style={{
                  transform: showAllReviews ? "rotate(180deg)" : undefined,
                }}
              />
            </button>
          </section>
          <section id="skills" className="toolkit-section section-space">
            <div className="content-width toolkit-layout">
              <div>
                <h2>
                  What’s in
                  <br />
                  <span>my inventory.</span>
                </h2>
                <p>
                  The languages and tools behind the builds.
                  <br />
                  Backend, systems, plugins, and the web.
                </p>
              </div>
              <div className="inventory-panel">
                <h3>Languages</h3>
                <div className="inventory-slots">
                  {skills.map((skill, index) => {
                    const Icon = skillIcons[index];
                    return (
                      <div className="inventory-item" key={skill}>
                        <span className="inventory-number" aria-hidden="true">
                          {index + 1}
                        </span>
                        <Icon aria-hidden="true" />
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
                <div id="technologies" className="technology-list">
                  <h3>Crafted with</h3>
                  <div>
                    {technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="systems-list">
                  <span>Also in the toolkit</span>
                  <p>
                    Java 21 <i /> Netty 4 <i /> MySQL
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="films"
            className="films-section content-width section-space"
            aria-labelledby="films-title"
          >
            <div className="section-header">
              <div>
                <h2 id="films-title">
                  A little time <span>off the grid.</span>
                </h2>
                <p>
                  Sunlight through the water. A quiet stretch of shore. Take a
                  moment in Minecraft.
                </p>
              </div>
              <span className="film-credit">Official films by Minecraft</span>
            </div>
            <div className="films-grid">
              {films.map((film) => (
                <article className="film" key={film.id}>
                  <div className="film-screen">
                    {activeFilm === film.id ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0&playsinline=1`}
                        title={`Minecraft: ${film.scene}`}
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        className="film-poster"
                        onClick={() => setActiveFilm(film.id)}
                        aria-label={`Play ${film.scene}`}
                      >
                        <Image
                          src={film.poster}
                          alt=""
                          fill
                          unoptimized
                          sizes="(max-width: 760px) 100vw, 50vw"
                        />
                        <span className="film-play">
                          <Play size={23} aria-hidden="true" />
                        </span>
                        <span className="film-poster-label">Play film</span>
                      </button>
                    )}
                  </div>
                  <div className="film-caption">
                    <div>
                      <h3>{film.title}</h3>
                      <p>{film.scene} · Minecraft</p>
                    </div>
                    {activeFilm === film.id ? (
                      <button
                        className="text-link"
                        onClick={() => setActiveFilm(null)}
                      >
                        Close film <X size={16} aria-hidden="true" />
                      </button>
                    ) : (
                      <a
                        className="text-link"
                        href={`https://www.youtube.com/watch?v=${film.id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        YouTube <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  {activeFilm === film.id && (
                    <a
                      className="film-fallback"
                      href={`https://www.youtube.com/watch?v=${film.id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Trouble playing? Watch on YouTube{" "}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
          <section id="contact" className="contact-section">
            <div className="contact-scene">
              <Image
                src="/minecraft/beach.webp"
                alt=""
                fill
                unoptimized
                sizes="100vw"
              />
            </div>
            <div className="contact-shade" />
            <div className="content-width contact-content">
              <h2>
                Have a world
                <br />
                <span>in mind?</span>
              </h2>
              <div>
                <p>
                  A plugin, a platform, or something in between.
                  <br />
                  Let’s make your next idea real.
                </p>
                <a
                  href={discord}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  <FaDiscord aria-hidden="true" /> Contact on Discord{" "}
                  <ArrowUpRight size={18} />
                </a>
                <button className="copy-discord" onClick={copyDiscord}>
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span aria-live="polite">
                    {copied
                      ? "Profile link copied"
                      : "Copy Discord profile link"}
                  </span>
                </button>
                {copyError && (
                  <p role="status" className="copy-error">
                    Couldn’t copy. Use the Discord button to open my profile.
                  </p>
                )}
              </div>
            </div>
          </section>
        </main>
        <footer className="site-footer content-width">
          <div className="footer-top">
            <a className="brand" href="#hero">
              literal<span className="brand-dot">.</span>
            </a>
            <span>Built with care. Block by block.</span>
            <div>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={14} />
              </a>
              <a href={discord} target="_blank" rel="noreferrer">
                Discord <ArrowUpRight size={14} />
              </a>
              <a
                href="https://ko-fi.com/itarqos5"
                target="_blank"
                rel="noreferrer"
              >
                Ko-fi <ArrowUpRight size={14} />
              </a>
              <a href="#hero" aria-label="Back to top">
                <ArrowRight className="back-top" size={18} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Literal</span>
            <p>
              Hero by{" "}
              <a
                href="https://modrinth.com/shader/complementary-reimagined/gallery"
                target="_blank"
                rel="noreferrer"
              >
                Complementary Shaders
              </a>
              . Other scenery from{" "}
              <a
                href="https://www.minecraft.net/en-us/article/scenes-overworld"
                target="_blank"
                rel="noreferrer"
              >
                Minecraft / Mojang Studios
              </a>
              . Independent portfolio; not affiliated with Mojang or Microsoft.
            </p>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
