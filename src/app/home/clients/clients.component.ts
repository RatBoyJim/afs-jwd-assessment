import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/mock_data_(4).json'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  listData = data;

  constructor() { }

  ngOnInit(): void {
  }

}
