import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [code, setCode] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(code);
  };

  return (
    <div className="container mt-5">
      <h2>Buscar Codigo de pieza</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresar Codigo"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
