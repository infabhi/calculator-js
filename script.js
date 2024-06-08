var input = document.querySelector('.input');
const plus = document.getElementById('plus');
const mul = document.getElementById('mul');
const mode = document.getElementById('mode');
const sub = document.getElementById('sub');
const div = document.getElementById('div');
const C = document.getElementById('C');
var nmbr = document.querySelectorAll('.nmbr');
const brackets = document.getElementById('bracket');
let string = "";


mul.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

mode.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

plus.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

sub.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

div.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});


brackets.addEventListener('click', () => {
    let count = input.value.length;
    count++;

    if (count == 1) {
        string += ['('];
        input.value = string;
    } else {
        if (count % 2 == 0) {
            string += ['(']
            input.value = string;
        } else {
            string += [')'];
            input.value = string;
        }
    }
});

C.addEventListener('click', () => {
    string = "";
    input.value = string;
});

let i = document.querySelector('i').addEventListener('click', () => {
    string = string.slice(0, -1);
    input.value = string;
});

isequalto.addEventListener('click', (e) => {
    string = eval(string);
    input.value = string;
});

// number buttons

seven.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

eight.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

nine.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

four.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

five.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});


six.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

one.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

two.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

three.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

zero.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

dot.addEventListener('click', (e) => {
    string = string + e.target.innerHTML;
    input.value = string;
});

