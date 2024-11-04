import { getInitials } from '@/app/shared/utils/get-initials'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  cn,
} from '@repo/ui'
import { Trophy } from 'lucide-react'

export interface CoderLeadItem {
  id: string
  avatar: string
  username: string
  totalScore: number
}

const getScoreColor = (position: number) => {
  const colors = {
    1: 'bg-purple-200 text-purple-700',
    2: 'bg-pink-200 text-pink-700',
    3: 'bg-orange-200 text-orange-700',
    4: 'bg-yellow-200 text-yellow-700',
    5: 'bg-green-200 text-green-700',
    default: 'bg-blue-200 text-blue-700',
  }
  return colors[position as keyof typeof colors] || colors.default
}

interface Props {
  items: CoderLeadItem[]
}

type CoderIconProps = {
  position: number
}

const CoderIcon = ({ position }: CoderIconProps) => {
  if (position <= 3) {
    return (
      <Trophy
        className={`h-4 w-4 ${
          position === 1
            ? 'text-yellow-500'
            : position === 2
              ? 'text-gray-400'
              : 'text-amber-600'
        }`}
      />
    )
  }
  return <span className="text-xs font-semibold text-blue-500">{position}</span>
}

export function CodersLeaderboard({ items }: Props) {
  return (
    <Card className="w-full bg-transparent rounded-none border-none shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold text-gradient-primary">
          Top 10
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {items.map((coder, index) => {
            const position = index + 1

            return (
              <div
                key={coder.id}
                className={cn(
                  'flex items-center justify-between py-2 gap-4 select-none',
                  position === 1 && 'animate-pulse',
                )}
              >
                <div className="flex items-center space-x-4 min-w-0 flex-shrink">
                  <CoderIcon position={position} />
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={coder.avatar} alt={coder.username} />
                    <AvatarFallback>
                      {getInitials(coder.username)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-mono font-medium text-sm truncate">
                    {coder.username}
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className={cn(
                    getScoreColor(position),
                    'font-mono text-xs font-semibold px-2 py-1 rounded-full',
                    position === 1 && 'animate-bounce',
                  )}
                >
                  {coder.totalScore}
                </Badge>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
