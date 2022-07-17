import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import MagicItem from "../components/ui/MagicItem";

const ItemInfo = ({ magicItems, addToCart, cart }) => {
  const { id } = useParams();
  const magicItem = magicItems.find((magicItem) => +magicItem.id === +id);

  function addItemToCart(magicItem) {
    addToCart(magicItem);
  }

  function itemExistsOnCart() {
    return cart.find((magicItem) => magicItem.id === +id);
  }

  return (
    <div id="magicItems__body">
      <main id="magicItems__main">
        <div className="magicItems__container">
          <div className="row">
            <div className="magicItem__selected--top">
              <Link to="/magicItems" className="magicItem__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/magicItems" className="magicItem__link">
                <h2 className="magicItem__selected--title--top">Magic Items</h2>
              </Link>
            </div>
            <div className="magicItem__selected">
              <figure className="magicItem__selected--figure">
                <img src={magicItem.url} alt="" className="magicItem__selected--img" />
              </figure>
              <div className="magicItem__selected--description">
                <h2 className="magicItem__selected--title">{magicItem.title}</h2>
                <Rating rating={magicItem.rating} />
                <div className="magicItem__selected--price">
                  <Price
                    salePrice={magicItem.salePrice}
                    originalPrice={magicItem.originalPrice}
                  />
                </div>
                <div className="magicItem__summary">
                  <h3 className="magicItem__summary--title">Summary</h3>
                  <p className="magicItem__summary--para">
                    {magicItem.description}
                  </p>
                </div>
                {itemExistsOnCart() ? (
                  <Link to={`/cart`} className="magicItem__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addItemToCart(magicItem)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="magicItems__container">
          <div className="row">
            <div className="magicItem__selected--top">
              <h2 className="magicItem__selected--title--top">Recommended Magic Items</h2>
            </div>
            <div className="magicItems">
              {magicItems
                .filter((magicItem) => magicItem.rating === 5 && +magicItem.id !== +id)
                .slice(0, 4)
                .map((magicItem) => (
                  <MagicItem magicItem={magicItem} key={magicItem.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemInfo;
