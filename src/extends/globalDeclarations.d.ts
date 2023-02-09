/**
 * global type extendings are placed here
 * @example `process.env.REACT_APP_API_BASE` is suggested by typescript
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_BASE: string;
    }
  }
  interface String {
    replaceAt(index: number, replacement: string);
    withCommas(): string;
    withPriceUnit(): string;
  }
  interface Number {
    withCommas(): string;
    withPriceUnit(): string;
    inTimeFormat(hasHour?: boolean): string;
  }
}

export {};
