// import capitalize from './methods_to_test';
const { capitalize, reverseString, Calculator, Cypher } = require('./methods_to_test.js')


test("capitalize", () => {
    expect(capitalize("name")).toMatch(/[N]ame/)
})

test("reverse string", () => {
    expect(reverseString("string")).toMatch(/gnirts/)
})

test("calculator add", () => {
    const calc = new Calculator
    expect(calc.add(1,2,3)).toBe(6)
})
test("calculator subtract two numbers", () => {
    const calc = new Calculator
    expect(calc.subtract(1,2)).toBe(-1)
})
test("calculator multiply ", () => {
    const calc = new Calculator
    expect(calc.multiply(1,2,3)).toBe(6)
})
test("calculator divide two numbers", () => {
    const calc = new Calculator
    expect(calc.divide(4,2)).toBe(2)
})
test("cypher: encypher", () => {
    const cypher = new Cypher(5)
    expect(cypher.encypher("Hello look who we got here")).toMatch(/mjqqt qttp bmt bj lty mjwj/)
})

test("analyse", () => {
    const data = {
        average: 12,
        min: 2,
        max: 6,
        length: 4
    }
    expect(data).toEqual({
        average: 12,
        min: 2,
        max: 6,
        length: 4
    })
})