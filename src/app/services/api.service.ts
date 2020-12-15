import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    private baseApi ='https://api.vk.com/method/';
    private version = '5.126';

    constructor(private http: HttpClient) {}
    
    public getPhoto(): Observable<any> {
        return this.http.jsonp<any>(`${this.baseApi}users.get?fields=crop_photo&v=${this.version}`, 'callback');
    }
}