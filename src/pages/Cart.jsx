import React from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem }) => {

  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return price;
  };

  return (
    <div id="magicItems__body">
      <main id="magicItems__main">
        <div className="magicItems__container">
          <div className="row">
            <div className="magicItems__selected--top">
              <h2 className="cart__title">Bag</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__magicItem">Items</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Total</span>
              </div>
              <div className="cart__body">
                {cart.map((magicItem) => {
                  return (
                    <div className="cart__item" key={magicItem.id}>
                      <div className="cart__magicItem">
                        <img
                          src={magicItem.url}
                          className="cart__magicItem--img"
                          alt=""
                        />
                        <div className="cart__magicItem--info">
                          <span className="cart__magicItem--title">
                            {magicItem.title}
                          </span>
                          <span className="cart__magicItem--price">
                            ${(magicItem.salePrice ? magicItem.salePrice : magicItem.originalPrice).toFixed(2)}
                          </span>
                          <button
                            className="cart__magicItem--remove"
                            onClick={() => removeItem(magicItem.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={magicItem.quantity}
                          onChange={(event) =>
                            changeQuantity(magicItem, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          (magicItem.salePrice || magicItem.originalPrice) * magicItem.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>Your bag is empty!</h2>
                  <Link to="/MagicItems">
                    <button className="btn">Browse Magic Items</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub--total">
                  <span>Subtotal</span>
                  <span>${(total() * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(total() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert("Not yet implemented :(")}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
