//Testing using chai - mocha
const assert = require('chai').assert
const {sub, hello} = require('../sub.module.js')

describe("Sub Module Tests", () => {
    describe("Testing sub function >> ", () => {
        it("Substracting 2 from 4 should return 2", () => {
            let ans = sub(4,2)
            assert.equal(ans, 2)
        }) 
    })
})

describe("Testing hello function >> ", () => {
    it("Passing usman should return hello usman", () => {
        let ans = hello("usman")
        assert.typeOf(ans, "string")
    }) 
})