function parseCount(strForParsing) {
    const numberAfterParsing = Number.parseInt(strForParsing);
    if ( isNaN(numberAfterParsing) ) {
        throw new Error("Произошла ошибка: Невалидное значение")
    } else return numberAfterParsing;
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (err) {
        console.log('err.name = ' + err.name);
        console.log('err.message = '  + err.message);
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    controlTriangl() {
       if ( 
           (this.c > (this.a + this.b)) ||
           (this.a > (this.c + this.b)) ||
           (this.b > (this.a + this.c)) ) {
           throw new Error(`Треугольник со сторонами a = ${this.a}, b = ${this.b}, c = ${this.c}  не существует`);
        } else return true;
    }

    getPerimeter() {
        try {
            if (this.controlTriangl()) {
                return parseFloat(this.a + this.b + this.c);
            }
        } catch (err) {
            return err;
        }
    }

    getArea() {
        try {
            if (this.controlTriangl()) {
                const pp = 0.5 * this.getPerimeter();
                const area = (Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c))).toFixed(3);
                return parseFloat(area);
            }
        } catch (err) {
            return err;
        }
    }
}

function getTriangle(a,b,c) {
    return new Triangle(a, b, c);
}