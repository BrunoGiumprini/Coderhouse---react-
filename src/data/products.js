// src/data/products.js
const products = [
  {
    id: 1,
    name: "Remera Negra",
    price: 5990,
    description: "Remera de algodón 100% color negro",
    category: "remeras",
    image: "https://via.placeholder.com/300x400?text=Remera+Negra",
    stock: 10
  },
  {
    id: 2,
    name: "Remera Blanca",
    price: 5490,
    description: "Remera básica color blanco",
    category: "remeras",
    image: "https://via.placeholder.com/300x400?text=Remera+Blanca",
    stock: 15
  },
  {
    id: 3,
    name: "Jean Clásico",
    price: 12990,
    description: "Jean azul estilo clásico",
    category: "pantalones",
    image: "https://via.placeholder.com/300x400?text=Jean+Clásico",
    stock: 8
  }
];

export const getProducts = (categoryId = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        const filteredProducts = products.filter(
          (product) => product.category === categoryId
        );
        resolve(filteredProducts);
      } else {
        resolve(products);
      }
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 500);
  });
};