'use client'

import { Button, Card, CardContent } from '@repo/ui'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown, Lock } from 'lucide-react'
import { useState } from 'react'

export interface TestSummaryProps {
  testResults: TestCaseResultProps[]
}

interface TestCaseResultProps {
  id: string
  isSuccess: boolean
  input: string
  currentOuput: string
  expectedOutput: string
  isSecret: boolean
}

export const TestResults = ({ testResults }: TestSummaryProps) => {
  const [expandedTests, setExpandedTests] = useState<Record<number, boolean>>(
    {},
  )

  const toggleTest = (index: number) => {
    setExpandedTests((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Test Results</h2>
        <div className="flex items-center gap-2">
          <div className="text-sm text-muted-foreground">
            Passed: {testResults.filter((t) => t.isSuccess).length}/
            {testResults.length}
          </div>
        </div>
      </div>

      {testResults.map((test, index) => (
        <Card
          key={test.id}
          className={`border-l-4 ${
            test.isSuccess ? 'border-l-green-500' : 'border-l-red-500'
          } dark:bg-zinc-900 overflow-hidden`}
        >
          <CardContent className="p-0">
            <Button
              variant="ghost"
              className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/10 dark:hover:bg-zinc-700/30 transition-colors duration-200 group"
              onClick={() => toggleTest(index)}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${
                    test.isSuccess ? 'bg-green-500/20' : 'bg-red-500/20'
                  } rounded-full p-1`}
                >
                  {test.isSuccess ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <span className="w-4 h-4 text-red-500">✖</span>
                  )}
                </div>
                <span className="font-mono text-sm group-hover:text-primary-foreground transition-colors duration-200">
                  Test: {test.isSecret ? '[Secret]' : test.input}
                </span>
                {test.isSecret && (
                  <Lock className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedTests[index] ? 'rotate-180' : ''
                } group-hover:text-primary-foreground`}
              />
            </Button>

            <AnimatePresence>
              {expandedTests[index] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-border overflow-x-auto"
                >
                  {test.isSecret ? (
                    <div className="p-4 text-center text-muted-foreground">
                      <Lock className="w-6 h-6 mx-auto mb-2" />
                      This test is secret. The content cannot be displayed.
                    </div>
                  ) : (
                    <div className="p-4 space-y-3 font-mono text-sm">
                      <div className="grid grid-cols-[100px,minmax(0,1fr)] gap-4">
                        <span className="text-muted-foreground">Input:</span>
                        <span>{test.input}</span>
                      </div>
                      <div className="grid grid-cols-[100px,minmax(0,1fr)] gap-4">
                        <span className="text-muted-foreground">Expected:</span>
                        <span>{test.expectedOutput}</span>
                      </div>
                      <div className="grid grid-cols-[100px,minmax(0,1fr)] gap-4">
                        <span className="text-muted-foreground">Received:</span>
                        <span>{test.currentOuput}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
