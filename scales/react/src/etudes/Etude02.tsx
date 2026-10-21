const composer = "Chopin";
const measures = 32;
const beatsPerMeasure = 4;
const tempo = 120;

const totalBeats = measures * beatsPerMeasure;
const minutes = totalBeats / tempo;

function Etude02() {
  return (
    <section>
      <h2>Etude 02 — JavaScript in JSX</h2>
      <p>Composer: {composer}</p>
      <p>{measures} measures &times; {beatsPerMeasure} beats = {totalBeats} beats</p>
      <p>Duration: {minutes} minutes</p>
    </section>
  );
}

export default Etude02;