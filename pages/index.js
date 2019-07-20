import React from "react";
import Head from "next/head";
import speakers from "../components/speakers-data";
import SpeakerList from "../components/speaker-list";
import Section from "../components/section";
import Card from "../components/card";
import Footer from "../components/footer";

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
    <Section className="header">
      <div style={{ margin: "0 20px" }}>
        <img
          style={{ width: "100%", maxWidth: 500 }}
          src="/static/startuptechtalks.png"
        />
      </div>
      <p>
        Deep insights shared by the top technologists
        <br />
        from the most innovative local tech startups.
      </p>
    </Section>
    <Section className="banner">
      <Card>
        <h1>Upcoming Event</h1>

        <p>Reserve your spot now to attend the next event.</p>

        <p>Next event: to be announced soon.</p>
      </Card>
    </Section>
    <Section className="section-dark center">
      <h1>Join the community</h1>
      <Card>
        <p>We have a vibrant community of 1,400 members</p>
        <p>
          <a
            className="button"
            href="https://www.meetup.com/Startup-Tech-Talks-Montreal/"
          >
            Join on Meetup.com
          </a>
        </p>
      </Card>
    </Section>
    <Section>
      <SpeakerList speakers={speakers} />
    </Section>
    <Footer />
  </div>
);
