// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoData: {}}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({isLoading: false, cryptoData: updatedData})
  }

  render() {
    const {isLoading, cryptoData} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="bg-container" data-testid="loader">
            <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="home-container">
            <h1 style={{color: '#00e7ff'}}>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <CryptocurrenciesList cryptoData={cryptoData} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
