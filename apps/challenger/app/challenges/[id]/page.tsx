'use client'

import { ProtectedAction } from '@/app/auth/components/protected-action'
import { CustomResizableHandle } from '@/app/shared/components/custom-resizable-handle'
import { EmptyState } from '@/app/shared/components/empty-state'
import { ErrorState } from '@/app/shared/components/error-state'
import {
  type CodeLangChallengeDetail,
  ProgrammingLang,
} from '@/graphql/graphql'
import { Editor } from '@monaco-editor/react'

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  type DropdownItem,
  LoaderAndError,
  ResizablePanel,
  ResizablePanelGroup,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TemplateDropdown,
} from '@repo/ui'
import { useTheme } from '@repo/ui/theme'
import { Play, Terminal } from 'lucide-react'
import { FileJson, Lightbulb, ListCollapse } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { ChallengeDescription } from '../components/challenge-description'
import { LangIcon } from '../components/lang-icon'
import { Solutions } from '../components/solutions'
import { useGetCodeChallengeByIdQuery } from '../hooks/use-get-challenge-by-id-query'
import { useSubmission } from '../hooks/use-submission'
import { SubmissionTestsSection } from './submission-tests-section'

const ChallengePage = ({ params }: { params: { id: string } }) => {
  const { theme } = useTheme()
  const [selectedLang, setSelectedLang] = useState<ProgrammingLang>(
    ProgrammingLang.Javascript,
  )
  const [editorCode, setEditorCode] = useState('')

  const {
    submission,
    isLoadingSubmission,
    isSubmissionError,
    submissionStatus,
    submitSolution,
  } = useSubmission({
    challengeId: params.id,
    programmingLang: selectedLang,
  })

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

  const handleLangChange = (
    option: DropdownItem<CodeLangChallengeDetail, string | number>,
  ) => setSelectedLang(option.data.lang)

  const handleSubmit = () => {
    submitSolution(editorCode)
  }

  const handleEditorChange = (code: string | undefined) => {
    setEditorCode(code ?? '')
  }

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

    setEditorCode(submission?.solutionCode ?? langDetail.startedCode)
  }, [selectedLang, challenge, submission])

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
                errorState={<ErrorState title="An error has occurred" />}
                emptyState={<EmptyState title="No description was provided" />}
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
                    onSelect={handleLangChange}
                  >
                    {(item) => (
                      <div className="inline-flex gap-2 justify-start items-center">
                        <LangIcon lang={item.data.lang} />
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
                      onClick={handleSubmit}
                    >
                      <Play className="w-4 h-4" /> Submit
                    </Button>
                  </ProtectedAction>
                </div>
                <Editor
                  height="100%"
                  language={selectedLang?.toLowerCase()}
                  theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
                  value={editorCode}
                  onChange={handleEditorChange}
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
              <div className="flex flex-col items-start justify-start p-6 w-full h-full overflow-y-auto">
                <LoaderAndError
                  loading={isLoadingSubmission}
                  isError={isSubmissionError}
                  data={submissionStatus?.testResults}
                  errorState={<ErrorState title="An error has occurred" />}
                  emptyState={
                    <Alert className="bg-card">
                      <Terminal className="h-4 w-4" />
                      <AlertTitle>Heads up!</AlertTitle>
                      <AlertDescription>
                        Submit your solution to see the results
                      </AlertDescription>
                    </Alert>
                  }
                >
                  {({ data: testResults }) => (
                    <SubmissionTestsSection
                      testResults={testResults}
                      score={submission?.score ?? 0}
                      runtime={submission?.runtime ?? 0}
                    />
                  )}
                </LoaderAndError>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}

export default ChallengePage
