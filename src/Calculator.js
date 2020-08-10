// ./src/Calculator.js
class Calculator {
    constructor(num1Value = 0, num2Value = 0) {
        this.setProp('num1', num1Value);
        this.setProp('num2', num2Value);
    }

    setProp(propName, value) {
        if(typeof value !== 'number') {
            throw new Error(
                'Property have to be a number'
            );
        }
        this[propName] = value;
    }
   
    add() {
        const {num1, num2} = this;
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(num1 + num2);
            }, Math.random() * 90 + 10);
        });

        return promise;
    }
}

export default Calculator;