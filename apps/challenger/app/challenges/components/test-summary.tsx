import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  cn,
} from '@repo/ui'
import type React from 'react'

interface TestSummaryProps {
  children: React.ReactNode
}

interface SecretTestCaseResultProps {
  id: string
  isSuccess: boolean
}

type BaseInput = number | boolean | string

type Inputs<T> = T | T[]

interface TestCaseResultProps<
  Input extends Inputs<BaseInput>,
  ExpectedOutput extends Inputs<BaseInput>,
  CurrentOutput extends Inputs<BaseInput>,
> {
  id: string
  isSuccess: boolean
  input: Input
  currentOuput: ExpectedOutput
  expectedOutput: CurrentOutput
}

export const SecretTestResult = ({
  id,
  isSuccess,
}: SecretTestCaseResultProps) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger
        disabled
        className={cn(
          'text-sm font-medium hover:bg-zinc-600 px-2 rounded-t-sm',
          {
            'text-green-500': isSuccess,
            'text-red-500': !isSuccess,
          },
        )}
      >
        <header className="inline-flex gap-2">
          <span className="font-bold">{isSuccess ? '✅' : '❌'}</span>
          Secret test
        </header>
      </AccordionTrigger>
    </AccordionItem>
  )
}

export const TestResult = <
  Input extends Inputs<BaseInput>,
  ExpectedOutput extends Inputs<BaseInput>,
  CurrentOutput extends Inputs<BaseInput>,
>({
  id,
  isSuccess,
  input,
  currentOuput,
  expectedOutput,
}: TestCaseResultProps<Input, ExpectedOutput, CurrentOutput>) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger
        className={cn(
          'text-sm font-medium hover:no-underline hover:bg-zinc-600 px-2 rounded-t-sm',
          {
            'text-green-500': isSuccess,
            'text-red-500': !isSuccess,
          },
        )}
      >
        <header className="inline-flex gap-2">
          <span className="font-bold">{isSuccess ? '✅' : '❌'}</span>
          <span>Test: {JSON.stringify(input)}</span>
        </header>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-2 rounded-sm border border-border p-2 text-xs">
          <div className="inline-flex gap-2">
            Input: <code>{JSON.stringify(input)}</code>
          </div>
          <div className="inline-flex gap-2">
            Expected: <code>{JSON.stringify(expectedOutput)}</code>
          </div>
          <div className="inline-flex gap-2 border border-transparent border-t-border border-dashed pt-4">
            Received: <code>{JSON.stringify(currentOuput)}</code>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export const TestCases = ({ children }: TestSummaryProps) => {
  return (
    <Accordion type="single" className="font-mono w-full" collapsible>
      {children}
    </Accordion>
  )
}
