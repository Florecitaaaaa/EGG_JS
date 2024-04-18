const producto1 = {
   nombre: "celular",
   precio: 100000,
   stock: 2,
 };

 console.log(producto1);

 producto1.id = "id123";
 producto1.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

 console.log(producto1);
 console.log (producto1.nombre);

class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }
  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newName) {
    this._supplier = newName;
  }

  sellUnits(units) {
    if (units > this.stock) {
        throw new Error ("No hay suficiente para vender");
    }
    this.stock = this.stock-units;
  }
}

const prod1 = new Product();
const prod2 = new Product(2, "leche", 3.5);
const prod3 = new Product(3, "queso", 15, 5, ["img.jpg"], true);
const prod4 = new Product(
  4,
  "huevos",
  15,
  50,
  ["img4.jpg"],
  false,
  "Manuel Beleño"
);

console.log(prod1);
console.log(prod2);
console.log(prod3);

prod4.setSupplier = "Celestino Regordeto";

console.log(prod4.getSupplier);

const prod5 =new Product(5, "papa", 2, 12,["img5.jpg"], true, "Estrella")

prod5.sellUnits(10);
prod5.sellUnits(5);

console.log(prod5);