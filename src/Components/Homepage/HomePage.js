import React from 'react'
import NFTNavbar from './NFTNavbar'
import DiscoverSection from './DiscoverSection'
import CardDisplay from './CardDisplay'
import Banner from './Banner'
import Categories from './Categories'
import LastSection from './LastSection'
import NFTCarousel from './NFTCarousel'
import TopCollections from './TopCollection'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
    <NFTNavbar/>
    <DiscoverSection/>
    <CardDisplay/>
    <Banner/>
    <NFTCarousel/>
    <TopCollections/>
    <Categories/>
    <LastSection/>
    <Footer/>
    </>
  )
}

export default HomePage