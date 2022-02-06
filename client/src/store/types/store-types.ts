export interface IUserInfo{
  firstName: string,
  lastName: string ,
  email: string,
  id: string,

}

export interface IGame{
  id: number | string,
  name: string,
  screenshots: any[]
}

export interface IBasket{
  id: number | string; // TO CORRECT!
  basket: IGame[]
}

export interface IIsAuth{
  isAuth: boolean
}
// ANY!
export interface IGames{
  searchGames: any[]
  genres: any[],
  gamesOnGenrs: any[],
  mainGames: any[]
}

export interface IStore{
  isAuth: boolean,
  user: IUserInfo,
  dataGames: IGames,
  basket: IBasket[]
}