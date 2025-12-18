import { useState } from 'react';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    alert(`Agregaste ${quantity} unidad(es) de "${product.name}" al carrito`);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <p>Categoría: {product.category}</p>
      <p>Stock: {product.stock}</p>
      <p>{product.description}</p>
      
      <div>
        <button onClick={handleDecrement} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement} disabled={quantity >= product.stock}>+</button>
      </div>
      
      <button onClick={handleAddToCart} disabled={product.stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;