// CharAt method

// Example #1
const sentence = "The developer Nick says hello"
const index = 0

console.log(`The character at index ${index} is ${sentence.charAt(0)}`)

// Example #2 (find the capital letter in the code(string))

const code  = 'xZhy'

const capital = code.charAt(1) === 'z' //false

console.log(capital)

// Example #3 find last letter of the string
const word = 'Hello'
const lastChar = word.charAt(word.length -1)
console.log(`The last character in the word ${word} is: ${lastChar}`)