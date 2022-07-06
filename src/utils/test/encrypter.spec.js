describe('encrypt', () => {
    test('When having a text should return a different text', () => {
        const {encrypt} = require('../encrypter');
    
        const mockedText = 'password';
    
        const encrypted = encrypt(mockedText);
    
        console.log(encrypted);
      
        expect(encrypted).not.toEqual(mockedText);
    })
})

describe('encrypt', () => {
    test('When having an encrypted value and its ', () => {
        const {compare} = require('../encrypter');

        const encrypted = '$2b$10$PadycxiBqLGamynG/fq25eJZ89VaSuNNKazj7tJqDehXRSmVK/rGe';

        const value = "password";

        const match = compare(value, encrypted);

        expect(match).toBeTruthy();
    })

    test('When having an encrypted value and its ', () => {
        const {compare} = require('../encrypter');

        const encrypted = '$2b$10$PadycxiBqLGamynG/fq25eJZ89VaSuNNKazj7tJqDehXRSmVK/rGe';

        const value = "passworde";

        const match = compare(value, encrypted);

        expect(match).toBeFalsy();
    })

})