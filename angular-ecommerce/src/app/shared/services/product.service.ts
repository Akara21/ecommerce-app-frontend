import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import {AuthService} from "./auth.service";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.apiUrl + "/products"

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductsByCategoryId(id: number): Observable<Product[]> {
    let url = `${environment.apiUrl}/categories/${id}/products`;
    return this.http.get<Product[]>(url);
  }

  getProductById(id: number): Observable<Product> {
    let url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }
}
