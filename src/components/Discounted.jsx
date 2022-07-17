import React from "react";
import { magicItems } from "../data";
import MagicItem from "./ui/MagicItem";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h2>
              Discounted <span className="yellow">Items</span>
            </h2>
          </div>
          <div className="magicItems">
            {magicItems
              .filter((magicItem) => magicItem.salePrice > 0)
              .slice(0, 8)
              .map((magicItem) => (
                <MagicItem magicItem={magicItem} key={magicItem.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
