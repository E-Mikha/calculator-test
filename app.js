const resultElement = document.getElementById("result");
const inputOne = document.getElementById("input1");
const inputTwo = document.getElementById("input2");
const calculateBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

calculateBtn.onclick = function () {
  if (action === "+") {
    const sum = Number(inputOne.value) + Number(inputTwo.value);
    resultElement.textContent = sum;
  } else if (action === "-") {
    const sum = Number(inputOne.value) - Number(inputTwo.value);
    resultElement.textContent = sum;
  }
};
