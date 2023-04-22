import React from 'react'
import Products from '../Shop/Products'
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import Search from '../search/SearchModal'

export default function ProductPage() {
  return <>
  <Header/>
  <Navigation/>
  <Search/>
  <Products/>
  </>
}
