import { useState, useEffect, useRef } from "react";
import { Menu, X, Zap, ShoppingBag, Building2 } from "lucide-react";

/* ─── Design Tokens ─────────────────────────────────────────── */
const C = {
  bg:          "#0A0F1E",
  text:        "#FFFFFF",
  accent:      "#FFD700",
  muted:       "rgba(255,255,255,0.6)",
  glass:       "rgba(255,255,255,0.04)",
  glassBorder: "rgba(255,255,255,0.08)",
  accentDim:   "rgba(255,215,0,0.1)",
  accentBorder:"rgba(255,215,0,0.3)",
};

/* ─── Hook: Scroll-triggered visibility ─────────────────────── */
function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── Hook: Window width ────────────────────────────────────── */
function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

/* ─── Inline SVG Icons ──────────────────────────────────────── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

/* ─── Header ────────────────────────────────────────────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const w = useWidth();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = ["Servicios", "Metodología", "Nosotros"];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.glassBorder}` : "none",
      transition: "background 0.35s, border 0.35s",
      padding: "0 2rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <span style={{ fontSize: "1.45rem", fontWeight: 800, letterSpacing: "-0.03em", color: C.accent }}>
          FENZ
        </span>

        {/* Desktop nav */}
        {w >= 768 && (
          <nav style={{ display: "flex", alignItems: "center", gap: "2.25rem" }}>
            {navLinks.map(n => (
              <a key={n} href={`#${n.toLowerCase().replace("í","i")}`} style={{
                color: C.muted, textDecoration: "none",
                fontSize: "0.88rem", fontWeight: 500, transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.target.style.color = "#fff")}
              onMouseLeave={e => (e.target.style.color = C.muted)}
              >{n}</a>
            ))}
            <a href="mailto:fenzsupport@gmail.com" style={{
              background: C.accent, color: C.bg,
              padding: "0.5rem 1.25rem", borderRadius: 8,
              fontWeight: 700, fontSize: "0.88rem",
              textDecoration: "none", transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >Consultoría</a>
          </nav>
        )}

        {/* Mobile burger */}
        {w < 768 && (
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {w < 768 && open && (
        <div style={{
          background: "rgba(10,15,30,0.98)", backdropFilter: "blur(16px)",
          borderTop: `1px solid ${C.glassBorder}`, padding: "1.25rem 2rem 2rem",
        }}>
          {navLinks.map(n => (
            <a key={n} href={`#${n.toLowerCase().replace("í","i")}`}
              onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "0.75rem 0",
                color: "rgba(255,255,255,0.8)", textDecoration: "none",
                fontSize: "1rem", borderBottom: `1px solid ${C.glassBorder}`,
              }}>
              {n}
            </a>
          ))}
          <a href="mailto:fenzsupport@gmail.com" style={{
            display: "block", marginTop: "1.25rem",
            background: C.accent, color: C.bg,
            padding: "0.8rem", borderRadius: 8,
            fontWeight: 700, fontSize: "1rem", textAlign: "center",
            textDecoration: "none",
          }}>Consultoría</a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero (Video fullscreen) ───────────────────────────────── */
function Hero() {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    }}>
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro sutil */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.35)",
        zIndex: 1,
      }} />

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2.5rem", left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2, display: "flex", flexDirection: "column",
        alignItems: "center", gap: "0.4rem",
        color: "rgba(255,255,255,0.5)", fontSize: "0.75rem",
        letterSpacing: "0.1em", textTransform: "uppercase",
        animation: "bounce 2s infinite",
      }}>
        <style>{`
          @keyframes bounce {
            0%,100% { transform: translateX(-50%) translateY(0); }
            50%      { transform: translateX(-50%) translateY(6px); }
          }
        `}</style>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}

