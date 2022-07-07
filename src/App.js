import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage'
import SearchPage from './Components/Search/SearchPage'
import CollectionsPage from './Components/Collections/Collections'
import ExplorePage from './Components/Explore/Explore'
import ProfilePage from './Components/Profile/Profile'
import CardIndex from './Components/NFTCard/CardIndex';
import NFTUpload from './Components/Upload/Upload.tsx';
import ConnectWallet from './Components/PhantomWallet/ConnectWallet.tsx';

const App = () => {
  return (
    <>
    {/* <HomePage/> */}
    {/* <SearchPage/> */}
    {/* <CardIndex/> */}
    {/* <ProfilePage/> */}
    {/* <ExplorePage/> */}
    {/* <CollectionsPage/> */}
    
    <Router>
           <Routes>
                 <Route exact path='/' element={<HomePage/>}></Route>
                 <Route exact path='/search' element={<SearchPage/>}></Route>
                 <Route exact path='/explore' element={<ExplorePage/>}></Route>
                 <Route exact path='/collections' element={<CollectionsPage/>}></Route>
                 <Route exact path='/profile' element={<ProfilePage/>}></Route>
                 <Route exact path='/nft-card' element={<CardIndex/>}></Route>
                 <Route exact path='/admin' element={<NFTUpload/>}></Route>
                 <Route exact path='/wallet' element={<ConnectWallet/>}></Route>
          </Routes>
       </Router>
    </>
  )
}

export default App