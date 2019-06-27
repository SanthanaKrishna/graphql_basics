const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./server/schema/schema');

mongoose.connect('mongodb+srv://graphql_bookAuthor:6DHtXGuSxtmCe3N4@devmern-bfjzi.mongodb.net/Graphql?retryWrites=true&w=majority', { useNewUrlParser: true })
    // .then(() => {
    //     console.log('try mongodb connection');
    // }).catch(err => {
    //     console.log(err);
    // })

mongoose.connection.once('open', () => {
    console.log('database is connected with mongodb')
})
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen('4000', () => {
    console.log('Server Started')
})
