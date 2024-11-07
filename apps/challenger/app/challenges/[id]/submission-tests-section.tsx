import type { InputExecutionResult } from '@/graphql/graphql'
import { Badge, Card, CardContent, CardTitle, cn } from '@repo/ui'
import { AwardIcon, CheckIcon, FlaskConical, TimerIcon, X } from 'lucide-react'
import {
  SecretTestResult,
  TestCases,
  TestResult,
} from '../components/test-summary'

interface Props {
  score: number
  runtime: number
  isSuccess: boolean
  testResults: InputExecutionResult[]
}

export const SubmissionTestsSection = ({
  score,
  isSuccess,
  runtime,
  testResults,
}: Props) => {
  const totalTests = testResults.length
  const passedTests = testResults.filter(({ isSuccess }) => isSuccess).length
  const failedTests = totalTests - passedTests

  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <Card className="w-full">
        <CardTitle className="flex items-center justify-start mb-3 px-3 py-2">
          <h3 className="font-semibold text-lg text-pretty">
            Submission results:
          </h3>
        </CardTitle>
        <CardContent className="inline-flex gap-3 w-full font-medium text-sm">
          <div
            className={cn(
              'basis-1/3 flex items-center justify-center font-mono w-fit font-semibold px-2 py-1 bg-destructive text-white rounded-md text-sm',
              {
                'bg-green-500': isSuccess,
              },
            )}
          >
            {isSuccess ? (
              <CheckIcon className="w-12 h-12" />
            ) : (
              <X className="w-12 h-12" />
            )}
          </div>
          <div className="flex flex-col justify-center w-full gap-2 items-center">
            <div className="inline-flex gap-2 w-full items-center">
              <FlaskConical />
              <span>Total tests: {testResults.length}</span>
            </div>
            <div className="inline-flex gap-2 w-full items-center">
              <CheckIcon />
              <span>Passed: {passedTests}</span>
            </div>
            <div className="inline-flex gap-2 w-full items-center">
              <X />
              <span>Failed: {failedTests}</span>
            </div>
            <div className="w-full h-1 brpder-0 border-t-2 border-border" />
            <div className="inline-flex gap-2 w-full items-center">
              <TimerIcon />
              <span>Runtime:</span>
              <Badge variant="outline" className="text-xs">
                {`${runtime} ms`}
              </Badge>
            </div>
            <div className="inline-flex gap-2 w-full items-center">
              <AwardIcon />
              <span>Score:</span>
              <Badge variant="default" className="text-xs text-white">
                {`${score} pts`}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      <TestCases>
        {testResults.map(({ isSuccess, testCase, output }) =>
          testCase.isSecret ? (
            <SecretTestResult
              key={testCase.id}
              id={testCase.id.toString()}
              isSuccess={isSuccess}
            />
          ) : (
            <TestResult
              key={testCase.id}
              id={testCase.id.toString()}
              isSuccess={isSuccess}
              input={testCase.args.toString()}
              currentOuput={output}
              expectedOutput={testCase.expectedOutput}
            />
          ),
        )}
      </TestCases>
    </div>
  )
}
