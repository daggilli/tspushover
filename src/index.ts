#!/usr/bin/env node
'use strict';
import { PushoverConfig, PushoverMessage } from './interfaces';
import { PushoverClient } from './pushoverclient';
import { jsonFormat, loadObject } from './utilities';
import { format } from "date-fns";

(async () => {
  const config: PushoverConfig = loadObject('./config.json');

  const pushclient = new PushoverClient(config);

  const msg: PushoverMessage = {
    message: `node test with new API and refactoring @ ${new Date().toISOString()}`,
    title: `TypeScript pushover class test new ${format(new Date(), "yyyy-MM-dd")}`,
    device: config.device,
    sound: 'alien',
  };

  try {
    const result = await pushclient.send(msg);
    console.log(jsonFormat(result));
  } catch (e) {
    console.error(e);
  }
})();
