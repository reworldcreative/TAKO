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
  {
    name: 'support',
    path: resolve(__dirname, './support.html'),
  },
  {
    name: 'category-for-weapon',
    path: resolve(__dirname, './category-for-weapon.html'),
  },
  {
    name: 'category-medicine',
    path: resolve(__dirname, './category-medicine.html'),
  },
  {
    name: 'category-walkie-talkie',
    path: resolve(__dirname, './category-walkie-talkie.html'),
  },
  {
    name: 'category-reb',
    path: resolve(__dirname, './category-reb.html'),
  },
  {
    name: 'category-drones',
    path: resolve(__dirname, './category-drones.html'),
  },
]

export default pages
