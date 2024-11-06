import type { InputExecutionResult } from '@/graphql/graphql'
import { Badge, cn } from '@repo/ui'
import {
  SecretTestResult,
  TestCases,
  TestResult,
} from '../components/test-summary'

interface Props {
  score: number
  isSuccess: boolean
  testResults: InputExecutionResult[]
}

export const SubmissionTestsSection = ({
  score,
  isSuccess,
  testResults,
}: Props) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <header className="flex items-center justify-start gap-2">
        <h3 className="font-semibold text-lg text-pretty">
          Submission Result:
        </h3>
        <div
          className={cn('font-mono px-2 py-1 rounded-md bg-green-600 text-sm', {
            isSuccess: '',
          })}
        >
          {`${isSuccess ? 'Accepted 🦊🚬' : 'Rejected'}`}
        </div>
      </header>
      <div className="flex text-lg gap-2">
        Earned score:{' '}
        <Badge variant="default" className="text-sm text-white">
          {score}
        </Badge>
      </div>
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
