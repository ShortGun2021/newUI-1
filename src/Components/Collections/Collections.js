import React, { useState } from 'react'

import {
  Card,
  Button,
  Container,
  Col,
  Row,
  Image,
  Form,
  ButtonGroup,
} from 'react-bootstrap'
import { AiOutlineFileDone } from 'react-icons/ai'
import { GrAdd } from 'react-icons/gr'
import { BsFillShareFill, BsGrid } from 'react-icons/bs'
import { MdOutlineFlag } from 'react-icons/md'
import { FiLink2 } from 'react-icons/fi'
import { IoReload } from 'react-icons/io5'
import { BsListUl } from 'react-icons/bs'
import { TbGridDots } from 'react-icons/tb'
import { MdFavorite } from 'react-icons/md'
import NFTNavbar from '../Homepage/NFTNavbar'
import CollectionCards from './CollectionCards'
import '../Styles/CollectionPageStyles/collections.css'
import Desktopbtns from './Desktopbtns'
import Mobilebtns from './Mobilebtns'
import { FaDiscord } from 'react-icons/fa'

require('bootstrap/dist/css/bootstrap.min.css')

const profile = {
  coverimg: 'https://wallpapercave.com/wp/wp3421912.jpg',
  profileimg:
    'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  collectionName: 'Ape Collectibles',
  createdBy: '6F73E4',
  items: '6.8K',
  owners: '4.5K',
  floorPrice: '0.684',
  volumeTraded: '0.54K',
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
}

export default function Collections() {
  const [Btnname, setBtnname] = useState('All Categories')
  return (
    <>
      <div style={{ fontFamily: 'Poppins' }}>
        <div className="cover h-25 border">
          <img className="image" src={profile.coverimg} alt="cover photo" />
        </div>
        <div className="desktop-collections">
          <div className="collections-share ">
            <Desktopbtns />
          </div>
        </div>
        <div className="mobile-collections">
          <div className="collections-share ">
            <Mobilebtns />
          </div>
        </div>

        <NFTNavbar />
        <Image className="pic" src={profile.profileimg} alt="profile" />
        <div
          style={{ position: 'absolute', marginTop: '280px', width: '100%' }}
        >
          <div style={{ textAlign: 'center' }}>
            <h2 className="name" style={{ fontWeight: '600' }}>
              {profile.collectionName}
            </h2>
            <p style={{ fontSize: '16px', color: ' #636363 ' }}>
              Created by{' '}
              <span style={{ color: '#6739B7' }}>{profile.createdBy}</span>{' '}
            </p>
            <Container
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                height: '90px',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  border: '1px solid #CFCFCF',
                  width: '130px',
                  borderRadius: '7px 0 0 7px',
                }}
              >
                <h4 style={{ marginTop: '16px', fontWeight: '500' }}>
                  {profile.items}
                </h4>
                <p style={{ color: '#8A8A8A' }}>items</p>
              </div>
              <div
                style={{
                  display: 'inline-block',
                  border: '1px solid #CFCFCF',

                  width: '130px',
                }}
              >
                <h4 style={{ marginTop: '16px', fontWeight: '500' }}>
                  {profile.owners}
                </h4>
                <p style={{ color: '#8A8A8A' }}>owners</p>
              </div>
              <div
                style={{
                  display: 'inline-block',
                  border: '1px solid #CFCFCF',
                  width: '130px',
                }}
              >
                <h4 style={{ marginTop: '16px', fontWeight: '500' }}>
                  {profile.floorPrice}
                </h4>
                <p style={{ color: '#8A8A8A', fontSize: '16px' }}>
                  floor price
                </p>
              </div>
              <div
                style={{
                  display: 'inline-block',
                  border: '1px solid #CFCFCF',
                  width: '130px',
                  borderRadius: '0 7px 7px 0',
                }}
              >
                <h4 style={{ marginTop: '16px', fontWeight: '500' }}>
                  {profile.volumeTraded}
                </h4>
                <p style={{ color: '#8A8A8A' }}>volume traded</p>
              </div>
            </Container>
            <div className="mt-3 border-top mb-4">
              <p
                className=""
                style={{ width: '50%', margin: '10px auto 0 auto' }}
              >
                {profile.bio}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center border-bottom">
            <ButtonGroup className="btns" style={{ borderRadius: 0 }}>
              <Button
                className="profilebtns shadow-none"
                name="Collected"
                onClick={() => setBtnname('Collected')}
                style={
                  Btnname === 'Collected'
                    ? {
                        color: '#6739B7',
                        borderBottom: '2px solid #6739B7',
                        borderRadius: 0,
                      }
                    : { color: '#636363' }
                }
                variant="link"
              >
                <MdFavorite /> Items
              </Button>
              <Button
                className="profilebtns shadow-none"
                name="Created"
                onClick={() => setBtnname('Created')}
                style={
                  Btnname === 'Created'
                    ? {
                        color: '#6739B7',
                        borderBottom: '2px solid #6739B7',
                        borderRadius: 0,
                      }
                    : { color: '#636363' }
                }
                variant="link"
              >
                <BsListUl /> Activity
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <CollectionCards />
          </div>
        </div>
      </div>
    </>
  )
}
