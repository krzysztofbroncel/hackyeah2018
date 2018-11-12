import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {switchMap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private mockEndpointUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  public getMockUsers() {
      return this.http.get(this.mockEndpointUrl)
        .pipe(map(res => {
          console.log("Data fetched from the backend: ", res);
          return JSON.parse(res.text());
        }));
  }
}
