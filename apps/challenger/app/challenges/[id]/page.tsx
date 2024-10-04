'use client'

import { ProtectedAction } from '@/app/auth/components/protected-action'
import { useGetCodeChallengeByIdQuery } from '@/app/challenges/queries/challenge-by-id'
import JavaScript from '@/app/shared/icons/javascript'
import Python from '@/app/shared/icons/python'
import Typescript from '@/app/shared/icons/typescript'
import {
  type CodeLangChallengeDetail,
  ProgrammingLang,
} from '@/graphql/graphql'
import { Editor } from '@monaco-editor/react'
import {
  Button,
  type DropdownItem,
  LoaderAndError,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TemplateDropdown,
  cn,
} from '@repo/ui'
import { Play } from 'lucide-react'
import { FileJson, Lightbulb, ListCollapse } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { ChallengeDescription } from '../components/challenge-description'
import { Solutions } from '../components/solutions'
import {
  SecretTestResult,
  TestCases,
  TestResult,
} from '../components/test-summary'

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

const getLangIcon = (lang: ProgrammingLang) => {
  switch (lang) {
    case ProgrammingLang.Javascript:
      return <JavaScript />
    case ProgrammingLang.Typescript:
      return <Typescript />
    case ProgrammingLang.Python:
      return <Python />
  }
}

interface CustomResizableHandleProps {
  horizontal?: boolean
}

const CustomResizableHandle = ({ horizontal }: CustomResizableHandleProps) => (
  <ResizableHandle
    withHandle={false}
    className={cn('w-5 bg-transparent group', {
      '!h-5 border border-x-0 border-y-border': horizontal,
    })}
  >
    <div
      className={cn(
        'transition-all ease-in bg-gray-600 group-hover:bg-primary rounded-md ',
        {
          '!w-2/3 !h-1 !rotate-180': horizontal,
          'h-1/4 w-1': !horizontal,
        },
      )}
    />
  </ResizableHandle>
)

const ChallengePage = ({ params }: { params: { id: string } }) => {
  const [selectedLang, setSelectedLang] = useState<ProgrammingLang>(
    ProgrammingLang.Javascript,
  )
  const [staterCode, setStartedCode] = useState('')

  const {
    data: challenge,
    isLoading,
    isError,
  } = useGetCodeChallengeByIdQuery({
    id: params.id,
  })

  const availableProgrammingLanguages = useMemo(() => {
    if (!challenge) {
      return []
    }

    return challenge.langDetails.map(
      (langDetail) =>
        ({
          data: langDetail,
          label: langDetail.lang,
          value: langDetail.lang,
        }) as DropdownItem<CodeLangChallengeDetail>,
    )
  }, [challenge])

  const handleLangChange = (selectedLang: ProgrammingLang) =>
    setSelectedLang(selectedLang)

  useEffect(() => {
    if (!challenge || !selectedLang) {
      return
    }

    const langDetail = challenge.langDetails.find(
      ({ lang }) => lang === selectedLang,
    )

    if (!langDetail) {
      return
    }

    setStartedCode(langDetail.startedCode)
  }, [selectedLang, challenge])

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
            <TabsContent
              value="description"
              className="h-[calc(100%_-_44px)] px-2"
            >
              <LoaderAndError
                loading={isLoading}
                data={challenge}
                isError={isError}
                errorState={
                  <p className="text-2xl font-semibold">
                    An error has occurred
                  </p>
                }
                emptyState={
                  <p className="text-2xl font-semibold">
                    No description was provided
                  </p>
                }
              >
                {({ data }) => (
                  <ChallengeDescription
                    title={data.title}
                    description={data.description}
                    difficulty={data.difficult}
                  />
                )}
              </LoaderAndError>
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
                  <TemplateDropdown
                    value={selectedLang}
                    items={availableProgrammingLanguages}
                    onSelect={(item) => handleLangChange(item.data.lang)}
                  >
                    {(item) => (
                      <div className="inline-flex gap-2 justify-start items-center">
                        {getLangIcon(item.data.lang)}
                        <span className="capitalize font-semibold text-sm">
                          {item.label}
                        </span>
                      </div>
                    )}
                  </TemplateDropdown>
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
                  key={selectedLang}
                  height="100%"
                  language={selectedLang?.toLowerCase()}
                  theme="vs-dark"
                  defaultValue={staterCode}
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
