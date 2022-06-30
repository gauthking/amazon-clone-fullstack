import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react';
// import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { ConstructionOutlined } from '@mui/icons-material';
import { db } from "./firebase"


function Payment() {
    let t = 0;
    const [{ basket, user, address }, dispatch] = useStateValue();
    for (let i = 0; i < basket.length; i++) {
        t += basket[i].price;
    }

    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setclientSecret] = useState(true);
    // important snippet ***
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${t.toFixed(2) * 100}`
            }); // axios is used for making GET/POST request
            setclientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket]); /// important snippet ***

    console.log("THE client SECRET KEY IS >> ", clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            //pushing info to the db
            // this is using NOSQL
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                address: address,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders');
        })

        // const payload = await stripe
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    const addressSubmission = event => {
        event.preventDefault();
        let e = document.getElementById("email").firstChild;
        e.parentNode.innerHTML = `<div>${e.value}</div>`
        let h = document.getElementById("homeadd").firstChild;
        h.parentNode.innerHTML = `<div>${h.value}</div>`
        let p = document.getElementById("pin").firstChild;
        p.parentNode.innerHTML = `<div>${p.value}</div>`
        let evalue = e.value;
        let hvalue = h.value;
        let pvalue = p.value;

        dispatch({
            type: "DELIV_ADDRESS",
            add: {
                email: evalue,
                homeadd: hvalue,
                pincode: pvalue
            }
        })
        console.log(address)
        console.log(basket)


    }

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
                        <form>
                            <label htmlFor="email">E-mail </label>
                            <div id='email'>
                                <input type="email" value={user.email} name="email" />
                            </div>
                            <label htmlFor="home">Home Address </label>
                            <div id='homeadd'>
                                <input type="text" name="home" />
                            </div>
                            <label htmlFor="pincode">Pincode </label>
                            <div id='pin'>
                                <input type="text" name="pincode" />
                            </div>
                            <button onClick={addressSubmission}>Submit</button>

                        </form>
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <h3>Order Total : ₹{t.toFixed(2)}</h3>
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Payment