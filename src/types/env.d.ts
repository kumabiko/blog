declare namespace NodeJS {
  interface ProcessEnv {
    readonly USER_NAME: string;
    readonly URL: string;
    readonly MICROCMS_SERVICE_DOMAIN: string;
    readonly MICROCMS_API_KEY: string;
  }
}
