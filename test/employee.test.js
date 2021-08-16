const Employee = require('../lib/employee')

describe("Employee details",()=>{
    describe("Initialization",()=>{
    it("should return an object ", () =>{
        const obj = new Employee();
        expect(typeof(obj)).toBe("object");
    })
    
})});