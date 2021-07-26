import React from 'react';
import LibrarySection from "../components/LibrarySection";
import Books from "../assets/Books.json"

class Library extends React.Component {
    render() {
        return (
            <div className="Library">
                <div>Welcome to my little library. There is a collection of books i found helpful or interesting. Please
                    enjoy.
                </div>
                {
                    Books.map(section => (
                        <LibrarySection section={section}></LibrarySection>
                    ))
                }
            </div>
        );
    }
}

export default Library;