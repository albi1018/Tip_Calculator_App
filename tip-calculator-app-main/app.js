//ALL ELEMENTS//
const buttons = document.querySelectorAll(".btn");
const billInput = document.querySelector(".bill__input");
const customInput = document.querySelector(".selectTip__input");
const peopleInput = document.getElementById('people');
const errorMessage = document.querySelector(".errorMessage");
const amount = document.getElementById("amount");
const total = document.getElementById("total");
const reset = document.querySelector(".reset");
//ALL ELEMENTS//

//EVENTS//
billInput.addEventListener("input", setBillValue);
customInput.addEventListener("input", setCustomValue);
peopleInput.addEventListener("input", setPeopleValue);
reset.addEventListener('click', resetValues)
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
    resetActive();
    if (validateBillValue(billInput.value)) {
        billValue = parseFloat(billInput.value);
        billInput.style.border = '1px solid transparent'
        if (billInput.value.includes(',')) {
            billValue = parseFloat(billInput.value.replaceAll(',', '.'))
        }
        calculateTip();
    } else {
        billInput.style.border = '1px solid red'
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        resetActive();
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            reset.classList.remove('active');
            buttonValue = 0.0;
        } else {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            buttonValue = parseFloat(this.innerHTML)/100;
            customInput.value = '';
            calculateTip();
        }
    })
})

function setCustomValue() {
    resetActive();
    if (validateCustomValue(customInput.value)) {
        customInput.style.border = '1px solid transparent'
        buttonValue = parseFloat(customInput.value)/100;
        buttons.forEach(btn => btn.classList.remove('active'));
        calculateTip();
    } else {
        customInput.style.border = '1px solid red'
    }
}

function setPeopleValue() {
    resetActive();
    if (validateCustomValue(peopleInput.value)) {
        peopleValue = parseFloat(peopleInput.value);
        errorMessage.classList.remove('show');
        peopleInput.style.border = '1px solid transparent';
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
    if (isNaN(amountNumber) || amountNumber === Number.POSITIVE_INFINITY || amountNumber === Number.NEGATIVE_INFINITY) {
        amount.innerHTML = '$0.00'
        total.innerHTML = '$0.00'
    } else {
        amount.innerHTML = '$' + amountNumber.toFixed(2);
        total.innerHTML = '$' + totalNumber.toFixed(2);
    }
}

function resetValues() {
    billInput.value = '';
    customInput.value = '';
    peopleInput.value = '';
    buttons.forEach(btn => btn.classList.remove('active'));
    reset.classList.remove('active');
    billValue = 0.0;
    buttonValue = 0.0;
    peopleValue = 0.0;
    amount.innerHTML = '$0.00'
    total.innerHTML = '$0.00'
}

function resetActive() {
    // if (billValue !== '' || buttonValue !== '' || peopleValue !== '') {
    //     reset.classList.add('active');
    // } else {
    //     reset.classList.remove('active');
    // }

    if (billInput.value !== '' || customInput.value !== '' || peopleInput.value !== '' || buttonValue !== '') {
        reset.classList.add('active');
    } else {
        reset.classList.remove('active');
    }
}





