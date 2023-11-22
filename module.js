// let countValue = document.getElementById("value");

// const increment = () => {
//   let value = parseInt(countValue.innerText);
//   value = value + 1;
//   countValue.innerText = value;
// };
// const decrement = () => {
//   let value = parseInt(countValue.innerText);
//   value = value - 1;
//   countValue.innerText = value;
// };

// function increment() {
//   let value = parseInt(countValue.innerText);
//   value = value + 1;
//   countValue.innerText = value;
// }
// function decrement() {
//   let value = parseInt(countValue.innerText);
//   value = value - 1;
//   countValue.innerText = value;
// }

const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const counter = document.querySelector("#counter");
const clear = document.querySelector("#clr");
const range = document.querySelectorAll("input");

inc.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});

dec.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) - 1;
});
clear.addEventListener("click", () => {
  counter.innerText = 0;
});

function rangeInc() {
  if (range[0] === "") {
    return alert("Give Any Number For Increment");
  }
  counter.innerText = parseInt(range[0].value) + parseInt(counter.innerText);
  range[0].value = "";
}
function rangeDec() {
  if (range[1] === "") {
    return alert("Give Any Number For Increment");
  }
  counter.innerText = parseInt(counter.innerText) - parseInt(range[1].value);
  range[1].value = "";
}
