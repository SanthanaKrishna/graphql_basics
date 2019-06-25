const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./server/schema/schema');

mongoose.connect('mongodb+srv://graphql_Book:wrKHnQ1p4jSd8m8T@cluster0-h5kgo.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('try mongodb connection');
    }).catch(err => {
        console.log(err);
    })

mongoose.connection.once('open', () => {
    console.log('database is coonected with mongodb')
})
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen('4000', () => {
    console.log('Server Started')
})
