import { useState } from "react";

export default function BassSection({ genre }) {
  const [active, setActive] = useState(0);

  const pattern = genre.bassPatterns[active];

  return (
    <div>
      {/* Variation tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 12, alignItems: "center" }}>
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
              letterSpacing: 0.5,
            }}
          >
            {`B${i + 1}`}
          </button>
        ))}
        <span style={{ fontSize: 11, color: "var(--text-muted)", marginLeft: 6 }}>
          {pattern.label.split("—")[1]?.trim()}
        </span>
      </div>

      {/* Step numbers */}
      <div style={{ display: "flex", paddingLeft: 62, marginBottom: 4, gap: 2 }}>
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            style={{
              width: 34,
              textAlign: "center",
              fontSize: 9,
              color: "var(--text-muted)",
              marginLeft: i > 0 && i % 4 === 0 ? 6 : 0,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Bass step grid */}
      <div style={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 16 }}>
        <div style={{
          width: 56,
          fontSize: 10,
          color: genre.color,
          textAlign: "right",
          paddingRight: 8,
          flexShrink: 0,
          fontWeight: 600,
          letterSpacing: 0.3,
        }}>
          Bass
        </div>
        {pattern.steps.map((note, i) => (
          <div
            key={i}
            style={{
              width: 34,
              height: 30,
              background: note ? genre.color + "99" : "var(--bg-2)",
              border: `1px solid ${note ? genre.color + "55" : "var(--border)"}`,
              borderRadius: 2,
              marginLeft: i > 0 && i % 4 === 0 ? 6 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9,
              fontWeight: 700,
              color: note ? "#fff" : "transparent",
              letterSpacing: 0,
            }}
          >
            {note}
          </div>
        ))}
      </div>

      {/* Description */}
      <div style={{
        background: "var(--bg-2)",
        border: `1px solid ${genre.color}44`,
        borderLeft: `3px solid ${genre.color}`,
        borderRadius: 3,
        padding: 12,
        marginBottom: 20,
      }}>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {pattern.desc}
        </div>
      </div>

      {/* All patterns overview (dimmed) */}
      <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
        All patterns
      </div>
      {genre.bassPatterns.map((b, i) => (
        <div
          key={i}
          onClick={() => setActive(i)}
          style={{
            background: "var(--bg-2)",
            border: `1px solid ${active === i ? genre.color + "55" : "var(--border)"}`,
            borderRadius: 3,
            padding: "10px 12px",
            marginBottom: 6,
            opacity: active === i ? 1 : 0.4,
            cursor: "pointer",
            transition: "opacity 0.15s, border-color 0.15s",
          }}
        >
          <div style={{ fontSize: 11, color: genre.color, fontWeight: 700, marginBottom: 6 }}>{b.label}</div>
          <div style={{ display: "flex", gap: 2 }}>
            {b.steps.map((note, j) => (
              <div
                key={j}
                style={{
                  width: 18,
                  height: 18,
                  background: note ? genre.color + "99" : "var(--bg-3)",
                  border: `1px solid ${note ? genre.color + "44" : "var(--border)"}`,
                  borderRadius: 2,
                  marginLeft: j > 0 && j % 4 === 0 ? 4 : 0,
                }}
              />
            ))}
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
