import { useState, useEffect } from "react";
import AnimSection from "../components/AnimSection";
// Note: You need to install @emailjs/browser first
// npm install @emailjs/browser
import emailjs from '@emailjs/browser';

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

type FormState = {
  name: string;
  email: string;
  project: string;
  message: string;
};

const INPUT_FIELDS: { key: keyof FormState; label: string; type: string; placeholder?: string }[] = [
  { key: "name", label: "Name", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "project", label: "Project Type", type: "text", placeholder: "e.g. Brand Identity, Web App..." },
];

export default function Contact() {
  const isMobile = useIsMobile();
  const [form, setForm] = useState<FormState>({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    
    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        project: form.project,
        message: form.message,
        time: new Date().toLocaleString()
      };

      const response = await emailjs.send(
        import.meta.env.VITE_PUBLIC_SERVICES_KEY,
        import.meta.env.VITE_PUBLIC_TEMPLATE_KEY,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSent(true);
        // Reset form
        setForm({ name: "", email: "", project: "", message: "" });
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem', background: '#08080C', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
      <div>

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
            Get in Touch
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
            Let's Build<br /><span style={{ color: "#C8FF00" }}>Something</span><br />Great
          </h1>
        </AnimSection>

        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
            gap: isMobile ? '2rem' : '5rem' 
          }}>

          {/* Form */}
          <AnimSection>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem', padding: '4rem 0' }}>
                <div style={{ fontSize: '4rem', color: '#C8FF00' }}>✓</div>
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    fontFamily: "'Space Mono', monospace",
                    color: '#fff'
                  }}
                >
                  Message Sent.
                </h2>
                <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Georgia, serif" }}>
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {INPUT_FIELDS.map((field) => (
                  <div key={field.key}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginBottom: '0.5rem',
                        color: 'rgba(255,255,255,0.4)',
                        fontFamily: "'Space Mono', monospace"
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder ?? ""}
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        outline: 'none',
                        borderBottom: '2px solid',
                        background: 'transparent',
                        transition: 'border-color 0.2s ease',
                        borderColor: 'rgba(255,255,255,0.12)',
                        color: '#fff',
                        fontFamily: "'Space Mono', monospace",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                    />
                  </div>
                ))}

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      marginBottom: '0.5rem',
                      color: 'rgba(255,255,255,0.4)',
                      fontFamily: "'Space Mono', monospace"
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      outline: 'none',
                      border: '2px solid',
                      background: 'transparent',
                      resize: 'none',
                      transition: 'border-color 0.2s ease',
                      borderColor: 'rgba(255,255,255,0.12)',
                      color: '#fff',
                      fontFamily: "'Space Mono', monospace",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    padding: '1rem 2rem',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    transition: 'all 0.3s ease',
                    background: '#C8FF00',
                    color: '#08080C',
                    fontFamily: "'Space Mono', monospace",
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#C8FF00")}
                >
                  Send Message →
                </button>
              </div>
            )}
          </AnimSection>

          {/* Info */}
          <AnimSection delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <p
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    marginBottom: '0.5rem',
                    color: 'rgba(255,255,255,0.3)',
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    fontFamily: "'Space Mono', monospace",
                    color: '#C8FF00'
                  }}
                >
                  alex@xavierdesign.io
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    marginBottom: '0.5rem',
                    color: 'rgba(255,255,255,0.3)',
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  Based in
                </p>
                <p
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    fontFamily: "'Space Mono', monospace",
                    color: '#fff'
                  }}
                >
                  San Francisco, CA
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    marginBottom: '1rem',
                    color: 'rgba(255,255,255,0.3)',
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  Social
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {["Twitter", "GitHub", "LinkedIn", "Dribbble"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      style={{ 
                        fontSize: '0.875rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'rgba(255,255,255,0.35)',
                        fontFamily: "'Space Mono', monospace",
                        textDecoration: 'none',
                        transition: 'opacity 0.2s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.35'}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: '1.5rem',
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
                    marginBottom: '0.5rem',
                    color: '#C8FF00',
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  Response Time
                </p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Georgia, serif" }}>
                  I reply to all serious inquiries within 24 hours. For urgent projects,
                  mention it in your message.
                </p>
              </div>
            </div>
          </AnimSection>
        </div>
      </div>
    </div>
  );
}