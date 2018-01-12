function Cat(name, owner) { //construction function
  this.name = name;
  this.owner = owner;
}

// Cat.prototype.cuteStatement method that returns "[owner] loves [name]"
Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`
}

cat = new Cat("kitt", "janet")
console.log(cat.cuteStatement())

Cat.prototype.cuteStatement = function() {
  return `Everybody loves ${this.name}`
}

console.log(cat.cuteStatement())

Cat.prototype.meow = function() {
  return 'meow';
}

console.log(cat.meow())

Cat.meow = function() {
  return 'purr'
}

console.log(cat.meow())

// add instance variables by building out Cat.prototype