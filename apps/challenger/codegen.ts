import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_API_HOST}/graphql`,
  documents: ['app/**/*.tsx', 'app/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    'graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
