$.ajax({
  dataType: "jsonp",
  url: "https://api.meetup.com/BendJS/events?&sign=true&photo-host=public&page=20&key=574b6c10521e4d3e036513581e587"
  
}).then(data => {
    
  const { name, description, local_date, local_time, link, venue } = data.data[0];
  
  const meetupHTML = `<h3>Next Meetup</h3>
  <h2>${name}</h2>
  <p>${description}</p>
  <div class="row">
    <div class="icon">🕐</div>
    <time>${local_date}<br>${local_time}</time>
  </div>
  <div class="row">
    <div class="icon">📍</div>
    <address>
      ${venue.address_1}<br>
      ${venue.address_2}
    </address>
  </div>
  <a href="${link}" class="button">RSVP on Meetup.com</a>
`;
  
  document.querySelector("#module-next-meetup").innerHTML = meetupHTML;
})