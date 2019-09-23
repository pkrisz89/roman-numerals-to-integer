import converter from './converter';

describe('Convert roman numerals to integers',()=>{
    describe('simple cases', () =>{
        it('should convert I to 1',()=>{
            const actual = converter('I');
            const expected = 1;
    
            expect(actual).toBe(expected);
        })
    
        it('should convert V to 5', () => {
            const actual = converter('V');
            const expected = 5;
    
            expect(actual).toBe(expected);
        });
    
        it('should convert X to 10', () => {
            const actual = converter('X');
            const expected = 10;
    
            expect(actual).toBe(expected);
        })
    
        it('should convert L to 50', () => {
            const actual = converter('L');
            const expected = 50;
    
            expect(actual).toBe(expected);
        })
    
        it('should convert C to 100', () => {
            const actual = converter('C');
            const expected = 100;
    
            expect(actual).toBe(expected);
        })
    
        it('should convert D to 500', () => {
            const actual = converter('D');
            const expected = 500;
    
            expect(actual).toBe(expected);
        })
    
        it('should convert M to 1000', () => {
            const actual = converter('M');
            const expected = 1000;
    
            expect(actual).toBe(expected);
        })
    })

    describe('complex cases', () => {
        it('Should convert II to 2', () => {
            const actual = converter('II');
            const expected = 2;
    
            expect(actual).toBe(expected);
        })

        it('Should convert III to 3', () => {
            const actual = converter('III');
            const expected = 3;
    
            expect(actual).toBe(expected);
        });

        it('should convert VI to 6',()=>{
            const actual = converter('VI');
            const expected = 6;
    
            expect(actual).toBe(expected);
        })

        it('should convert IV to 4',()=>{
            const actual = converter('IV');
            const expected = 4;
    
            expect(actual).toBe(expected);
        })

        it('should convert XL to 40', () => {
            const actual = converter('XL');
            const expected = 40;
    
            expect(actual).toBe(expected);
        })

        it('should convert MCMXCIII to 1993', () => {
            const actual = converter('MCMXCIII');
            const expected = 1993;
    
            expect(actual).toBe(expected);
        })
    })
    
})