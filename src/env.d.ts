/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DATABASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface IProcessEnv {
  readonly MONGO_ATLAS?: string
  readonly MONGO_ATLAS_USER?: string
  readonly MONGO_ATLAS_PASSWORD?: string
}

declare global {
  namespace NodeJS {
    // eslint-disable-next-line
    interface ProcessEnv extends IProcessEnv {}
  }
}
