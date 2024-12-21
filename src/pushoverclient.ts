'use strict';
import { Pushover } from 'pushover-js';
import { PushoverConfig, PushoverMessage } from './interfaces';
import { DEFAULT_PRIORITY, DEFAULT_SOUND } from './constants';
import { IResponse } from 'pushover-js/lib/request';
import { cloneObject } from './utilities';

export class PushoverClient {
  private config: PushoverConfig;
  private pusher: Pushover;

  public constructor(cfg: PushoverConfig) {
    this.config = cloneObject(cfg);
    this.pusher = new Pushover(this.config.userId, this.config.apiToken);
  }

  public async send(message: PushoverMessage): Promise<IResponse> {
    this.pusher.setPriority(message.priority ?? DEFAULT_PRIORITY);
    this.pusher.setTimestamp(message.timestamp ?? Math.round(Date.now() / 1000));
    this.pusher.setSound(message.sound ?? DEFAULT_SOUND);
    if (message.device) {
      this.pusher.setDevice(message.device);
    }
    return await this.pusher.send(message.title, message.message);
  }
}
