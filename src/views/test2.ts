// import a from "./test1";
// setInterval(() => {
//   console.log("test2", a);
// }, 3500);

import a from "./test1";
import { c } from "./test1";
c.d++;
a.a++;

setTimeout(() => {
  console.log("test2", a, c);
}, 1000);
