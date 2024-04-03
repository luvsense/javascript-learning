# [Javascript and classes](https://youtu.be/pN-Qmv4zBcI?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)

## OOP

JavaScript is a **prototype-based** object-oriented language, which means it uses prototypes for inheritance instead of classes like in traditional class-based object-oriented programming languages. However, with the introduction of ES6 (ECMAScript 2015), JavaScript gained support for class syntax, which provides a more familiar and intuitive way of creating objects and implementing inheritance.

## 1. Objects

Objects in JavaScript are like real-life objects, with properties and methods. They can be created in several ways, such as object literals, constructor functions, or classes (ES6).

- collection of properties and methods
- toLowerCase, toUpperCase

```
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

## 2. Constructors and Prototype

Before ES6, constructors were used to create objects, and prototypes were used for inheritance. The prototype property of a constructor function holds the shared properties and methods for all objects created from that constructor.

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John', 30);
john.greet(); // Hello, my name is John
```

## 3. Classes (ES6)

ES6 introduced a more familiar class syntax for creating objects and implementing inheritance. However, under the hood, JavaScript still uses prototypes.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person('John', 30);
john.greet(); // Hello, my name is John
```

## why use OOP

## parts of OOP

object literal

- constructor function
- prototypes
- Classes
- Instances (new, this)

## 4 Pillars

Abstraction - Fetch
Encapsulation
Inheritance
Polymorphism

```

```
