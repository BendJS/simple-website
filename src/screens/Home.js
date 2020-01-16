import React from "react";

import Module from "../components/Module";
import SignupForm from "../components/SignupForm";

import "../App.scss";

export default function Home() {
  return (
    <>
      <Module
        heading="Meetups"
        subheading="Our monthly-ish in-person get togethers"
        text="Our meetups are handled over on Meetup.com. Join the group over there to get notifications about upcoming events."
        buttons={[
          <a href="https://www.meetup.com/BendJS/" className="button">
            Join up on Meetup.com
          </a>
        ]}
      />

      <Module
        heading="Say Something"
        subheading="We're always looking for speakers"
        text="If you have something to share, big or small, please get in touch!"
        buttons={[
          <a href="mailto:bendjsgroup@gmail.com" className="button">
            bendjsgroup@gmail.com
          </a>
        ]}
      />

      <Module
        heading="YouTube"
        subheading="See us in action"
        text="Catch up on old events or watch our Livestreams if you can't make it"
        buttons={[
          <a
            href="https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ"
            className="button"
          >
            YouTube Channel
          </a>
        ]}
      />

      <Module
        heading="Chat"
        subheading="Join our community"
        text="Our Slack group helps us all stay in touch, and our meetup page gives you more info about our events"
        buttons={[
          <a
            href="https://join.slack.com/t/bendjs/shared_invite/enQtNjA1MTIyODI0MjYwLTY5OWYxOGM4MmI4Y2U3ZThhMzQ3ZTUyMmE0YmYwNzM0NWY5MzRlMmVjOTg0NDBiYzg0NGExMGFkYjExZGI0Njg"
            className="button"
          >
            Get Slack Invite
          </a>
        ]}
      />

      <Module
        heading="Newsletter"
        subheading="Stay up to date"
        text="Someday, we'll send one of these."
        buttons={[]}
      >
        <SignupForm />
      </Module>

      <Module
        heading="This Website"
        subheading="is open-source on GitHub"
        text="If you feel like helping us do something more useful or fancy with it, let us know, we're open to ideas."
        buttons={[
          <a href="https://github.com/BendJS/simple-website" className="button">
            Repo on GitHub
          </a>
        ]}
      />
    </>
  );
}
