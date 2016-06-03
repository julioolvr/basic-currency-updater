import React from 'react'

import CurrencySelector from './components/CurrencySelector.jsx'

const AVAILABLE_CURRENCIES = ['USD', 'GBP', 'EUR', 'ARS']

export const App = () => {
  return (
    <div>
      <div>
        From:
        <ul>
          <li>
            <div>
              <CurrencySelector currency="USD" currencies={AVAILABLE_CURRENCIES}></CurrencySelector>
              <input type="number" value="0.96"></input>
              <input type="number" value="25"></input>
            </div>
          </li>
          <li>
            <div>
              <CurrencySelector currency="GBP" currencies={AVAILABLE_CURRENCIES}></CurrencySelector>
              <input type="number" value="0.8"></input>
              <input type="number" value="30"></input>
            </div>
          </li>
          <li>
            <div>
              <CurrencySelector currency="EUR" currencies={AVAILABLE_CURRENCIES}></CurrencySelector>
              <input type="number" value="0.7"></input>
              <input type="number" value="50"></input>
            </div>
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
