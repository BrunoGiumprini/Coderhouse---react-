import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {
        setProduct(null);
      })
      .finally(() => {
        setLoading(false);
      });
      
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;