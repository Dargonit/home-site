import React from 'react';

class LibrarySection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: props.section.section,
            books: props.section.books,
            expanded: false
        }
    }

    render() {
        const expand = () => {
            this.setState(prevState => ({
                expanded: !prevState.expanded
            }));
        }
        const expandButton = () => {
            if (!this.state.expanded) {
                return <div className="section-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                         fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>
                    </svg>
                </div>
            } else {
                return <div>
                    <div className="section-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4z"/><path d="M4 12h16v2H4z"/></svg>
                    </div>
                    {
                        this.state.books.map((book, index) => (
                                <div key={index}>
                                    Name:{book.name}
                                    Link:{book.link}
                                </div>
                            )
                        )
                    }</div>
            }
        }

        return (
            <div className="Library-Section">
                <div>
                    Section name: {this.state.section}
                </div>
                <span onClick={expand}>
                {expandButton()}
                </span>
            </div>
        );
    }
}

export default LibrarySection;