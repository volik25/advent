import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    private baseUrl = 'http://advent.icsst.ru/adventBack/controller.php';

    constructor(private http: HttpClient) {}

    public getDate(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}?key=get-date`)
    }

    public getUserData(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}?key=get-user&id=${id}`);
    }

    public addUser(user: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}?key=add-user`, user);
    }

    public updateUser(user: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}?key=update-user`, user);
    }

    public getAnswer(answer: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}?key=get-answer`, answer);
    }

    public addAnswer(answer: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}?key=add-answer`, answer);
    }
}