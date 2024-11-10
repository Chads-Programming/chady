import type { InputExecutionResult } from '@/graphql/graphql'
import { SubmissionSummaryCard } from '../components/submission-summary-card'
import { TestResults, type TestSummaryProps } from '../components/test-results'

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
  const tests: TestSummaryProps['testResults'] = testResults.map(
    ({ testCase, isSuccess }) => ({
      id: testCase.id.toString(),
      input: testCase.args,
      expectedOutput: testCase.expectedOutput,
      currentOuput: testCase.expectedOutput,
      isSecret: testCase.isSecret,
      isSuccess,
    }),
  )

  return (
    <div className="grid grid-cols-2 w-full">
      <SubmissionSummaryCard
        score={score}
        runtime={runtime}
        totalTests={totalTests}
        totalSuccess={totalSuccess}
      />

      <TestResults testResults={tests} />
    </div>
  )
}
