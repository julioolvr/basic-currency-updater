import React from 'react'

import CurrencySelector from './CurrencySelector.jsx'

const ToCurrency = ({ toCurrency, availableCurrencies }) => {
  return <div>
    To: <CurrencySelector currency={toCurrency.code} currencies={availableCurrencies} />, ARS1234.45
  </div>
}

ToCurrency.propTypes = {
  toCurrency: React.PropTypes.object,
  availableCurrencies: React.PropTypes.array
}

export default ToCurrency
