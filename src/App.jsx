import { useState } from "react";
import { GENRES } from "./data/genres";
import DrumGrid from "./components/DrumGrid";
import BassSection from "./components/BassSection";
import TracksSection from "./components/TracksSection";
import StructureSection from "./components/StructureSection";
import TipsSection from "./components/TipsSection";

const TABS = [
  { id: "drums",     label: "Drums" },
  { id: "bass",      label: "Bass" },
  { id: "tracks",    label: "Tracks" },
  { id: "structure", label: "Structure" },
  { id: "tips",      label: "Tips" },
];

export default function App() {
  const [genreKey, setGenreKey] = useState("house");
  const [tab, setTab] = useState("drums");

  const genre = GENRES[genreKey];

  const handleGenreChange = (key) => {
    setGenreKey(key);
    setTab("drums");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg-0)" }}>

      {/* Top bar */}
      <header style={{
        height: 40,
        background: "var(--bg-1)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)", letterSpacing: 1 }}>
            MOVE<span style={{ color: genre.color }}>LAB</span>
          </span>
          <span style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: 1 }}>
            Ableton Move reference
          </span>
        </div>
        <div style={{ fontSize: 11, color: genre.color, fontWeight: 700 }}>
          {genre.bpm.sweet} BPM · {genre.label}
        </div>
      </header>

      {/* Genre selector */}
      <div style={{
        background: "var(--bg-1)",
        borderBottom: "1px solid var(--border)",
        padding: "6px 16px",
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexShrink: 0,
        flexWrap: "wrap",
      }}>
        {Object.entries(GENRES).map(([key, g]) => (
          <button
            key={key}
            onClick={() => handleGenreChange(key)}
            style={{
              padding: "5px 14px",
              background: genreKey === key ? g.color : "transparent",
              color: genreKey === key ? "#000" : "var(--text-secondary)",
              borderRadius: 2,
              fontSize: 11,
              fontWeight: genreKey === key ? 700 : 400,
              transition: "background 0.1s",
              whiteSpace: "nowrap",
            }}
          >
            {g.label}
          </button>
        ))}
        <span style={{ fontSize: 11, color: "var(--text-muted)", marginLeft: 8, fontStyle: "italic", flexShrink: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {genre.feel}
        </span>
      </div>

      {/* Tab bar */}
      <div style={{
        background: "var(--bg-1)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        padding: "0 16px",
        flexShrink: 0,
      }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: "8px 14px",
              background: "transparent",
              color: tab === t.id ? genre.color : "var(--text-secondary)",
              borderBottom: `2px solid ${tab === t.id ? genre.color : "transparent"}`,
              fontSize: 11,
              fontWeight: tab === t.id ? 700 : 400,
              letterSpacing: 0.5,
              marginBottom: -1,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <main style={{ flex: 1, overflowY: "auto", padding: 20 }}>
        {tab === "drums"     && <DrumGrid key={genreKey} genre={genre} />}
        {tab === "bass"      && <BassSection key={genreKey} genre={genre} />}
        {tab === "tracks"    && <TracksSection genre={genre} />}
        {tab === "structure" && <StructureSection genre={genre} />}
        {tab === "tips"      && <TipsSection genre={genre} />}
      </main>

    </div>
  );
}
