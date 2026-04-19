import { TYPE_COLORS } from "../data/genres";

export default function TracksSection({ genre }) {
  return (
    <div>
      {/* Track overview */}
      <div style={{
        background: "var(--bg-2)",
        border: "1px solid var(--border)",
        borderRadius: 3,
        padding: 12,
        marginBottom: 16,
      }}>
        <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
          4 tracks — Ableton Move
        </div>
        {[
          { slot: "Track 1", role: "Drums",              color: "#FF7700", locked: true },
          { slot: "Track 2", role: "Basse",              color: "#00AAFF", locked: true },
          { slot: "Track 3", role: genre.tracks[0].role, color: genre.color, locked: false },
          { slot: "Track 4", role: genre.tracks[1].role, color: genre.color, locked: false },
        ].map((t, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 0",
              borderBottom: i < 3 ? "1px solid var(--border)" : "none",
            }}
          >
            <div style={{
              width: 4,
              height: 28,
              background: t.color,
              borderRadius: 2,
              flexShrink: 0,
              opacity: t.locked ? 1 : 0.6,
            }} />
            <div>
              <div style={{ fontSize: 9, color: "var(--text-muted)", letterSpacing: 1, marginBottom: 2 }}>{t.slot}</div>
              <div style={{ fontSize: 12, color: t.locked ? "var(--text-primary)" : t.color, fontWeight: t.locked ? 400 : 600 }}>
                {t.role}
                {t.locked && <span style={{ color: "var(--text-muted)", fontSize: 10, fontWeight: 400, marginLeft: 6 }}>fixed</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Suggestions per track */}
      {genre.tracks.map((track, ti) => (
        <div key={ti} style={{ marginBottom: 20 }}>
          <div style={{
            fontSize: 10,
            color: genre.color,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 10,
          }}>
            {track.slot} — {track.role}
          </div>
          {track.suggestions.map((s, si) => (
            <div
              key={si}
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderRadius: 3,
                padding: 10,
                marginBottom: 6,
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              <div style={{
                padding: "2px 7px",
                background: (TYPE_COLORS[s.type] || "#555") + "22",
                border: `1px solid ${(TYPE_COLORS[s.type] || "#555")}44`,
                color: TYPE_COLORS[s.type] || "#555",
                borderRadius: 2,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 1,
                flexShrink: 0,
                marginTop: 1,
              }}>
                {s.type}
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--text-primary)", fontWeight: 600, marginBottom: 3 }}>{s.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
