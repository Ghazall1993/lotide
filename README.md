# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ghazalf/lotide`

**Require it:**

`const _ = require('@ghazalf/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head(..)`: A function that returns the first element from the array.
* `function tail(..)`: A function that returns every element except the head (first element) of the array.
* `function middle(..)`: A function that returns an array with only the middle element(s) of the provided array. 
* `function without(..)`: A function that returns a subset of a given array, removing unwanted elements.
* `function countOnly(..)`: A function that will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `function countLetters(..)`: A function that takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `function letterPositions(..)`: A function that returns all the indices (zero-based positions) in the string where each character is found.
* `function findKeyByValue(..)`: A function that takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `function eqObjects(..)`: A function that takes in two objects and returns true or false, based on a perfect match.
* `function assertObjectsEqual(..)`: A function that takes in two objects and console.log an appropriate message to the console.
* `function map(..)`: A function that takes in two arguments and returns a new array based on the results of the callback function.
* `function takeUntil(..)`: A function that takes two parameters and return a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value.
* `function findKey(..)`: A function that takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.