import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private api: ApiService,
    private router: Router,
    private title: Title,
        private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Whrrl - Create a task');



    let requestObject = {
      method: "GET",
      location: "categories"
    }

    let reqObj = {
      method: "GET",
      location: "tasks/" + this.id
    }

    this.api.getTask(reqObj).subscribe(
      (res) => this.task = res.data,
    );

    this.api.getCategories(requestObject).subscribe(
      (res) => this.categories = res.data
    );
    
  }
  
  public id = this.route.snapshot.paramMap.get('id');

  public formError = "";

  public categories: any = [];

  public task: any = {};
    
  public credentials = {
    title: '',
    category: '',
    message: '',
  };
  
  public formSubmit(): any {
    this.formError = "";
    
    if (
        !this.credentials.title ||
        !this.credentials.message ||
        !this.credentials.category
      ) {
        return this.formError = "All fields are required.";
    }
    
    if(!this.formError) {
        this.createTask();
    }
  }
  
  
  private createTask() {
    let requestObject = {
      method: "POST",
      location: "tasks",
      body: this.credentials
    }
    
    this.api.postTasks(requestObject).subscribe(
      (res) => console.log(res)
    );  }
}
