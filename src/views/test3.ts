// import { a, b } from "./test1";
// setInterval(() => {
//   console.log("test3", a, b);
// }, 3500);

import a from "./test1";
import { c } from "./test1";
c.e++;
a.b++;

setTimeout(() => {
  console.log("test3", a, c);
}, 1000);
