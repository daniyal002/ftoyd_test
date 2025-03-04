export interface IMatch {
  awayScore: number;
  awayTeam: ITeam
  homeScore: number;
  homeTeam:ITeam;
  status: "Live" | "Finished" | "Match preparing";
  time: string;
  title: string;
}

export interface ITeam {
  name: string;
  place: number;
  players: IPlayer[];
  points: number;
  total_kills: number;
}

export interface IPlayer {
  kills: number;
  username: string;
}

export interface IMatches {
    matches:IMatch[]
}

export interface IFronttempResponse{
    data:IMatches
}
