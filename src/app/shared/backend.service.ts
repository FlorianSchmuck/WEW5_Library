import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {API_URL} from "./common";
import {User} from "../users/model/user";
import {Book} from "../books/model/book.model";

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) {
  }

  public get(path: string): Observable<any> {
    return this.http.get(API_URL + path);
  }

  public post(path: string, body: User | Book): Observable<any> {
    return this.http.post(API_URL + path, body);
  }

  public put(path: string, body: User | Book): Observable<any> {
    return this.http.put(API_URL + path, body);
  }

  public delete(path: string): Observable<any> {
    return this.http.delete(API_URL + path);
  }

}
