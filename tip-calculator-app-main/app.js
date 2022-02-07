//ALL ELEMENTS//
const buttons = document.querySelectorAll(".btn");
const billInput = document.querySelector(".bill__input");
const customInput = document.querySelector(".selectTip__input");
const peopleInput = document.getElementById('people');
const errorMessage = document.querySelector(".errorMessage");
const amount = document.getElementById("amount");
const total = document.getElementById("total");
//ALL ELEMENTS//

//EVENTS//
billInput.addEventListener("input", setBillValue);
// buttons.addEventListener(setButtonsValue);
// customInput.addEventListener("input", setCustomValue);
// peopleInput.addEventListener("input", setPeopleValue);
//EVENTS//

let billValue = 0.0;
let buttonValue = 0.0;

function validateBillValue(s) {
    const rgx = /^[0-9]*[\.\,]?[0-9]*$/;
    return s.match(rgx);
}

function setBillValue() {
    if (validateBillValue(billInput.value)) {
        billValue = parseFloat(billInput.value);
        billInput.style.border = '1px solid transparent'
        console.log(billValue);
        if (billInput.value.includes(',')) {
            billValue = parseFloat(billInput.value.replaceAll(',', '.'))
            console.log(billValue);
        }
    } else {
        billInput.style.border = '1px solid red'
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        buttonValue = parseFloat(this.innerHTML)/100;
        console.log(buttonValue);
    })
})










