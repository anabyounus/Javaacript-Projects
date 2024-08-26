
let display = document.getElementById('display')

function button(input) {
    display.value += input;
}

function displayClear() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    display.value = eval(display.value)
}