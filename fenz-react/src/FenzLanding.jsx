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
      padding: w < 768 ? "0 1rem" : "0 2rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", height: 64,
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
            <a href="https://wa.me/5491127473914" target="_blank" rel="noopener noreferrer" style={{
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
          <a href="https://wa.me/5491127473914" target="_blank" rel="noopener noreferrer" style={{
            display: "block", marginTop: "1.25rem",
            background: C.accent, color: C.bg,
            padding: "0.9rem", borderRadius: 8,
            fontWeight: 700, fontSize: "1rem", textAlign: "center",
            textDecoration: "none", minHeight: 48,
          }}>Consultoría</a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero (Video fullscreen) ───────────────────────────────── */
function Hero() {
  const w = useWidth();
  const isMobile = w < 768;
  return (
    <section className="hero-section" style={{
      position: "relative",
      width: "100%",
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
          /* En móvil portrait, el video landscape queda muy recortado en los costados.
             Mostramos la parte superior-central del frame donde suele estar el sujeto. */
          objectPosition: isMobile ? "center 30%" : "center center",
          zIndex: 0,
        }}
      >
        <source src="hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro sutil */}
      <div style={{
        position: "absolute", inset: 0,
        background: isMobile ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.35)",
        zIndex: 1,
      }} />

      {/* En móvil: gradientes en los bordes para suavizar el recorte lateral del video */}
      {isMobile && (
        <>
          <div style={{
            position: "absolute", left: 0, top: 0, width: "18%", height: "100%",
            background: "linear-gradient(to right, rgba(10,15,30,0.85), transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: 0, width: "18%", height: "100%",
            background: "linear-gradient(to left, rgba(10,15,30,0.85), transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
        </>
      )}

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2.5rem", left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3, display: "flex", flexDirection: "column",
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

/* ─── Network background SVG ────────────────────────────────── */
function NetworkBg() {
  const w = useWidth();
  if (w < 768) return null;
  const nodes = [
    [490,10],[440,55],[480,100],[420,140],[460,185],[390,90],[430,230],
    [370,170],[410,280],[350,50],[480,250],[370,310],[440,330],[500,180],
    [360,230],[500,310],[420,380],[340,130],
  ];
  const lines = [
    [0,1],[1,2],[1,5],[2,3],[3,5],[3,7],[4,6],[4,13],[5,9],[6,10],
    [6,12],[7,17],[7,9],[8,11],[8,14],[10,13],[10,15],[11,14],[12,15],
    [12,16],[13,1],[15,16],[14,7],[9,1],[2,13],
  ];
  return (
    <svg style={{ position:"absolute", top:0, right:0, width:"50%", height:"100%", pointerEvents:"none", zIndex:0 }}
      viewBox="0 0 500 420" preserveAspectRatio="xMaxYMin slice">
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00e5d4" stopOpacity="1"/>
          <stop offset="100%" stopColor="#00b8ae" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {lines.map(([a,b],i) => (
        <line key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#00c8be" strokeWidth="0.9" opacity="0.4"/>
      ))}
      {nodes.map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="#00e5d4" opacity="0.12"/>
          <circle cx={x} cy={y} r="3" fill="#00e5d4" opacity="0.9"/>
        </g>
      ))}
    </svg>
  );
}

/* ─── Service Card ──────────────────────────────────────────── */
function ServiceCard({ icon, title, desc, detail, delay }) {
  const [ref, visible] = useVisible();
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: "linear-gradient(145deg, #07111e 0%, #0a1828 100%)",
        border: `1.5px solid ${hovered ? "#00e5d4" : "rgba(0,210,200,0.55)"}`,
        borderRadius: 14, padding: "1.75rem", cursor: "default",
        boxShadow: hovered
          ? "0 0 22px rgba(0,229,212,0.25), 0 0 60px rgba(0,180,170,0.08), inset 0 0 30px rgba(0,180,170,0.04)"
          : "0 0 10px rgba(0,210,200,0.12), inset 0 0 20px rgba(0,150,145,0.03)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ${delay}ms, transform 0.7s ${delay}ms, border-color 0.3s, box-shadow 0.3s`,
        position: "relative",
      }}>
      {/* Icon box */}
      <div style={{
        width: 52, height: 52, borderRadius: 12,
        background: "linear-gradient(145deg, #0e1f30 0%, #162840 100%)",
        border: "1px solid rgba(0,200,190,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "1.25rem",
        boxShadow: "0 2px 12px rgba(0,180,170,0.15)",
      }}>{icon}</div>
      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "0.35rem" }}>{title}</h3>
      <p style={{ color: "#FFD700", fontSize: "0.87rem", fontWeight: 600, marginBottom: "0.7rem" }}>{desc}</p>
      <p style={{ color: "rgba(190,215,220,0.72)", fontSize: "0.86rem", lineHeight: 1.65 }}>{detail}</p>
    </div>
  );
}

