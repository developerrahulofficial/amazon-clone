import React from 'react'
import "./Subtotal.css"
import { useStateValue } from '../providers/StateProvider'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { getBasketTotal } from '../providers/reducer'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
       <CurrencyFormat
       renderText={(value) => (
        <p> Subtotal ({basket.length} item)<strong>{value}</strong></p>
       )} 
        
       decimalScale={2}
       value={getBasketTotal(basket)}
       displayType={"text"}
       thousandSeparator={true}
       prefix={"$"}
       />

     <button>Proceed To Checkout</button>

    </div>
  )
}

export default Subtotal
