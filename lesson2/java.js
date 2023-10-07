// 4)undefined
let name;
console.log(name + 5)
// null
let nothing = null
console.log(nothing)
// NaN
var number = "text" + 89
console.log(number) // если ставить -, / , = то будет NaN
//switch..case
// var color = prompt("Введите цвет (красный , желтый , зеленый").toLowerCase()
// switch (color){
//     case "красный":
//         console.log('Стоп , жди!')
//         break
//     case  "желтый":
//         console.log("Внимение,готовься")
//         break
//     case "зеленый":
//         console.log("Вперед!")
//         break
//     default:
//         console.log("Введите корректный цвет!")
// }
// object
var human = {
    name: 'Artur',
    surname: 'Tsoi',
    city:  undefined,
    age: null ,
    adress: {
        street: 'Ibraimova',
        number: 103
    },
    isMarried: false,
    age: null
}

console.log(human)
console.log(human.city)
console.log(human.adress.number)
//методы
human.course = 'GEEKS' //добавление
delete human.age // delete
human['isMarried'] = true // изменение
console.log(human)

console.log(Object.keys(human)) // все ключи
console.log(Object.values(human)) // все значения
console.log(Object.entries(human)) // все значения и ключи
console.log(human.hasOwnProperty('name')) // проверяет есть ли такой ключ

//array
var array = ['qwerty' , 567 , true , null , undefined , [] , {}]
console.log(typeof array)
var numbers = [23 , 45 , 50 , 55 , 30 , 'qwerty' ,  44 , 22]
console.log(typeof numbers)
console.log(number[3]) // выбор index
console.log(number[5][4])
console.log(number.length - 1 ) // найти index от length


var example = [[[[[[[[[[[[[[2]]]]]]]]]]]]]]
//переопределение переменной
var num = 10
num = 'text'
console.log(num)