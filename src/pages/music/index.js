import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import arumiMusicOne from '../../images/arumi-music1.png'
import arumiMusicTwo from '../../images/arumi-music2.png'
import arumiMusicThree from '../../images/arumi-music3.png'
import musicBackgroundImage from '../../images/arumi-stage.png'
import './index.css'

const Music = () => (
  <Layout>
    <SEO title="Music" />
    <img src={musicBackgroundImage} id="music-bg-image"/>
    <div className="tracks-container">
      <img src={arumiMusicOne}/>
      <img src={arumiMusicTwo}/>
      <img src={arumiMusicThree}/>
    </div>
  </Layout>
)

export default Music