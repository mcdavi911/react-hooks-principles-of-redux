import React from 'react'
import { IEpisode } from './interfaces'

export default function EpisodesList(props: any): JSX.Element {
  const { episodes, toggleFavAction, favourites, store } = props
  const { state, dispatch } = store

  return episodes.map((ep: IEpisode) => {
    const isFav = favourites.includes(ep); 

    return (
      <div key={ep.id} className="episode-box" >
        <img src={ep.image.medium} alt={`Rick and Morty ${ep.name}`} />

        {
          /*
          <p>{test(ep.id)}</p>
          */
        }

        <p>{isFav ? 'Yes it is a favourite' : 'No it is not a favouritee'}</p>

        <p>{ep.name}</p>
        <section>
          Season: {ep.season}
          Number: {ep.number}<br />
          {
            /*
              <BtnToggleText testBool onClick={() => toggleFavAction(ep)} text={['Add as favourite', 'Remove as favourite']} />
            */
          }
          <button onClick={() => toggleFavAction(state, dispatch,ep)}>{isFav ? 'Remove as favourite' : 'Add as favourite'}</button>

        </section>
      </div>
    )
  })
}
