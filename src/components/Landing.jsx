import React from 'react';
import Night from '../assets/IntotheNight.svg';

const Landing = () => {
    return (
        <div>
            <section id="landing">
                <header>
                    <div className="header__container">
                        <div className="header__description">
                            <h1>Emporium</h1>
                            <h2>Quality magic items for <span className='yellow'>all adventurers</span></h2>
                            <a href="#featured">
                                <button className="btn">Browse Magic Items</button>
                            </a>
                        </div>
                        <figure className="header__img--wrapper">
                            <img src={Night} alt="" />
                        </figure>
                    </div>
                </header>
            </section>
        </div>
    );
}

export default Landing;
