const {expect} = require('chai');
const rgbToHexColor = require('./script');

// Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]

describe('rgbToHexColor', () => {
    // Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
    it('converts black to hex', () => {
        expect(rgbToHexColor(0,0,0)).equal('#000000')
    })
    it('converts white to hex', () => {
        expect(rgbToHexColor(255,255,255)).equal('#FFFFFF')
    })
    it('does not equal the given parameters', () => {
        expect(rgbToHexColor(255,255,0)).not.equal('#FFFFFF')
    })

    // Return undefined if any of the input parameters are of an invalid type or not in the expected range
    it('returns UNDEFIENED if given RED invalid parameter', () => {
        expect(rgbToHexColor(-1,255,255)).equal(undefined)
    })
    it('returns UNDEFIENED if given GREEN invalid parameter', () => {
        expect(rgbToHexColor(255,300,255)).equal(undefined)
    })
    it('returns UNDEFIENED if given BLUE invalid parameter', () => {
        expect(rgbToHexColor(255,255,-1)).equal(undefined)
    })
})
