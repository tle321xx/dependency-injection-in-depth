import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  count = 0;

  constructor() { }

  request(){
    console.log('Request form shared service');
  }
}
