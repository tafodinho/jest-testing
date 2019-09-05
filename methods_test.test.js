
const { capitalize, reverseString, analyse, Calculator, Cypher } = require('./methods_to_test.js')

test.each([
    ['name', /[N]ame/], 
    ['Jason', /[J]ason/]
])('capitalize', (name, result) => {
    expect(capitalize(name)).toMatch(result)
})

test.each([
    ['string', /gnirts/],
    ['50lit', /til05/],
    ['thaht', /thaht/]
])("reverse string", (string, result) => {
    expect(reverseString(string)).toMatch(result)
})

test.each([
    [1,2,3,6],
    [2,1,4,7],
    [6,10,4,20]
])('calculator add', (a, b, c, result) => {
    const calc = new Calculator
    expect(calc.add(a, b, c)).toBe(result)
})

test.each([
    [1,2,-1],
    [2,1,1],
    [500, 200,300]
])('calculator subtract two numbers', (a, b, result) => {
    const calc = new Calculator
    expect(calc.subtract(a, b)).toBe(result)
})

test.each([
    [1,2,3,6],
    [2,1,4,8],
    [6,10,4,240]
])('calculator multiply', (a, b, c, result) => {
    const calc = new Calculator
    expect(calc.multiply(a, b, c)).toBe(result)
})

test.each([
    [1,2,0.5],
    [-2,1,-2],
    [1,3,0.333],
    [2,0,'-i']
])('calculator divide two numbers', (a, b, result) => {
    const calc = new Calculator
    expect(calc.divide(a, b)).toBe(result)
})
test.each([
    ["Hello look who we got here", /mjqqt qttp bmt bj lty mjwj/],
    ["no poor code!", /st uttw htij!/],
    ["@the old bookshop", /@ymj tqi gttpxmtu/]
])('cypher: encypher', (string, result) => {
    const cypher = new Cypher(5)
    expect(cypher.encypher(string)).toMatch(result)
})

test.each([
    [[1,2,3,4,5],[3,1,5,5]],
    [[2,6,0,8],[4,0,8,4]]
])("Analyse", (data, result) => {
    expect(analyse(data)).toEqual({
        average: result[0],
        min: result[1],
        max: result[2],
        length: result[3]
    })
})
