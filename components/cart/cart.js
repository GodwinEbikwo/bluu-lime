import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { CartBoxInner } from "./cart-styles";
import { formatMoney } from "@/helpers/index";
import { CartContext } from "context/shop-context";
import {
  CartFooter,
  getCartSubTotal,
  CartHeader,
  CartActions,
} from "./cart-helpers";
import { EmptyIcon } from "../icons";
import cn from "classnames";
import Div100vh from "react-div-100vh";

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
      <Div100vh className={cn("cart-menu", { open: cartOpen })}>
        <CartBoxInner>
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
                        <div className="flex space-between flex-wrap">
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
                          <div>
                            <button
                              className="flex align-center justify-center"
                              role="button"
                              onClick={() => removeCartItem(product.id)}
                              aria-label="remove item from bag"
                              style={{
                                border: "1px solid var(--border-color)",
                                padding: "0.2rem",
                                borderRadius: "999px",
                              }}
                            >
                              <svg
                                width="19"
                                height="19"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-column">
                          <span style={{ fontSize: "13.5px" }}>
                            {product.variantTitle}
                          </span>
                          <span style={{ fontSize: "13.5px" }}>
                            {formatMoney(product.variantPrice)}
                          </span>
                        </div>
                      </div>

                      <CartActions
                        product={product}
                        minusAction={() =>
                          updateItem(product.id, product.variantQuantity - 1)
                        }
                        addAction={() => {
                          updateItem(product.id, product.variantQuantity + 1);
                        }}
                        updateItem={(e) =>
                          updateItem(product.id, e.target.value)
                        }
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
          </main>

          {cartItems.length > 0 ? (
            <CartFooter
              subtotal={subtotal}
              onClick={() => setCartOpen(false)}
              checkoutUrl={checkoutUrl}
            />
          ) : null}
        </CartBoxInner>
      </Div100vh>
      <div className={cn("cart-menu-overlay", { open: cartOpen })} />
    </>
  );
}
