import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from './common';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) {
  }

  public get(path: string): Observable<any> {
    return this.http.get(API_URL + path);
  }

}
