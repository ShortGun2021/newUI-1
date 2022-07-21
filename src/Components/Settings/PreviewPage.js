import React from 'react'
import {AiFillEye} from 'react-icons/ai'

const PreviewPage = () => {
  return (
    <>
    <div className="container"
    style={{marginTop:"10%"}}>
        <button type="button" className="btn btn-light" style={{
            border: "0.5px solid #8A8A8A",
            borderRadius: "9px"
        }}><AiFillEye className="m-1"/>Preview</button>
    </div>
    </>
  )
}

export default PreviewPage