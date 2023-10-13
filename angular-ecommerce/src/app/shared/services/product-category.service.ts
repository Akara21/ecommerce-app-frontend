import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductCategory} from "../models/ProductCategory";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private baseUrl = "http://localhost:8080/api/categories"

  constructor(private http: HttpClient) {
  }

  getCategoryList(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.baseUrl);
  }
  
}
