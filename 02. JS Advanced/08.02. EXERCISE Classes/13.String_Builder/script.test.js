const {expect} = require('chai');
let StringBuilder = require('./script');

describe('StringBuilder', () => {
    describe('constructor', () => {
        it('Should intialize with empty array if undefined is passed', () => {
            let sb = new StringBuilder(undefined);
            expect(sb.toString()).to.equal('');
        });
        
        it('Should throw error if input is not a string', () => {
            expect(() => new StringBuilder(10)).to.throw(TypeError);
            expect(() => new StringBuilder(null)).to.throw(TypeError);
        });
        it('Should work correctly with correct input', () => {
            let sb1 = new StringBuilder('abv');
            let sb2 = new StringBuilder('test');
            expect(sb1.toString()).to.equal('abv');
            expect(sb2.toString()).to.equal('test');
        });

        it('Should append value', () => {
            let sb1 = new StringBuilder();
            expect(() => sb1.append(true)).to.throw(TypeError);
            let sb2 = new StringBuilder();
            expect(() => sb2.append(123)).to.throw(TypeError);

            let sb3 = new StringBuilder('test');
            sb3.append('123');
            let result = sb3.toString();
            expect(result).to.equal('test123');
        });


        it('Should prepend value', () => {
            let sb1 = new StringBuilder();
            expect(() => sb1.prepend(true)).to.throw(TypeError);
            let sb2 = new StringBuilder();
            expect(() => sb2.prepend(123)).to.throw(TypeError);

            let instance = new StringBuilder('test');
            instance.prepend('123');
            let result = instance.toString();
            expect(result).to.equal('123test');
        });

        it('Should insert correctly', () => {
            let sb1 = new StringBuilder('test');
            expect(() => sb1.insert(1, 1)).to.throw(TypeError);
            let sb2 = new StringBuilder('test');
            expect(() => sb2.insert('123', null)).to.throw(TypeError);


            let instance = new StringBuilder('test');
            instance.insertAt('123', 1);
            let result = instance.toString();
            expect(result).to.equal('t123est');
        });

        it('Should remove correctly', () => {
            let instance = new StringBuilder('test');
            instance.remove(1, 2);
            let result = instance.toString();
            expect(result).to.equal('tt');
        });

        it('Should print correctly', () => {
            let instance = new StringBuilder('test');
            let result = instance.toString();
            expect(result).to.equal('test');
        });
    });
});