'use strict';
export type JSONReplacer = (this: object, key: string, value: unknown) => unknown;
export type JSONFormatter = {
  (obj: object): string;
  (obj: object, tabs?: number): string;
  (obj: object, tabs?: number, replacer?: JSONReplacer): string;
};
