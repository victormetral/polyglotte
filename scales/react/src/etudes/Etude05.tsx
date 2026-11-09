const tempo = 92;
const target = 120;
const mistakes = 0;

export default function Etude05() {
  const isSlow = tempo < target;

  return (
    <section>
      <h2>Etude 05 — Conditional rendering</h2>
      {isSlow && <p>Speed up: {target - tempo} BPM to go.</p>}
      <p>{isSlow ? "Keep practising" : "Ready for the concert"}</p>
      {mistakes > 0 && <p>Mistakes: {mistakes}</p>}
    </section>
  );
}
