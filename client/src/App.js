import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import BookList from './component/BookList';

import AddBook from './component/AddBook';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <BookList />
          <AddBook/>t
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
