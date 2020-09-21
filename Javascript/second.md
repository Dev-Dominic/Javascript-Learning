# Javascript: The Hard Parts v2

## Outline

1. Javascript Principles
2. Functions and Callbacks
3. Closures
4. Asynchronous Javascript
5. Promises
6. Classes and Prototypes (OOP)

## Javascript Principles

**Thread of Execution**<br>

> Javascript runs code line-by-line, each line known as a the thread of execution.

**Execution Context**<br>

> Created to run the code of a function, has 2 parts:<br>
> 1. Thread of execution
> 2. Memory

**Function call-stack**

> Javascript utilizes the call stack to keep track of all the functions that are
> currently running.

## Functions and Callbacks

- Functions promote code reusability (DRY - Do not repeat yourself)

- Functions can be generalized, so that other functionality can be passed to run
custom instructions from another function(callback).

- Javascript functions are first class objects, they can be:
    1. Assigned to variables and properties of other objects
    2. Passed as arguments into functions
    3. Returned as values from functions

- Higher Order Functions either return or takes in a function.

- The function passed to a HOP function is known as the callback function.

- Anonymous and arrow functions improve immediate legibility of the code.

## Closures

- Allows for a function to return a function that keeps track of a local
function state.

- Returned child functions from parent functions also returns its parent
functions local memory. This allows for child methods to keep track of data that
was stored in the parent funciton and is utilized within the child function.

- The local memory of the parent function gets transferred with the child
function, 'creates a new local memory context for this child function'.

- Rember functions are objects in javascript, Therefore child function is able
to store properities. The local memory of the parent function stores the local
memory in a property called `[[scope]]`

- Child functions can only get information from local memory and place it in
scope only when directly referenced. This is done so that variables or other
stored information not relating to the child function does not take up space or
memory(memory leakage).

**Applications**

1. Helper functions
2. Iterators and generators
3. Module pattern (Preserves state for the life of an application without
   polluting global namescape)
4. Asynchronous Javascript (callbacks and promises rely on closure to persist
   state in an asynchronous enironment)

## Asynchronous Javascript

Javascript is traditional a sycrhonously ran language, but allows for
asynchronous features through the use of browser methods and funcitonality.

**Javascript Engine has 3 main parts**:

- Thread of Execution
- Memory/variable environment
- Call stack

**Additional components needed for Asynchronous Javascript:**

- Web Browser APIs/Node background APIs
- Promises
- Event loop, Callstack/Task queue and micro task queue

**Example:**
1. xhr/fetch => Network Reqeusts
2. document => HTML DOM(rendering)
3. setTimeout => Timer

Javascript makes use of various browser funcitonality through the use of the
browser API for javascript.

**Note:** Functions are passed to browser using browser features before the
completion function is ran. It is added to a `Callstack Queue` after the
associated timer or outside event of Javascript has finished(Eg. fetching data
from an API) before it is ran in Javascript on the global Call Stack. The queue
is only allowed to dequeue once all the global execution context has
finished running.

**Event Loop**

This is the concept in Javascript that checks whether the global call stack is
empty and when it's appropriate for Callstack queue to be emptied.

### ES5 Web Browser APIs with callback functions

**Problems**
- Response data is only available in the callback(Callback Hell)
- Odd to be passing a function into another function only for it to run much
later.

**Benefits**
- Explicit once there is understanding of what is happening on the lower levels
of the browser interaction with Javascript.

## Promises

Promises utilize two mechanisms to achieve asynchronous Javascript. In the case
of using fetch two things occur:
1. Returns a response object that is stored in Javascript memory
2. Creates new process in the browser that keeps track of the process, as
   features like `Network Request` is a browser feature. Once such a call is
   made and resolved the browser feature then updates the response object stored
   in memory. It will update it's value property specifically.

Response objects also have an array known as the `unfulfilled` that stores a
function that is ran once the web browser resolves the browser feature. This is
added to the Promise object using the `.then` method.

