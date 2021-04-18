import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home image"
        />

        <div className="home__row">
          <Product
            id="123"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="234"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver"
            price={2499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71UItVa0VmL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="541"
            title="Apple Watch Series 5 (GPS, 40mm) - Gold Aluminum Case with Pink Sport Band"
            price={345.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71jOvjATfPL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="9541"
            title="Govee Smart WiFi LED Strip Lights Works with Alexa, Google Home Brighter 5050 LED, 16.4ft"
            price={25.99}
            image="https://images-na.ssl-images-amazon.com/images/I/7164IelGduL._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            id="9541"
            title="Govee Smart WiFi LED Strip Lights Works with Alexa, Google Home Brighter 5050 LED, 16.4ft"
            price={25.99}
            image="https://images-na.ssl-images-amazon.com/images/I/7164IelGduL._AC_SL1000_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            data-aos="fade-up"
            id="875"
            title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61B04f0ALWL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="157"
            title="FIODIO Membrane Gaming Keyboard, USB Wired Keyboard with Rainbow Backlit, 104 Comfortable Quiet Silent Keys, 26 Anti-Ghosting Keys, Spill Resistant, Multimedia Control for PC and Desktop Computer"
            price={26.59}
            image="https://images-na.ssl-images-amazon.com/images/I/71xgQwL70wL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
