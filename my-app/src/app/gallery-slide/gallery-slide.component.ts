import { Component } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery-slide',
  templateUrl: './gallery-slide.component.html',
  styleUrl: './gallery-slide.component.css'
})
export class GallerySlideComponent {

  constructor(private logger: GalleryLoggerService){

  }

  ngOnInit(): void {
      this.logger.log('Gallery initialized')
  }

}
