import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LegacyLogger } from './logger.legacy';
import { APP_CONFIG, Appconfig } from './config.token';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{
      provide: LoggerService,
      // useClass: ExperimentalLoggerService // สามารถใช้ instance ของ provide: และใช้งานใน่สวน useClass โดยที่ไม่ต้อง inject
      // useExisting: ExperimentalLoggerService // สามารถรวมและแยก instance ทั้ง 2 ตัวที่เรากำหนด
      // useValue: LegacyLogger // มี instance อยู่แล้วและจะมาแทนค่าที่มีอยู่แล้ว
      useFactory: (config: Appconfig, http: HttpClient) => { // สร้าง factory ไว้ที่ config แล้วสามารถเรียใช้โดยใช้ useFactory 
        return config.experimentalEnabled 
        ? new ExperimentalLoggerService(http) : new LoggerService()
      },
      deps: [APP_CONFIG, HttpClient]
    }]
})
export class AppComponent implements OnInit  {
  title = 'dependency-providers';

  constructor(private logger: LoggerService, private experimentService: ExperimentalLoggerService){

  }

  ngOnInit(): void{
    console.log(this.logger);
    this.logger.prefix = 'App Component';
    this.logger.log('App Component init.....')

    console.log('is instance the same ', this.logger === this.experimentService);
  }
  
}
