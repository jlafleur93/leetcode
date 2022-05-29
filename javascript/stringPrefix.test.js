const isPrefixString = require("./stringPrefix")

describe("stringPrefix", ()=> {
    it("should return true if the word can be made by concating it", ()=>{
        let s = "iloveleetcode"
        let words = ["i","love","leetcode","apples"]
        expect(isPrefixString(s,words )).toBe(true);
    })

    it("should return not true if the word cant be made by concating it", ()=>{
        let s = "iloveleetcode"
        let words = ["apples","i","love","leetcode"]
        expect(isPrefixString(s, words)).toBe(false);
    })

})