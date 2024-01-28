export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
};

export type NewProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type Cart = { [id: string]: NewProduct };

export type CartContextType = {
  cart: Cart;
  addToCart: (product: NewProduct) => void;
  deleteFromCart: (id: string) => void;
};
