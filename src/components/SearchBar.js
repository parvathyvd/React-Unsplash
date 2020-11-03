import React from 'react';


class SearchBar extends React.Component {
    state = {searchTerm : ''}

     onSearchInput = (e) => {
      // console.log(e.target.value);
        this.setState({
            searchTerm : e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
     //   console.log(this.state.searchTerm)
        this.props.onAppSearch(this.state.searchTerm)
    }
    
    render () {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>Search your Image</label>
                    <input type="text" onChange={this.onSearchInput} />
                    {this.state.searchTerm}
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;