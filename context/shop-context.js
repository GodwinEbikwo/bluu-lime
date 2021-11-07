import { createContext, useState, useEffect } from "react";
import { createCheckout, updateCheckout } from "@/lib/shopify";

const CartContext = createContext();
const CartStateProvider = CartContext.Provider;

export async function updateShopifyCheckout(updatedCart, checkoutId) {
  const lineItems = updatedCart.map((item) => {
    return {
      variantId: item["variantId"],
      quantity: item["variantQuantity"],
    };
  });
  await updateCheckout(checkoutId, lineItems);
}

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState("");
  // const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObject = JSON.parse(localStorage.checkout_id);

      if (cartObject[0].id) {
        setCart([cartObject[0]]);
      } else if (cartObject[0].length > 0) {
        setCart(...[cartObject[0]]);
      }
      setCheckoutId(cartObject[1].id);
      setCheckoutUrl(cartObject[1].webUrl);
    }
  }, []);

  async function updateQuantity(id, quantity) {
    let newQuantity = Math.floor(quantity);
    if (quantity === "") {
      newQuantity = "";
    }

    let newCart = [...cart];
    newCart.forEach((item) => {
      if (item.id === id) {
        item.variantQuantity = newQuantity;
      }
    });

    // take out zeroes items
    newCart = newCart.filter((item) => item.variantQuantity !== 0);
    setCart(newCart);
    const newCheckout = await updateCheckout(checkoutId, newCart);
    localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]));
  }

  async function addToCart(newItem) {
    setCartOpen(true);
    if (cart.length === 0) {
      setCart([...cart, newItem]);

      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity
      );

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);
      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
    } else {
      let newCart = [...cart];
      // loop through all cart items to check if variant
      // already exists and update quantity
      cart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
        } else {
          newCart = [...cart, newItem];
        }
      });
      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
    }
  }

  async function removeCartItem(itemToRemove) {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    setCart(updatedCart);

    const newCheckout = await updateCheckout(checkoutId, updatedCart);

    localStorage.setItem(
      "checkout_id",
      JSON.stringify([updatedCart, newCheckout])
    );

    if (cart.length === 1) {
      setCartOpen(false);
    }
  }

  return (
    <CartStateProvider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        checkoutUrl,
        removeCartItem,
        updateQuantity,
      }}
    >
      {children}
    </CartStateProvider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
