//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
    //this - здесь this типа))) аргумент функции, причем это строка
     let _this = this.split(' ').join(''); // убрали пробелы
    lengthOfString = _this.length;
    //перевод в верхний регистр
    let strThis = _this.toUpperCase()
    for (let i = 0; i < lengthOfString / 2; ++i) {
        if (strThis[i] != strThis[lengthOfString - i - 1]) {
            return false;
        }
    }
    return true ;  
}
   
function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    sum = 0;
    for (let i = 0; i < marks.length; ++i) {
        sum = sum + marks[i];
    }
    let average = sum/marks.length;
    roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}