const operation = document.getElementById("operation");
const result = document.getElementById("result");
const numbers = document.querySelectorAll(".number");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const dot = document.getElementById("dot");
const zero = document.getElementById("zero");
const equal = document.getElementById("equal");
let n1 = "";
let n2 = "";

const add = (n1, n2) => {
  return n1 + n2;
};
const subtract = (n1, n2) => {
  return n1 - n2;
};
const split = (n1, n2) => {
  return n1 / n2;
};
const multiply = (n1, n2) => {
  return n1 * n2;
};

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    n1 += btn.innerText;
    if (n1.search("." == -1)) {
      operation.innerText = n1;
    }
  });
});

equal.addEventListener("click", () => {
  console.log(parseInt(n1));
});
