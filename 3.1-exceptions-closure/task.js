function parseCount(strForParsing) {
    const numberAfterParsing = Number.parseInt(strForParsing);
    if ( isNaN(numberAfterParsing) ) {
        const afterParsingError = new Error("Произошла ошибка: Невалидное значение");
        throw afterParsingError;
    }
    return numberAfterParsing;
}
function validateCount(count) {
    try {
        const resultParsing = parseCount(count);
        return resultParsing;
    } catch (err) {
        console.log('err.name = ' + err.name);
        console.log('err.message = '  + err.message);
        return 'Невалидное значение';
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.trueOrFalse;
    }

    controlTriangl() {
       if ( 
           (this.c > (this.a + this.b)) ||
           (this.a > (this.c + this.b)) ||
           (this.b > (this.a + this.c)) ) {
           throw new Error(`Треугольник со сторонами a = ${this.a}, b = ${this.b}, c = ${this.c}  не существует`);
        } else return this.trueOrFalse = true;
    }

    getPerimeter() {
        //console.log("внутри функции getPerimeter this.controlTriangl() = " + this.controlTriangl());
        if (this.trueOrFalse) {
            const perimetr = this.a + this.b + this.c;
            return parseFloat(perimetr);
        } else return console.log('getPerimeter: Ошибка! Треугольник не существует');
    }

    getArea() {
        if (this.trueOrFalse) {
        const pp = 0.5 * this.getPerimeter();
        const area = (Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c))).toFixed(3);
        return parseFloat(area);
    } else return console.log( 'getArea: Ошибка! Треугольник не существует');
    }
}

function getTriangle(a,b,c) {
    const trianglTest = new Triangle(a, b, c);
    try {
        console.log(' trianglTest.controlTriangl() = ' + trianglTest.controlTriangl());
        console.log(' trianglTest.getArea() = ' + trianglTest.getArea());
        console.log(' trianglTest.getPerimeter() = ' + trianglTest.getPerimeter());
        console.log('Стороны треугольника: ' + `a = ${trianglTest.a}, b = ${trianglTest.b}, c = ${trianglTest.c}`);
        console.log('ОШИБКА НЕ ПРОИЗОШЛА !');
        return trianglTest;
    } catch (err) {
       /* console.log(' trianglTest.controlTriangl() = ' + trianglTest.controlTriangl());
        console.log(' trianglTest.getArea() = ' + trianglTest.getArea());
        console.log(' trianglTest.getPerimeter() = ' + trianglTest.getPerimeter());
        */console.log('Стороны треугольника: ' + `a = ${trianglTest.a}, b = ${trianglTest.b}, c = ${trianglTest.c}`);
         
        console.log('ОШИБКА ПРОИЗОШЛА !');
        console.log('err.name = ' + err.name);
        console.log('err.message = '  + err.message);
        return trianglTest; //console.log('Ошибка! Треугольник не существует');
    }
}