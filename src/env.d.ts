/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MONGO_ATLAS: string
  readonly VITE_MONGO_ATLAS_USER: string
  readonly VITE_MONGO_ATLAS_PASSWORD: string
  readonly VITE_DATABASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
