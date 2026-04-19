export default function TipsSection({ genre }) {
  return (
    <div>
      {/* Main tip */}
      <div style={{
        background: "var(--bg-2)",
        border: `1px solid ${genre.color}55`,
        borderLeft: `3px solid ${genre.color}`,
        borderRadius: 3,
        padding: 14,
        marginBottom: 20,
      }}>
        <div style={{ fontSize: 10, color: genre.color, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
          Key tip
        </div>
        <div style={{ fontSize: 13, color: "var(--text-primary)", lineHeight: 1.6 }}>{genre.tip}</div>
      </div>

      {/* Workflow */}
      <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
        Workflow — Move
      </div>
      {genre.workflow.map((item) => (
        <div
          key={item.n}
          style={{
            display: "flex",
            gap: 12,
            padding: "9px 0",
            borderBottom: "1px solid var(--border)",
            alignItems: "flex-start",
          }}
        >
          <div style={{
            width: 22,
            height: 22,
            background: genre.color + "22",
            border: `1px solid ${genre.color}44`,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            color: genre.color,
            fontWeight: 700,
            flexShrink: 0,
          }}>
            {item.n}
          </div>
          <div>
            <div style={{ fontSize: 12, color: "var(--text-primary)", fontWeight: 600, marginBottom: 2 }}>{item.t}</div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }}>{item.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
