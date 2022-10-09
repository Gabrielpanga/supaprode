import { GroupMatchStats, Match, PlayedMatch } from '../types/match'
import { groupBy, sumBy } from 'lodash'

export function getMatchesByGroup(matches: Match[]): Record<string, Match[]> {
  return groupBy(
    matches.filter((match) => match.round_number <= 3),
    (match) => match.group,
  )
}

export function getStatsByTeamFromMatches(matches: Match[]): GroupMatchStats[] {
  const teamsOnGroup = Object.keys(groupBy(matches, (match) => match.home_team))
  const groupStats: Omit<GroupMatchStats, 'rank'>[] = []
  for (const team of teamsOnGroup) {
    const teamMatches = matches.filter(
      (match) => match.home_team === team || match.away_team === team,
    )

    const playedMatches = teamMatches.filter(
      (match) =>
        match.away_team_score !== null && match.home_team_score !== null,
    ) as PlayedMatch[]

    const played = playedMatches.length

    const won = playedMatches.filter(
      (match) =>
        (match.away_team_score > match.home_team_score &&
          match.away_team === team) ||
        (match.home_team_score > match.away_team_score &&
          match.home_team === team),
    ).length

    const lost = playedMatches.filter(
      (match) =>
        (match.away_team_score < match.home_team_score &&
          match.away_team === team) ||
        (match.home_team_score < match.away_team_score &&
          match.home_team === team),
    ).length

    const drawn = playedMatches.filter(
      (match) =>
        (match.away_team_score === match.home_team_score &&
          match.away_team === team) ||
        (match.home_team_score === match.away_team_score &&
          match.home_team === team),
    ).length

    const diff = sumBy(playedMatches, (match) =>
      match.away_team === team
        ? match.away_team_score - match.home_team_score
        : match.home_team_score - match.away_team_score,
    )

    groupStats.push({
      name: team,
      played,
      won,
      lost,
      points: won * 3 + drawn * 1,
      diff,
      drawn,
    })
  }

  return groupStats
    .sort((a, b) => a.points - b.points || a.name.localeCompare(b.name))
    .map((stats, index) => ({ ...stats, rank: index + 1 }))
}
