import React from 'react'

import CurrencyAmount from './CurrencyAmount.jsx'

const CurrenciesList = ({ selectedCurrencies, allCurrencies, changeSelectedCurrencyCode, changeSelectedCurrencyAmount, changeSelectedCurrencyRate }) => {
  const currenciesList = selectedCurrencies.map((currency, i) => {
    let remainingCurrencies = new Set(allCurrencies)
    selectedCurrencies.forEach(currency => remainingCurrencies.delete(currency.code))

    return (
      <li key={currency.code}>
        <CurrencyAmount currency={currency.code}
                        currencies={[currency.code].concat(Array.from(remainingCurrencies))}
                        rate={currency.rate}
                        amount={currency.amount}
                        onCurrencyChange={newCurrencyCode => changeSelectedCurrencyCode(i, newCurrencyCode)}
                        onAmountChange={newValue => changeSelectedCurrencyAmount(i, newValue)}
                        onRateChange={newValue => changeSelectedCurrencyRate(i, newValue)} />
      </li>
    )
  })

  return (<ul>
    {currenciesList}
  </ul>)
}

CurrenciesList.propTypes = {
  selectedCurrencies: React.PropTypes.array,
  allCurrencies: React.PropTypes.array,
  changeSelectedCurrencyCode: React.PropTypes.func,
  changeSelectedCurrencyAmount: React.PropTypes.func,
  changeSelectedCurrencyRate: React.PropTypes.func
}

export default CurrenciesList
