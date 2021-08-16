const Engineer = require('../lib/engineer')

describe("Engineer details",()=>{
    describe("Initialization",()=>{
    it("should return an object ", () =>{
        const obj = new Engineer();
        expect(typeof(obj)).toBe("object");
    })
    
})});

