// This is get the buttons using dom
let output = document.getElementById("output");
let keys = Array.from(document.getElementsByClassName("keys"));
let operators = Array.from(document.getElementsByClassName("operators"));
let clear_button = document.getElementById("clear");
let back_button = document.getElementById("back");
let equal = document.getElementById("equal");
let toggle = document.getElementById("toggle");
let circle = document.getElementById("circle");
let check = true;

let initialvalue = "";

// This function is handle the operators
function Handle_Operator(operator) {
  let len = initialvalue.length - 1;
  const ops = "+-*/%";
  if (ops.includes(initialvalue[len])) {
    initialvalue = initialvalue.slice(0, -1);
  }
  Handle_Button(operator);
}

// This function is handle the numbers
function Handle_Button(key) {
    initialvalue += key;
    output.textContent = initialvalue;
}

// This function is clear the output
function Clear_Button() {
  initialvalue = "";
  output.textContent = "0";
}

// This function is handle backspace
function Back_button() {
  if (initialvalue.length > 1) {
    initialvalue = initialvalue.slice(0, -1);
    output.textContent = initialvalue;
  } else {
    Clear_Button();
  }
}

// This function is handle the calculation and display
function calculate() {
  try {
    initialvalue = eval(initialvalue).toString();
    output.textContent = initialvalue || '0';
  } catch (err) {
    output.textContent = "Error";
    initialvalue = "";
  }
}

//This function is change theme colors
function Theme_toggle() {
  if (check) {
    check = false;
    toggle.style.justifyContent = "right";
    document.body.style.background = `linear-gradient(to right bottom, #4a4a4a, #cbcbcb)`;
    output.style.background = "#6d8196";
    output.style.color = "#ffffe3";
    keys.forEach((key) => {
      key.style.background = "#E4D00A";
      key.style.color = "#2e6f40";
    });
    operators.forEach((operator) => {
      operator.style.background = "#E4D00A";
      operator.style.color = "#2e6f40";
    });
    equal.style.background = "#E4D00A";
    equal.style.color = "#2e6f40";
    back_button.style.background = "#E4D00A";
    back_button.style.color = "#2e6f40";
    clear_button.style.background = "#E4D00A";
    clear_button.style.color = "#2e6f40";
  } else {
    check = true;
    toggle.style.justifyContent = "left";
    document.body.style.background = `linear-gradient(to right bottom, var(--bg-first), var(--bg-second))`;
    output.style.background = "var(--input-box)";
    output.style.color = "var(--color)";
    keys.forEach((key) => {
      key.style.background = "var(--button-color)";
      key.style.color = "var(--color)";
    });
    operators.forEach((operator) => {
      operator.style.background = "var(--button-color)";
      operator.style.color = "var(--color)";
    });
    equal.style.background = "var(--button-color)";
    equal.style.color = "var(--color)";
    back_button.style.background = "var(--button-color)";
    back_button.style.color = "var(--color)";
    clear_button.style.background = "var(--button-color)";
    clear_button.style.color = "var(--color)";
  }
}

// call the all functions
operators.forEach((operator) => {
  operator.addEventListener("click", () =>
    Handle_Operator(operator.dataset.value)
  );
});

keys.forEach((key) => {
  key.addEventListener("click", () => Handle_Button(key.dataset.value));
});

back_button.addEventListener("click", Back_button);
clear_button.addEventListener("click", Clear_Button);
equal.addEventListener("click", calculate);
toggle.addEventListener("click", Theme_toggle);







