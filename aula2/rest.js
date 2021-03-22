//antes 
function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}

console.log(sum(5, 5, 5, 2, 3));


//atualmente: rest operator  ...
function sum1(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum1(5, 5, 5, 2, 3));

//3
const sum2 = (a, b, ...rest) => {
    console.log(a, b, rest);
};

console.log(sum2(5, 5, 5, 2, 3));

//4
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)
const sum3 = (...rest) => {
    return multiply.apply(undefined, rest);
};


console.log(sum3(5, 5, 5, 2, 3));

//5
const multiply1 = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum4 = (...rest) => {
    return multiply1(...rest);
};

console.log(sum4(5, 5, 5, 2, 3));