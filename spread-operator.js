//Spread operator (strings, arrays, objetos literais e objetos iteráveis)

//string
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);

//array
const arr = [1, 2, 3, 4];

function logArgs1(a, b, c) {
    console.log(a, b, c);
}

const arr1 = [5, ...arr, 6, 7];
const arr2 = [...arr1, ...arr, 0, 0, 0];
logArgs1(arr2);

//clonando array
const arrClone = [...arr];
console.log(arrClone);

//objetos -> O spread só pode ser utilizado para construir novos objetos
const obj = {
    test: 123
};

const obj1 = {
    ...obj,
    test1: 'hello'
};

console.log(obj1);

//objetos clone (shallow clone)
const obj2 = {
    test: 123,
    subObj: {
        test: 123
    }
};
const obj3 = {...obj2 };
obj3.subObj.test = 456;
console.log(obj3);