Javascript also utilizes a `Micro Task Queue` to keep track of Promises
asynchronously. The `Micro Task Queue` is where completed Promises are queue to
once resolved. This queue takes precedence over the `Call Stack Queue` but is
still lower priority to the Javascript global `Callstack`. Once sycrhonous
javascript code has been completed the order is:
1. Callstack Javascript Global
2. Micro Task Queue
3. Callstack Queue

**Note:** `Callstack Queue` gets functions that were directly passed to a Web
Browser API feature (E.g setTimeout), while the `Micro Task Queue` gets all the associated Web
Browser API features that have side effects that produce both a Promise Object
stored in Javascript Memory and Reference in Web Browser API feature memory (E.g
fetch).

Javascript also offers a means of error handling in the event that a Promise
that is resolved returns an error in the value property. This is achieved
through the use of the array property `onRejection`. This stores all the error
handling functions.

```javascript

// How to handle errors using catch
let futureData = fetch('https://twitter.com/will/post/1')
futureData.then(e => return 'do something').catch(e => return 'an error occurred')

/*
    How to handle errors with only '.then'
    Promise.then(resolved, rejected)
*/
let futureData = fetch('https://twitter.com/will/post/1')
futureData.then(e => return 'do something', e => return 'an error occurred')

```

## Classes and Prototypes (OOP)

```javascript

// Creates an empty object
const user3 = Object.create(null);

```

### Generate objects using a function (Solution 1)

```javascript

// Creating a user
function userCreator(name, score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    };
    return newUser;
}

// Test userCreator
const user1 = userCreator("Will", 3);
const user2 = userCreator("Sam", 4);
user.increment(); // user.score = 4

```

**Problem**<br>

Each object will have a copy of an associated method associated with the object,
which is massive amount of data waste.

### Generate objects using prototype chain (Solution 2)

Store a reference to related object methods in one place for an object of a
given type to reference when needed. This link is made using `Object.create()`

```javascript

// Creating a user
function userCreator(name, score){
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function(){this.user++;},
    login: function(){console.log('Logged in');}
};

```

**Object.create()**

This creates both a new empty object and a reference to another object which is
stored in a property called `__proto__`. Javascript checks the `__proto__`
property when it does not find a property or method on the actual object.

**Note:** All objects in Javascript has a hidden `__proto__` property that links
to the `Object.prototype` global object.

**Note:** The `this` keyword is created on each new execution context, therefore
child methods do not refer to the parent `this` value. A child can refer to it's
parent `this` value by using the `call` method.

```javascript

// Example

cosnt increment = function(){
    function add1(){this.score++;}
    add1.call(this)
};

```

**Note:** An arrow functions can be used to get passed the mess of getting
parent methods `this` keyword. The `this` keyword refers to the parent scope
this in a child method.

This solution of using protoype chain is the under hood way of how the standard
ways of handling object is done. Thus knowing this solution helps with debugging
of code, and improves understanding.

### Generating objects using new keyword (Solution 3)

The `new` keywrod is used to denote a function should create an object. Since
functions are also objects, it uses this funcitonality to store methods
associated with a given object using a property called `protoype` that stores
the object methods. `Prototype` is created on the funciton reference and is
empty initially.

```javascript

// Returns an object when called
function userCreator(name, score){
    this.name = name;
    this.score = score;
}

// Adding new associated object methods to the function that creates Users
userCreator.protoype.increment = function(){ this.score++; };
userCreator.protoype.increment = function(){ console.log('Login'); };

const user1 = new userCreator('Eva', 9);
user1.increment();

```

**Note:** Each instance of an object's `__proto__` makes reference to the
funciton definition's  `protoype` object property for all the methods that each
instance can use.

### Generating objects utilizing class and new keywords (Solution 4)

Allows for associate methods and object properties all in one place using the
`class` keyword. Nothing is changed under the hood but it is just for conveince
and readabiity.

```javascript

// Utilizing class and new keyword
class UserCreator{

    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    increment(){
        this.score++;
    }

    login(){
        console.log("Login");
    }

}

// Creating new object
const user1 = new UserCreator('Eva', 9);
user1.increment();

```
