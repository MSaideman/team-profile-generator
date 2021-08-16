const Intern = require('../lib/intern')

describe("Intern details",()=>{
    describe("Initialization",()=>{
    it("should return an object ", () =>{
        const obj = new Intern();
        expect(typeof(obj)).toBe("object");
    })
    
})});


