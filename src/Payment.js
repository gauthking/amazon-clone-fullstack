import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
                {/* Delivery Address - section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>1234 Dev Street</p>
                        <p>Some Tech City, India</p>
                    </div>
                </div>

                {/* Review Items - section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items</h3>
                    </div>
                    <div className="payment__items">
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

                {/* Payment method - section */}
                <div className="payment__section">
                    <h3 className='payment__title'>Payment Method</h3>
                    <div className="payment__details">
                        {/* Stripe Magic */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment