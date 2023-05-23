const productos = [
  {
    nombre: "Cementerios Sombraluna",
    precio: 25,
    description: "Mítica plus +20",
    id: 1,
    img: "../public/imagenes/sombraluna.jpg",
    stock: 10
  },
  {
    nombre: "Boveda Azur",
    precio: 25,
    description: "Mítica plus +20",
    id: 2,
    img: "../public/imagenes/bovedaazur.jpg",
    stock: 10
  },
  {
    nombre: "Corte de Estrellas",
    precio: 25,
    description: "Mítica plus +20",
    id: 3,
    img: "../public/imagenes/cortedeestrellas.jpg",
    stock: 10
  },
  {
    nombre: "Salones del valor",
    precio: 25,
    description: "Mítica plus +20",
    id: 4,
    img: "../public/imagenes/salones.jpg",
    stock: 10
  },
  {
    nombre: "Bóveda de las encarnaciones",
    description:
      "Banda en dificultad heróica, ganá todos los logros de la temporada!",
    precio: 40,
    id: 5,
    img: "../public/imagenes/encarnaciones.jpg",
    stock: 10
  },
  {
    nombre: "Aberrus",
    precio: 40,
    description:
      "Banda en dificultad heróica, ganá todos los logros de la temporada!",
    id: 6,
    img: "../public/imagenes/aberrus.jpg",
    stock: 10
  },
  {
    nombre: "Oro",
    precio: 50,
    description:
      "Somos comerciantes de oro, hacé tu compra hoy y recibilo en 2 horas como máximo.",
    id: 7,
    img: "../public/imagenes/oro.jpg",
    stock: 10
  }
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};
