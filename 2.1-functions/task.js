function getSolutions( a, b, c ) {
    let D = b * b - 4 * a * c;
    
    if ( D < 0 ) {
        //console.log(`{ D: ${D} , roots: [] }`);
        return { D: D , roots: [] };
    } else if ( D === 0 ) {
        let x1 = - b / ( 2 * a );
        //console.log(`{ D: ${D}, roots: [${x1}]}`);
        return { D: D, roots: [x1]};
    } else {
        let x1 = ( -b + Math.sqrt(D) ) / ( 2 * a );
        let x2 = ( -b - Math.sqrt(D) ) / ( 2 * a );
        //console.log(`{ D: ${D}, roots: [${x1}, ${x2}] }`);
        return { D: D, roots: [x1,x2]};
    }  
}
function showSolutionsMessage( a, b, c ) {
    let result =  getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else {
        result.D === 0 ? 
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`):
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}
showSolutionsMessage( 1, 2, 3 );
showSolutionsMessage( 7, 20, -3 );
showSolutionsMessage( 2, 4, 2 );

function getAverageScore(data) { 
    obj_average = {}
    for (let prop in data){
        let value = data[prop];
        if (value.length < 1) {
            obj_average[prop] = 0;
        } else obj_average[prop]= getAverageMark(value);
        console.log( `Предмет: ${prop}, оценки: ${value}` );
    }
    let s = 0;
    let i = 0;
    for ( let prop in obj_average) {
        s += obj_average[prop];
        i += 1;
    }
    obj_average['average'] = s/i;
    console.log(obj_average);
}
function getAverageMark(marks) {
    let s = 0;
    for (let i = 0; i < marks.length; i++) {
        s += marks[i];
    }
    return s / marks.length;
}

getAverageScore({
    algebra: [2,4,5,2,3,4],
    geometry:[2,4,5],
    russian:[3,3,4,5],
    physics:[5,5],
    music:[2,2,6],
    english:[4,4,3],
    chemistry:[2],
    poetry:[5,3,4],
    french:[4,4],
});

