const js = require('@eslint/js');
const {sum, multiplication, logResult}= require('./task1');
const logStringsSumLength = require('./task2');
const concatNumbers = require('./task3');

describe('Test Hoomework 1', () => {
    describe('Task 1', () => {
        describe('sum', () => {
            it('should return 3', () => {
                expect(sum(2, 3)).toBe(5);
            });
        });

        describe('multiplication', () => {
            it('should return 6', () => {
                expect(multiplication(2, 3)).toBe(6);
            });
        });

        describe('logResult', () => {
            it('should console log "5 6"', () => {
                console.log = jest.fn();
                logResult(2, 3);
                expect(console.log).toHaveBeenCalledWith("5, 6");
                console.log.mockRestore();
            });
        });
    });

    describe('Task 2', () => {
        describe('log strings sum length', () => {
            it('should console log "9"', () => {
                console.log = jest.fn();
                logStringsSumLength('ya', 'arkadiy');
                expect(console.log).toHaveBeenCalledWith(9);
                console.log.mockRestore();
            });
        });
    });

    describe('Task 3', () => {
        describe('concat numbers', () => {
            it('should console log 17', () => {
               console.log = jest.fn();
               concatNumbers(971);
               expect(console.log).toHaveBeenCalledWith(17);
               console.log.mockRestore();
            });
        });
    });
});