interface Machine {
  name: string;

  start(): void;
}

class Bokla implements Machine {
  name: string = "Bolka";
  start(): void {
    console.log("Bokla is starting");
  }
}
class Tonobil implements Machine {
  name: string = "Tonobil";
  start(): void {
    console.log("Tonobil is starting");
  }
}

abstract class MachineCreator {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract create(): Machine;

  operation(): Machine {
    const machine = this.create();
    console.log(`${this.name} creator making ${machine.name} `);
    return machine;
  }
}
class BoklaCreator extends MachineCreator {
  constructor(name: string) {
    super(name);
  }
  create(): Machine {
    return new Bokla();
  }
}
class TonobilCreator extends MachineCreator {
  constructor(name: string) {
    super(name);
  }
  create(): Machine {
    return new Tonobil();
  }
}

const tc = new TonobilCreator("tonobil");
const tonobil = tc.operation();
tonobil.start();
const bc = new BoklaCreator("bokla");
const bokla = bc.operation();
bokla.start();
