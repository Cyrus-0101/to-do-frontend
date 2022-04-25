import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  constructor(
    private api: ApiService,
    private router: Router,
    private title: Title,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Whrrl - Create a task');
    
    
    let requestObject = {
      method: "GET",
      location: "categories/" + this.id
    }

    let task = this.api.getTask(requestObject).subscribe(
      (res) => this.category = res.data,
    );

    console.log(task);
    
  }

  public id = this.route.snapshot.paramMap.get('id');

  public category: any = {};

  public formError = "";
    
  public credentials = {
    name: '',
  };
  
  public formSubmit(): any {
    this.formError = "";
    
    if (
        !this.credentials.name
      ) {
        return this.formError = "All fields are required.";
    }
    
    if(!this.formError) {
      this.createCategory();
    }
  }
  
  
  private createCategory() {
    let requestObject = {
      method: "POST",
      location: "categories/" + this.id,
      body: this.credentials
    }
    
    this.api.postTasks(requestObject).subscribe(
      (res) => this.router.navigate(['/'])
    )
  }

}
