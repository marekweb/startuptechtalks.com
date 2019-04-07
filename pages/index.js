import React from 'react';
import Head from 'next/head';
import speakers from '../components/speakers';
import SpeakerList from '../components/speaker-list';

export default () => <div>
  <Head>
    <title>Startup Tech Talks</title>
    <link rel="icon" type="image/png" href="/static/icon32.png" />
    <link rel="stylesheet" type="text/css" href="/static/style.css" />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Asap" />
    <meta name="og:image" content="/static/startup-tech-talks-large-square-600.png" />
    <meta name="og:site_name" content="Startup Tech Talks" />
    <meta name="og:description" content="Lessons from building tech startups and reflections on the developer life" />
  </Head>
  <div className="Section Section-header">
    Startup Tech Talks

    <SpeakerList speakers={speakers}/>

  </div>
</div>

