import React from "react";
import { AbsoluteFill } from "remotion";
import { content } from "./content";
import { theme } from "./theme";

const Skyline: React.FC = () => (
  <svg width="1191" height="420" viewBox="0 0 1191 420" style={{ position: "absolute", bottom: 0 }}>
    <rect x="60" y="140" width="90" height="280" rx="8" fill="#8ed3ee" />
    <rect x="160" y="60" width="110" height="360" rx="8" fill="#5fbfe6" />
    <rect x="285" y="180" width="80" height="240" rx="8" fill="#8ed3ee" />
    <rect x="380" y="110" width="120" height="310" rx="8" fill="#74c8ea" />
    <rect x="720" y="90" width="100" height="330" rx="8" fill="#5fbfe6" />
    <rect x="835" y="170" width="85" height="250" rx="8" fill="#8ed3ee" />
    <rect x="935" y="50" width="120" height="370" rx="8" fill="#74c8ea" />
    <rect x="1070" y="150" width="90" height="270" rx="8" fill="#8ed3ee" />
    {[180, 210, 240, 270, 300, 330].map((y) => (
      <rect key={y} x="185" y={y} width="14" height="18" rx="3" fill="#fff3c4" />
    ))}
    {[130, 165, 200, 235, 270, 305].map((y) => (
      <rect key={y} x="405" y={y} width="16" height="18" rx="3" fill="#fff3c4" />
    ))}
    {[120, 160, 200, 240, 280].map((y) => (
      <rect key={y} x="965" y={y} width="16" height="18" rx="3" fill="#fff3c4" />
    ))}
    <circle cx="150" cy="300" r="26" fill="#57c785" />
    <rect x="142" y="320" width="16" height="100" rx="6" fill="#3ea968" />
    <circle cx="1060" cy="330" r="22" fill="#57c785" />
    <rect x="1053" y="346" width="14" height="74" rx="6" fill="#3ea968" />
    <rect x="0" y="400" width="1191" height="20" fill="#57c785" />
  </svg>
);

const RobloxCharacter: React.FC<{ hat: "cap" | "hardhat"; shirt: string; pants: string; wave?: "left" | "right" }> = ({ hat, shirt, pants, wave }) => (
  <svg width="150" height="217" viewBox="0 0 240 320">
    {hat === "hardhat" ? (
      <>
        <rect x="62" y="0" width="116" height="36" rx="16" fill="#ffc93c" stroke="#0a4f44" strokeWidth="5" />
        <rect x="62" y="28" width="116" height="16" rx="8" fill="#f5a623" stroke="#0a4f44" strokeWidth="5" />
      </>
    ) : (
      <>
        <rect x="64" y="2" width="112" height="40" rx="20" fill="#2f9be8" stroke="#0a4f44" strokeWidth="5" />
        <rect x="150" y="16" width="70" height="18" rx="9" fill="#2f9be8" stroke="#0a4f44" strokeWidth="5" />
      </>
    )}
    <rect x="70" y="42" width="100" height="88" rx="18" fill="#ffcf9e" stroke="#0a4f44" strokeWidth="5" />
    <rect x="90" y="74" width="15" height="15" rx="7" fill="#16324a" />
    <rect x="135" y="74" width="15" height="15" rx="7" fill="#16324a" />
    <path d="M95 104 Q120 122 145 104" stroke="#16324a" strokeWidth="7" fill="none" strokeLinecap="round" />
    <circle cx="82" cy="98" r="8" fill="#ffb08a" opacity="0.8" />
    <circle cx="158" cy="98" r="8" fill="#ffb08a" opacity="0.8" />
    <rect x="62" y="136" width="116" height="86" rx="16" fill={shirt} stroke="#0a4f44" strokeWidth="5" />
    {wave === "left" ? (
      <>
        <rect x="22" y="58" width="32" height="86" rx="15" fill="#ffcf9e" stroke="#0a4f44" strokeWidth="5" transform="rotate(-18 38 144)" />
        <rect x="186" y="142" width="30" height="74" rx="14" fill="#ffcf9e" stroke="#0a4f44" strokeWidth="5" />
      </>
    ) : wave === "right" ? (
      <>
        <rect x="24" y="142" width="30" height="74" rx="14" fill="#ffcf9e" stroke="#0a4f44" strokeWidth="5" />
        <rect x="186" y="58" width="32" height="86" rx="15" fill="#ffcf9e" stroke="#0a4f44" strokeWidth="5" transform="rotate(18 202 144)" />
      </>
    ) : (
      <>
        <rect x="26" y="142" width="30" height="74" rx="14" fill="#ffcf9e" stroke="#0a4f44" strokeWidth="5" />
        <rect x="184" y="142" width="30" height="74" rx="14" fill="#ffcf9e" stroke="#0a4f44" strokeWidth="5" />
      </>
    )}
    <rect x="70" y="226" width="42" height="80" rx="14" fill={pants} stroke="#0a4f44" strokeWidth="5" />
    <rect x="128" y="226" width="42" height="80" rx="14" fill={pants} stroke="#0a4f44" strokeWidth="5" />
  </svg>
);

