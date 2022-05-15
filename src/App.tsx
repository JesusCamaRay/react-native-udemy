import React from 'react'
import { BasicTypes } from './basic/BasicTypes';
import { Functions } from './basic/Functions';
import { LiteralObjects } from './basic/LiteralObjects';
import { Counter } from './components/Counter';
import { CounterWithHook } from './components/CounterWithHook';
import { Forms } from './components/Forms';
import { Login } from './components/Login';
import { Users } from './components/Users';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Intro Typescript-React</h1>
      <hr/>
      <BasicTypes/>
      <br/><hr/>
      <LiteralObjects/>
      <br/><hr/>
      <Functions/>
      <br/><hr/>
      <Counter/>
      <br/><hr/>
      <CounterWithHook/>
      <br/><hr/>
      <Login/>
      <br/><hr/>
      <Users/>
      <br/><hr/>
      <Forms/>
    </div>
  )
}

export default App;