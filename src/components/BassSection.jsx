import { useState } from "react";

export default function BassSection({ genre }) {
  const [active, setActive] = useState(0);

  const pattern = genre.bassPatterns[active];
  const GROUPS = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];

  return (
    <div>
      {/* Variation tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 14, alignItems: "center", flexWrap: "wrap" }}>
        {genre.bassPatterns.map((b, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: "5px 12px",
              background: active === i ? genre.color : "var(--bg-3)",
              color: active === i ? "#000" : "var(--text-secondary)",
              borderRadius: 2,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            B{i + 1}
          </button>
        ))}
        <span style={{ fontSize: 12, color: "var(--text-muted)", marginLeft: 4 }}>
          {pattern.label.split("—")[1]?.trim()}
        </span>
      </div>

      {/* Step numbers */}
      <div style={{ display: "flex", gap: 6, paddingLeft: 66, marginBottom: 4 }}>
        {GROUPS.map((group, gi) => (
          <div key={gi} style={{ display: "flex", flex: 1, gap: 2 }}>
            {group.map(i => (
              <div key={i} style={{
                flex: 1,
                textAlign: "center",
                fontSize: 11,
                color: "var(--text-muted)",
              }}>
                {i + 1}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bass step row */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
        <div style={{
          width: 60,
          fontSize: 12,
          color: genre.color,
          textAlign: "right",
          paddingRight: 6,
          flexShrink: 0,
          fontWeight: 600,
        }}>
          Bass
        </div>
        {GROUPS.map((group, gi) => (
          <div key={gi} style={{ display: "flex", flex: 1, gap: 2 }}>
            {group.map(i => {
              const note = pattern.steps[i];
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    height: 26,
                    background: note ? genre.color + "99" : "var(--bg-2)",
                    border: `1px solid ${note ? genre.color + "55" : "var(--border)"}`,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 700,
                    color: note ? "#fff" : "transparent",
                    overflow: "hidden",
                  }}
                >
                  {note}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Description */}
      <div style={{
        background: "var(--bg-2)",
        border: `1px solid ${genre.color}44`,
        borderLeft: `3px solid ${genre.color}`,
        borderRadius: 3,
        padding: 14,
        marginBottom: 20,
      }}>
        <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {pattern.desc}
        </div>
      </div>

      {/* All patterns overview */}
      <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
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
            padding: "12px 14px",
            marginBottom: 6,
            opacity: active === i ? 1 : 0.4,
            cursor: "pointer",
            transition: "opacity 0.15s, border-color 0.15s",
          }}
        >
          <div style={{ fontSize: 13, color: genre.color, fontWeight: 700, marginBottom: 8 }}>{b.label}</div>
          <div style={{ display: "flex", gap: 4 }}>
            {GROUPS.map((group, gi) => (
              <div key={gi} style={{ display: "flex", flex: 1, gap: 2 }}>
                {group.map(j => (
                  <div
                    key={j}
                    style={{
                      flex: 1,
                      height: 16,
                      background: b.steps[j] ? genre.color + "99" : "var(--bg-3)",
                      border: `1px solid ${b.steps[j] ? genre.color + "44" : "var(--border)"}`,
                      borderRadius: 2,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Techniques */}
      <div style={{
        background: "var(--bg-2)",
        border: "1px solid var(--border)",
        borderRadius: 3,
        padding: 14,
        marginTop: 16,
      }}>
        <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
          Techniques — {genre.label}
        </div>
        {genre.bassTechniques.map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
            <div style={{ width: 4, height: 4, background: genre.color, borderRadius: "50%", flexShrink: 0 }} />
            <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
