import React from 'react'
import "./Checkout.css";
import SubTotal from './SubTotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg" alt="" className="checkout__ad" />

                <div>
                    <h4>Hello {user?.email.replace("@gmail.com", "")} !</h4>
                    <h3 className="checkout__title">Your Shopping Cart</h3>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}


                </div>
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout