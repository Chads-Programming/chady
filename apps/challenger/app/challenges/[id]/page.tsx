'use client'

import { ProtectedAction } from '@/app/auth/components/protected-action'
import { LangDropdown } from '@/app/shared/components/lang-dropdown'
import { Editor } from '@monaco-editor/react'
import { ProgramingLang } from '@repo/shared-types'
import {
  Button,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  cn,
} from '@repo/ui'
import { Play } from 'lucide-react'
import { FileJson, Lightbulb, ListCollapse } from 'lucide-react'
import { useState } from 'react'
import { ChallengeDescription } from '../components/challenge-description'
import { Solutions } from '../components/solutions'
import {
  SecretTestResult,
  TestCases,
  TestResult,
} from '../components/test-summary'
import { ChallengeDifficult } from '../types'

const codeChallenge = {
  title: 'Regular Expression Matching',
  startedCode: 'function isMatch(s, p) {\n\n};',
  description:
    'Given an input string s and a pattern p, implement regular expression matching with support for \'.\' and \'*\' where:\n\n* \'.\' Matches any single character.\n* \'*\' Matches zero or more of the preceding element.\n* The matching should cover the entire input string (not partial).\n\n### Example 1:\n\nInput: s = "aa", p = "a"\nOutput: false\n> Explanation: "a" does not match the entire string "aa".\n\n### Example 2:\n\nInput: s = "aa", p = "a*"\nOutput: true\n> Explanation: \'*\' means zero or more of the preceding element, \'a\'. Therefore, by repeating \'a\' once, it becomes "aa".\n\n### Example 3:\n\nInput: s = "ab", p = ".*"\nOutput: true\nExplanation: ".*" means "zero or more (*) of any character (.)".\n\n### Constraints:\n\n* 1 <= s.length <= 20\n* 1 <= p.length <= 20\n* s contains only lowercase English letters.\n* p contains only lowercase English letters, \'.\', and \'*\'.\n* It is guaranteed for each appearance of the character \'*\', there will be a previous valid character to match.',
}

const testResults = [
  {
    id: 'test-1',
    input: [1, 2, 3],
    ouput: 6,
    currentOutput: 6,
    isSuccess: true,
  },
  {
    id: 'test-2',
    input: [1, 2, 3, 1],
    ouput: 7,
    currentOutput: 5,
    isSuccess: false,
  },
  {
    id: 'test-3',
    isSuccess: true,
  },
  {
    id: 'test-4',
    isSuccess: false,
  },
]

interface CustomResizableHandleProps {
  horizontal?: boolean
}

const CustomResizableHandle = ({ horizontal }: CustomResizableHandleProps) => (
  <ResizableHandle
    withHandle={false}
    className={cn('w-5 bg-transparent group', {
      ['!h-5 border border-x-0 border-y-border']: horizontal,
    })}
  >
    <div
      className={cn(
        'transition-all ease-in bg-gray-600 group-hover:bg-primary rounded-md ',
        {
          ['!w-2/3 !h-1 !rotate-180']: horizontal,
          ['h-1/4 w-1']: !horizontal,
        },
      )}
    ></div>
  </ResizableHandle>
)

const ChallengePage = () => {
  const [lang, setSelectedLang] = useState(ProgramingLang.Javascript)

  const handleLangChange = (selectedLang: ProgramingLang) =>
    setSelectedLang(selectedLang)

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-fit mt-4"
        tagName="div"
      >
        <ResizablePanel
          defaultSize={25}
          minSize={20}
          className="rounded-md border border-border backdrop-blur-md shadow-md bg-secondary"
        >
          <Tabs
            defaultValue="description"
            className="w-full h-[calc(100%_-_44px)]"
          >
            <TabsList className="w-full rounded-none border-0 border-b border-b-border !py-6">
              <TabsTrigger
                value="description"
                className="text-sm font-medium group data-[state=active]:bg-background/40 inline-flex items-center gap-2 py-2"
              >
                <ListCollapse className="group-data-[state=active]:text-foreground" />
                <span className="group-data-[state=active]:text-foreground">
                  Description
                </span>
              </TabsTrigger>
              <TabsTrigger
                className="text-sm font-medium group data-[state=active]:bg-background/40 inline-flex items-center gap-2 py-2"
                value="solutions"
              >
                <Lightbulb className="group-data-[state=active]:text-foreground" />
                <span className="group-data-[state=active]:text-foreground">
                  Solutions
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="h-[calc(100%_-_44px)]">
              <ChallengeDescription
                title={codeChallenge.title}
                description={codeChallenge.description}
                difficulty={ChallengeDifficult.Hard}
              />
            </TabsContent>
            <TabsContent value="solutions" className="h-[calc(100%_-_44px)]">
              <Solutions />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <CustomResizableHandle />
        <ResizablePanel defaultSize={75}>
          <ResizablePanelGroup
            direction="vertical"
            className="rounded-md border border-border backdrop-blur-md shadow-md bg-secondary"
          >
            <ResizablePanel defaultSize={75}>
              <div className="flex flex-col h-full px-2 pt-2 gap-2">
                <header className="inline-flex gap-2 justify-start items-center">
                  <FileJson className="w-4 h-4" />
                  <h2 className="text-pretty text-ls font-medium">Code</h2>
                </header>
                <div className="inline-flex justify-start gap-2">
                  <LangDropdown lang={lang} onSelect={handleLangChange} />
                  <ProtectedAction label="Login to submit">
                    <Button
                      variant="default"
                      className="inline-flex items-center gap-1 text-white"
                    >
                      <Play className="w-4 h-4" /> Submit
                    </Button>
                  </ProtectedAction>
                </div>
                <Editor
                  height="100%"
                  language={lang}
                  theme="vs-dark"
                  defaultValue={codeChallenge.startedCode}
                  options={{
                    fontSize: 16,
                    formatOnType: true,
                    minimap: {
                      enabled: false,
                    },
                  }}
                />
              </div>
            </ResizablePanel>
            <CustomResizableHandle horizontal />
            <ResizablePanel defaultSize={25}>
              <div className="flex flex-col items-start justify-start p-6 w-full h-[calc(100%_-_44px)] overflow-y-auto">
                {
                  <TestCases>
                    {testResults.map(({ id, isSuccess, ...restTest }) => {
                      if (restTest.input?.toString()) {
                        return (
                          <TestResult
                            key={id}
                            id={id}
                            isSuccess={isSuccess}
                            input={restTest.input}
                            currentOuput={restTest.currentOutput}
                            expectedOutput={restTest.ouput}
                          />
                        )
                      }

                      return (
                        <SecretTestResult
                          key={id}
                          id={id}
                          isSuccess={isSuccess}
                        />
                      )
                    })}
                  </TestCases>
                }
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}

export default ChallengePage
