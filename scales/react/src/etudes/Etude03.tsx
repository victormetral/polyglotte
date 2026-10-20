const track: string = "Prelude";
const total: number = 185;

const minutes: number = Math.floor(total / 60);
const seconds: number = total % 60;

let display: string;
if (seconds < 10) {
  display = `${minutes}:0${seconds}`;
} else {
  display = `${minutes}:${seconds}`;
}

function Etude03() {
  return (
    <section>
      <h2>Etude 03 — Track duration</h2>
      <p>Track: {track}</p>
      <p>Duration: {display}</p>
    </section>
  );
}

export default Etude03;