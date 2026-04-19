import { useState } from "react";

export default function BassSection({ genre }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Pattern tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        {genre.bassPatterns.map((b, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: "4px 10px",
              background: active === i ? genre.color : "var(--bg-3)",
              color: active === i ? "#000" : "var(--text-secondary)",
              borderRadius: 2,
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            B{i + 1}
          </button>
        ))}
      </div>

      {/* Patterns */}
      {genre.bassPatterns.map((b, i) => (
        <div
          key={i}
          style={{
            background: "var(--bg-2)",
            border: `1px solid ${active === i ? genre.color + "55" : "var(--border)"}`,
            borderRadius: 3,
            padding: 12,
            marginBottom: 8,
            opacity: active === i ? 1 : 0.35,
            transition: "opacity 0.15s, border-color 0.15s",
          }}
        >
          <div style={{ fontSize: 11, color: genre.color, fontWeight: 700, marginBottom: 8 }}>
            {b.label}
          </div>
          <div style={{
            fontFamily: "monospace",
            fontSize: 12,
            color: "var(--text-primary)",
            background: "var(--bg-1)",
            padding: "7px 10px",
            borderRadius: 2,
            marginBottom: 8,
            letterSpacing: 2,
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}>
            {b.notes}
          </div>
          <div style={{ fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }}>
            {b.desc}
          </div>
        </div>
      ))}

      {/* Techniques */}
      <div style={{
        background: "var(--bg-2)",
        border: "1px solid var(--border)",
        borderRadius: 3,
        padding: 12,
        marginTop: 16,
      }}>
        <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
          Techniques — {genre.label}
        </div>
        {genre.bassTechniques.map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ width: 4, height: 4, background: genre.color, borderRadius: "50%", flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
