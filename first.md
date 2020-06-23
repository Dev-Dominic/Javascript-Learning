# Learning Core Javascript

## Functional Programming

- No side effects
- Easier for testing

## Core Data Structures (Objects and Arrays)

### Objects

```javascript

    var person = {};
    person.name = "Mrs. White";

    var person = {
        name : "Mrs. White"
    };

```

**Note:** anything that uses dot notation in javascript is an object.

Primitive values are stored with a reference by value.

### Arrays

```javascript

    var person = [];
    person.name = "Mrs. White";

    var who = person.name;
    who; // ??

    // Arrays are objects
    arr = [0, 1, 2, 3, 4]
    typedef arr; // object

```

**Notes:** Arrays are considered to be objects in javascript, and it can
therefore have properties.

Array elements are stored as strings in object notation.

**Example**:

```javascript

person.name = "Mr. White";
person[0] = 'something';

Object Notation:
    "name" => "Mr. White",
    "0" => "something"

```

Elements of an array that cannot be represent as strings (person.0) use brackets that denote
the string version in an object. Dot notations coerces a property in a string.

**Note:** Array.isArray() used to determine whether an object is an array.

The length of an array only changes when a numerical indices is added to the
array.

### Rules

Dots:
- [x] strings
- [ ] numbers
- [ ] quotations
- [ ] weird characters
- [ ] expressions

Brackets:
- [x] strings
- [x] numbers
- [x] quotations
- [x] weird characters
- [x] expressions

### ES6 Destructuring (Objects and Arrays)

Simplified way of defining variables by taking them from the content of an
array or object. Destructuring has a target and source

```javascript

// Example

// Variable Declaration
// Target          :           Source
const [first, second] = [true, false];
let [first, second] = [true, false]
var [first, second] = [true, false]

// Assignment:
[first, second] = [true, false];

```

**Note:** Objects don't have an order but the source and target object names
have to match. Arrays destruct into a target based on position.

**Examples**

```javascript

// Value Omission
const [a, ,b] = [1, 2, 3] // a = 1, b = 3

// Spread operator
const [a, ...b] = [1, 2, 3] // a = 1, b = [2, 3]

// Swapping Variables
let a = 1, b = 2
[b, a] = [a, b] // a = 2, b = 1

```

## List Transforms(Nested Data Structures)

```javascript
// Nested Data Structure
const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange",
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
};

// Looping and logging each element of game.suspect
function foo(){
    for(let i = 0; i < game.suspects.length; i++){
        console.log(game.suspects[i])
    }
}

// Example 2 used with objects
function foo(){
    for(let key in obj){
        console.log(key);
    }
}

// Destructuring color strings
let suspects = [
    {
        name: "Rusty",
        color: "orange",
    },
    {
        name: "Miss Scarlet",
        color: "red"
    }
]

const [firstColor, secondColor] = [suspects[0].color, suspects[1].color]; // Method 1
const [firstColor, secondColor] = suspects.map(s => return suspect.color); // Method 2
const [{color: firstColor}, {color: secondColor}] = suspects // Method 3

```

### Higher Order Functions(HOP)

#### forEach

```javascript

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']

// Creates suspect objects
function CreateSuspectObject(name){
    return{
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log('My name is ', name)
        }
    };
}

// Instantiating each suspect

// Example 1
let suspectsList = [];

for(let i = 0, i < suspects.length; i++){
    suspectsList.push(CreateSuspectObject(suspects[i]));
}

```

**Looping with _.each**

- Does not return anything

- Iterates over a list of elements, passing values to a function

- Each invocation of iterator, the function is called with three arguments:
    - (element, index, list) **Arrays**
    - (value, key, list) **Objects**

```javascript

// Takes list as an argument
_.each(suspects, function(name){
    suspectsList.push(CreateSuspectObject(name));
});

// Uses dot notation
suspects.forEach(function(name){
    suspectsList.push(CreateSuspectObject(name));
});

```

**Note:** `_` is an object in javascript standard library.

```javascript

/*
    Complete the rest of this function so that it works as described in the
    previous example(should work for Objects and Arrays):

    _.each = function(list, callback){
        ...TODO
    };
*/

// Example 2
let suspectsList = [];
_each. = function(list, callback){
    if (Array.isArray(list)){
        for(let i = 0; i < list.length; i++){
            callback(list[i], i, list);
        }
    }else{
        for(let key in list){
            callback(list[key], key, list);
        }
    }
};

```

#### map

- Produces a new array of values by mapping each value in list through a
transformation function(iterator).

- Always returns something.

```javascript

// _.map() usage
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item){
    return `broken ${item}`;
};

const broken_weapons = _.map(weapons, makeBroken);

// Creating Suspects list from Example 1
const suspectsList = _.map(suspects, function(name){
    return CreateSuspectObject(name);
});

```

