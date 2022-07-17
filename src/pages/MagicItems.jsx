import React, { useState, useEffect } from "react";
import MagicItem from "../components/ui/MagicItem";

const MagicItems = ({ magicItems: initialItems }) => {
  const [magicItems, setItems] = useState();

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  function filterItems(filter) {
    if (filter === "LOW_TO_HIGH") {
      setItems(
        magicItems
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    } else if (filter === "HIGH_TO_LOW") {
      setItems(
        magicItems
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    } else if (filter === "RATING") {
      setItems(magicItems.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <div id="magicItems__body">
      <main id="magicItems__main">
        <section>
          <div className="magicItems__container">
            <div className="row">
              <div className="magicItems__header">
                <h2 className="section__title magicItems__header--title">
                  All Magic Items
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterItems(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="magicItems">
                {magicItems &&
                  magicItems.map((magicItem) => {
                    return <MagicItem magicItem={magicItem} key={magicItem.id} />;
                  })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MagicItems;
