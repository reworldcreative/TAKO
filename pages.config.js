import { resolve } from 'path'

const pages = [
  {
    name: 'index',
    path: resolve(__dirname, './index.html'),
  },
  {
    name: 'checkout',
    path: resolve(__dirname, './checkout.html'),
  },
]

export default pages
