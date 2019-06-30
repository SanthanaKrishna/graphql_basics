import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`{
    {
        books{
            name
            id
        }
    }
}
`
class BookList extends Component {
    render() {
        return (
            <div>
                <ul id="book-list"></ul>
                <li>Book Name</li>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);