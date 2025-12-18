import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/item/${product.id}`}>Ver detalle</Link>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ItemList;