import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="yellow">Emporium?</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="dungeon" />}
              title="Lightning Fast"
              para="Magic items for all adventurers, delivered to you instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="hat-wizard" />}
              title="Rare and Wonderous Items"
              para="Emporium stocks the rarest and most wonderous magic items."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="dragon" />}
              title="Discounted Prices"
              para="Get your hands on wonderous magic items at discounted prices."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
