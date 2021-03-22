var prop1 = 'Digital Innovation One';

var obj = {
    prop1: prop1
};

console.log(obj);

function method1() {
    console.log('method called');
}

var obj1 = {
    method1
};

obj1.method1();

var obj2 = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj2.sum(1, 5));

var propName = 'test';
var obj3 = {};

obj3[propName + ' concat'] = 'prop value';

console.log(obj3);