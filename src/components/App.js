import React, { useEffect, useState } from 'react'
import CurrencySelector from './CurrencySelector'
import DisplayData from './DisplayData'
import { AppContainer, Heading } from './StyledComponents'

const App = () => {
  //define the state using hooks = constructor for class
  const initialCurrency = "AUD"
  const [currency, setCurrency] = useState(initialCurrency)
  const [bitcoinData, setBitcoinData] = useState({})
  const url = "https://api.coindesk.com/v1/bpi/historical/close.json?currency="

  useEffect( () => {
    console.log("useEffect in action!")
    fetch(`${url}${currency}`)
    .then(response => response.json())
    .then(data => setBitcoinData(data.bpi))
    .catch(e => console.log(e))
    }
    ,
    [currency]
  )

  const handleCurrency = (value) => {
    setCurrency(value)
  }


  return (
    <AppContainer>
      <Heading>Currency Converter</Heading>
      <CurrencySelector currency={currency} handleCurrency={handleCurrency} />
      <DisplayData bitcoinData={bitcoinData}/>
    </AppContainer>
  )
}

export default App

