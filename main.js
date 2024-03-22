// misol - 1
// let arr = [5, 8, 4, 3, 4, 9, 6, 3]

// function findEvenOdd(array){
//     let even = 0
//     let odd = 0
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             even++
//         }
//         else if(array[i] % 2 != 0){
//             odd++
//         }
//     }
//     console.log(even)
//     console.log(odd)
// }
// findEvenOdd(arr)


// misol - 2
// let arr = [5, 8, 4, 3, 4, 9, 6, 3]

// function findEvenOdd(array){
//     let even = 0
//     let odd = 0
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             even += array[i]
//         }
//         else if(array[i] % 2 != 0){
//             odd += array[i]
//         }
//     }
//     console.log(Math.abs(even - odd));
// }
// findEvenOdd(arr)



// misol - 3
// function addNumber(...array){
//     let total = 0
//     for(let i = 0; i < array.length; i++){
//         total += array[i]
// }
// console.log(total)
// }
// addNumber(1, 2, 3, 4, 5)



// misol - 4
// let arr = ["salom", "xayr", true, undefined, null, 25, false, "hello world"]

// function addStr(array){
//     let str = []
//     for(let i = 0; i < array.length; i++){
//         if((typeof array[i]) === "string"){
//             str.push(array[i])
//         }
//     }
//     console.log(str);
// }
// addStr(arr)




// misol - 5
// function addNumber(){
//     let array = [4, 5, 7, 9, 2, 3, 1, 5, 4]
//     let number = 5
//     for(let i = 0; i < array.length; i++){
//         if(array[0] < number){
//             array.unshift(number)
//         }
//     }
//     if(array[0] > number){
//     array.push(number)
//     }
//     console.log(array)
// }
// addNumber()



// misol - 6
// let arr = [5, 8, 4, 3, 4, 9, 6, 3]

// function evenFind(array){
//     let str = []
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             str.push(array[i])
//         }
//     }
//     console.log(str);
// }
// evenFind(arr)