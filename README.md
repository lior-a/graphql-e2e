# step 1

install deps

`npm i babel-cli@6.26.0 express@4.17.3 express-graphql@0.12.0 graphql16.3.0 nanoid@3.3.1 nodemon@2.0.15`

edit package json:
```
    "start": "nodemon ./index.js --exec babel-node -e js",
```
and 
```
  "main": "index.js",
  "type": "module",
```

# step 2

craete index.js and add server code

# step 3

create `schema.js` and add schema with graphql

# step 4

create `resolvers.js` and add data manipulation functions

# step 5

update data:
```
mutation {
  createCourse(input:{
    courseName:"js tutorial",
    price: 100,
    stack: MOBILE,
    teachingAssists:[
      {
        firstName:"Lior",
        lastName:"Amsalem",
        experience:15,
      },
      {
        firstName: "Yael",
        lastName: "Green",
        experience: 4
      }
    ]
   }){
    id, # returned values
    courseName
  }
}
```

query based on the return value:
```
query {
	getCourse(id:"BFyuH5voq9TiSYzgD0_cX") {
    id
    teachingAssists{
      experience
    }
  }
}
```

returned result from http://localhost:8081/graphql would be:
```
{
  "data": {
    "getCourse": {
      "id": "BFyuH5voq9TiSYzgD0_cX",
      "teachingAssists": [
        {
          "experience": 15
        },
        {
          "experience": 4
        }
      ]
    }
  }
}
```