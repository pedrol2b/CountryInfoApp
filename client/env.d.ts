declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASEURL?: string;
    }
  }
}

export {};
