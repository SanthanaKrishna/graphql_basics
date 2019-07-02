import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/quries';


class BookList extends Component {
    displayBooks() {
        const { data } = this.props;
        if (data.loading) {
            return(
                <div>Loading Books...</div>
            )
        } else {
            return data && data.books.length > 0 && data.books.map((book) => {
                return (
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
    }
    render() {
        console.log('props',this.props);
        return (
            <div>
                <ul id="book-list"></ul>
                {this.displayBooks}
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);