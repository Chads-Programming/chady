import { ProgrammingLang } from '@/graphql/graphql'
import Image from 'next/image'

interface Props {
  lang: ProgrammingLang
}

export const LangIcon = ({ lang }: Props) => {
  switch (lang) {
    case ProgrammingLang.Javascript:
      return (
        <Image
          src="/programming-langs/javascript.svg"
          alt="javascript logo"
          width={25}
          height={25}
        />
      )
    case ProgrammingLang.Typescript:
      return (
        <Image
          src="/programming-langs/typescript.svg"
          alt="typescript logo"
          width={25}
          height={25}
        />
      )
    case ProgrammingLang.Python:
      return (
        <Image
          src="/programming-langs/python.svg"
          alt="python logo"
          width={28}
          height={28}
        />
      )
  }
}
