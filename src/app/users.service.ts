import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {switchMap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private getUsersUrl: string = 'https://ndaf14yjh2.execute-api.eu-central-1.amazonaws.com/dev/event/all';
  private addPostUrl: string = 'https://jsonplaceholder.typicode.com/posts/1'

  constructor(private http: Http) { }

  public putRequest(user: string, password: string) {
    let putData = {
      id: 1,
      title: user,
      body: password,
      userId: 1
    }
    return this.http.put(this.addPostUrl, putData)
      .pipe(map(res => {
        console.log("Data pushed to the backend: ", res);
        return JSON.parse(res.text());
      }));
}

  public getRequest() {
      return this.http.get(this.getUsersUrl)
        .pipe(map(res => {
          console.log("Data fetched from the backend: ", res);
          return JSON.parse(res.text());
        }));
  }
}
