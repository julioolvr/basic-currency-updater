import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import currencyUpdater from './reducers'
import ToCurrencySelector from './containers/ToCurrencySelector.jsx'
import SelectedCurrenciesList from './containers/SelectedCurrenciesList.jsx'

const store = createStore(currencyUpdater)

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        From:
        <ul>
          <SelectedCurrenciesList />
        </ul>
        <ToCurrencySelector />
      </div>
    </Provider>
  )
}

const BoundApp = () => {
  return <App />
}

export default BoundApp
