# Introduction to GraghQL

## Introduction

Course Repo:
[intro-to-graphql](https://github.com/FrontendMasters/intro-to-graphql)<br>
Course Slides: [Introduction to
GraghQL](https://slides.com/scotups/intro-to-graphql)<br>
GraphQL Schema:
[Cheat
Sheet](https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png)

**Tools**

- Node.js
- MongoDB
- Mongoose database interaction
- Jest

### GraghQL?

Essentially a strongly typed query language and runtime for data.

**About GraghQL:**

- Facebook Open Source project
- Allows for clients to request for what data a user really wants
- GraphQL is an extra layer that can be used in conjunction with other APIs(REST)
- Allows for reading and writing data.

### GraphQL vs REST

- GraphQL only has one URL, i.e only one endpoint for accesing data and writing
  data. Most times done as a POST request(sometimes GET request)
- REST has multiple routes for different types of request.

## GraphQL

### Basics

**Creating schema**

The `rootSchema` is the entry point to a GraphQL schema. Creating an example
type called `Cat`. Resolvers given types, also known as a controller.

```graphql

// Creating a type
type Cat {
    name: String
}

// Setting up schema to allow for querying for specific data
type Query{
    myCat: Cat
}

schema {
    query: Query
}

// Resolving
Query: {
    myCat(){
        return { name: 'Garfield' }
    }
}

```

### GraphQL Playground

Server graphql is where schemas and resolvers are created. Client side
graphql issue queries and mutator to a given API. GraphQL always returns `data`
or `error` property. Returns a query with all the data request along with the
fields specified.

**Query**

```graphql
{
  myCat {
    name
  }
}
```

**Response**

```graphql
{
    "data": {
        "myCat": {
            "name": "Garfield"
        }
    }
}

```

**Note:** All types are required for a given field in a schema.

## Schemas

GraphQL schemas strictly defines what resources, how they relate and how the a
client consumes them. Database schemas a good starting point for creating a
GraphQL schema. GraphQL can also be a first level of validating incoming request
queries.

### Creating schemas using SDL

SDL: Schema Definition Language

### Scalar and Object Types

Used to describe resources that will be used in queries and mutations

- Scalar Types (Built in primitives):
  - String
  - Int
  - Float
  - Boolean
  - ID
- Object types are customs shapes(E.g. Cat Type)

`!` is used to make given types required.

**Note:** Arrays are applicable data structure in GraphQL.

```graphql

type Cat{
    name: String
    age: Int! // Requires age field
    bestfriends: [Cat!]! // Required array of objects of type Cat
}

```

### Query and Mutation Types

Queries types define the different queries that an API is capable of accepting.
Fields in the Query type are the different requests that a client can make to an
API.

Mutations is the something but it mutates the Database or data source.

```graphql
type Mutation {
  newCat(input: Input): NewCat!
}
```

Queries and Mutations are similar to routing in a REST API.

### Mutations

```

input CatInput{
    name: String
    age: Int!
    bestfriend: Cat!
}

type Mutation {
    newCat(input: CatInput): Cat!
}

```

**Input types:** These are regular types that are used as types for input into a
mutator.

### Creating Schema

**Note:** `extend` keyword is used to indicate that a given type should have
only one instance.

```

// Only one Query and Mutations types can be defined.
extend type Query{
    ...
}

extend type Mutations{
    ...
}

```

**Example Query(Using filtering)**

```graphql

// Requesting a given product by ID
// Requires an ID primitive as an argument and requires that a Product Object is
// returned
extend type Query{
    product(id: ID!): Product!
}

```

## Resolvers

Resolvers are similar to controllers in traditional REST API. Responsible for
retrieving data. Resolvers are required for query and mutations, as well as
types. Incoming queries dictate what resolvers are ran and in what order.

### Creating Resolvers

The shape describe in the schema should be the same for the resolver.

**Resolvers arguments:**

- starting object
- args passed in incoming request
