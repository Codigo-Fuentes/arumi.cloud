import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import arumiLogo from '../../images/arumi-filled.svg'
import spotifyLogo from '../../images/spotify.png'
import venmoLogo from '../../images/venmo.png'
import instagramLogo from '../../images/instagram.png'

import './index.css'

const Header = ({ siteTitle }) => (
  <div>
    <nav>
      <div id="logo-container">
        <Link to="/">
          <img src={arumiLogo} id="arumi-logo"/>
          {/* {siteTitle} */}
        </Link>
      </div>
      <ul className="page-links">
        <Link to="../../../music"><li>MUSIC</li></Link>
        <Link to="../../../shows"><li>SHOWS</li></Link>
        <Link to="../../../videos"><li>VIDEOS</li></Link>
        <Link to="../../../journal"><li>JOURNAL</li></Link>
        <Link to="../../../contact"><li>CONTACT</li></Link>
      </ul>
      <div className="icons">
        <img src={instagramLogo}/>
        <img src={spotifyLogo}/>
        <img src={venmoLogo}/>
      </div>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Arumi`,
}

export default Header
