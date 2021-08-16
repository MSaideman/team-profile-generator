const Manager = require('../lib/manager')

describe("Manager details",()=>{
    describe("Initialization",()=>{
    it("should return an object ", () =>{
        const obj = new Manager();
        expect(typeof(obj)).toBe("object");
    })
    
})});

