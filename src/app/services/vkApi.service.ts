import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class vkApiService {
    private baseApi ='https://api.vk.com/method/';
    private version = '5.126';

    constructor(private http: HttpClient) {}
    
    public getPhoto(): Observable<any> {
        return this.http.jsonp<any>(`${this.baseApi}users.get?fields=crop_photo&v=${this.version}`, 'callback');
    }

    public getLink(ids: string): Observable<any> {
        return this.http.jsonp<any>(`${this.baseApi}users.get?user_ids=${ids}&fields=domain&v=${this.version}`, 'callback');
    }

    public getUser(): Observable<any> {
        return this.http.jsonp<any>(`${this.baseApi}users.get?v=${this.version}`, 'callback');
    }
}