export interface IUserInfo{
  firstName: string,
  lastName: string ,
  email: string,
  _id: string,
  __v: number
}

export interface IGames{
  searchGames: any[]
  genres: any[],
  gamesOnGenrs: any[]
}

export interface IStore{
  isAuth: boolean,
  user: IUserInfo,
  dataGames: IGames,
}