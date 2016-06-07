import React from 'react'

import CurrencySelector from './CurrencySelector.jsx'

const ToCurrency = ({ toCurrency, availableCurrencies, changeToCurrency }) => {
  return <div>
    To: <CurrencySelector
           currency={toCurrency.code}
           currencies={availableCurrencies}
           onChange={newCurrencyCode => changeToCurrency({ code: newCurrencyCode })} />, {toCurrency.code}1234.45
  </div>
}

ToCurrency.propTypes = {
  toCurrency: React.PropTypes.object,
  availableCurrencies: React.PropTypes.array,
  changeToCurrency: React.PropTypes.func
}

export default ToCurrency
