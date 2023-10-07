// console.log("Hello World") - строчный comm
/* - блочный comment */


// var - переменная
var username= "Artur"
console.log(username)
//camelCase
var nameAndSurname = "Artur Tsoi"
console.log(nameAndSurname)

//типы данных
// 1)string - строчка
var text = "frontend"
console.log('тип данных' ,  typeof text) //TODO typeof ((выводит тип данных переменной))

//методы
console.log(text.length)
console.log(text.toUpperCase()) //TODO () - включает функцию метода
console.log(text.toLowerCase())
console.log(text.repeat(8))
console.log(typeof Number(text))


//2) number
var number = 80
// console.log(typeof number)
console.log(typeof number.toString())
console.log("Средний возраст группы 31-03 >" , (17 + 17 + 19 + 15 + 17 + 17 + 17 + 17 + 19 + 18 + 19 + 18 + 29 + 21 + 17) / 15 , "лет")
console.log(11%2)
//+ , - , / , * , **

// 3) boolean = true/false
var num1 = 89
var num2 = '56'
console.log(num1 == num2)
// > , < , >= , <= , == , === , != , !==
// TODO При равенстве всегда применять строго равенство { === } , сравнивает типы данных
// TODO обычное равенство без сравнения { == }
console.log(!true)
console.log(!false)



// операторы
// условные операторы
var login =  "citrus"
var password = 123
var userLogin = prompt("Введите ваш логин:")
var userPassword= Number(prompt("Введите ваш пароль:"))
if(userLogin === login && userPassword === password){
    alert("Авторизация прошла успешно")
}else{
    console.error("Авторизация не прошла")
}
// логические операторы && --> чтоб все было верным и однотипным , || --> главное что-то из одного было верн
