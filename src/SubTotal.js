import React from 'react'
import "./SubTotal.css"
// import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider";
import { useNavigate, Link } from "react-router-dom";


function SubTotal() {
    const navigate = useNavigate();
    let tot = 0;
    const [{ basket }, dispatch] = useStateValue();
    for (let i = 0; i < basket.length; i++) {
        tot += basket[i].price;
    }

    const paymentFunc = () => {
        if (basket.length != 0) {
            navigate('/payment');
        }
        else {
            navigate('/checkout');
            alert("No items in the basket")
        }
    }
    return (
        <div className='subtotal'>
            <p>
                Subtotal ({basket.length} items); <strong>₹{tot.toFixed(2)}</strong>
            </p>

            <small className='subtotal__gift'>
                <input type="checkbox" />
                This order contains a gift🎁
            </small>

            <button onClick={paymentFunc} className='subtotal__button'>Proceed to Checkout </button>
        </div>
    )
}

export default SubTotal