const Bolt: React.FC<{ x: number; y: number; size?: number }> = ({ x, y, size = 40 }) => (
  <div style={{ position: "absolute", left: x, top: y, fontSize: size, lineHeight: 1 }}>⚡</div>
);

const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      background: theme.card,
      borderRadius: theme.radius,
      border: `4px solid ${theme.teal}`,
      boxShadow: "0 10px 0 rgba(15,107,92,0.15)",
      padding: "24px 30px",
      ...style,
    }}
  >
    {children}
  </div>
);

const SectionLabel: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color }) => (
  <div
    style={{
      display: "inline-block",
      background: color ?? theme.yellow,
      color: theme.tealDark,
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: 2,
      borderRadius: 16,
      padding: "8px 26px",
      marginBottom: 16,
      fontFamily: "'Baloo 2', sans-serif",
      transform: "rotate(-1.5deg)",
      border: `3px solid ${theme.tealDark}`,
    }}
  >
    {children}
  </div>
);

export const Poster: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${theme.sky1} 0%, ${theme.sky2} 100%)`,
        fontFamily: "'Nunito', sans-serif",
        color: theme.ink,
        padding: "44px 60px 20px",
        boxSizing: "border-box",
      }}
    >
      <Skyline />
      <div style={{ position: "absolute", top: 210, right: 36, fontSize: 40 }}>💡</div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 18, height: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              background: theme.teal,
              color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 20,
              borderRadius: 999,
              padding: "8px 28px",
              letterSpacing: 1,
              border: `3px solid ${theme.tealDark}`,
            }}
          >
            {content.badge}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div style={{ flex: 1, position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 30,
                left: -20,
                width: "110%",
                height: 150,
                background: theme.yellow,
                borderRadius: 60,
                transform: "rotate(-2deg)",
                zIndex: -1,
                border: `4px solid ${theme.tealDark}`,
              }}
            />
            <h1
              style={{
                margin: 0,
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: 74,
                lineHeight: 1.05,
                color: theme.tealDark,
              }}
            >
              {content.titleTop}
              <br />
              <span style={{ color: theme.blue }}>{content.titleBottom}</span>
            </h1>
            <p style={{ fontSize: 30, color: theme.muted, marginTop: 26, marginBottom: 0, fontWeight: 700 }}>{content.tagline}</p>
          </div>
          <div style={{ position: "relative", display: "flex", gap: 6, marginTop: 44 }}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: -6,
                  left: -92,
                  background: "#fff",
                  border: `3px solid ${theme.tealDark}`,
                  borderRadius: 18,
                  padding: "6px 14px",
                  fontWeight: 800,
                  fontSize: 19,
                  color: theme.teal,
                  fontFamily: "'Baloo 2', sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                Ayo main!
              </div>
              <RobloxCharacter hat="hardhat" shirt="#2e9e63" pants="#0f6b5c" wave="left" />
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: -6,
                  right: -40,
                  background: "#fff",
                  border: `3px solid ${theme.tealDark}`,
                  borderRadius: 18,
                  padding: "6px 14px",
                  fontWeight: 800,
                  fontSize: 19,
                  color: theme.teal,
                  fontFamily: "'Baloo 2', sans-serif",
                  whiteSpace: "nowrap",
                }}
                >
                Coding yuk!
              </div>
              <RobloxCharacter hat="cap" shirt="#2f9be8" pants="#16324a" wave="right" />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 22 }}>
          <Card style={{ flex: 1 }}>
            <SectionLabel color="#ffd166">{content.problemLabel}</SectionLabel>
            {content.problem.map((t, i) => (
              <p key={i} style={{ fontSize: 25, margin: "6px 0" }}><span style={{ color: "#e5484d", fontWeight: 800 }}>! </span>{t}</p>
            ))}
          </Card>
          <Card style={{ flex: 1 }}>
            <SectionLabel color="#7bdcb5">{content.whyLabel}</SectionLabel>
            {content.why.map((t, i) => (
              <p key={i} style={{ fontSize: 25, margin: "6px 0" }}><span style={{ color: theme.green, fontWeight: 800 }}>✓ </span>{t}</p>
            ))}
          </Card>
        </div>

        <Card>
          <SectionLabel>{content.solutionLabel}</SectionLabel>
          <p style={{ fontSize: 25, margin: "0 0 16px", fontWeight: 700 }}>{content.solutionIntro}</p>
          <div style={{ display: "flex", gap: 14, alignItems: "stretch" }}>
            {content.steps.map((s, i) => (
              <React.Fragment key={s.n}>
                <div
                  style={{
                    flex: 1,
                    background: "#f2fbf5",
                    border: `3px solid ${theme.green}`,
                    borderRadius: 20,
                    padding: "16px 18px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: theme.yellow,
                      color: theme.tealDark,
                      fontFamily: "'Baloo 2', sans-serif",
                      fontSize: 30,
                      fontWeight: 800,
                      margin: "0 auto 8px",
                      lineHeight: "52px",
                      border: `3px solid ${theme.tealDark}`,
                    }}
                  >
                    {s.n}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: theme.teal, fontSize: 21 }}>
                    {s.title}
                  </div>
                  <p style={{ fontSize: 22, margin: "8px 0 0" }}>{s.desc}</p>
                </div>
                {i < content.steps.length - 1 && (
                  <div style={{ alignSelf: "center", fontSize: 40, color: theme.green, fontWeight: 800 }}>➜</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Card>

        <Card>
          <SectionLabel color="#8ecdf0">{content.impactLabel}</SectionLabel>
          <div style={{ display: "flex", gap: 20 }}>
            {content.impacts.map((im, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Baloo 2', sans-serif",
                    fontSize: 58,
                    color: "#fff",
                    fontWeight: 800,
                    background: [theme.green, theme.blue, theme.yellowDark][i],
                    borderRadius: 24,
                    padding: "6px 0",
                    border: `3px solid ${theme.tealDark}`,
                  }}
                >
                  {im.big}
                </div>
                <div style={{ fontSize: 22, color: theme.muted, marginTop: 8, fontWeight: 700 }}>{im.small}</div>
              </div>
            ))}
          </div>
        </Card>

        <div
          style={{
            marginTop: "auto",
            background: theme.teal,
            color: "#fff",
            borderRadius: theme.radius,
            padding: "20px 34px",
            textAlign: "center",
            border: `4px solid ${theme.tealDark}`,
          }}
        >
          <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 34, fontWeight: 700, margin: 0 }}>{content.cta}</p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, margin: "8px 0 0", color: "#bfe9dd" }}>
            {content.tools}
          </p>
        </div>

        <p style={{ textAlign: "center", fontSize: 21, color: theme.tealDark, margin: 0, fontWeight: 700 }}>{content.footer}</p>
      </div>
    </AbsoluteFill>
  );
};
