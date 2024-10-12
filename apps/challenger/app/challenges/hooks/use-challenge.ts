import {
  type CodeLangChallengeDetail,
  ProgrammingLang,
} from '@/graphql/graphql'
import type { DropdownItem } from '@repo/ui'
import { useEffect, useMemo, useState } from 'react'
import { useGetCodeChallengeByIdQuery } from '../queries/get-challenge-by-id'
import { useSubmission } from './use-submission'

export const useChallenge = (challengeId: string) => {
  const [selectedLang, setSelectedLang] = useState(ProgrammingLang.Javascript)
  const [solutionCode, setChallengeSolutionCode] = useState('')
  const {
    data: challenge,
    isError: fetchChallengeError,
    isLoading: isChallengeLoading,
  } = useGetCodeChallengeByIdQuery({ id: challengeId })

  const { submission } = useSubmission({
    challengeId,
    programmingLang: selectedLang,
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

  const changeProgrammingLang = (selectedLang: ProgrammingLang) =>
    setSelectedLang(selectedLang)

  const changeSolutionCode = (code: string) => setChallengeSolutionCode(code)

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

    setChallengeSolutionCode(submission?.solutionCode ?? langDetail.startedCode)
  }, [selectedLang, challenge, submission])

  return {
    selectedLang,
    fetchChallengeError,
    isChallengeLoading,
    solutionCode,
    challenge,
    availableProgrammingLanguages,
    changeProgrammingLang,
    changeSolutionCode,
  }
}
