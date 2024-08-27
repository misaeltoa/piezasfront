import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (code) => {
    setError(''); // Limpiar errores previos
    try {
      const response = await fetch(`http://localhost:5000/api/products/${code}`);
      if (response.ok) {
        const product = await response.json();
        setProduct(product);
      } else if (response.status === 404) {
        setProduct(null);
        setError('Product not found');
      } else {
        setProduct(null);
        setError('An unexpected error occurred');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      setProduct(null);
      setError('An error occurred while fetching the product');
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {error && (
        <div className="alert alert-danger mt-4">
          {error}
        </div>
      )}
      {product && !error && (
        <div className="mt-4">
          <h3>Product Information</h3>
          <p><strong>Code:</strong> {product.code}</p>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
