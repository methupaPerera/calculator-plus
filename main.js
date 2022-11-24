// Functions for the Cal+ Feature

    // Importing buttons via classes

const calPlus = document.querySelector('.calPlus');
const standard = document.querySelector('.standard');
const calculate = document.querySelector('.calculate');

    // Adding onclick event

calPlus.addEventListener('click', () => {
    document.querySelector('.normalFeatures').style.display = 'none';
    document.querySelector('.plusFeature').style.display = 'block';
});

standard.addEventListener('click', () => {
    document.querySelector('.plusFeature').style.display = 'none';
    document.querySelector('.normalFeatures').style.display = 'block';
    document.querySelector('.operation').innerHTML ='';
});

// Functions for the main cal features

    // Importing all buttons ----------------------------------

        // Importing numbers

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

        // Importing main operators

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiple = document.querySelector('.multiple');
const divide = document.querySelector('.divide');
const exponation = document.querySelector('.exponation');
const equal = document.querySelector('.equal');

        // Importing "All Clear" and "Backspace" buttons

const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

    // Functions for the numbers ----------------------------------

let displayed;    

zero.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 0;
});

one.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 1;
});

two.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 2;
});

three.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 3;
});

four.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 4;
});

five.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 5;
});

six.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 6;
});

seven.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 7;
});

eight.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 8;
});

nine.addEventListener('click', () => {
    displayed = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = displayed + 9;
});

    // Functions for the main operators ----------------------------------

let previousValue;
let events;
let afterValue;

plus.addEventListener('click', () => {
    previousValue = parseFloat(document.querySelector('.operation').innerHTML);
    document.querySelector('.operation').innerHTML = '';
    events = 1;
});

minus.addEventListener('click', () => {
    previousValue = parseFloat(document.querySelector('.operation').innerHTML);
    document.querySelector('.operation').innerHTML = '';
    events = 2;
});

multiple.addEventListener('click', () => {
    previousValue = parseFloat(document.querySelector('.operation').innerHTML);
    document.querySelector('.operation').innerHTML = '';
    events = 3;
});

divide.addEventListener('click', () => {
    previousValue = parseFloat(document.querySelector('.operation').innerHTML);
    document.querySelector('.operation').innerHTML = '';
    events = 4;
});

exponation.addEventListener('click', () => {
    previousValue = parseFloat(document.querySelector('.operation').innerHTML);
    document.querySelector('.operation').innerHTML = '';
    events = 5;
});

equal.addEventListener('click', () => {
    afterValue = parseFloat(document.querySelector('.operation').innerHTML);
    switch (events) {
        case 1:
            document.querySelector('.operation').innerHTML = previousValue + afterValue;
        break;

        case 2:
            document.querySelector('.operation').innerHTML = previousValue - afterValue;
        break;

        case 3:
            document.querySelector('.operation').innerHTML = previousValue * afterValue;
        break;

        case 4:
            document.querySelector('.operation').innerHTML = previousValue / afterValue;
        break;

        case 5:
            document.querySelector('.operation').innerHTML = previousValue ** afterValue;
    }
});

    // Functions for the  "All Clear" and "Backspace" buttons ----------------------------------

let currentDisplay;
let backspacedNumber;

clear.addEventListener('click', () => {
    document.querySelector('.operation').innerHTML = '';
    previousValue = '';
    afterValue = '';
});

backspace.addEventListener('click', () => {
    currentDisplay = document.querySelector('.operation').innerHTML;
    backspacedNumber = currentDisplay.slice(0, -1);
    document.querySelector('.operation').innerHTML = backspacedNumber;
});

// Functions for the Plus Feature (Calculation of Compound Interest)

let rate;
let time;
let amount;
let newAmount;

calculate.addEventListener('click', () => {
    rate = (parseFloat(document.querySelector('#rate').value) + 100) / 100;
    time = parseFloat(document.querySelector('#time').value);
    amount = parseFloat(document.querySelector('#amount').value);
    newAmount = amount;

    for (i = 0; time > i; i++) {
        newAmount *= rate;
    }

    document.querySelector('.operation').innerHTML = newAmount.toFixed(0);
});