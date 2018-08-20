import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AppServices{

    constructor(private http: HttpClient) {
        
        
    }
    public getHeader(){
        let header = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return header;
    }
    public getJSON(): Observable<any> {
         return this.http.get("./assets/file.json",{headers: this.getHeader()});
     }
}