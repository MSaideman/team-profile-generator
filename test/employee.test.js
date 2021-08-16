const Employee = require('../lib/employee')

describe("Employee details",()=>{
    describe("Initialization",()=>{
    it("should return an object ", () =>{
        const obj = new Employee();
        expect(typeof(obj)).toBe("object");
    })
    
    describe("getName function",()=>{
        it("should return name of employee", () =>{
            const obj = new Employee('mackenzie');
            expect(obj.getName()).toBe('mackenzie');
        })

})})});