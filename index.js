class Car {
  constructor(brand) {
    this.brand = brand;
    this.arr = [];
    this.brakes = true;
    this.paint = "";
    this.tires = 3;
    this.gas = true;
    this.engine = "gas";
  }
  addInfo(type, name, tires = 4) {
    const obj = {
      name,
      type,
      tires,
    };
    this.arr.push(obj);
  }
  changeNeedsGas() {
    this.gas = false;
  }
  doesNeedGas() {
    return this.gas;
  }
  changePaintColor(paint = "Black") {
    this.paint = paint;
  }
  getPaintColor() {
    return this.paint;
  }
  evenWheels() {
    return this.tires % 2 === 0;
  }
  print() {
    this.arr.forEach((element) => {
      console.log(
        `The Cars name is ${element.name} and type is ${element.type} and it has have ${element.tires} tires`
      );
    });
    // for(let i = 0; i < this.arr.length; i++){
    //     console.log(this.arr[i].name)
    // }
  }
  getAllNamesThatStartWith(letter, letterTwo) {
    // return this.arr.filter(element => {
    //     if(element.name[0] === char){
    //         return element
    //     }
    // })

    return this.arr.filter(
      (element) => element.name[0].toLowerCase() === letter.letterTwo()
    );
  }
  getAllTypes(type) {
    return this.arr.filter((element) => element.type === type);
  }
  doesItSell(name) {
    // return this.arr.some((element) => {
    //   if (element.name.toLowerCase() === name.toLowerCase()) {
    //     return true
    //   }
    // });
    return this.arr.some(
      (element) => element.name.toUpperCase() === name.toUpperCase()
    );
  }
  addTire() {
    return this.arr.map((element) => {
      if (element.type === "suv") {
        element.tires *= 2;
      }
      return element;
    });
  }
}
const tesla = new Car("Tesla");
// console.log(tesla);
tesla.addInfo("sedan", "ModelS");
tesla.addInfo("suv", "ModelX");
tesla.addInfo("sedan", "Corolla", 3);
tesla.addInfo("suv", "Prius");
tesla.addInfo("sedan", "Miata");
tesla.addInfo("suv", "Focus");
tesla.addInfo("suv", "Camry");

// tesla.print();
// console.log(tesla.printAllCars());
// console.log(tesla.getAllNamesThatStartWith("m"));
// console.log(tesla.getAllTypes("suv"));
console.log(tesla.doesItSell("maxima"));
console.log(tesla.doesItSell("Focus"));
// console.log(tesla.addTire());

// // console.log(tesla);
// tesla.changeNeedsGas();
// // console.log(tesla.doesNeedGas());
// tesla.changePaintColor()
// console.log(tesla.evenWheels())
// const mazda = new Car("Mazda")
// console.log(mazda)
// mazda.addInfo("SUV", "CX9");
// mazda.addInfo("SUV", "CX5");
// console.log(mazda);

// const toyota = new Car("Toyota");
// console.log(toyota);
// toyota.addInfo("Sedan", "camry");
// toyota.addInfo("SUV", "rav4");
// console.log(toyota);
