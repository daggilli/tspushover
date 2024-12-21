'use strict';

export const jsonFormat = (obj: object, tabs = 2): string => JSON.stringify(obj, null, tabs);
export const dumpObject = (filename: string, obj: object) => {
  // eslint-disable-next-line
  const fs = require('fs');

  fs.writeFileSync(filename, jsonFormat(obj));
};
export const writeString = (filename: string, data: string) => {
  // eslint-disable-next-line
  const fs = require('fs');

  fs.writeFileSync(filename, data);
};
export const loadObject = (filename: string) => {
  // eslint-disable-next-line
  const fs = require('fs');

  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

export const cloneObject: <T>(obj: T) => T = (obj) => JSON.parse(JSON.stringify(obj));
