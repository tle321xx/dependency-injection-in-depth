import { Component } from '@angular/core';
import { GallerySlideLoggerService } from './gallery-slide-logger.service';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    { provide: GalleryLoggerService, 
      useExisting: GallerySlideLoggerService
    }
  ]
})
export class AppComponent {
  title = 'my-app';
}
