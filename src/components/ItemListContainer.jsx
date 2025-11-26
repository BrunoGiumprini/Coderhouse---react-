// components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <p>Próximamente: ¡Nuestro catálogo de productos!</p>
    </div>
  );
};

export default ItemListContainer;