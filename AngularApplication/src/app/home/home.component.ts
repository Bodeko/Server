import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categoryId: any = 'all';

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    // this.categoryId = this.route.snapshot.params['id']
  }

  setCategoryId(id) {
    // console.log(id);
    this.categoryId = id;

  }

}
