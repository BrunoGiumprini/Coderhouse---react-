import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/products';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    getProducts(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
      
  }, [categoryId]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>
        {categoryId 
          ? `Categoría: ${categoryId}` 
          : 'Todos los productos'
        }
      </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;