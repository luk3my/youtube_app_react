import React from 'react';

class SearchBar extends React.Component {

  state = { SearchTerm: '' }

  onInputChange = (event) => {
    this.setState({SearchTerm: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //todo: make sure we call the callback from parent component
  };

  render () {
    return (
    <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="ui field">
          <label>Video Search</label>
          <input onChange={this.onInputChange} type="text" value={this.state.SearchTerm} />
        </div>
      </form>
    </div>
  );
  }

}

export default SearchBar;
