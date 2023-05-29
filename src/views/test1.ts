// let a = 1,
//   b = 1;
// setInterval(() => {
//   a++;
//   b++;
// }, 3500);
// export { a, b };
// export default { a, b };

const o = {
  a: 1,
  b: 2,
  e: 1
};
const { a, b, e = 1 } = o;
console.log(a, b, e);
export default o;
export const c = {
  d: 1,
  e: 1,
};

setTimeout(() => {
  console.log("test1", o, c);
}, 1000);
