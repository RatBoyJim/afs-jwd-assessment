import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/mock_data_(4).json'

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  listData = Object.values(data);

  constructor() { }

  ngOnInit(): void {
    console.log("data: ", this.listData);
    
  }

}
