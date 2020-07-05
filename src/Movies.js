import React from 'react';
import gonewiththewind from './components/frontend/img/gonewiththewind.jpg';
import howimetyourmother from './components/frontend/img/howimetyourmother.jpg';
import rickmorty from './components/frontend/img/rick-morty.jpg';
import sexeducation from './components/frontend/img/sexeducation.jpg';
import peaky from './components/frontend/img/peaky.jpg';
import reasonswhy from './components/frontend/img/13reasonswhy.jpg';
import Stack from './Stack.js';


export default function Movies() {
    return <div className="app__layout">
    <Stack name={`13 Reasons Why`} logo={reasonswhy}/>
    <Stack name={`Gone With The Wind`} logo={gonewiththewind}/>
    <Stack name={`How I Met Your Mother`} logo={howimetyourmother}/>
    <Stack name={`Rick and Morty`} logo={rickmorty}/>
    <Stack name={`Sex Education`} logo={sexeducation}/>
    <Stack name={`Peaky Blinders`} logo={peaky}/>
  </div>
}

