# The Hard Parts of Servers & Node.js

## Introduction

Javascript utilizes `C++` to interact with a server's hardware to achieve the
ability to interact with a computers hardware, such as its filesystem and
network interace. `NodeJs` is a bundle of `Javascript` and `C++`.

**Purpose of Javascript**<br>

- Saves data and runs code
- Built in labels to run `Node C++ features`

## Node APIs

**Using http feature of Node to setup open socket**<br>

```javascript
const server = http.createServer();
server.listen(80);
```

`http` module utlizes `node c++ features` to utilize computer features.

Node auto-runs the code (function) for us when a request arrives from a user.
Javascript is single-threaded & synchronous. All slow work is done by `Node`in
the background.

```javascript
function doSomething(incomingData, functionTosetIncomingData){
    functionTosetIncomingData.end("Welcome to Twitter");
}

const server = http.createServer(doSomething);
server.listen(80);
```

Node inserts the arguments automatically in the function that is autoran:

1. `Inbound object` - all data from the inboud (request) message
2. `Outbound object` - functions to be used to set outbound (response) message
   data.
