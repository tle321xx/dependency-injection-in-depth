import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{
      provide: LoggerService,
      useExisting: ExperimentalLoggerService
    }]
})
export class AppComponent implements OnInit  {
  title = 'dependency-providers';

  constructor(private logger: LoggerService, private experimentService: ExperimentalLoggerService){

  }

  ngOnInit(): void{
    this.logger.prefix = 'App Component';
    this.logger.log('App Component init.....')

    console.log('is instance the same ', this.logger === this.experimentService);
  }
  
}
