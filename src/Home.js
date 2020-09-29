import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""
            />  

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                />
                <Product 
                    id="12321341"
                    title="Kitchenaid Professional 600 Stand Mixer 6 quart, Empire Red"
                    price={279.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="12321341"
                    title="iPhone Charger, 3Pack 10FT Lightning"
                    price={12.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71krWPp7xdL._AC_SX425_.jpg"
                />
                <Product 
                    id="12321341"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id="12321341"
                    title="Samsung LC27F398FWNXZA 27 Inch Curved LED Monitor"
                    price={179.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91WBoRNlm2L._AC_SX425_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="12321341"
                    title="Fitbit Inspire HR Heart Rate and Fitness Tracker, One Size"
                    price={69.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61fPdr7lutL._AC_SY679_.jpg"
                />
            </div>

            {/* Product */}
        </div>
    )
}

export default Home
