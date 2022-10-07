// .includes() method
// Example: #1
const names = ['nick', 'lex', 'lani']
const isAlaniInArray = names.includes('lani') ? 'yes' : 'no'
console.log(isAlaniInArray)

// Example: #2 
const gradeReport = ['A', 'A', 'F', 'B']
const didStudentPass = gradeReport.includes('f'.toUpperCase()) ? 'student failed' : 'student passed!'
console.log(didStudentPass)