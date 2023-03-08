import React from 'react';

class SearchBox extends React.Component {

    render() {
        return (
            <div>
                <input name="search" onChange={(e) => this.props.handleChange(e)}/>
            </div>
        )
    }
}

export default SearchBox;