const Intern = require('../lib/intern')

describe("Intern details",()=>{
    describe("Initialization",()=>{
    it("should return an object ", () =>{
        const obj = new Intern();
        expect(typeof(obj)).toBe("object");
    })

    describe("getSchool",()=>{
        it("should return name of school ", () =>{
            const obj = new Intern('mackenzie', '1', 'mbsaideman@gmail.com', 'UCSD');
            expect(obj.getSchool()).toBe('UCSD');
        })
    })
})});


