import React from 'react'
import { Link, } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import './index.css'
import backgroundVideo from "../images/arumi-background.mp4"
import arumiLogo from "../images/arumi-outlined.svg"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <video src={backgroundVideo} autoPlay muted loop id="background-video"/>
      <div className="logo-container-shows">
        <img src={arumiLogo}/>
      </div>
    </Layout>
)

export default IndexPage
