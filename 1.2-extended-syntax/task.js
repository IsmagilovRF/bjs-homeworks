function getResult(a,b,c){
    "use strict"
    // код для задачи №1 писать здесь
    let d, x = [];
    d = b ** 2 - 4 * a * c;
    if (d < 0) { 
        return x; 
    }
    else if (d > 0) {
        x[0] = ( -b + Math.sqrt(d) ) / ( 2 * a );
        x[1] = ( -b -  Math.sqrt(d) ) / ( 2 * a );
        return x; 
    }
    else {
        return ( -b  ) / ( 2 * a );
    }
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    const setNumberOfRatings = 5;
    if (marks.length === 0) {
        console.log('Оценок нет и массив пустой. Выводим: ' + marks.length);
        return 0;
    } 
    if (marks.length > setNumberOfRatings) {
        console.log(`Количество оценок оказалось больше ${setNumberOfRatings}, используем ${setNumberOfRatings} первых оценок из ${marks.length}:`);
        marks = marks.slice(0,setNumberOfRatings);
        console.log('Используемые оценки в массиве result = ' + marks);
    }
    else {
        console.log(`Количество оценок оказалось не больше ${setNumberOfRatings}, испльзуем все оценки (${marks.length} оценок)`);
    }
    console.log('Количество оценок всего = ' + marks.length, marks);
    let arraySum = function (array){
        let s = 0;
        for (let i = 0; i < array.length; i++) {
            s += array[i];
        }
        return s;
    }
    console.log('Сумма оценок = ' + arraySum(marks));
    console.log(`Cредняя оценка (с учетом всех ${marks.length} оценок) = ` + arraySum(marks) / marks.length );
    return arraySum(marks) / marks.length;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    console.log(age);
    return age > 18 ? 
    `Не желаете ли олд-фэшн, ${name}?` : 
    `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}