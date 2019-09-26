import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Meetups(props) {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    axios.get('https://api.meetup.com/BendJS/events?&sign=true&photo-host=public&page=20')
      // headers: {
      //   "Authorization": `Bearer 574b6c10521e4d3e036513581e587`,
      //   "Origin": "https://bendjs.com"
      // }
    // })
      .then(res => console.log('😬', res))
      .catch(err => console.log('👺', err))
  }, [])

  // const { name, description, local_date, local_time, link, venue } = data.data[0];

  return (
    <div>
      <h3>Next Meetup</h3>
      {/* <h2>${name}</h2>
      <p>${description}</p>
      <div class="row">
        <div class="icon">🕐</div>
        <p>${local_date}<br />>${local_time}</p>
      </div>
      <div class="row">
        <div class="icon">📍</div>
        <p>
          ${venue.address_1}<br />>
          ${venue.address_2}
        </p>
      </div>
      <a href="${link}" class="button">RSVP on Meetup.com</a> */}
    </div>
  )
}

export default Meetups;
