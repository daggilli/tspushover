declare module 'pushover-notifications' {
  export class Pushover {
    constructor(args: any);
    send(msg: Object, cb: Function): void; 
  }

  export default Pushover;
}
