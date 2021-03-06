import React from 'react'
import "./Home.css";
import Product from './Product';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

function Home() {
    const slides = [
        { src: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" },
        { src: "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" },
        { src: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" }
    ];
    return (
        <div className="home">
            <Slider autoplay infinite duration={3000}>
                {slides.map((slide, index) => <div key={index}>
                    <img src={slide.src} alt="" className='home__image' />
                </div>)}
            </Slider>

            <div className="home__row">
                <Product id={1} title='The lean startup' price={499.99} image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg" rating={3} />
                <Product id={2} title='Kenwood KMM021 7QT Chef Titanium Kitchen Machine' price={4789.88} image="https://m.media-amazon.com/images/I/81tCWi0BusL._AC_SX679_.jpg" rating={4} />
            </div>

            <div className="home__row">
                <Product id={3} title="Samsung Electronics Galaxy Watch 4 44mm R870 Smartwatch GPS WiFi Bluetooth (International Model) (Black), (SM-R870)" price={19891} image="https://m.media-amazon.com/images/I/41aqFL1N8hL._AC_SX466_.jpg" rating={5} />
                <Product id={4} title="Marshall Stanmore II Voice Black Speaker With Amazon Alexa" price={12890} image="https://m.media-amazon.com/images/I/71wTTzKIkAL._AC_SX679_.jpg" rating={4} />
                <Product id={5} title="Apple iPad Pro 12.9-inch, Wi-Fi, 3rd Generation 64GB - Space Gray(Renewed)" price={90000.99} image="https://m.media-amazon.com/images/I/61DsXT1ldtL._AC_SY679_.jpg" rating={5} />
            </div>
            <div className="home__row">
                <Product id={6} image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SX679_.jpg" title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz" price={109977.98} rating={5} />
            </div>
            <div className="home__row">
                <Product id={7} title="PlayStation 5 Console" price={49890.89} image="https://m.media-amazon.com/images/I/619BkvKW35L._SX522_.jpg" rating={5} />
                <Product id={8} title="SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN" price={3890.99} image="https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_SX522_.jpg" rating={5} />
                <Product id={9} title="Sceptre 24inch Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black" price={21167.87} image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX522_.jpg" rating={4} />
            </div>
        </div >
    )
}

export default Home