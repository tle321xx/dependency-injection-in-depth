import { SharedService } from './shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dependency-injection';

  // create instance but not singleton
  // subscribe(){
  //   let sharedService = new SharedService()
  //   sharedService.request()
  // }
}
