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
        x[0] = ( -b  ) / ( 2 * a );
        x[1] = ( -b  ) / ( 2 * a );
        return x;
    }
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    //console.log(marks.length);
    if (marks.length === 0) {
        console.log('Оценок нет и массив пустой. Выводим: ' + marks.length);
        return averageMark;
    }
    let numberOfRatings = marks.length > 5 ? 5 : marks.length;
    console.log('Количество оценок всего = ' + marks.length, marks);
    let  textNumberOfRatings = marks.length > 5 ? 
    'Количество оценок оказалось больше 5, используем пять первых оценок из ' : 
    'Количество оценок оказалось не больше 5, испльзуем все оценки';
    console.log(textNumberOfRatings + ' ' + marks.length);
    let result = marks.slice(0,numberOfRatings).reduce(function(sum, current) {
        return sum + current;
    }, 0);
    console.log( 'Cумма для ' + numberOfRatings + ' оценок = ' + result );
    console.log( 'Cредняя из ' + numberOfRatings + ' оценок = ' + result / numberOfRatings );
    // среднее значение для всех оценок больше пяти
    if (marks.length > 5) {
        result = marks.slice(0,marks.length).reduce(function(sum, current) {
            return sum + current;
        }, 0);
        console.log( `Cредняя оценка (с учетом всех ${marks.length} оценок) = ` + result / marks.length );
    }
    return result = result / marks.length; // это среднее с учетом всех оценок, а не только пяти первых
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log('сегодня: ' + new Date().getFullYear());
    //console.log('дата рождения перца: ' + dateOfBirthday.getFullYear());
    // возраст перца:
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    console.log(age);
    //return
    return decisionText = age > 18 ? 
    `Не желаете ли олд-фэшн, ${name}?` : 
    `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    // return result;
}