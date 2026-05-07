export interface CoffeeItem {
  name: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
}

export interface CartItem {
  coffee: CoffeeItem;
  quantity: number;
  cupSize: string;
  iceLevel: string;
  sugarLevel: string;
}

// Simulasi State Keranjang di Sisi Klien
let cart: CartItem[] = [];

export const CartService = {
  getCart: () => cart,
  
  addToCart: (item: CartItem) => {
    const existingIndex = cart.findIndex(
      (c) => c.coffee.name === item.coffee.name && 
             c.cupSize === item.cupSize && 
             c.iceLevel === item.iceLevel && 
             c.sugarLevel === item.sugarLevel
    );
    if (existingIndex > -1) {
      cart[existingIndex].quantity += item.quantity;
    } else {
      cart.push(item);
    }
  },

  removeFromCart: (index: number) => {
    cart.splice(index, 1);
  },

  clearCart: () => {
    cart = [];
  },

  getTotal: () => {
    return cart.reduce((sum, item) => sum + item.coffee.price * item.quantity, 0);
  }
};