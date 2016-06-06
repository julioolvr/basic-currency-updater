import React from 'react'
import { connect } from 'react-redux'

import CurrencySelector from '../components/CurrencySelector.jsx'

const ToCurrencySelector = ({ toCurrency, availableCurrencies }) => {
  return <div>
    To: <CurrencySelector currency={toCurrency.code} currencies={availableCurrencies} />, ARS1234.45
  </div>
}

ToCurrencySelector.propTypes = {
  toCurrency: React.PropTypes.object,
  availableCurrencies: React.PropTypes.array
}

export default connect(
  ({ availableCurrencies, toCurrency }) => ({ availableCurrencies, toCurrency })
)(ToCurrencySelector)
