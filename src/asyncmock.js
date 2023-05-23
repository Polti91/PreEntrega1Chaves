const productos = [
  {
    nombre: "Shadowmoon",
    precio: 25,
    description: "Mítica plus +20",
    id: "1",
    img: "../imagenes/sombraluna.jpg",
    stock: 10,
    category: "1"
  },
  {
    nombre: "Boveda Azur",
    precio: 25,
    description: "Mítica plus +20",
    id: "2",
    img: "../imagenes/bovedaazur.jpg",
    stock: 10,
    category: "1"
  },
  {
    nombre: "Corte de Estrellas",
    precio: 25,
    description: "Mítica plus +20",
    id: "3",
    img: "../imagenes/cortedeestrellas.jpg",
    stock: 10,
    category: "1"
  },
  {
    nombre: "Salones del valor",
    precio: 25,
    description: "Mítica plus +20",
    id: "4",
    img: "../imagenes/salones.jpg",
    stock: 10,
    category: "1"
  },
  {
    nombre: "Vault",
    description:
      "Banda en dificultad heróica, ganá todos los logros de la temporada!",
    precio: 40,
    id: "5",
    img: "../imagenes/encarnaciones.jpg",
    stock: 10,
    category: "2"
  },
  {
    nombre: "Aberrus",
    precio: 40,
    description:
      "Banda en dificultad heróica, ganá todos los logros de la temporada!",
    id: "6",
    img: "../imagenes/aberrus.jpg",
    stock: 10,
    category: "2"
  },
  {
    nombre: "Oro",
    precio: 50,
    description:
      "Somos comerciantes de oro, hacé tu compra hoy y recibilo en 2 horas como máximo.",
    id: "7",
    img: "../imagenes/oro.jpg",
    stock: 10,
    category: "3"
  }
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
      console.log(productos)
    }, 100);
  });
};

export const getItem = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const product = productos.find(prod => prod.id === id);
            resolve(product);
        }, 100);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const productsByCategory = productos.filter(prod => prod.category === categoryId);
        resolve(productsByCategory);
      }, 100);
    });
  };