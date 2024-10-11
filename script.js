const textbox = document.getElementById('textbox');
const toFaren = document.getElementById('toFaren');
const toCelcius = document.getElementById('toCelcius');
const result = document.getElementById('result');
let temp;

function convert() {
    if (toFaren.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `The temperature in Fahrenheit: ${temp.toFixed(1)}℉`;
    }
    else if (toCelcius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = `The temperature in Celsius: ${temp.toFixed(1)}℃`;
    }
    else {
        result.textContent = "You didn't select a unit.";
    }
}
