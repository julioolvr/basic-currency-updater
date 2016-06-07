import { connect } from 'react-redux'

import ToCurrency from '../components/ToCurrency.jsx'
import { changeToCurrency } from '../reducers/toCurrency'

export default connect(
  ({ availableCurrencies, toCurrency }) => ({ availableCurrencies, toCurrency }),
  { changeToCurrency }
)(ToCurrency)
