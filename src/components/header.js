import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
<div>
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={(require('../images/logo-designcode.svg'))} width="30"/></Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/call"><button>Call</button></Link>
    </div>
  </div>
</div>
)

export default Header
