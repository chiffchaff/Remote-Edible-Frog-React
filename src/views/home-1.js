import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home-1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Remote Edible Frog</title>
        <meta property="og:title" content="Remote Edible Frog" />
      </Helmet>
      <img
        alt="pastedImage"
        src="/playground_assets/pastedimage-91m8-800w.png"
        className="home1-pasted-image"
      />
      <Link to="/codat-connect-2" className="home1-navlink button">
        Enhance Offer
      </Link>
    </div>
  )
}

export default Home1
