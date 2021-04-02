import { Component, OnInit } from '@angular/core';

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as subscriptions from '../../../graphql/subscriptions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  
  allTodos:any;

  constructor() { }

  async ngOnInit() {
    this.allTodos = await (API.graphql({ query: queries.listTodos }));
    // const allTodos = await API.graphql(graphqlOperation(getAllTodos), authMode: 'AWS_IAM');
    console.log(this.allTodos);
  }

  async listTodos(){
    this.allTodos = await (API.graphql({ query: queries.listTodos }));
  }

}
