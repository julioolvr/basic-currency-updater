import { connect } from 'react-redux'

import ToCurrency from '../components/ToCurrency.jsx'

export default connect(
  ({ availableCurrencies, toCurrency }) => ({ availableCurrencies, toCurrency })
)(ToCurrency)
