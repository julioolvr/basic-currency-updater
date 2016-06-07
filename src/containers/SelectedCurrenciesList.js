import { connect } from 'react-redux'

import CurrenciesList from '../components/CurrenciesList.jsx'

export default connect(
  ({ availableCurrencies, selectedCurrencies }) => ({
    allCurrencies: availableCurrencies,
    selectedCurrencies
  })
)(CurrenciesList)
