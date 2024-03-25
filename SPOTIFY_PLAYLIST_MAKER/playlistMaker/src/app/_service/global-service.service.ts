import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aritst } from '../../_models/Artist';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  constructor(private http: HttpClient) {}

  url: string = environment.tokenPost;
  CLIENT_ID: string = environment.CLIENT_ID;
  CLIENT_SECRET: string = environment.CLIENT_SECRET;
  getToken(): Observable<any> {

    // Set headers
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    // Set body
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.CLIENT_ID)
      .set('client_secret', this.CLIENT_SECRET);

    return this.http.post<any>(this.url, body.toString(), { headers });
  }

  public getArtists(token: any) {
    const url: string = `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<Aritst[]>(url, { headers });
  }

}
