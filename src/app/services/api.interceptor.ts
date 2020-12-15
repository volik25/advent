import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, JsonpClientBackend, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let params = req;
    if (sessionStorage.getItem('token')) {
      let token = sessionStorage.getItem('token');
      const paramReq = req.clone({
        params: req.params.set('access_token', token!),
      });
      params = paramReq;
    }
    return next.handle(params);
  }

}