import { Page } from '../components/Page'
import { User, withPageAuth } from '@supabase/auth-helpers-nextjs'
import { supabase } from '../utils/supabase'
import Image from 'next/image'
import { Match } from '../types/match'
import { getMatchesByGroup, getStatsByTeamFromMatches } from '../lib/matches'

function renderGroups(matches: Match[] = []) {
  const groupMatches = getMatchesByGroup(matches)
  const groupsKeys = Object.keys(groupMatches).sort((a, b) =>
    a.localeCompare(b),
  )
  return (
    <div className="flex justify-center">
      {groupsKeys.map((groupKey) => {
        const teamStats = getStatsByTeamFromMatches(groupMatches[groupKey])
        return (
          <div
            key={groupKey}
            className="block p-6 rounded-lg shadow-lg bg-white w-98 flex-row"
          >
            <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2 w-full">
              Group {groupKey}
            </h2>

            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="border-b">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Team
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Played
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Won
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Lost
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Drawn
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Diff
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Points
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamStats.map(
                          ({
                            name,
                            played,
                            won,
                            lost,
                            rank,
                            drawn,
                            diff,
                            points,
                          }) => {
                            return (
                              <tr className="border-b" key={name}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {rank}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {name}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {played}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {won}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {lost}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {drawn}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {diff}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {points}
                                </td>
                              </tr>
                            )
                          },
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function renderMatches(matches: Match[] = []) {
  return (
    <div className="flex justify-center">
      {matches.slice(0, 5).map((match) => {
        return (
          <div
            key={match.match_number}
            className="block p-6 rounded-lg shadow-lg bg-white w-98"
          >
            <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2 w-full">
              {match.home_team_score === null
                ? `${match.home_team} vs ${match.away_team}`
                : `${match.home_team} ${match.home_team_score} vs ${match.away_team} ${match.away_team_score}`}
            </h2>

            <h5 className="text-gray-900 text-m leading-tight font-medium mb-2">
              Match #{match.match_number} - Group {match.group}
            </h5>

            <p>Date: {new Date(match.date).toString()}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function Home({
  user,
  matches,
}: {
  user: User
  matches: Match[]
}) {
  return (
    <Page>
      <main className="grid grid-cols-12 container px-0 lg:py-8 mx-auto lg:gap-16">
        <div className="col-span-12 lg:col-span-9 xl:col-span-7">
          <h1>Welcome to Supaprode {user.email}</h1>
          {renderMatches(matches)}
          {renderGroups(matches)}
        </div>
      </main>

      <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">
            Top Ranked Players
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </a>
        </div>

        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8">
                    <Image
                      width={100}
                      height={100}
                      className=" rounded-full"
                      src="/profile-picture-5.jpeg"
                      alt="John Doe"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    John Doe
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  $320
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}

export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
  async getServerSideProps(ctx) {
    // Access the user object
    const { data } = await supabase
      .from('matches')
      .select('*')
      .order('match_number')
    return { props: { matches: data } }
  },
})
