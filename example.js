console.log("hello world")
a = [1, 2, 3]
b = [4, 5, 6]
c = [...a, ...b]

d = c.filter((n) => n !== 3);
objectD = d.map((value, index) => ({value, index}))
product = objectD.reduce((acc, cur) => acc * cur.value, 1)

console.log(JSON.stringify(c))
console.log(JSON.stringify(d))
console.log(objectD)
console.log(product)


const students = [
 	{ name: "Marko", grade: 3 },
     { name: "Luka", grade: 4 },
     { name: "Ivana", grade: 5 },
 	{ name: "Lana", grade: 2 },
   ];

console.log(students)   
studentSUM = students.map(student => student.grade).filter(grade => grade >= 4).reduce((acc, cur) => acc + cur, 0)
console.log(studentSUM)

const prices = { 

  pizza: 30, burger: 20, pasta: 25, juice: 10, fish: 40

 }
console.log(prices)
const {pasta, pizza: calzone, beer = 12, ...other} = prices;
console.log("pasta: ", pasta)
console.log("calzone: ", calzone)
console.log("beer: ", beer)
console.log("other: ", other)
console.log(`Calzone costs ${calzone} ${calzone + pasta}`)