/* ─── Services ──────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: <Zap size={24} color="#FFD700" />,
    title: "Landing Pages",
    desc: "Diseño que vende. Conversión pura.",
    detail: "Páginas de alto impacto optimizadas para convertir visitantes en clientes desde el primer segundo.",
  },
  {
    icon: <ShoppingBag size={24} color="#FFD700" />,
    title: "E-commerce",
    desc: "Tiendas que escalan. Robustez y seguridad.",
    detail: "Soluciones de comercio electrónico diseñadas para crecer con tu negocio, con máxima performance.",
  },
  {
    icon: <Building2 size={24} color="#FFD700" />,
    title: "Sitios Institucionales",
    desc: "Autoridad digital. Identidad sólida y vanguardista.",
    detail: "Presencia digital que proyecta confianza y solidez para tu marca o empresa.",
  },
];

function Services() {
  const [ref, visible] = useVisible();
  const w = useWidth();

  return (
    <section id="servicios" style={{
      padding: w < 768 ? "5rem 1.5rem" : "7rem 2rem",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(160deg, #060e1c 0%, #040a15 60%, #07111f 100%)",
    }}>
      <NetworkBg />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div ref={ref} style={{
          textAlign: "center", marginBottom: "3.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
          transition: "opacity 0.6s, transform 0.6s",
        }}>
          <p style={{ color: C.accent, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Servicios
          </p>
          <h2 style={{ fontSize: w < 768 ? "1.9rem" : "clamp(1.9rem,3.5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em" }}>
            Soluciones que transforman negocios
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: w < 768 ? "1fr" : "repeat(3,1fr)", gap: "1.5rem" }}>
          {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 130} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── Wave Mesh SVG (left background) ──────────────────────── */
function WaveMesh() {
  const w = useWidth();
  if (w < 768) return null;
  const pts = [];
  const cols = 14, rows = 8;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c / (cols - 1)) * 500;
      const wave = Math.sin((c / cols) * Math.PI * 2 + r * 0.7) * 28 + Math.sin((c / cols) * Math.PI + r) * 14;
      const y = (r / (rows - 1)) * 320 + wave;
      pts.push({ x, y, r, c });
    }
  }
  const lines = [];
  pts.forEach((p, i) => {
    if (p.c < cols - 1) lines.push([p, pts[i + 1]]);
    if (p.r < rows - 1) lines.push([p, pts[i + cols]]);
    if (p.c < cols - 1 && p.r < rows - 1) lines.push([p, pts[i + cols + 1]]);
  });
  return (
    <svg style={{ position: "absolute", left: 0, bottom: 0, width: "45%", height: "90%", pointerEvents: "none", zIndex: 0, opacity: 0.28 }}
      viewBox="0 0 500 380" preserveAspectRatio="xMinYMax meet">
      {lines.map(([a, b], i) => (
        <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
          stroke="#4dd9f0" strokeWidth="0.7" opacity="0.6" />
      ))}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.8" fill="#7ee8f8" opacity="0.7" />
      ))}
    </svg>
  );
}

/* ─── Methodology ───────────────────────────────────────────── */
const STEPS = [
  { num: "01", title: "Discovery & Estrategia", desc: "Analizamos tu negocio, audiencias y objetivos para construir una hoja de ruta clara y efectiva." },
  { num: "02", title: "Diseño UI/UX",           desc: "Interfaces que cautivan y guían al usuario hacia la conversión con cada microinteracción." },
  { num: "03", title: "Desarrollo Ágil",         desc: "Código limpio, modular y escalable. Iteraciones rápidas con resultados medibles en cada sprint." },
  { num: "04", title: "Lanzamiento & Optimización", desc: "Deploy, monitoreo continuo y mejoras basadas en datos reales para maximizar el rendimiento." },
];

