import fp from "lodash/fp";
import { Maybe } from "./Functor";

// type safeObject = Record<string, unknown>;

// const getSafeProp = (key: string, obj: safeObject) => {
//   return Maybe.of(obj[key]);
// };

// const _getSafeProp = fp.curry(getSafeProp);

// const student = { name: "don", age: 18 };

// const result = _getSafeProp("age")(student).map((res: number) => (res += 2));

// console.log(result); //Maybe {_value: 20}

const add = (a: number, b: number) => {
  console.log("zhixing", a, b);
  return a + b;
};

const memorize = function (fn: Function) {
  return fn.apply(this, arguments);
};

// const memorizeAdd = memorize(add);
// console.log(memorizeAdd(1, 2));
// console.log(memorizeAdd(1, 2));
// console.log(memorizeAdd(1, 2));
// console.log(memorizeAdd(1, 2));

const onBuyCar = (money: number) => money - 200;
const onBuyHouse = (money: number) => money - 300;
const onBuy = fp.flowRight([onBuyHouse, onBuyCar]);
console.log(onBuy(500));
