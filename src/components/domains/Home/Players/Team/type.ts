export interface IUser {
  name: string,
  wins: number,
  participations: number,
  id?: string,
}

export interface ITeam {
  name: string,
  teamID: string,
  countryShort: string,
  country: string,
  lead: IUser,
  members: IUser[] | null,
  wins: number,
  participations: number,
  regAt: string,
  inEventPlace: number,
  techs: string[] | null,
}
