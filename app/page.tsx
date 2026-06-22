"use client";

import { useMemo, useState } from "react";

const systemSwatches = [
  { name: "Domino", colors: ["#f7f6f2", "#d7d6d0", "#8b8a86", "#343434"] },
  { name: "Gravel", colors: ["#efe1cc", "#d3bc95", "#a97d4b", "#5d422f"] },
  { name: "Silver Mist", colors: ["#f5f8fb", "#d2d9e1", "#a2adb8", "#66717d"] },
  { name: "Ocean Blue", colors: ["#deeffd", "#9bc8ec", "#4f8acf", "#214f95"] },
  { name: "Gold Rush", colors: ["#fff1c6", "#f2d35f", "#d0a036", "#8b5d11"] },
];

const cardStyles = [
  "AI-assisted cloning flow",
  "Vercel cron validation",
  "Sandbox parity testing",
  "Enterprise hardening checklist",
];

export default function Page() {
  const [selected, setSelected] = useState(0);
  const [uploads, setUploads] = useState("No file uploaded yet");

  const selectedStyle = systemSwatches[selected];
  const swatchBg = useMemo(
    () => `linear-gradient(90deg, ${selectedStyle.colors.join(",")})`,
    [selectedStyle],
  );

  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">CLONE-AI</p>
          <h1>Clone systems, validate them in sandbox, and ship them with confidence.</h1>
          <p className="lede">
            Enterprise scaffold for AI-assisted floor visualizers, Vercel cron validation, and
            sandbox cloning workflows.
          </p>
        </div>
        <div className="heroCard">
          <div className="heroCardTop">
            <span>Validated Sandbox</span>
            <strong>Ready</strong>
          </div>
          <p>{uploads}</p>
          <button>Run sandbox validation</button>
        </div>
      </header>

      <section className="grid">
        <article className="panel">
          <h2>Interactive clone shell</h2>
          <label className="upload">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setUploads(e.target.files?.[0]?.name || "No file uploaded yet")}
              hidden
            />
            Upload floor image
          </label>
          <div className="swatches">
            {systemSwatches.map((item, idx) => (
              <button
                key={item.name}
                className={`swatch ${selected === idx ? "active" : ""}`}
                onClick={() => setSelected(idx)}
              >
                <span style={{ background: `linear-gradient(90deg, ${item.colors.join(",")})` }} />
                {item.name}
              </button>
            ))}
          </div>
          <div className="cards">
            {cardStyles.map((item) => (
              <div key={item} className="miniCard">
                {item}
              </div>
            ))}
          </div>
        </article>

        <aside className="panel preview">
          <div className="previewTop">
            <strong>Xtreme Polishing Systems Verified</strong>
            <span>70+ locations nationwide</span>
          </div>
          <div className="mock">
            <div className="mockTop" />
            <div className="mockFloor" style={{ backgroundImage: swatchBg }} />
          </div>
          <div className="previewMeta">
            <span>Training</span>
            <span>Manufacturers</span>
            <span>35+ years of experience</span>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <a href="/sandbox">Sandbox</a>
        <a href="/api/cron/validate">Cron validate</a>
        <a href="/api/visualize">Visualize API</a>
      </footer>
    </main>
  );
}
