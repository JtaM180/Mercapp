//data/db.js
let categories =[
    {id: 1,name: "Electrónica"},
    {id: 2,name: "Ropa"},
    {id: 3,name: "Alimentos"},
    {id: 4,name: "Hogar"},
];

let products = [
    { id: 1, name: "Audífonos Bluetooth", description: "Sonido HD inalámbrico", price: 49.99, imageUrl: "https://picsum.photos/seed/1/300/200", categoryId: 1, stock: 15 },
  { id: 2, name: "Camiseta Deportiva", description: "Tela transpirable", price: 19.99, imageUrl: "https://picsum.photos/seed/2/300/200", categoryId: 2, stock: 30 },
  { id: 3, name: "Café Orgánico 500g", description: "Café de altura ecuatoriano", price: 8.50, imageUrl: "https://picsum.photos/seed/3/300/200", categoryId: 3, stock: 50 },
  { id: 4, name: "Lámpara LED", description: "Ahorra energía, luz cálida", price: 24.99, imageUrl: "https://picsum.photos/seed/4/300/200", categoryId: 4, stock: 20 },
  { id: 5, name: "Teclado Mecánico", description: "Retroiluminado RGB", price: 89.99, imageUrl: "https://picsum.photos/seed/5/300/200", categoryId: 1, stock: 10 },
  { id: 6, name: "Pantalón Jeans", description: "Corte slim fit", price: 35.00, imageUrl: "https://picsum.photos/seed/6/300/200", categoryId: 2, stock: 25 },
  { id: 7, name: "Chocolate Artesanal", description: "70% cacao puro", price: 5.99, imageUrl: "https://picsum.photos/seed/7/300/200", categoryId: 3, stock: 100 },
  { id: 8, name: "Almohada Ergonómica", description: "Soporte cervical", price: 29.99, imageUrl: "https://picsum.photos/seed/8/300/200", categoryId: 4, stock: 18 },
  { id: 9, name: "Mouse Inalámbrico", description: "Silencioso y preciso", price: 22.00, imageUrl: "https://picsum.photos/seed/9/300/200", categoryId: 1, stock: 35 },
  { id: 10, name: "Jugo de Maracuyá", description: "Natural sin conservantes", price: 3.50, imageUrl: "https://picsum.photos/seed/10/300/200", categoryId: 3, stock: 60 },
];

let nextId = 11;

module.exports = {categories, products, nextId, setNextId: (n) =>  nextId = n };