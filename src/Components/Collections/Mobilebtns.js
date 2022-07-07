import React from 'react'
import { Button } from 'react-bootstrap'
import { BsFillShareFill } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'

function Mobilebtns() {
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
          right: 0,
        }}
      >
        <Button
          variant="link"
          className="shadow-none"
          style={{
            display: 'inline-block',
            width: '20px',
          }}
        >
          <FaDiscord style={{ color: 'black' }} />
        </Button>
        <Button
          variant="link"
          className="shadow-none"
          style={{ display: 'inline-block', width: '30px' }}
        >
          <BsFillShareFill style={{ color: 'black' }} />
        </Button>
      </div>
    </div>
  )
}

export default Mobilebtns
