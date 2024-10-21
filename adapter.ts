interface Machinee {
  move(): void;
}

class Car {
  dirve() {
    console.log("driving");
  }
}
class Bike {
  ride() {
    console.log("riding");
  }
}
class Plane {
  fly() {
    console.log("flying");
  }
}

class CarAdapter implements Machinee {
  private car: Car;
  constructor(car: Car) {
    this.car = car;
  }

  move(): void {
    this.car.dirve();
  }
}
class BikeAdapter implements Machinee {
  private bike: Bike;
  constructor(bike: Bike) {
    this.bike = bike;
  }

  move(): void {
    this.bike.ride();
  }
}
class PlaneAdapter implements Machinee {
  private plane: Plane;
  constructor(plane: Plane) {
    this.plane = plane;
  }

  move(): void {
    this.plane.fly();
  }
}

class MachineLauncher {
  private machine: Machinee;

  constructor(machine: Machinee) {
    this.machine = machine;
  }

  setMachine(machine: Machinee) {
    this.machine = machine;
  }

  launch() {
    console.log("launching machine");
    this.machine.move();
  }
}

const car = new Car();
const bike = new Bike();
const plane = new Plane();

const caradapter = new CarAdapter(car);
const bikeadapter = new BikeAdapter(bike);
const planeadapter = new PlaneAdapter(plane);

const machineLauncher = new MachineLauncher(caradapter);
machineLauncher.launch();
machineLauncher.setMachine(bikeadapter);
machineLauncher.launch();
machineLauncher.setMachine(planeadapter);
machineLauncher.launch();
