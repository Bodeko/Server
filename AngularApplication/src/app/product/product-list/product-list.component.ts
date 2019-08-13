import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges{
  @Input() categoryId: any
  products: IProduct[]
  constructor(private productService: ProductService){}

  ngOnInit(){
    if(this.categoryId === 'all'){
      this.productService.getProducts().subscribe(data => {
          this.products = data
      })
    } else {
      this.productService.getProductsByCategoryId(this.categoryId).subscribe(data => {
        this.products = data
      })
    }
  }

  ngOnChanges(){
    this.ngOnInit()
  }
}
