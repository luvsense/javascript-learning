# [Javascript and classes](https://youtu.be/pN-Qmv4zBcI?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)

## OOP

JavaScript is a **prototype-based** object-oriented language, which means it uses prototypes for inheritance instead of classes like in traditional class-based object-oriented programming languages. However, with the introduction of ES6 (ECMAScript 2015), JavaScript gained support for class syntax, which provides a more familiar and intuitive way of creating objects and implementing inheritance.

## Objects

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
