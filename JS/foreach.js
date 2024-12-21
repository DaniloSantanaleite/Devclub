const students = [
    {name: 'Danilo', age: 25},
    {name: 'Dani', age: 20},
    {name: 'Daniel', age: 25},
    {name: 'Ingrid', age: 23},
    {name: 'Ted', age: 15},
];

let allstudentsAge = 0

students.forEach( (student, index) => {
   allstudentsAge += student.age
})

const average = allstudentsAge / students.length

console.log(`A média dos alunos e de ${average.toFixed(0)}`)