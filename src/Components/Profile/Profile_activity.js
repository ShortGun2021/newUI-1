import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, Spinner, Table } from 'react-bootstrap'
import '../Styles/ProfilePageStyles/profileActivity.css'

const activityData = [
  {
    nftName: {
      img: 'https://cdn.vox-cdn.com/thumbor/UTtu-SxVJl1_i3uYqTYMZaKcPgQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23343420/unnamed.png',
      name: 'Rugby',
      nftcode: 'Rugby#123',
    },
    price: '----',
    quantity: 3,
    from: 'TeamRugbyoff...',
    to: 'TeamRugbyoff...',
    time: '2 Months Ago',
    status: 'Transfer',
  },
  {
    nftName: {
      img: 'https://cdn.vox-cdn.com/thumbor/UTtu-SxVJl1_i3uYqTYMZaKcPgQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23343420/unnamed.png',
      name: 'Rugby',
      nftcode: 'Rugby#123',
    },
    price: '----',
    quantity: 3,
    from: 'TeamRugbyoff...',
    to: 'TeamRugbyoff...',
    time: '2 Months Ago',
    status: 'Transfer',
  },
  {
    nftName: {
      img: 'https://cdn.vox-cdn.com/thumbor/UTtu-SxVJl1_i3uYqTYMZaKcPgQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23343420/unnamed.png',
      name: 'Rugby',
      nftcode: 'Rugby#123',
    },
    price: '----',
    quantity: 3,
    from: 'TeamRugbyoff...',
    to: 'TeamRugbyoff...',
    time: '2 Months Ago',
    status: 'Transfer',
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
      <td style={{ color: '#636363' }}>----</td>
      <td style={{ color: '#636363' }}>3</td>
      <td style={{ color: '#6739B7' }}>
        <b>TeamRugbyoff...</b>
      </td>
      <td style={{ color: '#6739B7' }}>
        <b>TeamRugbyoff...</b>
      </td>
      <td style={{ color: '#636363' }}>2 Months Ago</td>
      <td style={{ color: '#2B2B2B' }}>Transfer</td>
    </tr>
  )
}

function Profile_activity() {
  const [nftData, setNftData] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const fetchNtfs = async () => {
    setisLoading(true)
    const res = await axios.get(
      'https://shortgun-backend.herokuapp.com/nft/getNFTs'
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
            style={{
              borderCollapse: 'separate',
              borderSpacing: '0 10px',
            }}
          >
            <thead style={{ borderBottom: '1px solid #CFCFCF' }}>
              <tr style={{ lineHeight: '38px' }}>
                <th>NFT Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Status</th>
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

export default Profile_activity
