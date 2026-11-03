const tempo = 92;
const target = 120;
const isSlow = tempo < target;

export default function Etude04() {
  return (
    <section>
      <h2>Etude 04 — Comparisons</h2>
      <p>Slower than target : {isSlow}</p>
      <p>Slower than target : {String(isSlow)}</p>
    </section>
  );
}
