
//1
let marker = {
    color: "pink",

    sayCol() {

    alert(this.color);
    }
};
class amountInk {
    amountInk = 0.5 ; //кол-во чернил
}

class Marker {
    static text = "Programming";
  }
  


marker.sayCol();
let amountInk = new amountInk(0.5);
alert( Marker.text ); 

//2
class Circle {

    constructor(radius) {
      
      this.radius = radius;
    }
    get radius() {
        return this._radius;
    }
      set radius(value) {
        this._radius = value;
    }
    get diametr() {
        return this._diametr;
    }

    area_of_a_circle(){
        return Math.PI * this.radius * this.radius;
    }
    length_of_a_circle(){
        return Math.PI * this.radius * 2;
    }
}