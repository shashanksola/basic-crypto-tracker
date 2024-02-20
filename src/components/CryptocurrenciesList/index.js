// Write your JS code here
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  tableStyles = {color: 'white', border: '2px solid #00eff7', width: '60vw'}

  headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#092e33',
  }

  render() {
    const {cryptoData} = this.props

    return (
      <div style={this.tableStyles} className="table-container">
        <div style={this.headerStyles}>
          <div style={{marginLeft: '16px', marginRight: '16px'}}>
            <p>Coin Type</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>USD</p>
            <p style={{marginLeft: '36px', marginRight: '16px'}}>EURO</p>
          </div>
        </div>
        <ul>
          {cryptoData.map(currency => (
            <CryptocurrencyItem key={currency.id} currency={currency} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
