import React from 'react'

import CurrencyAmount from './CurrencyAmount.jsx'

const CurrenciesList = ({ selectedCurrencies, allCurrencies }) => {
  const currenciesList = selectedCurrencies.map(currency => {
    let remainingCurrencies = new Set(allCurrencies)
    selectedCurrencies.forEach(currency => remainingCurrencies.delete(currency.code))

    return (
      <li key={currency.code}>
        <CurrencyAmount currency={currency.code}
                        currencies={[currency.code].concat(Array.from(remainingCurrencies))}
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
  allCurrencies: React.PropTypes.array
}

export default CurrenciesList
