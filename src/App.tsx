import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './index.css';
import { Store } from './Store'
//import { IAction, IEpisode, IEpisodeProps } from './interfaces'
import { Link } from '@reach/router';
//import BtnToggleText from './BtnToggleText'



export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store)

  console.log('state is', state);

  return (
    <>
      <header>
        <div>
          <h1>Rick and Morty!</h1>
          <p>Pick your favourite episode</p>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/faves'>Favourites length is {state.favourites.length}</Link>
        </div>
      </header>
      <main>
        {props.children}
      </main>
    </>
  )
}


