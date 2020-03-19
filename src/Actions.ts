import { IAction, IEpisode, IState } from './interfaces'

export const fetchDataAction = async (dispatch: any) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
}

export const toggleFavAction = (state:IState, dispatch: any, ep: IEpisode | any): IAction => {
  const isEpInFav = state.favourites.includes(ep);

  let dispatchObj = {
    type: 'ADD_FAV',
    payload: ep
  }

  if (isEpInFav) {
    const favWithoutEp = state.favourites.filter((fav: IEpisode) => fav.id !== ep.id)
    dispatchObj = {
      type: 'DEL_FAV',
      payload: favWithoutEp
    }
  }

  return dispatch(dispatchObj)
}
