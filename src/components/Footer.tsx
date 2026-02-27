export default function Footer() {
  return (
    <footer
      className="px-8 py-8 border-t flex items-center justify-between"
      style={{
        borderColor: "rgba(200,255,0,0.1)",
        background: "#08080C",
      }}
    >
      <span
        className="text-xs"
        style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'Space Mono', monospace" }}
      >
        
      </span>
      <span
        className="text-xs"
        style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'Space Mono', monospace" }}
      >
        Designed &amp; Built by Nino Labador
      </span>
    </footer>
  );
}