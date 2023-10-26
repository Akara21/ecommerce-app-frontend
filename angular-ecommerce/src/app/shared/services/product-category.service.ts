import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductCategory} from "../models/ProductCategory";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private baseUrl: string = environment.apiUrl + "/categories"

  constructor(private http: HttpClient) {
  }

  getCategoryList(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.baseUrl);
  }

}
