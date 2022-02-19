import express from 'express';
import resolvers from './resolvers.js';
import schema from './schema.js';

import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req,res) => {
    res.send('up and running express server!')
});

// const root = { lco: () => console.log('learn code online !')}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen('8080', () => console.log('running at http://localhost:8080'));
