function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  //console.log('в функции расчетов sum сработала задержка расчетов: e = ' + e);

  while (new Date().getTime() <= e) {
  }
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}
//console.log("sum(1,2,3,4) = " + sum(1,2,3,4));

function compareArrays( arr1, arr2 ) {
    if (arr1.length !== arr2.length) {
       // console.log(`разные длины массивов ${arr1.length} , ${arr2.length} `);
        return false; 
    } else {
        return arr1.every((currentValue, index) => arr2[index] === currentValue);
    }
}
//function compare(a1, a2) {
//    return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
//}




// проверим)))
console.log('первый тест  - compareArrays([6,2,3,4,5],[1,2,3,4,5]');
console.log('compareArrays = ' + compareArrays([1,2,3,4,6],[1,2,3,4,5]));
console.log('второй тест  - compareArrays([1,2,3,4,5],[1,2,3,4,5]');
console.log('compareArrays = ' + compareArrays([1,2,3,4,5],[1,2,3,4,5]));
console.log('третий тест - compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])');
console.log('compareArrays = ' + compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log('____________________________________________________________')
//

function memorize(fn, limit){
    let memory = [];

    return function(...args) {
        let  ddd = [];
        ddd = memory.find( (memory) => ( compareArrays(memory.args, args) ) );
        if (ddd) {
            memory.push(ddd);
            console.log('Значение функции из памяти:');
        } else {
            memory.push({args: args, result: fn(...args)});
            console.log('Функция вызвана не из памяти:');
        }

        if (memory.length > limit) {
            memory.shift();
            console.log('memory.length > limit');
        }
        return fn(...args);
    }
    

}


const mSum = memorize(sum,5); // 5 результатов может хранится в памяти


//проверка
console.log('1 вызов -----------------------------const mSum = memorize(sum,3); mSum(1, 4) = ' + mSum(1, 4)); // 7
console.log('2 вызов -----------------------------const mSum = memorize(sum,3); mSum(2, 4) = ' + mSum(2, 4)); // 6
console.log('3 вызов -----------------------------const mSum = memorize(sum,3); mSum(7, 4) = ' + mSum(7, 4)); // 11
console.log('4 вызов -----------------------------const mSum = memorize(sum,3); mSum(4,4,3,4,3,1,2,3,4) = ' + mSum(4,4,3,4,3,1,2,3,4));
console.log('5 вызов -----------------------------const mSum = memorize(sum,3); mSum(7, 4) = ' + mSum(7, 4)); // 11
console.log('6 вызов -----------------------------const mSum = memorize(sum,3); mSum(6, 4) = ' + mSum(6, 4)); // 10
console.log('7 вызов -----------------------------const mSum = memorize(sum,3); mSum(7, 4) = ' + mSum(7, 4)); // 11
console.log('8 вызов -----------------------------const mSum = memorize(sum,3); mSum(8, 4) = ' + mSum(8, 4)); // 12

