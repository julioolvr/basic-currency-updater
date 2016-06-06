import React from 'react'
import { connect } from 'react-redux'

import CurrencyAmount from '../components/CurrencyAmount.jsx'

const SelectedCurrenciesList = ({ selectedCurrencies, availableCurrencies }) => {
  const currenciesList = selectedCurrencies.map(currency => {
    return (
      <li key={currency.code}>
        <CurrencyAmount currency={currency.code}
                        currencies={availableCurrencies}
                        rate={currency.rate}
                        amount={currency.amount} />
      </li>
    )
  })

  return (<ul>
    {currenciesList}
  </ul>)
}

SelectedCurrenciesList.propTypes = {
  selectedCurrencies: React.PropTypes.array,
  availableCurrencies: React.PropTypes.array
}

export default connect(
  ({ availableCurrencies, selectedCurrencies }) => ({ availableCurrencies, selectedCurrencies })
)(SelectedCurrenciesList)
