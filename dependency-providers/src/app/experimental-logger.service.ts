import { Inject, Injectable } from '@angular/core';
import { Logger } from './logger';
import { APP_CONFIG, Appconfig } from './config.token';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {

  prefix = 'root';

  constructor(private http: HttpClient) {
    // ใช้ในเคส Injection Token
    // constructor(@Inject(APP_CONFIG) private config: Appconfig) {
    // console.log(`Experimental Logger -> constructor -> config`, config);
   }

  log(message: string){
    console.log(`${this.prefix} (experimental): ${message}`);
  }
}
