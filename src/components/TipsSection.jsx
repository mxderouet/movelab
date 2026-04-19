export default function TipsSection({ genre }) {
  return (
    <div>
      {/* Main tip */}
      <div style={{
        background: "var(--bg-2)",
        border: `1px solid ${genre.color}55`,
        borderLeft: `3px solid ${genre.color}`,
        borderRadius: 3,
        padding: 16,
        marginBottom: 24,
      }}>
        <div style={{ fontSize: 11, color: genre.color, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
          Key tip
        </div>
        <div style={{ fontSize: 15, color: "var(--text-primary)", lineHeight: 1.6 }}>{genre.tip}</div>
      </div>

      {/* Workflow */}
      <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
        Workflow — Move
      </div>
      {genre.workflow.map((item) => (
        <div
          key={item.n}
          style={{
            display: "flex",
            gap: 14,
            padding: "11px 0",
            borderBottom: "1px solid var(--border)",
            alignItems: "flex-start",
          }}
        >
          <div style={{
            width: 26,
            height: 26,
            background: genre.color + "22",
            border: `1px solid ${genre.color}44`,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            color: genre.color,
            fontWeight: 700,
            flexShrink: 0,
          }}>
            {item.n}
          </div>
          <div>
            <div style={{ fontSize: 14, color: "var(--text-primary)", fontWeight: 600, marginBottom: 3 }}>{item.t}</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{item.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
