// ./__tests__/Calculator.test.js
import Calculator from './../src/Calculator';

describe('Calculator', () => {
    // scenario
    it('Should return 3 when insert 1 and 2', () => {
        // given
        const calc = new Calculator(1, 2);
        // when
        const promise = calc.add();
        // then
        return promise.then(result => {
            expect(result).toBe(3);
        });

    });

    // scenario
    it('Should return 0 when not insert numbers', async () => {
            // given
            const calc = new Calculator();
            // when
            const result = await calc.add();
            // then
            expect(result).toBe(0);
    });

    // scenario
    it('Should throw exception when insert not a number', () => {
        // given
        function createCalc() {
            // when
            new Calculator('X');
            new Calculator(undefined, 'X');
        }
        // then
        expect(createCalc).toThrow();
    });
   
});
