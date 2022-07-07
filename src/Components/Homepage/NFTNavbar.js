import React from 'react'
import DesktopviewNav from './DesktopviewNav'
import MobileviewNav from './MobileviewNav'
import('../Styles/HomePageStyles/NFTNavbar.css')

require('bootstrap/dist/css/bootstrap.min.css')

export default function App() {
  return (
    <>
      <div className="desktop">
        <DesktopviewNav />
      </div>{' '}
      <div className="mobile">
        <MobileviewNav />
      </div>
    </>
  )
}
