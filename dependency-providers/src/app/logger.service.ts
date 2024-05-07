import { Injectable } from '@angular/core';
import { Logger } from './logger';
import { ExperimentalLoggerService } from './experimental-logger.service';

@Injectable({
  providedIn: 'root',
  useExisting: ExperimentalLoggerService
})
export class LoggerService implements Logger {

  prefix = 'root';

  constructor() { }

  log(message: string){
    console.log(`${this.prefix}: ${message}`);
  }
}
