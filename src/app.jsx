import React from 'react'

import CurrencySelector from './components/CurrencySelector.jsx'
import CurrencyAmount from './components/CurrencyAmount.jsx'

const AVAILABLE_CURRENCIES = ['USD', 'GBP', 'EUR', 'ARS']

export const App = () => {
  return (
    <div>
      <div>
        From:
        <ul>
          <li>
            <CurrencyAmount currency="USD" currencies={AVAILABLE_CURRENCIES} rate="0.96" amount="25"></CurrencyAmount>
          </li>
          <li>
            <CurrencyAmount currency="GBP" currencies={AVAILABLE_CURRENCIES} rate="0.8" amount="30"></CurrencyAmount>
          </li>
          <li>
            <CurrencyAmount currency="EUR" currencies={AVAILABLE_CURRENCIES} rate="0.7" amount="50"></CurrencyAmount>
          </li>
        </ul>
        <div>
          To: <CurrencySelector currency="ARS" currencies={AVAILABLE_CURRENCIES}></CurrencySelector>, ARS1234.45
        </div>
      </div>
    </div>
  )
}

export default App
