import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './codat-connect-3.css'

const CodatConnect3 = (props) => {
  return (
    <div className="codat-connect3-container">
      <Helmet>
        <title>Codat-Connect-3 - Remote Edible Frog</title>
        <meta
          property="og:title"
          content="Codat-Connect-3 - Remote Edible Frog"
        />
      </Helmet>
      <Link to="/codat-login-to-xero-4" className="codat-connect3-navlink">
        <img
          alt="pastedImage"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b8dcf006-65d2-4040-bb0e-40e1649aa684/07f30d56-3ebe-4193-aaf3-eb0acb84c8be?org_if_sml=191309"
          className="codat-connect3-pasted-image"
        />
      </Link>
    </div>
  )
}

export default CodatConnect3
