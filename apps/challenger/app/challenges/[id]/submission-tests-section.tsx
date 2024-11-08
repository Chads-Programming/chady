import type { InputExecutionResult } from '@/graphql/graphql'
import { SubmissionResultCard } from '../components/submission-result-card'
import {
  SecretTestResult,
  TestCases,
  TestResult,
} from '../components/test-summary'

interface Props {
  score: number
  runtime: number
  testResults: InputExecutionResult[]
}

export const SubmissionTestsSection = ({
  score,
  runtime,
  testResults,
}: Props) => {
  const totalTests = testResults.length
  const totalSuccess = testResults.filter(({ isSuccess }) => isSuccess).length

  return (
    <div className="grid grid-cols-2 w-full">
      <SubmissionResultCard
        score={score}
        runtime={runtime}
        totalTests={totalTests}
        totalSuccess={totalSuccess}
      />

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
