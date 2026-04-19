import { useState, useEffect, useRef } from "react";
import { ROWS, ROW_LABELS, ROW_COLORS } from "../data/genres";

export default function DrumGrid({ genre }) {
  const [drumVar, setDrumVar] = useState(0);
  const [customPattern, setCustomPattern] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(-1);
  const intervalRef = useRef(null);

  const basePattern = genre.drumVariations[drumVar];
  const pattern = customPattern || basePattern;

  useEffect(() => {
    setDrumVar(0);
    setCustomPattern(null);
    setPlaying(false);
    setStep(-1);
    clearInterval(intervalRef.current);
  }, [genre]);

  const switchVar = (i) => {
    setDrumVar(i);
    setCustomPattern(null);
  };

  const toggleCell = (row, i) => {
    const cur = customPattern || basePattern;
    setCustomPattern({ ...cur, [row]: cur[row].map((v, idx) => idx === i ? (v ? 0 : 1) : v) });
  };

  const togglePlay = () => {
    if (playing) {
      clearInterval(intervalRef.current);
      setPlaying(false);
      setStep(-1);
    } else {
      const ms = (60 / genre.bpm.sweet / 4) * 1000;
      let s = 0;
      intervalRef.current = setInterval(() => { setStep(s % 16); s++; }, ms);
      setPlaying(true);
    }
  };

  return (
    <div>
      {/* Variation tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 12, alignItems: "center" }}>
        {genre.drumVariations.map((v, i) => (
          <button
            key={i}
            onClick={() => switchVar(i)}
            style={{
              padding: "4px 10px",
              background: drumVar === i ? genre.color : "var(--bg-3)",
              color: drumVar === i ? "#000" : "var(--text-secondary)",
              borderRadius: 2,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            {v.label.split("—")[0].trim()}
          </button>
        ))}
        <span style={{ fontSize: 11, color: "var(--text-muted)", marginLeft: 6 }}>
          {genre.drumVariations[drumVar].label.split("—")[1]?.trim()}
        </span>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 8, marginBottom: 14, alignItems: "center" }}>
        <button
          onClick={togglePlay}
          style={{
            padding: "5px 14px",
            background: playing ? genre.color : "var(--bg-3)",
            color: playing ? "#000" : "var(--text-primary)",
            borderRadius: 2,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          {playing ? "■ STOP" : "▶ PLAY"}
        </button>
        {customPattern && (
          <button
            onClick={() => setCustomPattern(null)}
            style={{
              padding: "5px 10px",
              background: "var(--bg-3)",
              color: "var(--text-secondary)",
              borderRadius: 2,
              fontSize: 11,
            }}
          >
            Reset
          </button>
        )}
        <span style={{ fontSize: 11, color: "var(--text-muted)", marginLeft: 4 }}>
          {genre.bpm.sweet} BPM
        </span>
      </div>

      {/* Step numbers */}
      <div style={{ display: "flex", paddingLeft: 62, marginBottom: 4, gap: 2 }}>
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            style={{
              width: 24,
              textAlign: "center",
              fontSize: 9,
              color: step === i ? genre.color : "var(--text-muted)",
              fontWeight: step === i ? 700 : 400,
              marginLeft: i > 0 && i % 4 === 0 ? 6 : 0,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Rows */}
      {ROWS.map((row) => (
        <div key={row} style={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 3 }}>
          <div style={{
            width: 56,
            fontSize: 10,
            color: ROW_COLORS[row],
            textAlign: "right",
            paddingRight: 8,
            flexShrink: 0,
            letterSpacing: 0.3,
            fontWeight: 600,
          }}>
            {ROW_LABELS[row]}
          </div>
          {pattern[row].map((on, i) => (
            <div
              key={i}
              onClick={() => toggleCell(row, i)}
              style={{
                width: 24,
                height: 24,
                background: on
                  ? step === i ? ROW_COLORS[row] : ROW_COLORS[row] + "99"
                  : step === i ? "var(--bg-3)" : "var(--bg-2)",
                border: `1px solid ${on ? ROW_COLORS[row] + "55" : "var(--border)"}`,
                borderRadius: 2,
                cursor: "pointer",
                marginLeft: i > 0 && i % 4 === 0 ? 6 : 0,
                transition: "background 0.05s",
                boxShadow: on && step === i ? `0 0 6px ${ROW_COLORS[row]}88` : "none",
              }}
            />
          ))}
        </div>
      ))}

      <div style={{ marginTop: 10, fontSize: 10, color: "var(--text-muted)" }}>
        Click cells to edit
      </div>
    </div>
  );
}
