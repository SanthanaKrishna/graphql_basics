import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorQuery } from '../queries/quries';



class AddBook extends Component {
    displayAuthors() {
        const { data } = this.props;
        if (data.loading) {
            return (
                <option disabled>Loading Authors...</option>
            )
        } else {
            return data && data.authors.length > 0 && data.authors.map((author) => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    }
    render() {
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book Nmae:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        {this.displayAuthors}
                    </select>
                </div>
            </form>

        )
    }
}

export default graphql(getAuthorQuery)(AddBook);