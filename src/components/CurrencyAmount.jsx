import React from 'react'

import CurrencySelector from './CurrencySelector.jsx'

export const CurrencyAmount = ({ currency, currencies, rate, amount }) => {
  return (
    <div>
      <CurrencySelector currencies={currencies} currency={currency}></CurrencySelector>
      <input type="number" value={rate}></input>
      <input type="number" value={amount}></input>
    </div>
  )
}

CurrencyAmount.propTypes = {
  currency: React.PropTypes.string,
  currencies: React.PropTypes.arrayOf(React.PropTypes.string),
  rate: React.PropTypes.number,
  amount: React.PropTypes.number
}

export default CurrencyAmount
