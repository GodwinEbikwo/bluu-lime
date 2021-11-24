import { formatMoney } from "@/helpers/index";
import { PlusIcon, MinusIcon } from "../icons";

export function getCartSubTotal(cart) {
  if (cart.length === 0) {
    return 0;
  } else {
    let totalPrice = 0;
    cart.forEach(
      (item) =>
        (totalPrice +=
          parseInt(item?.variantQuantity) * parseFloat(item?.variantPrice))
    );
    return Math.round(totalPrice * 100) / 100;
  }
}

export function CartFooter({ subtotal, onClick, checkoutUrl }) {
  return (
    <footer>
      <div className="flex space-between">
        <p className="inline-block">Subtotal: </p>
        <p className="inline-block">{formatMoney(subtotal)}</p>
      </div>

      <p className="footer-info">Shipping and taxes calculated at checkout.</p>

      <div className="footer-btn_container flex flex-wrap space-between">
        <button
          className="footer-btn"
          onClick={onClick}
          style={{ marginBottom: "var(--spacing-md)" }}
        >
          <span>continue Shopping</span>
        </button>

        <a
          aria-label="navigate to payment page"
          href={checkoutUrl}
          className="footer-btn bg-accent"
        >
          proceed to Checkout
        </a>
      </div>
    </footer>
  );
}

export function CartHeader({ onClick, cartItems }) {
  return (
    <header className="header-container" data-scroll>
      <div className="flex space-between cart-header">
        <h3 className="cart-title">Your Bag</h3>
        <button
          aria-label="close-cart"
          type="button"
          onClick={onClick}
          className="button_label cursor-pointer"
        >
          <span className="inline-block">CLOSE</span>
        </button>
      </div>

      <div className="w-full info-container">
        <span className="info-container_inner">
          <span className="flex flex-wrap justify-center align-center">
            <span className="block spc">
              {cartItems?.length} Item
              {cartItems?.length === 1 ? "" : "s"}
            </span>
            <span className="block spc">&bull;</span>
            <span className="block">UK shipping Only</span>
          </span>
        </span>
      </div>
    </header>
  );
}

export function CartActions({ product, minusAction, addAction, updateItem }) {
  return (
    <div className="flex-end-1 flex space-between">
      <span className="w-full flex align-center">
        {product.variantQuantity > 1 && (
          <button
            aria-label="Decrease quantity by one"
            className="block btn-actions cursor-pointer"
            onClick={minusAction}
          >
            <MinusIcon />
          </button>
        )}

        <input
          type="number"
          inputMode="numeric"
          id="variant-quantity"
          name="variant-quantity"
          value={product.variantQuantity}
          onChange={updateItem}
          className="input-actions"
          aria-label="Manually enter quantity"
        />

        <button
          aria-label="Increase quantity by one"
          className="block btn-actions cursor-pointer"
          onClick={addAction}
        >
          <PlusIcon />
        </button>
      </span>
    </div>
  );
}
