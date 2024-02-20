// Write your JS code here
import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {currency} = this.props
    const {currencyName, currencyLogo, usdValue, euroValue} = currency
    return (
      <li
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{marginLeft: '16px', marginRight: '16px', display: 'flex'}}>
          <img
            src={currencyLogo}
            alt={currencyName}
            style={{width: '50px', borderRadius: '25px', marginRight: '8px'}}
          />
          <p>{currencyName}</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p>{usdValue}</p>
          <p style={{marginLeft: '36px', marginRight: '16px'}}>{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
