import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = "http://localhost:8080/api/products"

  constructor(private http: HttpClient) {
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductsByCategoryId(id: number): Observable<Product[]> {
    let url = `http://localhost:8080/api/categories/${id}/products`;
    return this.http.get<Product[]>(url);
  }

  getProductById(id: number): Observable<Product> {
    let url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }
}
