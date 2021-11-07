import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { CartBox, Overlay } from "./cart-box";
import { formatMoney } from "@/helpers/index";
import { CartContext } from "context/shop-context";
import {
  CartFooter,
  getCartSubTotal,
  CartHeader,
  CartActions,
} from "./cart-helpers";
import { EmptyIcon } from "../icons";

export default function MiniCart({ cart }) {
  const {
    cartOpen,
    setCartOpen,
    checkoutUrl,
    removeCartItem,
    updateQuantity,
  } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setCartItems(cart);
    setSubtotal(getCartSubTotal(cart));
  }, [cart]);

  function updateItem(id, quantity) {
    updateQuantity(id, quantity);
  }

  return (
    <>
      <CartBox open={cartOpen}>
        <CartHeader
          onClick={() => {
            setCartOpen(!cartOpen);
          }}
          cartItems={cartItems}
        />

        <main className="scroll-container">
          {cartItems.length > 0 ? (
            <ul role="list">
              {cartItems.map((product) => (
                <li key={product.id} className="-mt-b flex">
                  <div className="img-box">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div className="list-box">
                    <div>
                      <div className="flex space-between">
                        <h5 className="product-title">
                          <Link href={`/products/${product.handle}`} passHref>
                            <a
                              onClick={() => setCartOpen(false)}
                              className="link link--metis"
                            >
                              {product.title}
                            </a>
                          </Link>
                        </h5>
                        <p>{formatMoney(product.variantPrice)}</p>
                      </div>
                      <p>{product.variantTitle}</p>
                      <p>qty {product.variantQuantity}</p>
                    </div>

                    <CartActions
                      product={product}
                      minusAction={() =>
                        updateItem(product.id, product.variantQuantity - 1)
                      }
                      addAction={() => {
                        updateItem(product.id, product.variantQuantity + 1);
                      }}
                      removeAction={() => removeCartItem(product.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="center-absolute">
              <EmptyIcon />
            </div>
          )}

          {cartItems.length > 0 ? (
            <CartFooter
              subtotal={subtotal}
              onClick={() => setCartOpen(false)}
              checkoutUrl={checkoutUrl}
            />
          ) : null}
        </main>
      </CartBox>
      <Overlay open={cartOpen} />
    </>
  );
}