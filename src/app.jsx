import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import currencyUpdater from './reducers'
import ToSelectedCurrency from './containers/ToSelectedCurrency'
import SelectedCurrenciesList from './containers/SelectedCurrenciesList'

const store = createStore(currencyUpdater)

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        From:
        <ul>
          <SelectedCurrenciesList />
        </ul>
        <ToSelectedCurrency />
      </div>
    </Provider>
  )
}

const BoundApp = () => {
  return <App />
}

export default BoundApp
