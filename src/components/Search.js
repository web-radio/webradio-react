import React from 'react';

const Search = (props) => (
  <div className="searcher">
    <input id="input" type="text" placeholder="RMF FM"/>
    <button onClick={props.getInputValue}><i className="fas fa-search"></i></button>
  </div>
);

export default Search;
