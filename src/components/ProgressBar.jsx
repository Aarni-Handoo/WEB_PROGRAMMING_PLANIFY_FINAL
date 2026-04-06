import { S } from "../styles";

function ProgressBar({ label, pct, color }) {
  return (
    <div style={S.progressWrap}>
      <div style={S.progressLabelRow}>
        <span style={S.progressLabel}>{label}</span>
        <span style={{ ...S.progressLabel, fontWeight: 700, color }}>{pct}%</span>
      </div>
      <div style={S.progressTrack}>
        <div style={{ ...S.progressFill, width: `${pct}%`, background: color }} className="progress-anim" />
      </div>
    </div>
  );
}

export default ProgressBar;