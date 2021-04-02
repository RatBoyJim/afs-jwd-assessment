import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/mock_data_(4).json'

import { NzTableModule, NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  first_name: string;
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

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

  listOfColumns = [
    {"name": "ID"},
    {"name": "First Name",
      "sortOrder": "descend",
      "sortFn": "(a: DataItem, b: DataItem) => a.first_name - b.first_name)", 
      "sortDirections": ['descend', null],
      "listOfFilter": [],
      "filterFn": "null",
      "filterMultiple": "true"},
      {"name": "Last Name"}, 
      {"name": "Job Title"}, 
      {"name": "CodeClan Graduate"}, 
      {"name": "Gender"}
      ];

}
