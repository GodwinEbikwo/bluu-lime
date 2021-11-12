import { StyledButton } from "../box";
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
        <p className="inline-block footer-title">Subtotal: </p>
        <p className="inline-block footer-price">{formatMoney(subtotal)}</p>
      </div>

      <p className="footer-info">Shipping and taxes calculated at checkout.</p>

      <div className="footer-btn_container">
        <a
          aria-label="navigate to payment page"
          href={checkoutUrl}
          className="footer-btn filled"
        >
          Checkout
        </a>
      </div>

      <div className="footer-end">
        <span>or</span>
        <StyledButton className="no-height" onClick={onClick}>
          <span>continue Shopping</span>
        </StyledButton>
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
          className="button_label"
        >
          <span className="inline-block" style={{ color: "white" }}>
            CLOSE
          </span>
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

export function CartActions({ product, minusAction, addAction, removeAction }) {
  return (
    <div className="flex-end-1 flex space-between">
      <span className="w-full flex align-center">
        {product.variantQuantity > 1 && (
          <button
            aria-label="Decrease quantity by one"
            className="block btn-actions"
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
          onChange={(e) => updateItem(product.id, e.target.value)}
          className="input-actions"
          aria-label="Manually enter quantity"
        />

        <button
          aria-label="Increase quantity by one"
          className="block btn-actions"
          onClick={addAction}
        >
          <PlusIcon />
        </button>
      </span>

      <div>
        <a
          role="button"
          onClick={removeAction}
          className="link link--metis"
          aria-label="remove item from bag"
        >
          remove
        </a>
      </div>
    </div>
  );
}
