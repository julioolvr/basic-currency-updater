import React from 'react'

import CurrencySelector from './components/CurrencySelector.jsx'
import CurrencyAmount from './components/CurrencyAmount.jsx'

const initialState = {
  availableCurrencies: ['USD', 'GBP', 'EUR', 'ARS'],
  fromCurrencies: [
    { code: 'USD', rate: 0.96, amount: 25 },
    { code: 'GBP', rate: 0.8, amount: 30 },
    { code: 'EUR', rate: 0.7, amount: 50 }
  ],
  toCurrency: { code: 'ARS' }
}

export const App = ({ availableCurrencies, fromCurrencies, toCurrency }) => {
  const currenciesList = fromCurrencies.map(currency => {
    return (
      <li>
        <CurrencyAmount currency={currency.code}
                        currencies={availableCurrencies}
                        rate={currency.rate}
                        amount={currency.amount} />
      </li>
    )
  })

  return (
    <div>
      From:
      <ul>
        {currenciesList}
      </ul>
      <div>
        To: <CurrencySelector currency={toCurrency.code} currencies={availableCurrencies} />, ARS1234.45
      </div>
    </div>
  )
}

const currencyType = React.PropTypes.shape({
  code: React.PropTypes.string,
  rate: React.PropTypes.number,
  amount: React.PropTypes.number
})

App.propTypes = {
  availableCurrencies: React.PropTypes.arrayOf(React.PropTypes.string),
  fromCurrencies: React.PropTypes.arrayOf(currencyType),
  toCurrency: React.PropTypes.shape({ code: React.PropTypes.string })
}

const BoundApp = () => {
  return <App availableCurrencies={initialState.availableCurrencies}
              fromCurrencies={initialState.fromCurrencies}
              toCurrency={initialState.toCurrency} />
}

export default BoundApp
