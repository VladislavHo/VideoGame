export interface IUserInfo{
  firstName: string,
  lastName: string ,
  email: string,
  _id: string,
  __v: number
}

export interface IStore{
  user: IUserInfo
}