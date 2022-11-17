import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './codat-consent-for-access-5.css'

const CodatConsentForAccess5 = (props) => {
  return (
    <div className="codat-consent-for-access5-container">
      <Helmet>
        <title>Codat-ConsentForAccess-5 - Remote Edible Frog</title>
        <meta
          property="og:title"
          content="Codat-ConsentForAccess-5 - Remote Edible Frog"
        />
      </Helmet>
      <Link
        to="/codat-fetch-progress-51"
        className="codat-consent-for-access5-navlink"
      >
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-z8yq-800w.png"
          className="codat-consent-for-access5-pasted-image"
        />
      </Link>
    </div>
  )
}

export default CodatConsentForAccess5
