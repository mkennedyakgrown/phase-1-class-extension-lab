// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        let per = 0;
        this.sides.forEach(side => per += side);
        return per;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] - this.sides[1] < this.sides[2] && this.sides.indexOf(0) < 0){
                return true;
            } else { 
                return false;
            };
        } else {
            return false;
        }
    };
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            return this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3];
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[0] ** 2;
    }
}