/* ─── Service Card ──────────────────────────────────────────── */
function ServiceCard({ icon, title, desc, detail, delay }) {
  const [ref, visible] = useVisible();
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.07)" : C.glass,
        border: `1px solid ${hovered ? "rgba(255,215,0,0.35)" : C.glassBorder}`,
        borderRadius: 16, padding: "2rem", cursor: "default",
        backdropFilter: "blur(12px)",
        boxShadow: hovered ? "0 0 32px rgba(255,215,0,0.08)" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ${delay}ms, transform 0.7s ${delay}ms, background 0.3s, border 0.3s, box-shadow 0.3s`,
      }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: C.accentDim, display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "1.25rem",
      }}>{icon}</div>
      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "0.4rem" }}>{title}</h3>
      <p style={{ color: C.accent, fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.75rem" }}>{desc}</p>
      <p style={{ color: C.muted, fontSize: "0.875rem", lineHeight: 1.65 }}>{detail}</p>
    </div>
  );
}

/* ─── Services ──────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: <Zap size={22} color={C.accent} />,
    title: "Landing Pages",
    desc: "Diseño que vende. Conversión pura.",
    detail: "Páginas de alto impacto optimizadas para convertir visitantes en clientes desde el primer segundo.",
  },
  {
    icon: <ShoppingBag size={22} color={C.accent} />,
    title: "E-commerce",
    desc: "Tiendas que escalan. Robustez y seguridad.",
    detail: "Soluciones de comercio electrónico diseñadas para crecer con tu negocio, con máxima performance.",
  },
  {
    icon: <Building2 size={22} color={C.accent} />,
    title: "Sitios Institucionales",
    desc: "Autoridad digital. Identidad sólida y vanguardista.",
    detail: "Presencia digital que proyecta confianza y solidez para tu marca o empresa.",
  },
];

function Services() {
  const [ref, visible] = useVisible();
  const w = useWidth();

  return (
    <section id="servicios" style={{ padding: w < 768 ? "5rem 1.5rem" : "7rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} style={{
          textAlign: "center", marginBottom: "3.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
          transition: "opacity 0.6s, transform 0.6s",
        }}>
          <p style={{ color: C.accent, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            Servicios
          </p>
          <h2 style={{ fontSize: w < 768 ? "1.9rem" : "clamp(1.9rem,3.5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em" }}>
            Soluciones que transforman negocios
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: w < 768 ? "1fr" : "repeat(3,1fr)", gap: "1.25rem" }}>
          {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 130} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── Methodology ───────────────────────────────────────────── */
const STEPS = [
  { num: "01", title: "Discovery & Estrategia", desc: "Analizamos tu negocio, audiencia y objetivos para construir una hoja de ruta clara y efectiva." },
  { num: "02", title: "Diseño UI/UX",           desc: "Interfaces que cautivan y guían al usuario hacia la conversión con cada microinteracción." },
  { num: "03", title: "Desarrollo Ágil",         desc: "Código limpio, modular y escalable. Iteraciones rápidas con resultados medibles en cada sprint." },
  { num: "04", title: "Lanzamiento & Optimización", desc: "Deploy, monitoreo continuo y mejoras basadas en datos reales para maximizar el rendimiento." },
];

function Step({ step, index, last }) {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} style={{
      display: "flex", gap: "1.5rem", alignItems: "flex-start",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(-24px)",
      transition: `opacity 0.65s ${index * 120}ms, transform 0.65s ${index * 120}ms`,
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: 50, height: 50, borderRadius: "50%",
          background: visible ? C.accentDim : C.glass,
          border: `2px solid ${visible ? C.accent : C.glassBorder}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: C.accent, fontWeight: 800, fontSize: "0.82rem",
          boxShadow: visible ? "0 0 18px rgba(255,215,0,0.18)" : "none",
          transition: "all 0.6s",
        }}>{step.num}</div>
        {!last && (
          <div style={{
            width: 2, flex: 1, minHeight: 60,
            background: "linear-gradient(to bottom, rgba(255,215,0,0.4), rgba(255,215,0,0.03))",
            marginTop: 6,
          }} />
        )}
      </div>
      <div style={{ paddingBottom: last ? 0 : "2.5rem", paddingTop: "0.55rem" }}>
        <h3 style={{ fontSize: "1.08rem", fontWeight: 700, color: "#fff", marginBottom: "0.4rem" }}>{step.title}</h3>
        <p style={{ color: C.muted, fontSize: "0.88rem", lineHeight: 1.7, maxWidth: 440 }}>{step.desc}</p>
      </div>
    </div>
  );
}

