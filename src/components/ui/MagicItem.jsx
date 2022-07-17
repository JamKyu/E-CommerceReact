import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const MagicItem = ({ magicItem }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = magicItem.url;
    image.onload = () => {
      setTimeout(() => {
        // eslint-disable-next-line
        if ((mountedRef.current = true)) setImg(image);
      }, 300);
    };
    return () => {
      mountedRef.current = false;
    };
  });

  return (
    <div className="magicItem">
      {!img ? (
        <>
          <div className="magicItem__img--skeleton"></div>
          <div className="skeleton magicItem__title--skeleton"></div>
          <div className="skeleton magicItem__rating--skeleton"></div>
          <div className="skeleton magicItem__price--skeleton"></div>
        </>
      ) : (
        <>
          <Link to={`/ItemInfo/${magicItem.id}`}>
            <figure className="magicItem__img--wrapper">
              <img className="magicItem__img" src={img.src} alt="" />
            </figure>
          </Link>
          <div className="magicItem__title">
            <Link to={`/ItemInfo/${magicItem.id}`} className="magicItem__title--link">
              {magicItem.title}
            </Link>
          </div>
          <Rating rating={magicItem.rating} />
          <Price
            originalPrice={magicItem.originalPrice}
            salePrice={magicItem.salePrice}
          />
        </>
      )}
    </div>
  );
};

export default MagicItem;
