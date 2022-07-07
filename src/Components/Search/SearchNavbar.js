import React from 'react'
import DesktopviewNav from './SearchDesktopviewNav'
import SearchMobileviewNav from './SearchMobileviewNav'
import('../Styles/SearchPageStyles/SearchPanel.css')

require('bootstrap/dist/css/bootstrap.min.css')

export default function App() {
  return (
    <>
      <div className="desktop">
        <DesktopviewNav />
      </div>{' '}
      <div className="mobile">
        <SearchMobileviewNav />
      </div>
    </>
  )
}
