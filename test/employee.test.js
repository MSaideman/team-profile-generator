const Employee = require('../lib/employee')

describe("Employee details",()=>{
    describe("Initialization",()=>{
    it("should return an object containing name,id and email property when called with the 'new' keyword", () =>{
        const obj = new Employee('mack','21','mack@mail.com');
        expect(obj.id).toBe('21');
        expect(obj.name).toBe('name');
        expect(obj.email).toBe('mack@gmail.com')
    })
    
})});