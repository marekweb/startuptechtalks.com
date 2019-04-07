import React from 'react';
import Speaker from './speaker';

export default ({speakers}) => <div>
  {speakers.map(speaker => <Speaker {...speaker}/>)}
</div>
