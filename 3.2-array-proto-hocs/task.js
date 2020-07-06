function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
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
console.log("sum(1,2,3,4) = " + sum(1,2,3,4));

function compareArrays( arr1, arr2 ) {
    if (arr1.length !== arr2.length) {
        console.log(`разные длины массивов ${arr1.length} , ${arr2.length} `);
        return false; 
    } else {
        return arr1.every((currentValue, index) => arr2[index] === currentValue);
    }
}
// проверим)))
console.log('первый тест  - compareArrays([6,2,3,4,5],[1,2,3,4,5]');
console.log('compareArrays = ' + compareArrays([1,2,3,4,6],[1,2,3,4,5]));
console.log('второй тест  - compareArrays([1,2,3,4,5],[1,2,3,4,5]');
console.log('compareArrays = ' + compareArrays([1,2,3,4,5],[1,2,3,4,5]));
console.log('третий тест - compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])');
console.log('compareArrays = ' + compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log('____________________________________________________________')
//
function memorize(fn, limit) {
    console.log('limit = ' + limit);
    let memory = [];
    return function(...args) {
        memory.push({args: args, result: fn(...args)});
        console.log(memory);
        //console.log({args: args, result: fn(...args)});
        console.log('memory.length до = ' + memory.length);
        if (memory.length > limit) {
            memory.shift();
            console.log({args: args, result: fn(...args)});
            console.log(memory);

        }
        console.log('memory.length после = ' + memory.length);
        return fn(...args);
    }
}
const mSum = memorize(sum,3); // 5 результатов может хранится в памяти
//проверка
console.log('mSum(3, 4) = ' + mSum(3, 4)); // 7
console.log('mSum(3, 4, 4) = ' + mSum(3, 4, 4)); // 11
console.log('mSum(3, 4) = ' + mSum(3, 4)); // 7
console.log('const mSum = memorize(sum,3); mSum(3,4,3,4,3,1,2,3,4) = ' + mSum(3,4,3,4,3,1,2,3,4));
/*console.log('const mSum = memorize(sum,5); mSum(4,3,4,3,1,2,4) = ' + mSum(4,3,4,3,1,2,4));
console.log('const mSum = memorize(sum,5); mSum(4,3,4,2,4) = ' + mSum(4,3,4,2,4));
console.log('const mSum = memorize(sum,5); mSum(4,3,4,3) = ' + mSum(4,3,4,3));
console.log('const mSum = memorize(sum,5); mSum(4,2,4) = ' + mSum(4,2,4));
console.log('const mSum = memorize(sum,5); mSum(4,2) = ' + mSum(4,2));
console.log('const mSum = memorize(sum,5); mSum(3,4,2) = ' + mSum(3,4,2));
console.log('const mSum = memorize(sum,5); mSum(4,2,4) = ' + mSum(4,2,4));
console.log('const mSum = memorize(sum,5); mSum(4,3,2,4) = ' + mSum(4,3,2,4));
console.log('const mSum = memorize(sum,5); mSum(4,2,4) = ' + mSum(4,2,4));
console.log('const mSum = memorize(sum,5); mSum(4,3) = ' + mSum(4,3));
console.log('const mSum = memorize(sum,5); mSum(4) = ' + mSum(4));
*/
