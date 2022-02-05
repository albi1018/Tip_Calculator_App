//ALL ELEMENTS//
const buttons = document.querySelectorAll("button");
const billInput = document.querySelector(".bill__input");
const customInput = document.querySelector(".selectTip__input");
const peopleInput = document.getElementById('people');
const errorMessage = document.querySelector(".errorMessage");
const amount = document.getElementById("amount");
const total = document.getElementById("total");
console.log(amount);
console.log(total);
//ALL ELEMENTS//

//EVENTS//
billInput.addEventListener("input", setBillValue);
customInput.addEventListener("input", setCustomValue);
peopleInput.addEventListener("input", setPeopleValue);
//EVENTS//

let billValue = 0.0;
let btnValue = 0.0;
let peopleNumber = 0;

//ACTIVE BUTTONS//
    buttons.forEach((btn) => {
        btn.addEventListener("click", function(e) {
            buttons.forEach(btn=>btn.classList.remove("active"))
            this.classList.add("active");
            console.log(btnValue);
            btnValue = parseFloat(e.target.innerHTML)/100;
            customInput.value = '';
            calculate();
        })
    })
//ACTIVE BUTTONS//

function validateFloat(s) {
    const regex = /^[0-9]*\.?[0-9]*$/;
    return s.match(regex)
}

function validateInt(s) {
    const regex = /^([1-9][0-9]{0,3}|10000)$/;
    return s.match(regex);
}

function setBillValue() {
    if (billInput.value.includes(',')) {
        billInput.value.replace(',','.')
    }

    if (validateFloat(billInput.value)) {
        billInput.style.border = '1px solid green';
    } else {
        billInput.style.border = '1px solid red';
    }
    billValue = parseFloat(billInput.value);
    calculate();
}

function setCustomValue() {
    if (validateFloat(customInput.value)) {
        buttons.forEach(btn=>btn.classList.remove("active"));
        customInput.style.border = '1px solid green';
        billValue = parseFloat(customInput.value/100);
        console.log(billValue);
        calculate();
    } else {
        customInput.style.border = '1px solid red';
    }
}

function setPeopleValue() {
    if (!validateInt(peopleInput.value) || peopleInput.value <= 0) {
        errorMessage.classList.add('show');
        peopleInput.style.border = '1px solid red';
    } else {
        errorMessage.classList.remove('show');
        peopleInput.style.border = '';
        peopleNumber = peopleInput.value;
    }
    calculate();
}

function calculate() {
        if (peopleNumber >=1) {
            let tipAmount = billValue * btnValue / peopleNumber;
            // console.log(tipAmount);
            amount.innerHTML = '$' + tipAmount.toFixed(2);
        }
}










