const year = 1900;
let leap: boolean;

if (year % 400 === 0) {
  leap = true;
} else if (year % 100 === 0) {
  leap = false;
} else if (year % 4 === 0) {
  leap = true;
} else {
  leap = false;
}

console.log(leap);
