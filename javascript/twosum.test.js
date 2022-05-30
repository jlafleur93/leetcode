const twoSum = require("./twosum")

describe("stringPrefix", ()=> {
    it("it should return given indices of target value", ()=>{
        let nums = [2,7,11,15]
        let target = 9
        expect(twoSum(nums,target)).toEqual(expect.arrayContaining([0, 1]))
    })

    it("should return not true if the word cant be made by concating it", ()=>{
        let nums = [2,7,11,15]
        let target = 9
        expect(twoSum(nums,target)).toEqual(expect.arrayContaining([0, 1]))
    })

})