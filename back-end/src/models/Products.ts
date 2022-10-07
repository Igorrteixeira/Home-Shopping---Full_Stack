export class Products {
  constructor(
    private id: number,
    private name: string,
    private price: number,
    private qtyStock: number
  ) {}
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getQtyStock() {
    return this.qtyStock;
  }
}
export interface OProductsDTO {
  id: number;
  name: string;
  price: number;
  qty_stock: number;
}
