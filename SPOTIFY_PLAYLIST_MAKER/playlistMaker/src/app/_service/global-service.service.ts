import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aritst } from '../../_models/Artist';

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const url: string = 'https://accounts.spotify.com/api/token';
    const CLIENT_ID: string = 'af389386cc1349179d73f225892c658b';
    const CLIENT_SECRET: string = '056c9c0123854c3e8d5ffb070495ec1a';

    // Set headers
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    // Set body
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', CLIENT_ID)
      .set('client_secret', CLIENT_SECRET);

    return this.http.post<any>(url, body.toString(), { headers });
  }

  public getArtists(token: any) {
    const url: string = `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Aritst[]>(url, { headers });
  }
}
