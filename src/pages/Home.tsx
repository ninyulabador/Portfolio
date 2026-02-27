import type { Page } from "../types";
import AnimSection from "../components/AnimSection";
import Counter from "../components/Counter";
import { PROJECTS, GALLERY, STATS, CLIENTS } from "../Data";
import { useState, useEffect } from "react";

// Responsive hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

interface HomeProps {
  setPage: (p: Page) => void;
}

export default function Home({ setPage }: HomeProps) {
  const isMobile = useIsMobile();
  
  // Helper functions for gallery spans and gradients
  const getGallerySpan = (span: string, isMobile: boolean) => {
    if (isMobile) {
      // On mobile, make all items 1x1
      return { gridColumn: 'span 1', gridRow: 'span 1' };
    }
    
    switch (span) {
      case 'col-span-2 row-span-2':
        return { gridColumn: 'span 2', gridRow: 'span 2' };
      case 'col-span-1 row-span-2':
        return { gridColumn: 'span 1', gridRow: 'span 2' };
      default:
        return { gridColumn: 'span 1', gridRow: 'span 1' };
    }
  };

  const getGradientFromBg = (bg: string) => {
    // Convert Tailwind gradient classes to CSS gradients
    const gradients: Record<string, string> = {
      'from-purple-900 to-pink-900': 'linear-gradient(to bottom right, #581c87, #831843)',
      'from-blue-900 to-cyan-900': 'linear-gradient(to bottom right, #1e3a8a, #164e63)',
      'from-green-900 to-emerald-900': 'linear-gradient(to bottom right, #14532d, #064e3b)',
      'from-orange-900 to-red-900': 'linear-gradient(to bottom right, #7c2d12, #7f1d1d)',
      'from-indigo-900 to-purple-900': 'linear-gradient(to bottom right, #312e81, #581c87)',
      'from-pink-900 to-rose-900': 'linear-gradient(to bottom right, #831843, #881337)',
      'from-teal-900 to-cyan-900': 'linear-gradient(to bottom right, #134e4a, #164e63)',
      'from-amber-900 to-orange-900': 'linear-gradient(to bottom right, #78350f, #7c2d12)',
      'from-lime-900 to-green-900': 'linear-gradient(to bottom right, #365314, #14532d)',
      'from-red-900 to-pink-900': 'linear-gradient(to bottom right, #7f1d1d, #831843)',
      'from-cyan-900 to-blue-900': 'linear-gradient(to bottom right, #164e63, #1e3a8a)',
      'from-emerald-900 to-green-900': 'linear-gradient(to bottom right, #064e3b, #14532d)'
    };
    return gradients[bg] || 'linear-gradient(to bottom right, #1e3a8a, #164e63)';
  };

  return (
    <div style={{ minHeight: '100vh', background: '#08080C' }}>

      {/* ── Section 1: Hero ─────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '6rem 2rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              "linear-gradient(rgba(200,255,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '8rem',
            right: 0,
            width: '24rem',
            height: '24rem',
            borderRadius: '50%',
            pointerEvents: 'none',
            background: "radial-gradient(circle, rgba(200,255,0,0.12) 0%, transparent 70%)"
          }}
        />

        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          alignItems: 'center', 
          gap: isMobile ? '2rem' : '4rem', 
          width: '100%', 
          position: 'relative', 
          zIndex: 10,
          textAlign: isMobile ? 'center' : 'left'
        }}>
          {/* Text */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.4em',
                marginBottom: '1.5rem',
                color: '#C8FF00',
                fontFamily: "'Space Mono', monospace"
              }}
            >
              Available for Projects
            </p>
            <h1
              style={{
                fontSize: 'clamp(4rem, 10vw, 7rem)',
                fontWeight: 900,
                lineHeight: 1,
                marginBottom: '2rem',
                fontFamily: "'Space Mono', monospace",
                color: '#fff',
                animation: 'fadeUp 0.9s ease forwards',
              }}
            >
              Nin L.<br />
              <span style={{ color: "#C8FF00" }}>Labador</span>
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                maxWidth: '26rem',
                marginBottom: '2.5rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Georgia, serif'
              }}
            >
              Designer &amp; developer building digital experiences that feel inevitable.
              I believe great software is closer to poetry than engineering.
            </p>
            <button
              onClick={() => setPage("about")}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 2rem',
                fontWeight: 700,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                transition: 'all 0.3s ease',
                fontFamily: "'Space Mono', monospace",
                background: '#C8FF00',
                color: '#08080C',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#C8FF00')}
            >
              Learn More
              <span style={{ transition: 'transform 0.3s ease' }}>→</span>
            </button>
          </div>

          {/* Photo */}
          <div style={{ 
            flexShrink: 0, 
            position: 'relative', 
            animation: 'fadeUp 1.1s ease 0.2s both',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '300px' : 'none'
          }}>
            <div style={{ 
              width: isMobile ? '250px' : '18rem', 
              height: isMobile ? '300px' : '22rem', 
              position: 'relative',
              margin: isMobile ? '0 auto' : '0'
            }}>
              <div
                style={{
                  position: 'absolute',
                  top: '-0.75rem',
                  left: '-0.75rem',
                  width: '100%',
                  height: '100%',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: '#C8FF00'
                }}
              />
              <img 
                src="src/assets/image/ax.png"
                alt="AX"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '0'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  right: '-1rem',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  background: '#C8FF00',
                  color: '#08080C',
                  fontFamily: "'Space Mono', monospace"
                }}
              >
                <div 
                >Full-Stack</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Projects ──────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <AnimSection>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem' }}>
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4em',
                  marginBottom: '0.75rem',
                  display: 'block',
                  color: '#C8FF00',
                  fontFamily: "'Space Mono', monospace"
                }}
              >
                02 / Work
              </span>
              <h2
                style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  fontFamily: "'Space Mono', monospace",
                  color: '#fff'
                }}
              >
                Selected<br />Projects
              </h2>
            </div>
            <span
              style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.3)',
                fontFamily: "'Space Mono', monospace"
              }}
            >
              2022–2024
            </span>
          </div>
        </AnimSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem' }}>
          {PROJECTS.map((p, i) => (
            <AnimSection key={p.id} delay={i * 80}>
              <div
                className="card group"
                style={{
                  padding: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.03)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = p.color;
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      padding: '0.25rem 0.5rem',
                      border: '1px solid',
                      borderColor: p.color,
                      color: p.color,
                      fontFamily: "'Space Mono', monospace"
                    }}
                  >
                    {p.category}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.3)',
                      fontFamily: "'Space Mono', monospace"
                    }}
                  >
                    {p.year}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    fontFamily: "'Space Mono', monospace",
                    color: '#fff'
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.45)',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    marginTop: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: p.color,
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  View Case Study <span>→</span>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* ── Section 3: Gallery ───────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(255,255,255,0.02)', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimSection>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.4em',
                marginBottom: '0.75rem',
                display: 'block',
                color: '#C8FF00',
                fontFamily: "'Space Mono', monospace"
              }}
            >
              03 / Gallery
            </span>
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                marginBottom: '4rem',
                fontFamily: "'Space Mono', monospace",
                color: '#fff'
              }}
            >
              Visual<br />Archive
            </h2>
          </AnimSection>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
            gridTemplateRows: isMobile ? 'repeat(6, 1fr)' : 'repeat(3, 1fr)', 
            gap: '1rem', 
            height: isMobile ? 'auto' : '600px'
          }}>
            {GALLERY.map((g, i) => (
              <AnimSection key={g.id} delay={i * 60} style={{ overflow: 'hidden', ...getGallerySpan(g.span, isMobile) }}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: getGradientFromBg(g.bg),
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.25rem',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0)',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0)'}
                  />
                  <span
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      position: 'relative',
                      zIndex: 10,
                      transition: 'transform 0.3s ease',
                      fontFamily: "'Space Mono', monospace",
                      color: "rgba(255,255,255,0.9)"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(0.25rem)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                  >
                    {g.label} ↗
                  </span>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Stats / Clients ───────────────────────────── */}
      <section style={{ padding: '8rem 2rem', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <AnimSection>
          <span
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              marginBottom: '0.75rem',
              display: 'block',
              color: '#C8FF00',
              fontFamily: "'Space Mono', monospace"
            }}
          >
            04 / Numbers
          </span>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 900,
              marginBottom: '5rem',
              fontFamily: "'Space Mono', monospace",
              color: '#fff'
            }}
          >
            Time &amp;<br />Impact
          </h2>
        </AnimSection>

        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
            gap: isMobile ? '2rem' : '3rem', 
            marginBottom: isMobile ? '4rem' : '6rem' 
          }}>
          {STATS.map((s, i) => (
            <AnimSection key={s.label} delay={i * 100}>
              <div style={{ borderLeft: '2px solid #C8FF00', paddingLeft: '1.5rem' }}>
                <Counter target={s.value} suffix={s.suffix} />
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  {s.label}
                </p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection>
          <p
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              marginBottom: '2rem',
              color: 'rgba(255,255,255,0.3)',
              fontFamily: "'Space Mono', monospace"
            }}
          >
            Trusted by
          </p>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: isMobile ? '1.5rem' : '2.5rem', 
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            {CLIENTS.map((c) => (
              <span
                key={c}
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 900,
                  opacity: 0.2,
                  transition: 'opacity 0.2s ease',
                  fontFamily: "'Space Mono', monospace",
                  color: '#fff',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.2'}
              >
                {c}
              </span>
            ))}
          </div>
        </AnimSection>
      </section>

      {/* ── Section 5: Philosophy / CTA ──────────────────────────── */}
      <section style={{ 
            padding: isMobile ? '4rem 2rem' : '8rem 2rem', 
            position: 'relative', 
            overflow: 'hidden', 
            background: '#C8FF00', 
            maxWidth: '1280px', 
            margin: '0 auto', 
            width: '100%' 
          }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              "linear-gradient(rgba(8,8,12,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(8,8,12,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <AnimSection>
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.4em',
                marginBottom: '1.5rem',
                color: 'rgba(8,8,12,0.5)',
                fontFamily: "'Space Mono', monospace"
              }}
            >
              05 / Philosophy
            </p>
            <h2
              style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1,
                marginBottom: '2rem',
                fontFamily: "'Space Mono', monospace",
                color: '#08080C'
              }}
            >
              The best<br />interface is<br />invisible.
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                maxWidth: '32rem',
                marginBottom: '3rem',
                lineHeight: 1.75,
                color: 'rgba(8,8,12,0.6)',
                fontFamily: 'Georgia, serif'
              }}
            >
              I build things that get out of the way — letting your users focus entirely on
              what matters. Every pixel serves a purpose. Every interaction earns its place.
            </p>
            <button
              onClick={() => setPage("contact")}
              style={{
                padding: '1rem 2rem',
                fontWeight: 700,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: '#08080C',
                color: '#08080C',
                background: 'transparent',
                transition: 'all 0.3s ease',
                fontFamily: "'Space Mono', monospace",
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#08080C';
                e.currentTarget.style.color = '#C8FF00';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#08080C';
              }}
            >
              Start a Project →
            </button>
          </AnimSection>
        </div>
      </section>
    </div>
  );
}