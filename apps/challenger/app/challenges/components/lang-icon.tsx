import JavaScript from '@/app/shared/icons/javascript'
import Python from '@/app/shared/icons/python'
import Typescript from '@/app/shared/icons/typescript'
import { ProgrammingLang } from '@/graphql/graphql'

interface Props {
  lang: ProgrammingLang
}

export const LangIcon = ({ lang }: Props) => {
  switch (lang) {
    case ProgrammingLang.Javascript:
      return <JavaScript />
    case ProgrammingLang.Typescript:
      return <Typescript />
    case ProgrammingLang.Python:
      return <Python />
  }
}
