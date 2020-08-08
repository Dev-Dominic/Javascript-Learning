# Deep Javascript Foundations v3

## Introduction

> Whenever there's a divergence between what your brain thinks is happening, and
what the computer does, that's where bugs enter the code.
<cite>-- getify's law#17

### Course Overview

1. Types
    - Primitive types
    - Abstract Operations
    - Coercion
    - Equality
    - Typescript, Flow, etc.

2. Scope
    - Nested Scoped
    - Hoisting
    - Closure
    - Modules

3. Objects (Oriented)
    - this
    - class{}
    - Prototypes
    - OO vs OLOO

## Types

**Primitive Types**
- undefined **default value**
- string
- number
- boolean (**True or False**)
- symbol
- bigint?
- undeclared ?
- null ?

**Objects**
- object
- function?
- array ? **Special Kind of Object type with certain behavior**

```javascript

var v;
typeof v; // "undefined""
v = '1';
typeof v; // "string""

```

**Note:** typeof operator returns a string defining the type of a given variable
or expression.

### undefined vs undeclared vs uninitialized

undefined refers to a variable that has been defined but has no current value,
undeclared refers to a variable that has not been created by referenced, while
uninitialized refers to a variable that was not declared in a given scope and
therefore cannot be used outside that scope.

### Special Values

**NaN: Invalid Number**
Indicates that a given piece of data is not a valid number. NaN's cannot
be tested for equality in javascript. Test for NaN:
    - Pre-ES6: isNan
    - ES6: Number.isNaN

**Negative Zero**
Negative Zero '-0' is special value in javascript.

```javascript

var trendRate = -0;
trendRate === -0; // true

trendRate.toString() // '0'
trendRate === 0; // true
trendRate < 0; // false
trendRate > 0; // false

Object.is(trendRate, -0);
Object.is(trendRate, 0);

```

### Fundamental Objects

**Use new:**

- Object()
- Array()
- Function()
- Date()
- RegExp
- Error()

**Don't use new:**

- String()
- Number()
- Boolean()

## Coercion (Type Conversion)


