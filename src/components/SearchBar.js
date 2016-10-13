import React, { PropTypes } from 'react'

export default function SearchBar({onSearchTermChange}) {

  return (
    <div className="search-bar">
      <input
        placeholder='Search'
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  )
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired
}
