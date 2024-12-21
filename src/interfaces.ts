'use strict';
export declare type Priority = -2 | -1 | 0 | 1 | 2;
export declare type Sound = 'pushover' | 'bike' | 'bugle' | 'cashregister' | 'classical' |
  'cosmic' | 'falling' | 'gamelan' | 'incoming' | 'intermission' | 'magic' | 'mechanical' |
  'pianobar' | 'siren' | 'spacealarm' | 'tugboat' | 'alien' | 'climb' | 'persistent' | 'echo' |
  'updown' | 'vibrate' | 'none';

export interface PushoverConfig {
  apiToken: string;
  userId: string;
  device?: string;
  priority?: number;
}

export interface PushoverMessage {
  message: string;
  title: string;
  device?: string;
  priority?: Priority;
  timestamp?: number;
  sound?: Sound;
};