import React from 'react'
import { Store } from './Store'
import {toggleFavAction} from './Actions'
import { IEpisodeProps } from './interfaces'

const EpisodeList = React.lazy(() => import('./EpisodesList'))

export default function FavPage() {
  const { state, dispatch } = React.useContext(Store)

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  }

  return (
    <section className="episode-layout">
      <React.Suspense fallback={<div>Loading...</div>}>
        <EpisodeList {...props} />
      </React.Suspense>
    </section >
  )
}
