import AnimSection from "../components/AnimSection";
import { SERVICES } from "../Data";
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

export default function Service() {
  const isMobile = useIsMobile();
  
  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem', background: '#08080C', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>

        {/* Heading */}
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
            What I Do
          </span>
          <h1
            style={{
              fontSize: 'clamp(4rem, 10vw, 7rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              lineHeight: 1,
              fontFamily: "'Space Mono', monospace",
              color: '#fff'
            }}
          >
            Services
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              maxWidth: '36rem',
              marginBottom: '5rem',
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'Georgia, serif'
            }}
          >
            I offer end-to-end product creation — from the first sketch on a napkin to a
            live, performant product that users love.
          </p>
        </AnimSection>

        {/* Service Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1px',
            marginBottom: isMobile ? '4rem' : '6rem',
            background: 'rgba(255,255,255,0.08)'
          }}
        >
          {SERVICES.map((s, i) => (
            <AnimSection key={s.title} delay={i * 100}>
              <div
                style={{
                  padding: isMobile ? '2rem' : '2.5rem',
                  transition: 'background 0.3s ease',
                  cursor: 'pointer',
                  background: '#08080C'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,255,0,0.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#08080C")}
              >
                <div style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: '#C8FF00' }}>
                  {s.icon}
                </div>
                <h2
                  style={{
                    fontSize: '1.875rem',
                    fontWeight: 900,
                    marginBottom: '1rem',
                    fontFamily: "'Space Mono', monospace",
                    color: '#fff'
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    marginBottom: '2rem',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  {s.desc}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {s.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: 'rgba(255,255,255,0.35)',
                        fontFamily: "'Space Mono', monospace"
                      }}
                    >
                      <span style={{ color: "#C8FF00" }}>+</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimSection>
          ))}
        </div>

        {/* Pricing note */}
        <AnimSection>
          <div
            style={{
              padding: '2.5rem',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgba(200,255,0,0.2)',
              background: 'rgba(200,255,0,0.03)'
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
                color: '#C8FF00',
                fontFamily: "'Space Mono', monospace"
              }}
            >
              Pricing
            </p>
            <p
              style={{
                fontSize: '1.875rem',
                fontWeight: 900,
                marginBottom: '1rem',
                fontFamily: "'Space Mono', monospace",
                color: '#fff'
              }}
            >
              Every project is different.
            </p>
            <p
              style={{
                maxWidth: '36rem',
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'Georgia, serif'
              }}
            >
              I don't do cookie-cutter packages. Tell me what you're building and I'll give
              you an honest proposal — usually within 48 hours.
            </p>
          </div>
        </AnimSection>
    </div>
  );
}