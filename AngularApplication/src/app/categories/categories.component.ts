import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryId: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.params['id']
    // if(this.categoryId !== null){
    //   this.categoryId = 'all'
    // }
    console.log(this.categoryId)
  }

}
