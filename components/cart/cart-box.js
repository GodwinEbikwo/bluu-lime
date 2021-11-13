import styled from "styled-components";

export const CartBoxInner = styled.div`
  .cart-header {
    flex-direction: column;
    margin-bottom: var(--spacing-md);

    .cart-empty {
      margin: var(--spacing-md) 0;
      margin-bottom: 0.5rem;
      margin-left: 0.4em;
      line-height: 1.2;
    }
  }

    .button_label {
      position: absolute;
      right: var(--spacer);
      top: calc(var(--spacer) - 8px);
      cursor: pointer;
    }

    .cart-title {
      line-height: 1;
      font-weight: 100;
      font-family: var(--font-6);
    }

    .info-container {
      margin-bottom: var(--spacing-md);
    }

    .spc {
      margin-right: 0.5em;
    }

    .info-container_inner {
      position: relative;
      overflow: hidden;
      display: block;
      border-radius: 999px;
      text-transform: uppercase;
      text-align: center;
      margin: 0 auto;
      font-size: 0.75rem;
      padding: 0.5rem;
      background-color: var(--accent);
      color: var(--text-black);
    }
  }

  .scroll-container {
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    .-mt-b {
      margin: 1.75rem 0;
    }

    .product-title {
      font-weight: 100;
      font-family: var(--font-6);
    }

    .img-box {
      position: relative;
      flex-shrink: 0;
      overflow: hidden;
      /* border-radius: 0.375rem; */
      width: 6.5rem;
      height: 6.5rem;
    }

    .list-box {
      display: flex;
      flex-direction: column;
      flex: 1 1 0%;
      margin-left: 1rem;
    }

    .flex-end-1 {
      flex: 1 1 0%;
      align-items: flex-end;
    }

    .input-actions {
      background-color: #3c3c3c;
      border-radius: 20px;
      text-align: center;
      width: 3.5rem;
      color: white;
      margin: 0 0.5em;
    }

    .btn-actions {
      font-size: 1.25rem;
      color: white;
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    padding: 30px calc(var(--golden-ratio) - var(--px-2));

    @media (min-width: 991px) {
      margin: var(--spacing-md) auto;
      padding: 40px var(--px-2) 10px;
    }

    .footer-title {
      font-size: 1.2rem;
    }

    .footer-price {
      font-size: 1.2rem;
    }

    .footer-info {
      color: gray;
      margin-bottom: var(--spacing-md);
    }

    .footer-btn_container {
      width: 100%;
      margin-top: var(--spacing-md);
      margin-bottom: var(--spacing-md);
      
      .footer-btn {
        display: flex;
        align-items: center;
        width: auto;
        height: 40px;
        justify-content: center;
        border-radius: 999px;
        padding: 1rem 2rem;
        text-align: center;
        cursor: pointer;
        transition: all 300ms var(--easing);
        border: 1px solid var(--off-white);
        text-transform: capitalize;

        &.filled {
          color: var(--black);
          background-color: var(--white);

          &:hover {
            color: var(--off-white);
            background-color: transparent;
          }
        }
      }
    }

    .footer-end {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      button {
        margin-top: var(--spacing-sm);
        color: white;
        border: 0;
      }
    }
`;
