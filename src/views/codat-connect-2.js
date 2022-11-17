import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './codat-connect-2.css'

const CodatConnect2 = (props) => {
  return (
    <div className="codat-connect2-container">
      <Helmet>
        <title>Codat-Connect-2 - Remote Edible Frog</title>
        <meta
          property="og:title"
          content="Codat-Connect-2 - Remote Edible Frog"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b8dcf006-65d2-4040-bb0e-40e1649aa684/a6ba396d-42be-42f3-adab-082e8c12c759?org_if_sml=1"
        />
      </Helmet>
      <img
        alt="pastedImage"
        src="/playground_assets/pastedimage-3v5i-200h.png"
        className="codat-connect2-pasted-image"
      />
      <Link to="/codat-connect-3" className="codat-connect2-navlink button">
        Connect via Codat
      </Link>
      <label className="codat-connect2-text">
        <span className="codat-connect2-text1">
          You can choose to share your accounting data via Codat
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="codat-connect2-text2">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className="codat-connect2-text3"></br>
        <span className="codat-connect2-text4">and get an enhanced offer</span>
        <br></br>
      </label>
      <img
        alt="pastedImage"
        src="/playground_assets/pastedimage-tulk-700w.png"
        className="codat-connect2-pasted-image1"
      />
    </div>
  )
}

export default CodatConnect2
