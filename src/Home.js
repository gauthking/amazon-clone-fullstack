import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="container">

                <img className='home__image' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />

            </div>

            <div className="home__row">
                <Product title='The lean startup' price={19.99} image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg" rating={3} />
                <Product title='Kenwood KMM021 7QT Chef Titanium Kitchen Machine' price={478.99} image="https://m.media-amazon.com/images/I/81tCWi0BusL._AC_SX679_.jpg" rating={4} />
            </div>

            <div className="home__row">
                <Product title="Samsung Electronics Galaxy Watch 4 44mm R870 Smartwatch GPS WiFi Bluetooth (International Model) (Black), (SM-R870)" price={198.99} image="https://m.media-amazon.com/images/I/41aqFL1N8hL._AC_SX466_.jpg" rating={5} />
                <Product title="Marshall Stanmore II Voice Black Speaker With Amazon Alexa" price={379.99} image="https://m.media-amazon.com/images/I/71wTTzKIkAL._AC_SX679_.jpg" rating={4} />
                <Product title="Apple iPad Pro 12.9-inch, Wi-Fi, 3rd Generation 64GB - Space Gray(Renewed)" price={594.99} image="https://m.media-amazon.com/images/I/61DsXT1ldtL._AC_SY679_.jpg" rating={5} />
            </div>
            <div className="home__row">
                <Product image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SX679_.jpg" title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz" price={1099.63} rating={5} />
            </div>
        </div>
    )
}

export default Home