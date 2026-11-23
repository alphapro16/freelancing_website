import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Globe2,
  Layers3, MonitorSmartphone, PenTool, Code2, MessageCircle
} from "lucide-react";

const copy = {
  fr: {
    nav: ["Projets", "Services", "À propos"],
    availability: "Disponible pour de nouveaux projets",
    heroKicker: "Studio indépendant · Web design & développement",
    heroTitle: <>Des expériences digitales<br /><em>qui font avancer</em><br />les entreprises.</>,
    heroText: "Nous concevons des sites web clairs, élégants et efficaces pour aider les entreprises ambitieuses à mieux présenter leur activité et convertir leurs visiteurs.",
    cta: "Parlons de votre projet",
    selected: "Projets sélectionnés",
    selectedSub: "Une sélection de concepts et de réalisations web.",
    view: "Voir le projet",
    statusDemo: "Projet à présenter",
    statusPersonal: "Projet personnel",
    statusOngoing: "Projet non finalisé",
    projects: [
      { n: "01", name: "AWA SHEA", type: "Site corporate · Export & commerce", desc: "Une présence digitale bilingue pensée pour présenter une activité autour du beurre de karité et faciliter les prises de contact.", tag: "Corporate", status: "Projet non finalisé", visual: "shea" },
      { n: "02", name: "Sirius Space", type: "Site institutionnel · Sciences", desc: "Une vitrine pour une association dédiée à l’astronomie, avec une architecture éditoriale et des sections de présentation.", tag: "Institutionnel", status: "Projet non finalisé", visual: "space" },
      { n: "03", name: "Little Traveler", type: "Expérience interactive · Projet personnel", desc: "Une petite expérience web interactive, conçue comme un projet créatif personnel.", tag: "Expérience web", status: "Projet personnel", visual: "traveler" },
      { n: "04", name: "Luméa", type: "Landing page · E-commerce", desc: "Concept de landing page pour une boutique en ligne, avec une mise en avant produit et une structure orientée conversion.", tag: "Landing page", status: "Démo à retravailler", visual: "lumea" }
    ],
    servicesTitle: "Du design réfléchi à un site prêt à travailler.",
    servicesIntro: "Chaque détail doit servir un objectif : rendre votre offre compréhensible, inspirer confiance et faciliter le passage à l’action.",
    services: [
      ["01", "Web design & UI/UX", "Des interfaces soignées, intuitives et adaptées à votre identité."],
      ["02", "Développement web", "Des sites rapides, responsive et construits avec des technologies modernes."],
      ["03", "Landing pages", "Des pages ciblées pour présenter une offre et guider vos visiteurs vers le contact."]
    ],
    aboutLabel: "À propos",
    aboutTitle: "Un partenaire digital, de l’idée à la mise en ligne.",
    aboutText: "Alpha Studio associe design d’interface et développement web pour créer des expériences simples à utiliser et agréables à parcourir. L’approche est directe : comprendre votre activité, clarifier votre message et construire une présence en ligne cohérente.",
    stack: "Technologies & outils",
    contactTitle: "Vous avez un projet en tête ?",
    contactText: "Parlons de vos objectifs et voyons comment votre prochain site web peut y répondre.",
    contactCta: "Démarrer une conversation",
    footer: "Design & développement avec intention.",
    disclaimer: "Les projets présentés incluent des concepts, projets personnels et travaux non finalisés. Leur statut est indiqué dans chaque fiche."
  },
  en: {
    nav: ["Work", "Services", "About"],
    availability: "Available for selected projects",
    heroKicker: "Independent studio · Web design & development",
    heroTitle: <>Digital experiences<br /><em>that move</em><br />business forward.</>,
    heroText: "We design clear, thoughtful websites that help ambitious businesses present their value and turn visitors into meaningful enquiries.",
    cta: "Let’s discuss your project",
    selected: "Selected work",
    selectedSub: "A selection of web concepts and projects.",
    view: "View project",
    statusDemo: "Work in progress",
    statusPersonal: "Personal project",
    statusOngoing: "Unfinished project",
    projects: [
      { n: "01", name: "AWA SHEA", type: "Corporate website · Trade & export", desc: "A bilingual digital presence for a shea-butter business, designed to present its activity and support enquiries.", tag: "Corporate", status: "Unfinished project", visual: "shea" },
      { n: "02", name: "Sirius Space", type: "Institutional website · Science", desc: "A showcase website for an astronomy association, with an editorial structure and presentation sections.", tag: "Institutional", status: "Unfinished project", visual: "space" },
      { n: "03", name: "Little Traveler", type: "Interactive experience · Personal project", desc: "A small interactive web experience created as a personal creative project.", tag: "Web experience", status: "Personal project", visual: "traveler" },
      { n: "04", name: "Luméa", type: "Landing page · E-commerce", desc: "A landing-page concept for an online store, with product-focused sections and a conversion-oriented structure.", tag: "Landing page", status: "Demo to revise", visual: "lumea" }
    ],
    servicesTitle: "From thoughtful design to a website that works.",
    servicesIntro: "Every detail should serve a purpose: make your offer clear, build trust and help visitors take action.",
    services: [
      ["01", "Web design & UI/UX", "Polished, intuitive interfaces shaped around your brand."],
      ["02", "Web development", "Fast, responsive websites built with modern technologies."],
      ["03", "Landing pages", "Focused pages that communicate an offer and guide visitors to enquire."]
    ],
    aboutLabel: "About",
    aboutTitle: "A digital partner, from first idea to launch.",
    aboutText: "Alpha Studio brings interface design and web development together to create digital experiences that feel clear and effortless. The process is straightforward: understand your business, clarify your message and build a coherent online presence.",
    stack: "Tools & technologies",
    contactTitle: "Have a project in mind?",
    contactText: "Tell us what you are building and let’s explore how your next website can support your goals.",
    contactCta: "Start a conversation",
    footer: "Designed and developed with intention.",
    disclaimer: "Selected work includes concepts, personal projects and unfinished work. Each project’s status is clearly stated."
  }
};

