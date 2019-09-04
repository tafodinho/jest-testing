const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const reverseString = (string) => {
    let splitString = string.split("")
    let reversedArray = splitString.reverse()
    let joinString = reversedArray.join("")

    return joinString
}

const analyse = (numbers) => {
    let sum = numbers.reduce((previous, current) => current += previous) / numbers.length
    // let avrg = sum / numbers.length
    
    return {
        average: sum,
        min: Math.min(...numbers),
        max: Math.max(...numbers),
        length: numbers.length
    }
}

class Calculator {

    add(...numbers) {
        return numbers.reduce((prev, cur) => cur *= prev)
    }

    subtract(a, b) {
        return a - b
    }

    divide(a, b) {
        return a / b
    }
    multiply(...numbers) {
        return numbers.reduce((prev, cur) => cur *= prev)
    }

}

class Cypher {
    constructor(key) {
        this.key = key
        this.defaultString = {a: 0,b: 1,c: 2,d: 3,e: 4,f: 5,g: 6,h: 7,i: 8,j: 9,k: 10,l: 11,m: 12,n:13,o: 14,p: 15,q: 16,r: 17,s: 18,t: 19,u: 20,v: 21,w: 22,x: 23,y: 24,z: 25}
    }

    encypher(string) {
        let stringArray = string.split("")
        stringArray.forEach((value, index) => {
            stringArray[index] = this.shiftChar(value.toLowerCase())
        })
        return stringArray.join("")
    }

    shiftChar(char) {
        if(char === " ") {
            return char
        }
        return Object.keys(this.defaultString)[(this.defaultString[char] + 5)%26] 
    }
}

const calc = new Cypher(5)
console.log(calc.encypher("Hell56o loo!k who we got here"))

module.exports = { capitalize, reverseString, analyse, Calculator, Cypher}