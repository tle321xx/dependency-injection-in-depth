import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrl: './parent-one.component.css',
  providers: [SharedService]
})
export class ParentOneComponent {

  // ถ้าใช้ตัวนี้อย่างเดียวมันจะใช้ค่าข้างในร่วมกับ component อื่น
  // แต่ถ้าใช้ providers: [SharedService] มันจะแยกการใช้อย่างชัดเจน
  constructor(private sharedService: SharedService) {}
  // sharedService = new SharedService();

  increase() {
    this.sharedService.count++;
  }

  print() {
    console.log("Count in the parent one - " + this.sharedService.count);
  }

}
