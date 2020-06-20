function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    "use strict"
    let loanBody = amount - contribution; // тело кредита
    //console.log('сегодня: ' + new Date());
    //console.log('дата окончания кредита: ' + date);
    
    let numberOfMonths = date - new Date();
    console.log('месяцев' + Math.round(numberOfMonths / 2592000000)); 
    
    let n = Math.round(numberOfMonths / 2592000000); // срок кредита в месяцах
    let p = percent * 0.01 / 12; // ежемесячный процент
    let monthlyFee = loanBody * ( p + p / ((( 1 + p ) ** n ) - 1 )); //ежемесячная оплата
    console.log('ежемесячный процент = ' + p.toFixed(5) + '   ежемесячная оплата = ' + monthlyFee.toFixed(2));
   
    let totalAmount = n * monthlyFee; //всего клиент заплатит банку 
    console.log('клиент заплатит банку = ' + +totalAmount.toFixed(2));
    console.log('тело кредита = ' + loanBody);

    return +totalAmount.toFixed(2); //totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (!name || name == 'null' || name == 'undefined' || name == ' ' || name == 'Null' || name == 'Undefined') {
        name = 'Аноним'
    } 
    console.log(name);
    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}