function Methodology() {
  const [ref, visible] = useVisible();
  const w = useWidth();
  const isMobile = w < 768;

  return (
    <section id="metodologia" style={{
      padding: isMobile ? "5rem 1.5rem" : "7rem 2rem",
      background: "rgba(255,255,255,0.02)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "3rem" : "5rem", alignItems: "start",
      }}>
        <div ref={ref} style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
          transition: "opacity 0.6s, transform 0.6s",
        }}>
          <p style={{ color: C.accent, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            Metodología
          </p>
          <h2 style={{ fontSize: isMobile ? "1.9rem" : "clamp(1.9rem,3.5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", marginBottom: "1rem" }}>
            Proceso comprobado,<br/>resultados garantizados.
          </h2>
          <p style={{ color: C.muted, fontSize: "1rem", lineHeight: 1.75, maxWidth: 420 }}>
            Cada proyecto sigue nuestra metodología de 4 etapas que garantiza resultados medibles y una experiencia fluida de principio a fin.
          </p>
        </div>
        <div>
          {STEPS.map((s, i) => <Step key={s.num} step={s} index={i} last={i === STEPS.length - 1} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── Philosophy / CTA ──────────────────────────────────────── */
function Philosophy() {
  const [ref, visible] = useVisible();
  const w = useWidth();

  return (
    <section id="nosotros" style={{ padding: w < 768 ? "5rem 1.5rem" : "7rem 2rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div ref={ref} style={{
          background: C.glass,
          border: `1px solid ${C.glassBorder}`,
          borderRadius: 24, padding: w < 768 ? "2.5rem 1.5rem" : "4.5rem 3.5rem",
          backdropFilter: "blur(12px)", textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.97)",
          transition: "opacity 0.8s, transform 0.8s",
        }}>
          <p style={{ color: C.accent, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Filosofía
          </p>
          <blockquote style={{
            fontSize: w < 768 ? "1.3rem" : "clamp(1.35rem,2.8vw,2rem)",
            fontWeight: 700, color: "#fff", lineHeight: 1.45,
            letterSpacing: "-0.02em", marginBottom: "2rem", fontStyle: "normal",
          }}>
            "Más que código, impulsamos tu evolución. En Fenz, somos arquitectos de soluciones digitales obsesionados con el rendimiento."
          </blockquote>

          <div style={{
            width: 56, height: 3,
            background: "linear-gradient(to right, #FFD700, rgba(255,215,0,0.2))",
            borderRadius: 999, margin: "0 auto 2.25rem",
          }} />

          <p style={{ color: C.muted, fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.25rem", maxWidth: 520, margin: "0 auto 2.25rem" }}>
            Tu visión merece una ejecución impecable. Empecemos a construirla.
          </p>

          <a href="mailto:fenzsupport@gmail.com" style={{
            display: "inline-block",
            background: C.accent, color: C.bg,
            padding: "0.95rem 2.5rem", borderRadius: 10,
            fontWeight: 700, fontSize: "1rem",
            textDecoration: "none", transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 0 28px rgba(255,215,0,0.28)",
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 44px rgba(255,215,0,0.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 28px rgba(255,215,0,0.28)"; }}
          >Iniciar Consultoría →</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Floating Dock ─────────────────────────────────────────── */
function FloatingDock() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const h = () => setShow(window.scrollY > 180);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const items = [
    { icon: <WhatsAppIcon />, href: "https://wa.me/5491127473914", label: "WhatsApp", bg: "linear-gradient(135deg,#25D366,#128C7E)", glow: "rgba(37,211,102,0.4)" },
    { icon: <InstagramIcon />, href: "https://instagram.com/fenz.sitiosdigitales", label: "Instagram", bg: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", glow: "rgba(220,39,67,0.35)" },
    { icon: <MailIcon />, href: "mailto:fenzsupport@gmail.com", label: "Email", bg: "linear-gradient(135deg,#FFD700,#FFA500)", glow: "rgba(255,215,0,0.4)" },
  ];

  return (
    <div style={{
      position: "fixed", bottom: "2rem", right: "2rem",
      display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.7rem",
      zIndex: 200,
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 0.4s, transform 0.4s",
      pointerEvents: show ? "all" : "none",
    }}>
      {items.map((item, i) => (
        <a key={item.label} href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          title={item.label}
          style={{
            width: 46, height: 46, borderRadius: "50%",
            background: item.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", textDecoration: "none",
            boxShadow: `0 4px 18px ${item.glow}`,
            transition: `transform 0.3s, opacity 0.3s ${(items.length - 1 - i) * 55}ms`,
            opacity: expanded ? 1 : 0,
            transform: expanded ? "scale(1)" : "scale(0.6)",
            pointerEvents: expanded ? "all" : "none",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        >{item.icon}</a>
      ))}

      <button onClick={() => setExpanded(!expanded)} aria-label="Abrir contacto" style={{
        width: 50, height: 50, borderRadius: "50%", cursor: "pointer",
        background: expanded ? "rgba(255,255,255,0.12)" : C.accent,
        border: expanded ? "1.5px solid rgba(255,255,255,0.25)" : "none",
        color: expanded ? "#fff" : C.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.25rem",
        boxShadow: expanded ? "none" : "0 4px 22px rgba(255,215,0,0.38)",
        transition: "all 0.3s",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >{expanded ? "✕" : "💬"}</button>
    </div>
  );
}

/* ─── Footer ────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${C.glassBorder}`,
      padding: "2rem",
      textAlign: "center",
    }}>
      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem" }}>
        © {new Date().getFullYear()} Fenz — Desarrollo web digital. Todos los derechos reservados.
      </p>
    </footer>
  );
}

/* ─── App ───────────────────────────────────────────────────── */
export default function FenzLanding() {
  return (
    <div style={{
      background: C.bg, color: C.text,
      fontFamily: '"Inter", "Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
      minHeight: "100vh",
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(255,215,0,0.25); }
      `}</style>
      <Header />
      <Hero />
      <Services />
      <Methodology />
      <Philosophy />
      <Footer />
      <FloatingDock />
    </div>
  );
}
