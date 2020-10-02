# Intermediate React

## Introduction

[Course Repo](https://btholt.github.io/complete-intro-to-react-v5/
https://github.com/btholt/complete-intro-to-react-v5)

## Basic Hooks

### useState

Returns a tuple (array), that returns the element that holds the value, while a
method that is used to update this container. Cannot be used within control
structure.

```javascript
const [isGreen, setIsGreen] = useState(true);
```

### useEffect

useEffects are not immediately ran, they're only ran after rendering a
component.

```javascript
useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return (() => clearTimeout(timer));
}) // Keeps on running because no dependencies set.

useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return (() => clearTimeout(timer));
}, [time]) // Keeps on running because `time` keeps on changing

```

**Note:** `return` is used as a means of cleaning up any action that occurs in
`useEffect`.

### useContext

Allows for application level state that can be passed around to many functions,
instead of normal state managment of passing props from parent to child
components.

```javascript
import { useContext, createContext } from "react";

// Example creating context
const UserContext = createContext([{
    firstName: "Bob",
    lastName: "Robbert",
    suffix: 1,
    email: "robert@gmail.com"
}, obj => obj])

// Use
const userState = useState({
    firstName: "Bob",
    lastName: "Robbert",
    suffix: 1,
    email: "robert@gmail.com"
})

return (
    <UserContext.Provider value={userState}>
        <h1>First Level</h1>
        <LevelTwo />
    </UserContext.Provider>
)
```

Many levels of application state does not have to be pased down as props, but
can be changed and read using `useContext`.

## Hooks in-depth

### useRef

### useReducer

### useMemo

### useCallback

### useLayoutEffect
