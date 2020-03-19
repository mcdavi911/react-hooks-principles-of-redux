import React from 'react'
import { Store } from './Store'
import { IEpisodeProps } from './interfaces'
import {fetchDataAction, toggleFavAction} from './Actions'

const EpisodeList = React.lazy(() => import('./EpisodesList'))

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store)

  React.useEffect(() => {
    if (state.episodes.length === 0) fetchDataAction(dispatch)
  })

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  }


  return (
    <section className="episode-layout">
      <React.Suspense fallback={<div>Loading...</div>}>
        <EpisodeList {...props} />
      </React.Suspense>
    </section>
  )
}
