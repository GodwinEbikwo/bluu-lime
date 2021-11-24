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
      text-transform: uppercase;
      text-align: center;
      margin: 0 auto;
      font-size: 0.75rem;
      padding: 0.5rem;
      background-color: var(--accent);
      color: var(--white)
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
      border: 1px solid var(--border-color);
      border-radius: 20px;
      text-align: center;
      width: 3.5rem;
      margin: 0 0.5em;
    }

    .btn-actions {
      color: black;
    }
  }

  footer {
    position: absolute;
    bottom: var(--spacer);
    left: 0;
    right: 0;
    border-top: 1px solid var(--border-color);
    padding: 25px var(--px-2) 0;

    @media (min-width: 991px) {
      margin: var(--spacing-md) auto;
    }

    .footer-info {
      margin-bottom: var(--spacing-md);
    }

    .footer-btn_container {
      width: 100%;
      margin-top: var(--spacing-md);    
      .footer-btn {
        display: flex;
        align-items: center;
        width: auto;
        height: 40px;
        justify-content: center;
        border-radius: 2px;
        padding: 1rem 2rem;
        text-align: center;
        cursor: pointer;
        transition: all 300ms var(--easing);
        border: 1px solid var(--border-color);
        text-transform: uppercase;
        font-size: 13px;
        @media (max-width: 767px) {
          width: 100%;
        }

        &.bg-accent {
          border: none;
          color: var(--white);
          background-color: var(--accent);

          &:hover {
            color: var(--black);
            border: 1px solid var(--border-color);
            background-color: transparent;
          }
        }
      }
    }
`;
