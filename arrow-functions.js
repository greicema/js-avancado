//função antiga
var sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 5));

function car() {
    this.foo = 'bar';
}

console.log(new car());

//arrow functions (utiliza-se =>)
var nSum = (a, b) => {
    return a + b;
}
console.log(nSum(5, 15));

var creatObj = () => ({ test: 123 });
console.log(creatObj());

var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after 1000s');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();