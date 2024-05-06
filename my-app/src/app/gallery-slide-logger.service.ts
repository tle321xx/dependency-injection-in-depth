import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class GallerySlideLoggerService implements Logger {

  private _prefix = "gallery logger";

  constructor() { }

  log(msg: string): void {
      console.log(`${this._prefix} log: ${msg} Form slide`);
  }
}
