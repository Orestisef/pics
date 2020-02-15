import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  state = {term:''};

  onFormSubmit= (event) => {
    event.preventDefault();

    this.props.myOnSubmit(this.state.term);
  };

  render(){
    return (
      <div>
        <div className="ui container searchBar">
          <form onSubmit={this.onFormSubmit}>
            <div className="ui fluid action input">
              <input type="text" placeholder="Search..." value={this.state.term} onChange={(event)=>this.setState({ term: event.target.value})} />
              <div className="ui button">Search</div>
            </div>
          </form>
        </div>
    </div>

    );
  }
}


export default SearchBar;
