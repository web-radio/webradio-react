import React from 'react';

const Search = (props) => (
  <div>
    <input id="input" type="text" />
    <button onClick={props.getInputValue}>Wyszukaj!</button>
  </div>
);

export default Search;
