import React from 'react';

const Price = ({ salePrice, originalPrice }) => {
    return (
        <div className="magicItem__price">
        {salePrice ? (
          <>
            <span className="magicItem__price--normal">${originalPrice.toFixed(2)}</span>$
            {salePrice.toFixed(2)}
          </>
        ) : (
          <>${originalPrice.toFixed(2)}</>
        )}
      </div>
    );
}

export default Price;
