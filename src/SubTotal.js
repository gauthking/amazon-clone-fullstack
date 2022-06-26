import React from 'react'
import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider";


function SubTotal() {
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

            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal