const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const pEl = document.getElementById("p-el");

let num = 9;

btnEl.addEventListener('click', function () {
    const inputValue = Number(inputEl.value); // Convert input value to a number
    if (inputValue === num) {
        console.log("Congratulations!");
    } else if (inputValue > num) {
        console.log("Lower");
    } else if (inputValue < num) {
        console.log("Higher");
    }
});