function MethodStep({ step, index, last }) {
  const [ref, visible] = useVisible(0.1);
  return (
    <div ref={ref} style={{
      display: "flex", gap: "1rem", alignItems: "flex-start",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(30px)",
      transition: `opacity 0.6s ${index * 130}ms, transform 0.6s ${index * 130}ms`,
    }}>
      {/* Number + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: 46, height: 46, borderRadius: "50%",
          background: "linear-gradient(135deg, #1a2e1a 0%, #0a1a10 100%)",
          border: "2px solid #00e5d4",
          boxShadow: "0 0 14px rgba(0,229,212,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: C.accent, fontWeight: 800, fontSize: "0.82rem",
          flexShrink: 0, zIndex: 1,
        }}>{step.num}</div>
        {!last && (
          <div style={{
            width: 2, flex: 1, minHeight: 16,
            background: "linear-gradient(to bottom, #00e5d4, rgba(0,229,212,0.1))",
            boxShadow: "0 0 6px rgba(0,229,212,0.4)",
            marginTop: 2, marginBottom: 2,
          }} />
        )}
      </div>
      {/* Card */}
      <div style={{
        flex: 1,
        background: "linear-gradient(145deg, #07111e 0%, #0a1828 100%)",
        border: "1.5px solid rgba(0,210,200,0.5)",
        borderRadius: 12, padding: "0.9rem 1.1rem",
        marginBottom: last ? 0 : "0.6rem",
        boxShadow: "0 0 8px rgba(0,210,200,0.1)",
      }}>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "0.3rem" }}>{step.title}</h3>
        <p style={{ color: "rgba(190,215,220,0.72)", fontSize: "0.84rem", lineHeight: 1.6 }}>{step.desc}</p>
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
      padding: isMobile ? "5rem 1.5rem" : "6rem 2rem",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(160deg, #060e1c 0%, #050c18 60%, #081220 100%)",
    }}>
      <WaveMesh />
      <div style={{
        maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1,
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.1fr",
        gap: isMobile ? "3rem" : "4rem", alignItems: "center",
      }}>
        {/* Left text */}
        <div ref={ref} style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
          transition: "opacity 0.6s, transform 0.6s",
        }}>
          <p style={{ color: C.accent, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Metodología
          </p>
          <h2 style={{ fontSize: isMobile ? "1.8rem" : "clamp(1.9rem,3.2vw,2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", marginBottom: "1.2rem", lineHeight: 1.15 }}>
            Proceso comprobado,<br/>resultados garantizados.
          </h2>
          <p style={{ color: "rgba(190,215,220,0.72)", fontSize: "0.97rem", lineHeight: 1.75, maxWidth: 400 }}>
            Cada proyecto sigue nuestra metodología de 4 etapas que garantiza resultados medibles y una experiencia fluida de principio a fin.
          </p>
        </div>
        {/* Right steps */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {STEPS.map((s, i) => (
            <MethodStep key={s.num} step={s} index={i} last={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Philosophy BG: nodes left + golden city map right ─────── */
function PhilosophyBg() {
  const w = useWidth();
  if (w < 768) return null;
  // Left: network nodes
  const nodes = [[60,40],[120,90],[40,150],[100,180],[160,120],[200,60],[80,230],[140,260],[200,200],[240,140],[30,300],[110,310]];
  const lines = [[0,1],[0,5],[1,2],[1,4],[2,3],[3,6],[3,7],[4,5],[4,8],[5,9],[6,7],[7,8],[8,9],[8,10],[9,10],[10,11]];

  // Right: golden circular city map
  const rings = [40, 80, 125, 170, 210];
  const cx = 260, cy = 220;
  const radialLines = Array.from({length: 18}, (_, i) => (i * 20) * Math.PI / 180);
  const streets = [
    [[cx-210,cy-30],[cx+210,cy-30]],[[cx-210,cy+40],[cx+210,cy+40]],
    [[cx-210,cy+100],[cx+210,cy+100]],[[cx-210,cy-100],[cx+210,cy-100]],
    [[cx-50,cy-210],[cx-50,cy+210]],[[cx+50,cy-210],[cx+50,cy+210]],
    [[cx+120,cy-200],[cx-80,cy+200]],[[cx-120,cy-200],[cx+80,cy+200]],
  ];

  return (
    <>
      {/* Left network */}
      <svg style={{ position:"absolute", left:0, top:0, width:"38%", height:"100%", pointerEvents:"none", zIndex:0, opacity:0.3 }}
        viewBox="0 0 280 360" preserveAspectRatio="xMinYMid meet">
        {lines.map(([a,b],i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
            stroke="#6ad4e8" strokeWidth="0.8" opacity="0.55"/>
        ))}
        {nodes.map(([x,y],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill="#4dd9f0" opacity="0.1"/>
            <circle cx={x} cy={y} r="2.5" fill="#7ee8f8" opacity="0.85"/>
          </g>
        ))}
      </svg>

      {/* Right golden city map */}
      <svg style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)", width:"36%", height:"110%", pointerEvents:"none", zIndex:0, opacity:0.22 }}
        viewBox="0 0 520 440" preserveAspectRatio="xMaxYMid meet">
        <defs>
          <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#b8860b" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r="215" fill="url(#cityGlow)" opacity="0.4"/>
        {rings.map((r,i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="#FFD700" strokeWidth={i===0?"2":"1"} opacity={0.5 - i*0.06}/>
        ))}
        {radialLines.map((angle,i) => (
          <line key={i} x1={cx} y1={cy}
            x2={cx + Math.cos(angle)*210} y2={cy + Math.sin(angle)*210}
            stroke="#FFD700" strokeWidth="0.6" opacity="0.3"/>
        ))}
        {streets.map(([[x1,y1],[x2,y2]],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#daa520" strokeWidth="1.2" opacity="0.35"
            strokeDasharray={i%2===0?"none":"6,4"}/>
        ))}
        <circle cx={cx} cy={cy} r="8" fill="#FFD700" opacity="0.9"/>
        <circle cx={cx} cy={cy} r="4" fill="#fff" opacity="0.8"/>
      </svg>
    </>
  );
}

/* ─── Philosophy / CTA ──────────────────────────────────────── */
function Philosophy() {
  const [ref, visible] = useVisible();
  const w = useWidth();

  return (
    <section id="nosotros" style={{
      padding: w < 768 ? "5rem 1.5rem" : "7rem 2rem",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(160deg, #060e1c 0%, #050b18 50%, #07101e 100%)",
    }}>
      <PhilosophyBg />
      <div ref={ref} style={{
        maxWidth: 780, margin: "0 auto", textAlign: "center",
        position: "relative", zIndex: 1,
        padding: w < 768 ? "0 0.5rem" : "0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s, transform 0.8s",
      }}>
        <p style={{ color: C.accent, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.75rem" }}>
          Filosofía
        </p>

        <blockquote style={{
          fontSize: w < 768 ? "1.3rem" : "clamp(1.4rem,2.6vw,2rem)",
          fontWeight: 700, color: "#fff", lineHeight: 1.45,
          letterSpacing: "-0.01em", marginBottom: "1.75rem", fontStyle: "normal",
        }}>
          "Más que código, impulsamos tu evolución. En Fenz, somos arquitectos de soluciones digitales obsesionados con el rendimiento."
        </blockquote>

        {/* Gold divider */}
        <div style={{
          width: 60, height: 3,
          background: "linear-gradient(to right, rgba(255,215,0,0.2), #FFD700, rgba(255,215,0,0.2))",
          borderRadius: 999, margin: "0 auto 1.75rem",
        }} />

        <p style={{ color: "rgba(200,215,225,0.7)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.25rem", maxWidth: 480, margin: "0 auto 2.25rem" }}>
          Tu visión merece una ejecución impecable. Empecemos a construirla.
        </p>

        <a href="https://wa.me/5491127473914" target="_blank" rel="noopener noreferrer" style={{
          display: w < 768 ? "block" : "inline-block",
          background: "transparent",
          border: "2px solid #FFD700",
          color: "#FFD700",
          padding: "0.9rem 2.5rem", borderRadius: 8,
          fontWeight: 700, fontSize: "1rem",
          textDecoration: "none",
          transition: "background 0.25s, color 0.25s, box-shadow 0.25s, transform 0.2s",
          boxShadow: "0 0 18px rgba(255,215,0,0.18)",
          textAlign: "center",
          minHeight: 48,
          lineHeight: "1.5",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "#FFD700"; e.currentTarget.style.color = "#0A0F1E"; e.currentTarget.style.boxShadow = "0 0 36px rgba(255,215,0,0.45)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.boxShadow = "0 0 18px rgba(255,215,0,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >Iniciar Consultoría →</a>
      </div>
    </section>
  );
}

/* ─── Floating Dock ─────────────────────────────────────────── */
function FloatingDock() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const w = useWidth();
  const isMobile = w < 768;

  useEffect(() => {
    const h = () => setShow(window.scrollY > 180);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const items = [
    { icon: <WhatsAppIcon />, href: "https://wa.me/5491127473914", label: "WhatsApp", bg: "linear-gradient(135deg,#25D366,#128C7E)", glow: "rgba(37,211,102,0.4)" },
    { icon: <InstagramIcon />, href: "https://instagram.com/fenz.sitiosdigitales", label: "Instagram", bg: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", glow: "rgba(220,39,67,0.35)" },
    { icon: <MailIcon />, href: "https://wa.me/5491127473914", label: "Email", bg: "linear-gradient(135deg,#FFD700,#FFA500)", glow: "rgba(255,215,0,0.4)" },
  ];

  return (
    <div style={{
      position: "fixed", bottom: isMobile ? "1rem" : "2rem", right: isMobile ? "1rem" : "2rem",
      display: "flex", flexDirection: "column", alignItems: "flex-end", gap: isMobile ? "0.5rem" : "0.7rem",
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
      padding: "1.5rem 1rem",
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
        .hero-section { height: 100vh; }
        @supports (height: 100dvh) { .hero-section { height: 100dvh; } }
        @media (max-width: 767px) {
          .service-card { padding: 1.25rem !important; }
          .method-card { padding: 0.75rem 0.9rem !important; }
          .philosophy-quote { padding: 0 0.5rem; }
        }
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
