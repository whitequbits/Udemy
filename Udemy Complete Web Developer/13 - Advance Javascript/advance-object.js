class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  say_hello() {
    console.log(`Hello ${this.name} your type is ${this.type}`);
  }
}

var player1 = new Player("Rudi", "ordinary player");
console.log(player1.say_hello());

class Wizard extends Player {
  constructor(name, type) {
    // to make the base class Player
    super(name, type);
  }

  say_kaching() {
    console.log(`Hello ${this.name} you are my kaching and ${this.type}`);
  }
}

var wizard1 = new Wizard("Rudi", "Wizard");
console.log(wizard1.say_kaching());
console.log(wizard1.say_hello());