**Implementing _.map**

```javascript

// Using for loop
const _.map = function(list, callback){
    let storage = [];
    for(let i = 0; i < list.length; i++){
        storage.push(callback(list[i], i, list));
    }

    return storage;
}

// Using _.each
const _.map = function(list, callback){
    let storage = [];
    _.each(list, function(v, i, list){
        storage.push(callback(v, i, list));
    });
};

```

#### filter

```javascript

/*

    We are going to want to filter by those who wer epresent, we need to write
    our filter function:

    _.filter(arr, callback){

    }

*/

const _.filter = function(arr, callback){
    let storage = [];
    _.each(arr, function(v, i, arr){
        if(callback(v, i, arr) === true){
            storage.push(v);
        }
    });

    return storage;
};

```

## Function Anatomy

- Names
- Function declaration
- Function body
- Invocation / Call-time
- Arguments/Parameters
- Return / Side-effects

### ES6: Arrow Functions

Arrow functions does not have it's own referenece to `this`

### Projecting exercise

Converting a list of suspect objects into a list or suspect name strings
(present: `true`)

```javascript

// Example suspect object
{
    name: 'Mrs Scarlett',
    present: true,
    rooms: [{}, {}, {}, ....]
}

// Projecting Exercise
const present_suspects = _.filter(suspects, s => return s.present) // filters suspects
const suspect_name = _.map(present_suspects, s => return s.name) // filtered suspects' names

```

### Arguments Keyword / Spread Operator

**Spread Operator**<br>
Gathers extra arguments passed to a function and places in the last argument.

```javascript

// Example
const createTuple = (a, b, c, ...d) => {
    return [[a, c], [b, d]];
}

// without spread operator
createTuple('It', 'be', 'could', 'anyone', 'no one');
// => [['It', 'could'], ['be', 'anyone']]

// With spread operator
createTumple('It', 'be', 'could', 'anyone', 'no one');
// => [['It', 'could'], ['be', ['anyone', 'no one']]]

```

**Argument keyword**<br>
Allows for access to list of arguments passed to a function in the event that
the number of arguments is not known.

```javascript

createTuple('It', 'be', 'could', 'anyone', 'no one');

// Example
const createTuple = (a, b, c, ...d) => {
    console.log(arguments);
    // ['It', 'be', 'could', 'anyone', 'no one']
    return [[a, c], [b, d]];
}

```

**Note:**
- The Arguments keyword does not create an actually array so it needs to be converted into a proper array.
- Does not tell what parameter maps to what argument.

### Array-like object

Converting iterables to array

```javascript

// Using Arguments keyword
Array.prototype.slice.call(arguments) // Example 1
Array.from(arguments) // Example 2 (gives access to array functions)
_.from(arguments) // Example 3 (returns array)

```

#### from

```javascript

const _.from = arr => {
    return Array.prototype.slice.call(arr);
}; // {0: true, length: 1, push: X}

```

**Note:** Functions are also objects.

## Scopes

- Scopes define where a variable is accessible.
- Within a function it is only possible to see variables up the scope.
- Every time a function is called it creates a new function scope.
- **var** denotes scoping by the `function` keyword
- **let** denotes scoping by blocks, i.e `{}`

## HOP Functions and Callbacks

- Functions can act like data as they can be passed around into other functions
or be stored using variable instantiation.

- Callbacks are functions that are passed to other functions.

**Passing Arguments to functions in ES6**

```javascript

// Example 1
const ifElse = (condition, isTrue, isFalse, p1, p2) => {
    return condition ? isTrue(p1, p2) : isFalse(p1, p2);
};

isElse(true, fn, fn_2, 'hello', 'world'); // Restricted to two parameters

// Example 2 (Spread operator)
const ifElse = (condition, isTrue, isFalse, ...args) => {
    return condition ? isTrue(...args) : isFalse(...args);
};

isElse(true, isTrue, isFalse, 'hello', 'world', 'I am', 'bob');

```

### reduce

```javascript

const _.reduce = (list, callback, initial){
    let memo = initial;
    for(let i = 0; i < list.length; i++){

        // Initializes memo/accumulated value to the first value of the list
        // In the event that no initial value was passed.
        if(i === 0 && memo === undefined){
            memo = list[0]
        }else{
            memo = callback(list[i], memo);
        }
    }
    return memo;
};

```

**Additional Functional Utilities**

- Composing
- Currying

## Advanced Scope (closures)

Closures involves a returned function keeping track of its parent scope's associated
data/variables.

**Closure Example**

```javascript

const newClue = (name) => {
    const length = name.length;

    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    };
};

```

**Recipes for a Closure**

1. Create parent function.
2. Define variables in parent local scope.
3. Define function inside the parent function. (Child function)
4. Return child function and it retains parent local variables.
