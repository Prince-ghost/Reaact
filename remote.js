//var x = 10;
//let y = 13;
//const z = 25;

//console.log("hello world")


//function
//function abc(a, b){
//    return a+b
//}

//console.log(abc(13,17))

//arrow function
// const abc = (a, b) => a+b
// const bcd = (a, b) => {
//     return a+b

// }

// console.log(bcd(13, 15))


//ARRAY

// const arr = [12, 13, 14, 24, 45]
// arr.push(101)
// //console.log(arr)

// constage = arr.map((el) => {
//     console.log(el)
// })


// // filter - filtering the array based on condition 
// const age1 = arr.filter((el) => {
//     return el > 30 
// })

// console.log(age1)

// //Find - finding the element the first element that satisfies the condition
// const age2 = arr.find((el) => {
//     return el > 30 
// })

// console.log(age2)
// //reduce
// const marks = arr.reduce((sum, ark) => {    //in parameter first one we tell accumulater 
//     return sum + ark;
// },0)
// console.log(marks)




// class Student{
//     setter(name, age){      //setter function is used to assign the value to the property of the class
//         this.name = name;
//         this.age = age;

//     }

//     getter(){
//         console.log(this.name, this.age)
//     }

// }

// const obj = new Student()
// obj.setter("XYZ", 27)
// obj.getter()



//CONCAT
// const arr1 = [1, 3, 6, 8, 12, 45]
// const arr2 = [3, 4, 6, 87, 38]

// console.log(arr1.concat(arr2))


// //every
// const arr1 = [17, 3, 6, 8, 12, 45]
// const arr2 = [3, 4, 6, 87, 38]

// const every = arr1.every((el) => el > 2)
// console.log(every)

// //foreach()\
// const foreach = arr1.forEach((el) => console.log(el))

// //Array.from
// const spl = "Hello"
// const arrfrom = Array.from(spl)
// console.log(arrfrom)

// //Inndex
// console.log (spl.indexOf("e")) 

// //Reverse
// console.log(arr1.reverse())


// //destructing
// const student = {
//     name : "XYZ",
//     age : 24,
//     Course : "Cse"
// }

// console.log(student.age)
// console.log(student.Course)
// console.log(student.name)

// const { name, age, Course} = student;
// console.log(name, age, Course)

// //spread
// const numbers = [1, 2, 3, 4, 6]
// const newNum = [...numbers]
// console.log(newNum)

// //
// const abc = (...num) => {
//     console.log(num)
// }

// console.log(abc(10, 15, 45, 76, 89))//it show undefined bcz the functon does not return anything, it 

const student = {
    age: 24,
} ;
const stu ={
    name: "XYZ",
    age: 24,
};

console.log(stu.name === student.name);
console.log("Object Check",stu === student)





