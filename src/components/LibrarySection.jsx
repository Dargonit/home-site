import React from 'react';

class LibrarySection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: props.section.section,
            books: props.section.books
        }
        console.log(this.state.books);
    }

    render() {
        return (
            <div className="Library-Section">
                Section name: {this.state.section}
                {
                    this.state.books.map(book => (
                        <div>
                            Name:{book.name}
                            Link:{book.link}
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default LibrarySection;