export default function StructureSection({ genre }) {
  return (
    <div>
      {/* Timeline bar */}
      <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
        {genre.structure.map((s, i) => {
          const alpha = Math.round(80 + (i / (genre.structure.length - 1)) * 140).toString(16).padStart(2, "0");
          return (
            <div
              key={i}
              title={s.desc}
              style={{
                flex: 1,
                height: 28,
                background: genre.color + alpha,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
                fontWeight: 700,
                color: "#000",
                letterSpacing: 0.5,
                textAlign: "center",
                padding: "0 2px",
                cursor: "default",
              }}
            >
              {s.name}
            </div>
          );
        })}
      </div>

      {/* Structure list */}
      {genre.structure.map((s, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 14,
            padding: "10px 0",
            borderBottom: "1px solid var(--border)",
            alignItems: "flex-start",
          }}
        >
          <div style={{ width: 70, flexShrink: 0 }}>
            <div style={{ fontSize: 12, color: genre.color, fontWeight: 700 }}>{s.name}</div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>{s.bars} bars</div>
          </div>
          <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>{s.desc}</div>
        </div>
      ))}

      <div style={{
        background: "var(--bg-2)",
        border: "1px solid var(--border)",
        borderRadius: 3,
        padding: 12,
        marginTop: 16,
      }}>
        <div style={{ fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          Start with intro → drop → outro. Add transitions and breaks once the skeleton sounds right.
        </div>
      </div>
    </div>
  );
}
