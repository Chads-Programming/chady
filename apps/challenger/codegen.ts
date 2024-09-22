import type { CodegenConfig } from "@graphql-codegen/cli";
import { ENVS } from "@/lib/envs";

const config: CodegenConfig = {
  schema: `${ENVS.NEXT_PUBLIC_API_HOST}/graphql`,
  documents: ["app/**/*.tsx", "app/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "graphql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
