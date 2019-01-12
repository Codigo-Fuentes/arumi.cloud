import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import arumiLogo from '../../images//arumi-outlined.svg'
import bandsInTownLogo from '../../images/bands-in-town.svg'
import './index.css'
import { useState, useEffect } from 'react'
import moment from 'moment'

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'gkevccs0e4ys',
  accessToken: '716250ce1a19249ed306e1080d13c33bcdc335930452794746bc8e6de048c3ee'
});

const Shows = () => {

  const [upcomingShows, setUpcomingShows] = useState([])
  const [pastShows, setPastShows] = useState([])

  useEffect(() => {
    client
      .getEntries({
        content_type: 'upcomingShows'
      })
      .then((response) => {
        console.log(response)
        setUpcomingShows(response.items.map((item) => item.fields))        
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    client
      .getEntries({
        content_type: 'pastShow'
      })
      .then((response) => {
        console.log(response)
        setPastShows(response.items.map((item) => item.fields))        
      })
      .catch(console.error)
  }, [])

  const displayUpcomingShows = () => {
    console.log("These are the upcoming shows")
    console.log(upcomingShows)
    return(
      <div>
        {
          upcomingShows.map((show, index) => {
            return (
              <div className={`row ${index}`}>
                <div className="date">{moment(show.date).format('ddd, MMM Do')}</div>
                <div className="venue">{show.venue}</div>
                <div className="city-state">{show.location}</div>
                <button className="rsvp">RSVP</button>
                <button className="tickets">TICKETS</button>
              </div>
            )
          })
        }
      </div>
    )
  }

  const displayPastShows = () => {

    return( 
            pastShows.map((show, index) => {
              return (
                  <div class="dw-panel ">
                    <div class="dw-panel__content">
                      <img src={show.poster.fields.file.url} className="posters"/>
                    </div>
                  </div>
              )
            })
    )
  }

  return (
    <Layout>
      <SEO title="Shows" />
        <div className="svg-container">
          <img src={arumiLogo}/>
        </div>
        <div className="shows-main">
          <div className="upcoming-dates-container">
            <div className="row" id="upcoming-dates-header">
              <div className="title">UPCOMING DATES</div>
                <img src={bandsInTownLogo} id="bands-in-town"/>
            </div>
          {displayUpcomingShows()}
          </div>
          <div className="past-shows-title">PAST SHOWS</div>
          <div class="dw" id="posters-container">
            {displayPastShows()}
          </div>
          <div id="see-more-container">
            <button id="see-more-events">SEE MORE EVENTS</button>
          </div>
        </div>
    </Layout>
  )
}

export default Shows
