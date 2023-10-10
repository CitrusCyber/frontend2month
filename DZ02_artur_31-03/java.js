var starbucks = {
    coffee: {
        latte: {
            compound_1: 'milk' ,
            compound_2: 'water' ,
            compound_3: 'coffee'
        } ,
        cacao:{
            compound_1: 'cacao' ,
            compound_2: 'water' ,
            compound_3: 'coffee'
        } ,
        milk__chocolate:{
            compound_1: 'chocolate' ,
            compound_2: 'water' ,
            compound_3: 'nothing'
        } ,
        americano:{
            compound_1: 'coffee' ,
            compound_2: 'boiling__water'
        } ,
        espresso:{
            compound_1: 'coffee' ,
            compound_2: 'cream' ,
            compound_3: 'special__water'
        } ,
    } ,
    tea: {
        black__tea:{
            compound_1: 'vitamins' ,
            compound_2: "coffein" ,
            compound_3: 'oil'
        },
        green__tea:{
            compound_1: 'vitamins',
            compound_2: 'healthy__components',
            compound_3: 'another__components'
        }
    }
}
console.log(starbucks)



var day = Number(prompt('Введите день недели:'))
switch (day){
    case(1):
        console.log('Понедельник')
        break
    case(2):
        console.log('Вторник')
        break
    case(3):
        console.log('Среда')
        break
    case(4):
        console.log('Четверг')
        break
    case(5):
        console.log('Пятница')
        break
    case(6):
        console.log('Суббота')
        break
    case(7):
        console.log('Воскресенье')
        break
    default:
        console.log('Введен несуществующий день недели!!!!')
}