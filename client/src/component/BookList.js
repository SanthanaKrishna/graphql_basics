import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/quries';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks = () => {
        const { data } = this.props;
        if (data.loading) {
            return (
                <div>Loading Books...</div>
            )
        } else {
            return data && data.books.length > 0 && data.books.map((book) => {
                return (
                    <li key={book.id} onClick={(e) => { this.setState({ selected: book.id }) }}>{book.name}</li>
                )
            })
        }
    }
    render() {
        console.log('book list props', this.props);
        return (
            <div>
                <ul id="book-list"></ul>
                {this.displayBooks}
                <BookDetails />
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);