import { Component, OnInit, OnChanges } from '@angular/core';
import { MdvServiceService } from './mdv-service.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-mdv-table',
  templateUrl: './mdv-table.component.html',
  styleUrls: ['./mdv-table.component.scss']
})
export class MdvTableComponent implements OnInit {
  planData;
  medicalPlans;
  dentalPlans;
  visionPlans;
  medicalHeader = ['name', 'planType', 'price'];
  tableChecked = [];
  isSelectAll = false;
  count = 0;
  one = '';
  two = '';


  constructor(private mdvService: MdvServiceService) { }

  ngOnInit() {
    this.mdvService.getPlans().subscribe((data) => {
      this.planData = data['plans'];
      this.medicalPlans = this.planData.Medical;
      this.dentalPlans = this.planData.Dental;
      this.visionPlans = this.planData.Vision;
      console.log(data);
    })
  }

  SelectAll() {
    this.isSelectAll = true;
    let numOfTrue = 0;
    let trueDiff;
    if (this.tableChecked.length || this.tableChecked.length === 0) {
      for (let i = 0; i < this.tableChecked.length; i++) {
        if (this.tableChecked[i]) {
          numOfTrue++;
        }
      }
      trueDiff = this.medicalPlans.length - numOfTrue;
      this.count += trueDiff;
      for (let i = 0; i < this.medicalPlans.length; i++) {
        this.tableChecked[i] = true;
      }
    }
  }

  comboOne(event) {
    console.log(event.target.value);
    this.one = event.target.value;
    if (this.visionPlans[0].name === event.target.value) {
      this.two = this.visionPlans[1].name;
    } else {
      this.two = this.visionPlans[0].name;
    }
    console.log(this.one, this.two, typeof this.one);
  }

  // comboTwo(e) {
  //   console.log(e.target.value);
  //   this.two = e.target.value;
  //   if (this.visionPlans[0].name === e.target.value) {
  //     this.one = this.visionPlans[1].name;
  //   } else {
  //     this.one = this.visionPlans[0].name;
  //   }
  // }


  selectRow(i, e) {
    console.log(i, e, this.medicalPlans[i]);
    let num = 0;
    if (e) {
      this.tableChecked[i] = e;
      num = 1;
    } else {
      this.tableChecked[i] = e;
      num = -1;
    }
    this.count += num;
  }

}
