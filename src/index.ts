#!/usr/bin/env node
'use strict';
import fs from 'fs';
import { PushoverConfig, PushoverMessage } from './interfaces';
import { PushoverClient } from './pushoverclient';
import { jsonFormat } from './utilities';

(async () => {
  const config: PushoverConfig = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

  const pushclient = new PushoverClient(config);

  const msg: PushoverMessage = {
    message: `node test with new API and refactoring @ ${new Date().toISOString()}`,
    title: 'TS pushover class test new 21 DEC 24',
    device: config.device,
    priority: 0,
    sound: 'alien',
  };

  try {
    const result = await pushclient.send(msg);
    console.log(jsonFormat(result));
  } catch (e) {
    console.error(e);
  }
})();
