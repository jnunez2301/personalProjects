import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlSchema } from '../_modelo/UrlSchema';

@Injectable({
  providedIn: 'root'
})


export class GlobalService {
  private baseUrl = 'http://localhost:4000/api/url'

  constructor(private http: HttpClient) { }

  getUrlSchemas(): Observable<UrlSchema[]>{
    return this.http.get<UrlSchema[]>(this.baseUrl)
  }
}
