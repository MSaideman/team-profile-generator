const Engineer = require('../lib/engineer')

describe("Engineer details",()=>{
    describe("Initialization",()=>{
    it("should return an object ", () =>{
        const obj = new Engineer();
        expect(typeof(obj)).toBe("object");
    })
    
    describe("getGithub function",()=>{
        it("should return name of github", () =>{
            const obj = new Engineer('mackenzie', '1', 'mbsaideman@gmail.com', 'MSaideman');
            expect(obj.getGithub()).toBe('MSaideman');
        })
    })
})
});

