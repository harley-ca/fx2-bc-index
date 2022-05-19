import currencies from '../data/supported-currencies.json'
import React, { useState } from 'react'


const CurrencySelector = () => {

    //define the state using hooks = constructor for class
    const initialCurrency = "AUD"
    const [currency, setCurrency] = useState(initialCurrency)

    const handleCurrency = (value) => {
        setCurrency(value)
    }

    return(
        <div>
            <span>Pick your country: </span>
            <select value={currency} onChange={(e) => {handleCurrency(e.target.value)}}>
                {currencies.map((obj) =>
                    <option key={obj.currency} value={obj.currency}>{obj.country} (${obj.currency})</option>
                )}
            </select>
        </div>
    )
}

export default CurrencySelector