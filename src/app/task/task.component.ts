import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(
    private api: ApiService,
    private title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle("Whrrl - To Do App");

    let requestObject = {
      location: "tasks",
    }

    this.api.getTasks(requestObject).subscribe(
      (res) => this.taskData = res.data,
    );

  }

  public taskData: any = [];

}
