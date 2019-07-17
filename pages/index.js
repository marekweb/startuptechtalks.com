import React from "react";
import Head from "next/head";
import speakers from "../components/speakers-data";
import SpeakerList from "../components/speaker-list";

export default () => (
  <div>
    <Head>
      <title>Startup Tech Talks</title>
      <link rel="icon" type="image/png" href="/static/icon32.png" />
      <link rel="stylesheet" type="text/css" href="/static/style.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Asap:400,700"
      />
      <meta
        name="og:image"
        content="/static/startup-tech-talks-large-square-600.png"
      />
      <meta name="og:site_name" content="Startup Tech Talks" />
      <meta
        name="og:description"
        content="Lessons from building tech startups and reflections on the developer life"
      />
    </Head>
    <div className="section header">
      <div className="content">
        <div>
          <img style={{ maxWidth: 500 }} src="/static/startuptechtalks.png" />
        </div>
        <p>
          Deep insights shared by the top technologists
          <br />
          from the most innovative local tech startups.
        </p>
      </div>
    </div>
    <div className="section section-dark">
      <div className="content center">
        <h1>Join the community</h1>
        <a
          className="button"
          href="https://www.meetup.com/Startup-Tech-Talks-Montreal/"
        >
          Join on Meetup.com
        </a>
      </div>
    </div>
    <div className="section">
      <div className="content">
        <SpeakerList speakers={speakers} />
      </div>
    </div>
    <div className="footer">&copy; 2019</div>
  </div>
);
