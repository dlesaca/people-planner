import React, { Component } from 'react';
import './SearchResults.css';

import PersonCard from '../PersonCard/PersonCard';

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        {this.props.people.map((person)=> {
          return <PersonCard person={person} key={person.id}/>
        })}
      </div>
    );
  }
}

export default SearchResults;
