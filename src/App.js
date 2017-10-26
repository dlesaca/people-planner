import React, { Component } from 'react';

import SearchResults from './components/SearchResults/SearchResults';

import people from './data/people';

class App extends Component {
  render() {
    return (
      <main>
        <SearchResults people={people} />
      </main>
    );
  }
}

export default App;
