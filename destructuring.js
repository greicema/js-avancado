var arr = ['Apple', 'Banana', 'Orange', ['tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var obj = {
    name: 'Greice',
    props: {
        age: 23,
        favoritColors: ['green', 'pink']
    }
};

//destructuring assignment
var apple2 = arr;
var {
    props: { age, favoritColors: [color1, color2] }
} = obj;

var { name } = obj;
console.log(name);
console.log(age);
console.log(color1);