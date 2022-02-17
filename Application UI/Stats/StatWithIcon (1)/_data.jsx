import { FaBitcoin, FaDollarSign, FaEthereum } from 'react-icons/fa'
import { SiLitecoin } from 'react-icons/si'

export const icons = {
  BTC: {
    icon: FaBitcoin,
    color: '#f2a900',
  },
  BCH: {
    icon: FaDollarSign,
    color: '#ee8c28',
  },
  ETH: {
    icon: FaEthereum,
    color: '#3c3c3d',
  },
  LTC: {
    icon: SiLitecoin,
    color: '#006097',
  },
}
export const data = [
  {
    symbol: 'BTC',
    label: 'Bitcoin',
    value: 5604.16,
    change: {
      value: 24.98,
      percent: -0.73,
    },
    currency: '$',
  },
  {
    symbol: 'BCH',
    label: 'Bitcoin Cash',
    value: 391.59,
    change: {
      value: 30.98,
      percent: +1.84,
    },
    currency: '$',
  },
  {
    symbol: 'ETH',
    label: 'Ethereum',
    value: 177.95,
    change: {
      value: 12.4,
      percent: -0.72,
    },
    currency: '$',
  },
  {
    symbol: 'LTC',
    label: 'Litecoin',
    value: 46.43,
    change: {
      value: 33,
      percent: 1.82,
    },
    currency: '$',
  },
]
