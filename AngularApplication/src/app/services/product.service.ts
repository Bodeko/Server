import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';
import { ApiService } from './api.service';

@Injectable()
export class ProductService {

    constructor(private api: ApiService) { }




    getProducts(): Observable<IProduct[]> {
      return this.api.get<IProduct[]>('/products', 'getProducts');
    }

    getProductById(id): Observable<IProduct> {
      return this.api.get<IProduct>('/products/' + id, 'getProductById');
    }

    getProductsByCategoryId(id): Observable<IProduct[]> {
      return this.api.get<IProduct[]>('/categories/' + id, 'getProductByCategoryId');
    }

    addProductToCart(id) {
      return this.api.post('/carts/' + id, {}, 'addProductToCart');
    }


}
