const total: number = 185;
const minutes: number = Math.floor(total / 60);
const secondes: number = total % 60;
if (secondes < 10) {
    console.log(`${minutes}:0${secondes}`);
} else {
    console.log(`${minutes}:${secondes}`);
}
