'use strict';
import { Pushover } from 'pushover-js';
import { PushoverConfig, PushoverMessage } from './interfaces';
import type { Priority, Sound } from './interfaces';
import { DEFAULT_PRIORITY, DEFAULT_SOUND } from './constants';
import { IResponse } from 'pushover-js/lib/request';
import { cloneObject } from './utilities';

export class PushoverClient {
  private config: PushoverConfig;
  private pover: Pushover;

  public constructor(cfg: PushoverConfig) {
    this.config = cloneObject(cfg);
    this.pover = new Pushover(this.config.userId, this.config.apiToken);
  }
  public async send(message: PushoverMessage): Promise<IResponse> {
    const priority: Priority = (message.priority !== undefined && message.priority !== null) ? message.priority : DEFAULT_PRIORITY;
    this.pover.setPriority(priority);
    this.pover.setTimestamp(message.timestamp || Math.round(Date.now() / 1000.));
    const sound: Sound = (message.sound !== undefined && message.sound !== null) ? message.sound : DEFAULT_SOUND;
    this.pover.setSound(sound);
    if (message.device) {
      this.pover.setDevice(message.device);
    }
    return await this.pover.send(message.message, message.title);
  }
}