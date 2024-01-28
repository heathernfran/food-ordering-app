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

export type ProductInCart = NewProduct & {
  cost: number;
  quantity: number;
};

export type Cart = { [id: string]: ProductInCart };

export type CartState = {
  cart: Cart | {};
};

export type CartContextType = {
  state: CartState;
  addToCart: (product: NewProduct) => void;
  deleteFromCart: (id: string) => void;
};

interface AddProductAction {
  type: "ADD_PRODUCT";
  product: NewProduct;
}
interface DeleteProductAction {
  type: "DELETE_PRODUCT";
  id: string;
}
export type CartAction = AddProductAction | DeleteProductAction;
