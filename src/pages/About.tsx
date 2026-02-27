import AnimSection from "../components/AnimSection";
import { SKILLS, TIMELINE } from "../Data";

export default function About() {
  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '6rem',
        padding: '6rem 2rem',
        background: '#08080C',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%'
      }}
    >
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
          About Me
        </span>
        <h1
          style={{
            fontSize: 'clamp(4rem, 10vw, 7rem)',
            fontWeight: 900,
            marginBottom: '5rem',
            lineHeight: 1,
            fontFamily: "'Space Mono', monospace",
            color: '#fff'
          }}
        >
          The<br />Person<br /><span style={{ color: "#C8FF00" }}>Behind</span><br />the Work
        </h1>
      </AnimSection>

      {/* Photo + Bio */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5rem', marginBottom: '6rem' }}>
        <AnimSection>
          <div style={{ width: '100%', height: '20rem', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '-0.75rem',
                left: '-0.75rem',
                width: '100%',
                height: '100%',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: '#C8FF00',
                opacity: 0.4
              }}
            />
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: "linear-gradient(135deg,#1a1a2e,#0f3460)",
                fontSize: '6.25rem',
                color: "rgba(200,255,0,0.3)",
                fontFamily: "'Space Mono', monospace",
                fontWeight: 900,
              }}
            >
              AX
            </div>
          </div>
        </AnimSection>

        <AnimSection delay={150}>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              marginBottom: '2rem',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'Georgia, serif'
            }}
          >
            I'm a designer-developer hybrid based in San Francisco, obsessed with the intersection
            of craft and code. My work lives in the space where visual thinking meets technical execution.
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              marginBottom: '2rem',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'Georgia, serif'
            }}
          >
            With 6 years of professional experience spanning startups to established brands, I've
            learned that the real work is not in building features — it's in deciding which ones to remove.
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#C8FF00',
              fontFamily: "'Space Mono', monospace"
            }}
          >
            Currently open for freelance → 2025
          </p>
        </AnimSection>
      </div>

      {/* Skills */}
      <AnimSection style={{ marginBottom: '6rem' }}>
        <h2
          className="text-3xl font-black mb-10"
          style={{ fontFamily: "'Space Mono', monospace", color: "#fff" }}
        >
          Skillset
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {SKILLS.map((s, i) => (
            <AnimSection key={s.label} delay={i * 60}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span
                  style={{
                    width: '10rem',
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  {s.label}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '0.25rem',
                    borderRadius: '99px',
                    background: 'rgba(255,255,255,0.1)'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      borderRadius: '99px',
                      transition: 'all 1s ease',
                      background: '#C8FF00',
                      width: `${s.pct}%`
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: "#C8FF00",
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  {s.pct}%
                </span>
              </div>
            </AnimSection>
          ))}
        </div>
      </AnimSection>

      {/* Timeline */}
      <AnimSection>
        <h2
          className="text-3xl font-black mb-10"
          style={{ fontFamily: "'Space Mono', monospace", color: "#fff" }}
        >
          Journey
        </h2>
        <div
          style={{
            position: 'relative',
            borderLeft: '2px solid rgba(200,255,0,0.3)',
            paddingLeft: '2.5rem'
          }}
        >
          {TIMELINE.map((t, i) => (
            <AnimSection key={t.year} delay={i * 100} style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '-0.375rem',
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '50%',
                  background: '#C8FF00',
                  marginTop: '0.25rem'
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#C8FF00',
                  fontFamily: "'Space Mono', monospace"
                }}
              >
                {t.year}
              </span>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginTop: '0.25rem',
                  fontFamily: "'Space Mono', monospace",
                  color: '#fff'
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  marginTop: '0.25rem',
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: 'Georgia, serif'
                }}
              >
                {t.place}
              </p>
            </AnimSection>
          ))}
        </div>
      </AnimSection>
    </div>
  );
}