import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [code, setCode] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(code);
  };

  return (
    <div className="container mt-5">
      <h2>Product Search</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter product code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
