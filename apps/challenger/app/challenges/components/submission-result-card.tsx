import { Badge, Card, CardContent, CardHeader, CardTitle, cn } from '@repo/ui'
import { Beaker, Check, Clock, Medal, X } from 'lucide-react'

type Props = {
  score: number
  runtime: number
  totalTests: number
  totalSuccess: number
}

export const SubmissionResultCard = ({
  score,
  runtime,
  totalTests,
  totalSuccess,
}: Props) => {
  const completeRate = Math.round(totalSuccess / totalTests) * 100
  const isSuccess = totalTests === totalSuccess

  return (
    <Card className="w-full max-w-md h-fit sticky top-1">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Submission results
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-start gap-6">
          <div
            className={cn(
              'relative aspect-square w-32 rounded-xl bg-emerald-500  p-2 flex items-center justify-center',
              {
                'text-red-500': !isSuccess,
              },
            )}
          >
            {isSuccess ? (
              <Check className="w-16 h-16 text-white" strokeWidth={3} />
            ) : (
              <X className="w-16 h-16 text-white" strokeWidth={3} />
            )}
            <div className="absolute -right-2 -top-2">
              <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white font-mono">
                {completeRate}%
              </Badge>
            </div>
          </div>
          <div className="grid gap-4 flex-1 font-mono">
            <div className="flex items-center gap-2 text-lg">
              <Beaker className="w-5 h-5" />
              <span className="font-medium">Total tests:</span>
              <span>{totalTests}</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-emerald-600">
              <Check className="w-5 h-5" />
              <span className="font-medium">Passed:</span>
              <span>{totalSuccess}</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-red-500">
              <X className="w-5 h-5" />
              <span className="font-medium">Failed:</span>
              <span>{totalTests - totalSuccess}</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4 pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Runtime:</span>
            </div>
            <Badge variant="secondary" className="px-3">
              {runtime} ms
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Medal className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Score:</span>
            </div>
            <Badge className="px-3 bg-blue-500 hover:bg-blue-500 text-white">
              {score} pts
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
