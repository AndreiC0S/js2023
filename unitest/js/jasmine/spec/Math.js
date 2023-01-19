// test

describe('helloWorld',() =>{
    it('returns hello world', () => {
        var actual = hello();
        expect(actual).toBe('hello world')
    })
})


describe('Suma intregi',() =>{
    it(`returns sum 5 si 3 = 8`, () => {
        expect(adunare(5,3)).toEqual(8);
    });
});


describe('Suma reale',() =>{
    it(`returns sum 1.4 si 0.7 = 2.1`, () => {
        expect(adunare(1.4,0.7)).toEqual(2.1);
    });
});


describe('inmultire intregi',() =>{
    it(`returns 2 * 10 = 20`, () => {
        expect(inmultire(2,10)).toEqual(20);
    });
});