const projectLinks = {
  "AWA SHEA": "https://karity-website.vercel.app/",
  "Sirius Space": "https://sirius-space.vercel.app/",
  "Little Traveler": "https://littletraveler.vercel.app/",
  "Luméa": "https://secrets-of-client.vercel.app/"
};

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      {type === "shea" && <><div className="shea-word">AWA<br /><i>SHEA</i></div><div className="shea-orb" /><span className="visual-caption">NATURE · ORIGIN · CARE</span></>}
      {type === "space" && <><div className="planet planet-one" /><div className="planet planet-two" /><div className="orbit" /><span className="space-word">SIRIUS<br /><small>SPACE ASSOCIATION</small></span><span className="star star-one">✦</span><span className="star star-two">✧</span></>}
      {type === "traveler" && <><div className="travel-sun" /><div className="travel-card"><span>✳</span><strong>little<br />traveler</strong><small>A tiny journey</small></div><div className="travel-dot" /></>}
      {type === "lumea" && <><div className="lumea-bottle" /><div className="lumea-copy"><small>YOUR DAILY RITUAL</small><strong>LUMÉA</strong><span>Care, made simple.</span></div><div className="lumea-leaf">✳</div></>}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const whatsappNumber = "2290197021182"; // À remplacer par votre numéro au format international, sans + ni espaces.
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === "fr" ? "Bonjour, je souhaite discuter d’un projet de site web." : "Hello, I’d like to discuss a website project.")}`
    : "#contact";

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="Alpha Studio, accueil">
          <span className="brand-mark">A<span>.</span></span>
          <span>ALPHA <b>STUDIO</b></span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#work" onClick={closeMenu}>{t.nav[0]}</a>
          <a href="#services" onClick={closeMenu}>{t.nav[1]}</a>
          <a href="#about" onClick={closeMenu}>{t.nav[2]}</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>{t.cta} <ArrowUpRight size={15} /></a>
        </nav>
        <div className="header-actions">
          <button className="lang-toggle" onClick={() => setLang(lang === "fr" ? "en" : "fr")} aria-label="Change language"><Globe2 size={15} /> {lang.toUpperCase()}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-left">
          <div className="availability"><span className="availability-dot" />{t.availability}</div>
          <p className="eyebrow">{t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-description">{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">{t.cta} <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#work">{t.selected} <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Composition graphique abstraite">
          <div className="art-topline"><span>INDEPENDENT DIGITAL STUDIO</span><span>01 / 04</span></div>
          <div className="art-shape shape-a" />
          <div className="art-shape shape-b" />
          <div className="art-circle"><span>A</span></div>
          <div className="art-bottomline"><span>DESIGN WITH PURPOSE</span><span>EST. 2026</span></div>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">01 — {t.nav[0]}</p><h2>{t.selected}</h2></div>
          <p>{t.selectedSub}</p>
        </div>
        <div className="projects-grid">
          {t.projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.name}>
              <a className="project-image-link" href={projectLinks[project.name]} target="_blank" rel="noreferrer" aria-label={`${t.view}: ${project.name}`}>
                <ProjectVisual type={project.visual} />
                <span className="project-open"><ArrowUpRight size={20} /></span>
              </a>
              <div className="project-meta"><span>{project.n} / {project.tag}</span><span>{project.status}</span></div>
              <div className="project-title-row"><div><h3>{project.name}</h3><p>{project.type}</p></div><a href={projectLinks[project.name]} target="_blank" rel="noreferrer" aria-label={`${t.view}: ${project.name}`}><ArrowUpRight /></a></div>
              <p className="project-description">{project.desc}</p>
            </article>
          ))}
        </div>
        <p className="disclaimer">{t.disclaimer}</p>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="section-heading services-heading">
            <div><p className="eyebrow">02 — {t.nav[1]}</p><h2>{t.servicesTitle}</h2></div>
            <p>{t.servicesIntro}</p>
          </div>
          <div className="services-grid">
            {t.services.map(([n, title, desc], i) => {
              const Icon = [PenTool, Code2, MonitorSmartphone][i];
              return <article className="service-card" key={n}><div className="service-top"><span>{n}</span><Icon size={23} strokeWidth={1.4} /></div><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="service-arrow" size={19} /></article>;
            })}
          </div>
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-label"><p className="eyebrow">03 — {t.aboutLabel}</p><div className="about-symbol"><Layers3 size={28} strokeWidth={1.2} /></div></div>
        <div className="about-content"><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="stack-block"><span>{t.stack}</span><div className="stack-list">{["React", "Vite", "JavaScript", "HTML / CSS", "Figma", "Bootstrap", "Tailwind CSS", "Node.js"].map(item => <span key={item}>{item}</span>)}</div></div></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <p className="eyebrow">04 — CONTACT</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <a className="button button-light" href={whatsappUrl} target={whatsappNumber ? "_blank" : undefined} rel={whatsappNumber ? "noreferrer" : undefined}>{t.contactCta} <MessageCircle size={17} /></a>
          {!whatsappNumber && <small className="setup-note">Ajoutez votre numéro WhatsApp dans <code>src/App.jsx</code> pour activer ce lien.</small>}
        </div>
      </section>

      <footer className="footer section-wrap"><a className="brand footer-brand" href="#top"><span className="brand-mark">A<span>.</span></span><span>ALPHA <b>STUDIO</b></span></a><p>© {new Date().getFullYear()} Alpha Studio. {t.footer}</p><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  );
}