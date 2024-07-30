// Birinchi rasmdagi masalalar

// 1 Task
// let obj ={
//     name:"Abdulloh",
//     age:19,
//     job:"Logistic Company",
//     interest:"game",
//     hobby:"sleep",
//     number:"+998944683325",
//     username:"AU"
// }

// const keysvaluesFnc = (obj) =>  {
//     for(let [key,value] of Object.entries(obj)){
//         console.log(`${key} - ${value}`);
//     }
// }
// keysvaluesFnc(obj);


// 2 Task

// const person1 = {
//     name:"Abdulloh",
//     age:19
// }
// const person2 = {
//     hobby:"Volleybol",
//     interest:"Sleep"
// }

// function assignObjs(a,b){
//     return Object.assign(a,b)
// }
// console.log(assignObjs(person1,person2));


// 3 Task
// let array = [23,5,67,3,23,45,12]

// function lastValue(array){
//     let arrLast = array[array.length - 1 ] + 1;
//     array.push(arrLast)
//     return array    
// }
// console.log(lastValue(array));


// 4 Task

// let arr = [22,5,67,3,23,45,12]

// function totalFnc (arr){
//     let yigindi = arr.reduce((acc, num) => acc + num,0)
//     if(arr[0] % 2 === 0){
//         arr.unshift(yigindi)
//     }
//     else{
//         arr.push(yigindi)
//     }
//     return arr
// }
// console.log(totalFnc(arr));

// 5 Task

// let arr = [29,5,67,3,23,45,12]

// function changeValues(arr) {
// let first = arr[0];
// let lastValue = arr[arr.length - 1];
// arr[arr.length - 1] = first;
// arr[0] = lastValue
// return arr
// }
// console.log(changeValues(arr));


// 6 Task 
// let arr = []
// function addValues(a){
//     if(a === 0){
//         return
//     }
//     else{
        
//         let enterWord = prompt(`Soz Kiriting`);
//         arr.push(enterWord)
//         return addValues(a - 1)
//     }
// }
// addValues(6)
// console.log(arr);


// 7 Task
// let arr = []
// function addValues(a,index = 1){
//     if(a === 0){
//         return
//     }
//     else{
//         let enterWord = prompt(`${index}chi Savolni kiriting`);
//         arr.push(enterWord)
//         return addValues(a - 1, index + 1)
//     }
// }
// addValues(3)

// function answerFnc(arr,index = 1){
//     let answers = []
//     for(let i = 0; i < arr.length; i++){
//         let enterAnswer = prompt(`${index} - Savol: ${arr[i]}; - Sizning javobingiz:`)
//         answers.push(enterAnswer)
//         index++
//     }
//     return answers
// }
// console.log(answerFnc(arr));

// 2chi rasmdagi misollar 

// 1 Task 
// let arr = []
// let enterWord = prompt("Ihtiyoriy soz kiriting")    
// function pushArray(enterWord, arr){
//     if(typeof enterWord === "string" && !Number(enterWord)){
//         arr.push(enterWord)
//     }
//     else {
//         console.log("Error is not string") ;
//     }
// }
// pushArray(enterWord, arr)
// console.log(arr);
 

// 2 Task

// let arr1 = [1,2,3,4,5]
// let arr2 = [4,5,6,7,8,9]

// function finSimilarValues(arr1,arr2){
//     let similars = []
//     for(let i = 0; i < arr1.length; i++){
//         if(arr2.includes(arr1[i])){
//             similars.push(arr1[i])
//         }
//     }
//     for(let j = similars.length - 1; j >= 0; j-- ){
//         arr1.unshift(similars[j]);
//         arr2.unshift(similars[j]);
//     }
//   return [arr1, arr2]
// }
// console.log(finSimilarValues(arr1, arr2));


// 3 Task
// let obj = {
//     name:"John",
//     age:"30",
//     job:"Mehanic",
//     study:"None",
//     travel:"US"
// }

// function keysLength(obj) {
//     return( Object.keys(obj)).length 
// }
// console.log(`Keylarning lengthi: ${keysLength(obj)}ta`);



// 4 Task
// let arr = []
// let yigindi = 0
// function totalValues(n) {
//     if(n === 0){
//         return
//     }
//     else{
//         let enterNum = prompt("Son kiriting") - 0;
//         arr.push(enterNum);
//         yigindi += enterNum;
//         return totalValues(n - 1);
//     }
// }
// totalValues(4)
// console.log(`Siz kiritgan qiymatlar: ${arr}`);
// console.log(`Uning yigindisi: ${yigindi}`);


// 5 Task

// let obj ={
//     name:"Abdulloh"
// }
// let obj2 ={
//     age:19
// }

// function findValues(a,b) {
//     let assignObjs = Object.assign(a,b);
//     return Object.values(assignObjs)
// }
// console.log(`Valuelar: ${findValues(obj, obj2)}`);

