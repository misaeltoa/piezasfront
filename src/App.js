import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import './App.css'; // Asegúrate de importar el archivo CSS

function App() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (code) => {
    setError(''); // Limpiar errores previos
    try {
      const response = await fetch(`https://piezas-1.onrender.com/api/products/${code}`);
      if (response.ok) {
        const product = await response.json();
        setProduct(product);
      } else if (response.status === 404) {
        setProduct(null);
        setError('Pieza no encontrada');
      } else {
        setProduct(null);
        setError('Se ha producido un error inesperado');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      setProduct(null);
      setError('Se ha producido un error al obtener el producto');
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
          <h3>Información del Producto</h3>
          <p><strong>Código:</strong> {product.code}</p>
          <p><strong>Nombre:</strong> {product.name}</p>
          <p><strong>Descripción:</strong> {product.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
