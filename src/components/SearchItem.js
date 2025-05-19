import React from 'react';

const SearchItem = ({search,setSearch}) => {
  return (
    <form className="mb-3 p-4" onSubmit={(e)=>e.preventDefault()}>
      {/* <label htmlFor="search" className="form-label" >Search :</label> */}
      <input 
        type="text"
        id="search"
        className="form-control"
        placeholder="Search Items"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
