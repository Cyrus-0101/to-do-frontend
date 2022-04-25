import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private api: ApiService,
    private title: Title,
  ) { }

  ngOnInit() {
        this.title.setTitle("Categories: Whrrl - To Do App");

    let requestObject = {
      location: "categories",
    }

    this.api.getCategories(requestObject).subscribe(
      (res) => this.categoriesData = res.data);
  }

  public categoriesData: any = [];

  }

