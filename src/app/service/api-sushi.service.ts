import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ApiSushiService {
  constructor(private http: HttpClient) { }

  public getBoxes(): Observable<any>{
    return this.http.get(environment.apiGetBoxes);
  }
}