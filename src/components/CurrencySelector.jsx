import React from 'react'

export const CurrencySelector = ({ currency, currencies, onChange }) => {
  return (
    <select value={currency} onChange={e => onChange(e.target.value)}>
      {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
    </select>
  )
}

CurrencySelector.propTypes = {
  currency: React.PropTypes.string,
  currencies: React.PropTypes.arrayOf(React.PropTypes.string),
  onChange: React.PropTypes.func
}

export default CurrencySelector
