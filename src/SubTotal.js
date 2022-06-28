import React from 'react'
import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";


function SubTotal() {
    const navigate = useNavigate();
    let tot = 0;
    const [{ basket }, dispatch] = useStateValue();
    for (let i = 0; i < basket.length; i++) {
        tot += basket[i].price;
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items); <strong>${tot}</strong>
                        </p>

                        <small className='subtotal__gift'>
                            <input type="checkbox" />
                            This order contains a gift🎁
                        </small>


                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />

            <button onClick={e => navigate('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal