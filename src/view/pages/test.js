const date = new Date();

let [time] = date.toLocaleTimeString().split(" ");
let [hour, min] = time.split(":")

let [day, month, year] = date.toLocaleDateString().split("/")

console.log({ hour, min})
console.log({ day, month, year });

console.log(( + + "+" + "o").toLowerCase());
console.log(("b" + "a" + + "n" + "a").toLowerCase());

console.log(+ + "p");
console.log([...new Set([10,1,2,5,7,3,9,8,7,5,])].sort((a,b)=>a-b))