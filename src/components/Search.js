import React from "react";

function Search({setSearch}){

    return(
        <div className="searchbar">
            <label htmlFor="search">Search Books: </label>
            <input
                type="text"
                id="search"
                placeholder="Search by book title..."
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search;