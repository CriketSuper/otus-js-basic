const findGreatestNumber = require('./task1');
const CircleInSquare = require('./task3');


describe('Test Hoomework 2', () => {
    describe('Task 1', () => {
        describe('findGreatestNumber', () => {
            it('should return 5', () => {
                console.log = jest.fn();
                findGreatestNumber(11, 23);
                expect(console.log).toHaveBeenCalledWith(23);
                console.log.mockRestore();
            });
        });
    });

    describe('Task 2', () => {

        jest.mock('prompt-sync', () => {
            return jest.fn(() => jest.fn(() => '11')); // Имитация ввода '11'
        });
        const logMounth = require('./task2');

        describe('logMounths', () => {
            
            it('should return Ноябрь', () => {
                console.log = jest.fn();
                logMounth();
                expect(console.log).toHaveBeenCalledWith('Ноябрь');
                console.log.mockRestore();
                jest.clearAllMocks();
            });
        });

    });

    describe('Task 3', () => {
        describe('CircleInSquare', () => {
            it('should return true', () => {
                expect(CircleInSquare(50, 100)).toBe(true);
            });
        });
    });
});