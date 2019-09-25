import React, {useState} from 'react';
// import Meetups from './Meetups';
import Module from './components/Module';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { FlexDiv, StyledAvatar } from './UI/Common';

import Chris from './images/chris.jpeg';
import './App.scss';

function App() {
  const [members, setMembers] = useState([
    {
      name: 'Chris',
      src: Chris,
    },
    {
      name: 'Chris',
      src: Chris,
    },
    {
      name: 'Chris',
      src: Chris,
    },
    {
      name: 'Chris',
      src: Chris,
    },
    {
      name: 'Chris',
      src: Chris,
    },
    {
      name: 'Chris',
      src: Chris,
    },
    {
      name: 'Chris',
      src: Chris,
    },
    {
      name: 'Chris',
      src: Chris,
    },
  ]);
  return (
    <div style={{margin: '0', padding: '0'}}>
      <Header>
        <h1>BendJS</h1>
      </Header>

      <main>
        {/* <div className="module module-next-meetup" id="module-next-meetup"><Meetups /></div> */}

        <Module
          heading="Say Something"
          subheading="We're always looking for speakers"
          text="If you have something to share, big or small, please get in touch!"
          buttons={[<a href="mailto:bendjsgroup@gmail.com" className="button" target="_blank" rel="noopener noreferrer">📧 bendjsgroup@gmail.com</a>]}
        />

        <Module
          heading="Youtube"
          subheading="See us in Action"
          text="Catch up on old events or watch our Livestreams if you can't make it"
          buttons={[<a href="https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ" target="_blank" rel="noopener noreferrer" className="button">Youtube Channel</a>]}
        />

        <Module
          heading="Chat"
          subheading="Join our community"
          text="Our Slack group helps us all stay in touch, and our meetup page gives you more info about our events"
          buttons={[<a href="https://join.slack.com/t/bendjs/shared_invite/enQtNjA1MTIyODI0MjYwLWNmODA5OTM3ODJiYTllYWJlNzE0MGUwM2JkOGEyZTllOGNhNmU3YzdkNDE2ZTM1M2M0NDhmYTNkZGE3ZTA5M2Y" target="_blank" rel="noopener noreferrer" className="button" style={{marginBottom: '3px'}}>Get Slack Invite</a>, <a href="https://www.meetup.com/BendJS/" className="button">Join BendJS</a>]}
        />

        <Module
          heading="Classifieds"
          subheading="Get / Post a job"
          text="Looking for a new opportunity or looking for some talent for your company? Let us know and we'll post it here for you!"
          buttons={[<a href="" className="button" style={{marginBottom: '3px'}}>Job Listings</a>, <a href="mailto:bendjsgroup@gmail.com" className="button">Post a job</a>]}
        />

        <Module
          large
          heading="Newsletter"
          subheading="Stay up to date"
          text=""
          buttons={[]}
        >
          <FlexDiv align='flex-end' justify='flex-start' direction='row'>
            <SignupForm />
          </FlexDiv>
        </Module>

        <Module
          large
          heading="Our Members"
          subheading="Meet our amazing community"
          text="Our community is everything! Meet the people that make BendJS what it is!"
          buttons={[]}
        >
          <div className="members">
            {members.map(m => <StyledAvatar src={m.src} alt="member picture" />)}
          </div>
        </Module>

      </main>
      <Footer />
    </div>
  );
}

export default App;
