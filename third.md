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
