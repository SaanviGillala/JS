
// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

//Factory Functions - Camel Notation
function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log("draw")
        }
    }
};
const myCircle  = createCircle(1)

// Constructor Function - Pascal Notation
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
 }
return createCircle
const circle = new Circle(1);
