import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, Spinner, Table } from 'react-bootstrap'
import '../Styles/ProfilePageStyles/profileActivity.css'
const { REACT_APP_SERVER_URL } = process.env;

const data = [
  {
    nftName: {
      img: 'https://cdn.vox-cdn.com/thumbor/UTtu-SxVJl1_i3uYqTYMZaKcPgQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23343420/unnamed.png',
      name: 'Rugby',
      nftcode: 'Rugby#123',
    },
    unitprice: 0.45,
    USDunitPrice: 105,
    floorDifference: '45% Below',
    to: 'TeamRugbyoff...',
    expiration: 'About 20 days',
    made: '1 Month Ago',
  },
  {
    nftName: {
      img: 'https://cdn.vox-cdn.com/thumbor/UTtu-SxVJl1_i3uYqTYMZaKcPgQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23343420/unnamed.png',
      name: 'Rugby',
      nftcode: 'Rugby#123',
    },
    unitprice: 0.45,
    USDunitPrice: 105,
    floorDifference: '45% Below',
    to: 'TeamRugbyoff...',
    expiration: 'About 20 days',
    made: '1 Month Ago',
  },
  {
    nftName: {
      img: 'https://cdn.vox-cdn.com/thumbor/UTtu-SxVJl1_i3uYqTYMZaKcPgQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23343420/unnamed.png',
      name: 'Rugby',
      nftcode: 'Rugby#123',
    },
    unitprice: 0.45,
    USDunitPrice: 105,
    floorDifference: '45% Below',
    to: 'TeamRugbyoff...',
    expiration: 'About 20 days',
    made: '1 Month Ago',
  },
]

const RenderData = ({ nftData, card }) => {
  return (
    <tr
      style={{
        lineHeight: '50px',
        backgroundColor: 'rgba(103, 57, 183, 0.03)',
      }}
    >
      <td>
        {' '}
        <div style={{ display: 'inline-block' }}>
          <Image
            style={{ borderRadius: '4px' }}
            width={'50px'}
            height={'50px'}
            src={`data:image/png;base64,${card.nftImgBase64}`}
          />{' '}
        </div>
        <div style={{ margin: '5px 0 0 10px', display: 'inline-block' }}>
          <p style={{ textAlign: 'left', lineHeight: '10px' }}>Rugby</p>
          <p style={{ margin: '10px 0 0 0', lineHeight: '0' }}>
            <b>Rugby#123</b>
          </p>
        </div>
      </td>
      <td style={{ color: '#636363' }}>
        <Image
          width={'16px'}
          height={'16px'}
          src="https://coinalpha.app/images/empty-token-solana.png"
        />{' '}
        0.45
      </td>
      <td style={{ color: '#636363' }}>$105</td>
      <td style={{ color: '#636363' }}>45% Below</td>
      <td
        style={{
          color: '#6739B7',
        }}
      >
        <b>TeamRugbyoff...</b>
      </td>
      <td style={{ color: '#636363' }}>About 20 days</td>
      <td style={{ color: '#636363' }}>1 Month Ago</td>
    </tr>
  )
}

function Profile_offers() {
  const [nftData, setNftData] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const fetchNtfs = async () => {
    setisLoading(true)
    const res = await axios.get(
      `${REACT_APP_SERVER_URL}/nft/getNFTs`
    )
    setNftData(res.data)
    setisLoading(false)
  }
  useEffect(() => {
    fetchNtfs()
  }, [])
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Spinner
            animation="border"
            style={{
              fontSize: '50px',
              color: '#6739B7',
              width: '100px',
              height: '100px',
              margin: '50px auto 40px auto',
            }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="table">
          <Table
            responsive="sm"
            className="table"
            style={{
              border: '1px solid #CFCFCF',
              marginTop: '10px',
              borderCollapse: 'separate',
              borderSpacing: '0 10px',
              backgroundColor: '#F8F8F8',
            }}
          >
            <thead>
              <tr style={{ lineHeight: '18px' }}>
                <th style={{ color: '#636363' }}>NFT Name</th>
                <th style={{ color: '#636363' }}>Unit Price</th>
                <th style={{ color: '#636363' }}>USD Unit Price</th>
                <th style={{ color: '#636363' }}>Floor difference </th>
                <th style={{ color: '#636363' }}>To</th>
                <th style={{ color: '#636363' }}>Expiration</th>
                <th style={{ color: '#636363' }}>Made</th>
              </tr>
            </thead>
            <tbody style={{ border: '0px solid white' }}>
              {nftData.map((card, index) => {
                return <RenderData key={index} card={card} nftData={nftData} />
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  )
}

export default Profile_offers
