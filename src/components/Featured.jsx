import React from "react";
import MagicItem from "./ui/MagicItem";
import { magicItems } from "../data";

const Featured = () => {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="yellow">Items</span>
          </h2>
          <div className="magicItems">
            {magicItems
              .filter((magicItem) => magicItem.rating === 5)
              .slice(0, 4)
              .map((magicItem) => (
                <MagicItem magicItem={magicItem} key={magicItem.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
