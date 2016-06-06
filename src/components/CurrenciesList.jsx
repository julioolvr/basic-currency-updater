import React from 'react'

import CurrencyAmount from './CurrencyAmount.jsx'

const CurrenciesList = ({ selectedCurrencies, availableCurrencies }) => {
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

CurrenciesList.propTypes = {
  selectedCurrencies: React.PropTypes.array,
  availableCurrencies: React.PropTypes.array
}

export default CurrenciesList
