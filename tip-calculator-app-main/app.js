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
customInput.addEventListener("input", setCustomValue);
peopleInput.addEventListener("input", setPeopleValue);
//EVENTS//

let billValue = 0.0;
let buttonValue = 0.0;
let peopleValue = 0;

function validateBillValue(s) {
    const rgx = /^[0-9]*[\.\,]?[0-9]*$/;
    return s.match(rgx);
}

function validateCustomValue(s) {
    const rgx = /^([1-9][0-9]{0,3}|10000)$/;
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
        calculateTip();
    } else {
        billInput.style.border = '1px solid red'
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        buttons.forEach(btn => btn.classList.remove('active'));
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            console.log(111);
        } else {
            this.classList.add('active');
            console.log(2222);
        }
        buttonValue = parseFloat(this.innerHTML)/100;
        customInput.value = '';
        console.log(buttonValue);
        calculateTip();
    })
})

function setCustomValue() {
    if (validateCustomValue(customInput.value)) {
        customInput.style.border = '1px solid transparent'
        buttonValue = parseFloat(customInput.value)/100;
        buttons.forEach(btn => btn.classList.remove('active'));
        console.log(buttonValue);
        calculateTip();
    } else {
        customInput.style.border = '1px solid red'
    }
}

function setPeopleValue() {
    if (validateCustomValue(peopleInput.value)) {
        peopleValue = parseFloat(peopleInput.value);
        errorMessage.classList.remove('show');
        peopleInput.style.border = '1px solid transparent';
        console.log(peopleValue);
        calculateTip();
    }
    else {
        peopleInput.style.border = '1px solid red';
        errorMessage.classList.add('show');
    }
}

function calculateTip() {
    let amountNumber = billValue * buttonValue / peopleValue;
    let totalNumber = (billValue * buttonValue + billValue) / peopleValue;
    if (isNaN(amountNumber)) {
        console.log('nan');
        amount.innerHTML = '$0.00'
    } else {
        amount.innerHTML = '$' + amountNumber.toFixed(2);
        total.innerHTML = '$' + totalNumber.toFixed(2);
    }
}






