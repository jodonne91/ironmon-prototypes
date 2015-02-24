## Ironmon Constructors

### Description

This is the second day of a multiple-day assignment that we're going to use to help us learn about object-oriented JavaScript. Scaffolding complex code in this manner allows us to build a better understanding of a professional-style iterative developement process.

### Objectives

After completing this assignment, you should feel confident using:

* Object-oriented JavaScript, including
    * Constructors
    * Properties
    * Prototype methods
    * Changing context with `.call`
    * Unit tests

### Details

We're going to modify the code that we wrote yesterday, which represents a battle between two video game characters.

Today we're going to modify some more classes, which are all moves that can be performed by our characters. This expands the range of options available.

Feel free to copy the code you wrote yesterday into the existing functions.

### Normal Mode -- Part 1

Make all of the normal mode tests pass. 

The `Ironmon` constructor needs to create an additional property on each instance.

* `charged`: Should default to false.

You'll be removing the `Ironmon.protoype.attack` method, and creating a new method called `Ironmon.prototype.action`. This method accepts two parameters:

* Another instance of an Ironmon, as an opponent, and
* An instance of the Action class we'll define below.

`Ironmon.prototype.action` should execute the action within the context of that Ironmon instance, passing into it the opponent Ironmon as a parameter. (Use `.call`.)

There are a number of `Action`-like classes that we're going to fill out. Each one has an empty constructor and a single prototype method, `ClassName.prototype.use`. That method takes in an instance of an Ironmon as an opponent, and should be executed *in the context* of another Ironmon.

Fill in the `.use` function for the `Simple`, `Charge`, and `Leech` classes.

The `Game` class is unchanged today.

### Normal Mode -- Part 2

Come up with some more actions! Follow the existing pattern (empty constructor, functionality in `.use`) and be creative. Make sure you've got tests.

### Hard Mode

Normal mode, and also implement the following feature:

Modify the Ironmon constructor to accept a second parameter, and make it accessible as a property called `type` on the instance.

Also modify the code in the `Ironmon.prototype.action` method. If...

* the `type` of this Ironmon is `"water"` and the opponent's `type` is `"fire"`, or
* the `type` of this Ironmon is `"fire"` and the opponent's `type` is `"grass"`, or
* the `type` of this Ironmon is `"grass"` and the opponent's `type` is `"water"`

then **execute the action twice**.
