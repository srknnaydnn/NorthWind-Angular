import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryResponseModel } from 'src/app/models/categoryResponseModel';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];
  ngOnInit(): void {
    this.getCategories();
  }
  
  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
}
