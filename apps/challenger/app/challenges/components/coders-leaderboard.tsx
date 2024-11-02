import { Avatar, AvatarFallback, AvatarImage, cn } from '@repo/ui'

export interface LeaderBoardItem {
  id: string
  avatar: string
  username: string
  totalScore: number
}

interface Props {
  items: LeaderBoardItem[]
}

export const CodersLeaderboard = ({ items }: Props) => {
  return (
    <article className="px-2 py-4">
      <h2 className="text-gradient-primary font-bold text-2xl text-pretty mb-2">
        Top Performers
      </h2>
      <ul className="list-none box-border flex flex-col">
        {items.map(({ id, avatar, username, totalScore }, index) => (
          <li
            key={id}
            className="inline-flex text-sm items-center justify-start transition ease-in cursor-pointer rounded-md p-2 px-3"
          >
            <div className="flex flex-row justify-start gap-2 w-full items-center content-start">
              <span className="text-lg mr-2 text-primary font-medium">
                {index + 1}.
              </span>
              <Avatar>
                <AvatarImage src={avatar} alt={username} />
                <AvatarImage src={avatar} alt={username} />
                <AvatarFallback>{username.charAt(0)}</AvatarFallback>
              </Avatar>
              <span
                className={cn(
                  'block md:hidden lg:block text-pretty text-sm text-foreground/75  flex-1 w-[100px]',
                  {
                    'text-amber-600 dark:text-amber-400 animate-pulse':
                      index + 1,
                  },
                )}
              >
                {username}
              </span>
              <span className="text-pretty text-xs text-gray-700 dark:text-gray-400 font-medium border border-border rounded-sm px-2 py-1 shadow-md">
                {totalScore} <span className="text-primary/65">pts.</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
