//
//  All the interfaces
//

export type Dispatch = React.Dispatch<IAction>

export interface IState {
  episodes: Array<IEpisode>
  favourites: Array<IEpisode>
}

export interface IAction { 
  type: string, 
  payload: Array<IEpisode> | any 
}

export interface IEpisode {
  id: number,
  name: string,
  season: number,
  number: number,
  image: { medium: string }
}
  
export interface IEpisodeProps {
  episodes: Array<IEpisode>
  store: {state:IState, dispatch: Dispatch}
  toggleFavAction:  (state:IState, dispatch: Dispatch, ep: IEpisode | any) => IAction
  favourites: Array<IEpisode>
} 


