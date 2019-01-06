import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import arumiLogo from '../images/arumi-outlined.svg'
import './shows.css'
import { useState, useEffect } from 'react';

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'gkevccs0e4ys',
  accessToken: '716250ce1a19249ed306e1080d13c33bcdc335930452794746bc8e6de048c3ee'
});

const Shows = () => {

  useEffect(() => {
    client.getEntries('upcomingShows').then((response) => console.log(response)).catch(console.error);

  }, []);

  return (
    <Layout>
      <SEO title="Shows" />
        <div className="svg-container">
          <img src={arumiLogo}/>
        </div>
        <div className="upcoming-dates-container">
          <div className="upcoming-dates-header row">
            <div className="title">UPCOMING DATES</div>
            <div className="bandsintown">BandsInTownLogo</div>
          </div>
          <div className="row one">
            <div className="date">SAT, OCT 27</div>
            <div className="venue">Sam Houston Race Park</div>
            <div className="city-state">Houston, TX</div>
            <button className="rsvp">RSVP</button>
            <button className="tickets">TICKETS</button>
          </div>
          <div className="row two">
            <div className="date">SAT, OCT 27</div>
            <div className="venue">Sam Houston Race Park</div>
            <div className="city-state">Houston, TX</div>
            <button className="rsvp">RSVP</button>
            <button className="tickets">TICKETS</button>
          </div>
          <div className="row three">
            <div className="date">SAT, OCT 27</div>
            <div className="venue">Sam Houston Race Park</div>
            <div className="city-state">Houston, TX</div>
            <button className="rsvp">RSVP</button>
            <button className="tickets">TICKETS</button>
          </div>
          <div className="row one">
            <div className="date">SAT, OCT 27</div>
            <div className="venue">Sam Houston Race Park</div>
            <div className="city-state">Houston, TX</div>
            <button className="rsvp">RSVP</button>
            <button className="tickets">TICKETS</button>
          </div>
        </div>
    </Layout>
  )
}

export default Shows
