//maneira de gerar um identificador único

const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

//well known symbols
//Symbol.iterator | Symbol.split | Symbol.toStringTag

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj1 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.value[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};


const arr2 = [...obj1];