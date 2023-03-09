const { stringLenth, reverseString, calculator, capitalizeString } = require('./index');

describe('StringLength', () => {
    test('should print: Error string value is empty', () => {

        //Act
        const getString = stringLenth('');

        //Assert
        expect(getString).toMatch('Error String value is Empty');
    });

    test('should print: Error string value is too long', () => {

        //Act
        const getString = stringLenth('cosmoshagan');

        //Assert
        expect(getString).toMatch('Error String value is too long');
    });

    test('should check string length', () => {
        //Act
        const getString = stringLenth('cosmosh');

        //Assert
        expect(getString).toBeLessThan(10);
    });

});

//Reverse String Value
test('should get String and reverse it', () => {

    //Act
    const getString = reverseString('name')

    //Assert
    expect(getString).toMatch('eman');

});


describe('calculator', () => {
    describe('Add Method', () => {
        test('should add 2 values', () => {
            //Act
            const addMethod = calculator.add(1, 2);

            //Assert
            expect(addMethod).toBe(3);
        });

        test('should add 2 values', () => {
            //Act
            const addMethod = calculator.add(4, 3);

            //Assert
            expect(addMethod).toBe(7);
        });

        test('should add 2 values', () => {
            //Act
            const addMethod = calculator.add(5, 4);

            //Assert
            expect(addMethod).toBe(9);
        });
    });

    describe('Substract Method', () => {
        test('should subtract 2 values', () => {
            //Act
            const subtractMethod = calculator.substract(2, 1);

            //Assert
            expect(subtractMethod).toBe(1);
        });
        test('should subtract 2 values', () => {
            //Act
            const subtractMethod = calculator.substract(5, 2);

            //Assert
            expect(subtractMethod).toBe(3);
        });
        test('should substract 2 value', () => {
            //Act
            const subtractMethod = calculator.substract(7, 2);

            //Assert
            expect(subtractMethod).toBe(5);
        });
    });

    describe('Multiply Method', () => {
        test('should multiply 2 values', () => {
            //Act
            const multiplyMethod = calculator.multiply(2, 3);

            //Assert
            expect(multiplyMethod).toBe(6);
        });

        test('should multiply 2 values', () => {
            //Act
            const multiplyMethod = calculator.multiply(5, 3);

            //Assert
            expect(multiplyMethod).toBe(15);
        });

        test('should multiply 2 values', () => {
            //Act
            const multiplyMethod = calculator.multiply(4, 2);

            //Assert
            expect(multiplyMethod).toBe(8);
        });
    });

    describe('Divide Method', () => {
        test('should divide 2 values', () => {
            //Act
            const divideMethod = calculator.divide(10, 2);

            //Assert
            expect(divideMethod).toBe(5);
        });

        test('should divide 2 values', () => {
            //Act
            const divideMethod = calculator.divide(6, 2);

            //Assert
            expect(divideMethod).toBe(3);
        });

        test('should divide 2 values', () => {
            //Act
            const divideMethod = calculator.divide(8, 4);

            //Assert
            expect(divideMethod).toBe(2);
        });
    });

});

//Capitalize String
test('should Capitalize first Character', () => {
    //Act
    const capitalize = capitalizeString('boy');

    //Assert
    expect(capitalize).toBe('Boy');
});