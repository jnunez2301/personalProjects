import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlSchema } from '../_modelo/UrlSchema';

@Injectable({
  providedIn: 'root'
})


export class GlobalService {
  private baseUrl = 'https://codesharingapp-backend.fly.dev/api/url'

  constructor(private http: HttpClient) { }

  getUrlSchemas(): Observable<UrlSchema[]>{
    return this.http.get<UrlSchema[]>(this.baseUrl)
  }
}
