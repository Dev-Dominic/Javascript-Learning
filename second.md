# Javascript: The Hard Parts v2

## Outline

1. Javascript Principles
2. Functions and Callbacks
3. Closures
4. Asynchronous Javascript
5. Promises

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
- Event loop, Callback/Task queue and micro task queue

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
empty and when it's appropriate for Callback queue to be emptied.

### ES5 Web Browser APIs with callback functions

**Problems**
- Response data is only available in the callback(Callback Hell)
- Odd to be passing a function into another function only for it to run much
later.

**Benefits**
- Explicit once there is understanding of what is happening on the lower levels
of the browser interaction with Javascript.

## Promises

Promiess utilize two mechanisms to achieve asynchronous Javascript. In the case
of using fetch two things occur:
1. Returns a response object that is stored in Javascript memeory
2. Creates new process in the browser that keeps track of the process, as
   features like `Network Request` is a browser feature. Once such a call is
   made and resolved the browser feature then updates the response object stored
   in memory. It will update it's value property specifically.

Resposne objects also have an array known as the `unfulfiled` that stores a
function that is ran once the web browser resovles the browser feature. This is
added to the Promise object using the `.then` method.

