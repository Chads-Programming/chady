import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import { useQuery } from '@tanstack/react-query'

const LeaderboardQuery = graphql(`
    query LeaderboardQuery {
        findSubmissionsLeaderboard {
            user {
                id
                avatar
                username
            }
            totalScore
        }
    }`)

export const useGetLeaderboardQuery = () =>
  useQuery({
    queryKey: ['leaderboard'],
    queryFn: () => execute(LeaderboardQuery),
    select: (data) => ({
      leaderboard: data.findSubmissionsLeaderboard,
    }),
  })
