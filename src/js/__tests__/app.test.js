import Validator from "../app";

describe('Проверка никнеймов', () => {
    let validator
    beforeEach(() => {
        validator = new Validator();
    })

    test('Проверка корректности никнейма', () => {
        expect(validator.validateUsername('username')).toBe(true);
        expect(validator.validateUsername('user2-name_one')).toBe(true);
    })
    test('Проверка некорректного никнейма', () => {
        expect(validator.validateUsername('!username!')).toBe(false);
        expect(validator.validateUsername('1user2')).toBe(false);
        expect(validator.validateUsername('-user')).toBe(false);
        expect(validator.validateUsername('user_')).toBe(false);
        expect(validator.validateUsername('1111user')).toBe(false);
        expect(validator.validateUsername('user@name')).toBe(false);
        expect(validator.validateUsername('userимя')).toBe(false);
    })

})