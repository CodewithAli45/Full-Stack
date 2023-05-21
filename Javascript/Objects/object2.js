let r1 = 10;
const circle = {
    // r1 : 10,
    diameter : function(){
        return 2 * this.r1;
    },
    bigCircle : {
        r2 : 20,
        perimeter : () => {
            return 2 * Math.PI * r1;
        }
    },
    area() {
        return this.r1 * this.r1 * Math.PI;
    }
}

const dia = circle.diameter();
console.log("Dia is ",dia);
const perim = circle.bigCircle.perimeter();
console.log("Perimeter is ", perim);
const area = circle.area();
console.log("Area is ", area);