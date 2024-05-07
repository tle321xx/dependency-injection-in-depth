import { SharedService } from './../shared.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrl: './parent-two.component.css',
  providers: [SharedService]
})
export class ParentTwoComponent {

  // ถ้าใช้ตัวนี้อย่างเดียวมันจะใช้ค่าข้างในร่วมกับ component อื่น
  // แต่ถ้าใช้ providers: [SharedService] มันจะแยกการใช้อย่างชัดเจน
  constructor(private sharedService: SharedService) {}
  // sharedService = new SharedService();
  
  print() {
    console.log("Count in the parent two - " + this.sharedService.count);
  }

}
