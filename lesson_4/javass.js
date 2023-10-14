//функция


//1)function-declaration()
function printDelimiter(){
    console.log('-'.repeat(70))
}
printDelimiter()



//2)function-expression()
var sayHello = function (){
    console.log('Hello World')
}
sayHello()

// function getCoffee(){
//     var drinkname = prompt("Что вы хотите выпить? (Only Coffee) - ").toLowerCase()
//     if(drinkname === "кофе"){
//         console.log('Хорошо!')
//         var coffeeProperties = prompt("Какой кофе вы хотите? (черный/кофе с молоком) -").toLowerCase()
//         switch (coffeeProperties){
//             case 'black coffee':
//                 alert('Один черный кофе')
//                 break
//             case 'coffee with milk':
//                 alert('Один с молочком кофе')
//                 break
//             default:
//                 alert('Такого кофе нет')
//         }
//     }
//     else{
//         console.log('У нас есть только кофе')
//     }
// }
// getCoffee()
//
//


var doCalc = function (num1 , num2){
    console.log(num1 + num2)
}
doCalc(34 , 8)

var strLog = function (text){
    console.log(text)
}
strLog("sdfsdfasd")



//example
var getElementPosition = function (element , array){
    for(var i = 0; i < array.length; i++){
        if(array[i] === element){
            return console.log(i)
        }
    }
    return  console.log('not found 404')
}
getElementPosition(4 , [3 , 4 , 5 , 6 ,7])


// arrow function
var sayHello = () => {
    console.log('hello')
}
sayHello() ;

// var getMax = (num1 , num2) => {
//     if(num1 > num2){
//         console.log(num1)
//     }else{
//         console.log(num2)
//     }
// }
// getMax(6 , 4)

//тернарные операторы
var getMax = (n1 , n2) => console.log(n1 > n2 ? n1 : n2)
getMax(67 , 76)