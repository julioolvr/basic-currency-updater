import React from 'react'

export const CurrencySelector = ({ currency, currencies }) => {
  return (
    <select value={currency}>
      {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
    </select>
  )
}

CurrencySelector.propTypes = {
  currency: React.PropTypes.string,
  currencies: React.PropTypes.arrayOf(React.PropTypes.string)
}

export default CurrencySelector
