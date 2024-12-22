'use strict';
import { JSONFormatter, JSONReplacer } from './jsonFormatInterfaces';
const DEFAULT_JSON_TABS = 2;
export const mapAndSetReplacer: JSONReplacer = (_: string, value: unknown) => {
  if (value instanceof Map) {
    return [...value.entries()];
  }
  if (value instanceof Set) {
    return [...value.values()];
  }
  return value;
};
export const jsonFormat: JSONFormatter =
  (obj: object, tabs: number = DEFAULT_JSON_TABS, replacer?: JSONReplacer): string => JSON.stringify(obj, replacer, tabs);
