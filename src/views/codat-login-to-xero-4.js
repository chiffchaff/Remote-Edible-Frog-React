import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './codat-login-to-xero-4.css'

const CodatLoginToXero4 = (props) => {
  return (
    <div className="codat-login-to-xero4-container">
      <Helmet>
        <title>Codat-LoginToXero-4 - Remote Edible Frog</title>
        <meta
          property="og:title"
          content="Codat-LoginToXero-4 - Remote Edible Frog"
        />
      </Helmet>
      <img
        alt="pastedImage"
        src="/playground_assets/pastedimage-r1-300h.png"
        className="codat-login-to-xero4-pasted-image"
      />
      <label className="codat-login-to-xero4-text">
        <span className="codat-login-to-xero4-text01">Login to Xero</span>
        <br></br>
      </label>
      <label className="codat-login-to-xero4-text03">
        <span className="codat-login-to-xero4-text04">Login to Xero</span>
        <br></br>
      </label>
      <label className="codat-login-to-xero4-text06">
        <span className="codat-login-to-xero4-text07">Password</span>
        <br></br>
      </label>
      <label className="codat-login-to-xero4-text09">
        <span className="codat-login-to-xero4-text10">User Name</span>
        <br></br>
      </label>
      <input
        type="text"
        placeholder="placeholder"
        className="codat-login-to-xero4-textinput input"
      />
      <input
        type="text"
        placeholder="placeholder"
        className="codat-login-to-xero4-textinput1 input"
      />
      <input
        type="text"
        placeholder="placeholder"
        className="codat-login-to-xero4-textinput2 input"
      />
      <Link
        to="/codat-consent-for-access-5"
        className="codat-login-to-xero4-navlink button"
      >
        Login
      </Link>
    </div>
  )
}

export default CodatLoginToXero4
