#!/usr/bin/env node
'use strict';
import fs from 'fs';
import Pushover from 'pushover-notifications';
import {DEFAULT_PRIORITY} from './constants';

interface PushoverConfig {
  apiToken: string;
  userId: string;
  device?: string;
  priority?: number;
}

interface PushoverMessage {
  message: string;
  title?: string;
  device?: string;
  priority?: number;
  timestamp?: number;
};

interface PushoverResponse {
  status: number;
  request: string;
}

class PushoverClient {
  private config: any = {};
  private pover: Pushover;

  public constructor(cfg: PushoverConfig) {
    this.config = JSON.parse(JSON.stringify(cfg));
    this.pover = new Pushover({
      user: this.config.userId,
      token: this.config.apiToken,
    });
  }

  public async send(message: PushoverMessage): Promise<PushoverResponse | Error> {
    return new Promise((resolve: Function, reject: Function) => {
      if(message.priority === undefined || message.priority === null) {
        message.priority = this.config.priority || DEFAULT_PRIORITY;
      }
      this.pover.send(message, (err: Error, result: PushoverResponse) => {
        if(err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}

(async() => {
  const config: PushoverConfig = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

  const p = new PushoverClient(config);

  const msg: PushoverMessage = {
    message: `node test @ ${new Date().toISOString()}`,
    title: 'TS pushover class test',
    device: config.device,
    priority: 1,
    timestamp: Math.round(Date.now() / 1000.),
  };

  const result = await p.send(msg);
  console.log(result);
})();
