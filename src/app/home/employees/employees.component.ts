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

  toDoList:any;

  todoDetails = {
      name: 'Todo 1',
      description: 'Learn AWS AppSync'
    }

  constructor() { }

  async ngOnInit() {
    this.allTodos = await (API.graphql({ query: queries.listTodos }));
    console.log(this.allTodos);
    this.toDoList = Object.values(this.allTodos.data.listTodos.items);
    console.log(this.toDoList);
  }

  async createToDo() {
    const newTodo = await API.graphql(graphqlOperation(mutations.createTodo, {input: this.todoDetails}));
    this.toDoList.push(this.todoDetails);
  }


  async listTodos() {
    this.allTodos = await (API.graphql({ query: queries.listTodos }));
  }

}