import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { BsFillShareFill } from 'react-icons/bs'
import { FiLink2 } from 'react-icons/fi'
import { IoReload } from 'react-icons/io5'
import { MdOutlineFlag } from 'react-icons/md'

function Desktopbtns() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          position: 'absolute',
          right: 50,
        }}
      >
        <Button
          className=" shadow-none"
          style={{
            textDecoration: 'none',
            color: '#707A83',
            border: '1px solid #CFCFCF',
            marginRight: '25px',
          }}
          variant="link"
        >
          <span
            style={{
              height: '1px',
              fontSize: '20px',
              fontWeight: '500',
              marginRight: '5px',
            }}
          >
            +
          </span>{' '}
          Watchlist
        </Button>
        <ButtonGroup
          className="me-2"
          aria-label="First group"
          style={{ color: 'white' }}
        >
          <Button variant="light" style={{ border: '1px solid #CFCFCF' }}>
            {' '}
            <IoReload />{' '}
          </Button>{' '}
          <Button variant="light" style={{ border: '1px solid #CFCFCF' }}>
            {' '}
            <FiLink2 />{' '}
          </Button>{' '}
          <Button variant="light" style={{ border: '1px solid #CFCFCF' }}>
            {' '}
            <BsFillShareFill />{' '}
          </Button>{' '}
          <Button variant="light" style={{ border: '1px solid #CFCFCF' }}>
            {' '}
            <MdOutlineFlag />{' '}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Desktopbtns
