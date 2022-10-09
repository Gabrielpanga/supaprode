export type Match = {
  match_number: number
  round_number: number
  group: string
  date: string
  home_team: string
  away_team: string
  home_team_score: number | null
  away_team_score: number | null
}

export type PlayedMatch = Match & {
  home_team_score: number
  away_team_score: number
}

export type GroupMatchStats = {
  rank: number
  name: string
  played: number
  won: number
  lost: number
  drawn: number
  diff?: number
  points: number
}
