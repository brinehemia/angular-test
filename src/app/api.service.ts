import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.yara.staging.algostudio.net/api/DynamicContents/CountryAreaCode';
 
  constructor(private http: HttpClient) { }

  
  getData(): Observable<string> {
    const headers = new HttpHeaders({
        'Accept': 'text/plain'
      });
  
      return this.http.get<string>(this.apiUrl, { headers, responseType: 'text' as 'json' });
  }
}