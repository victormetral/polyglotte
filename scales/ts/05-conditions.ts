const tempo = 92;
let marking: string;

if (tempo < 60) {
  marking = "Largo";
} else if (tempo < 108) {
  marking = "Andante";
} else if (tempo < 168) {
  marking = "Allegro";
} else {
  marking = "Presto";
}
console.log(marking);

const speed = tempo >= 120 ? "fast" : "slow";
console.log(speed);

const note = "C";
switch (note) {
  case "C":
    console.log("do");
    break;
  case "D":
    console.log("re");
    break
  default:
    console.log("unknown");
}
