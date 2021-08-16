const Manager = require('../lib/manager')

describe("Manager details",()=>{
    describe("Initialization",()=>{
    it("should return an object ", () =>{
        const obj = new Manager();
        expect(typeof(obj)).toBe("object");
    })

    describe("getOfficeNumer function",()=>{
        it("should return offce number ", () =>{
            const obj = new Manager('mackenzie', '1', 'mbsaideman@gmail.com', '3.14');
            expect(obj.getOfficeNumber()).toBe('3.14');
        })
    })
})});

