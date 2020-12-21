import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor {
  private serviceToken = 'e8579ca9e8579ca9e8579ca994e822eb1fee857e8579ca9b7812a7e4fb604fbd45e9190';
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let params = req;
    if (req.url.includes('users.get?user_ids')) {
      const paramReq = req.clone({
        params: req.params.set('access_token', this.serviceToken!),
      });
      params = paramReq;
      return next.handle(params);
    }
    if (req.url.includes('api.vk.com/method/')) {
      if (sessionStorage.getItem('token')) {
      let token = sessionStorage.getItem('token');
      const paramReq = req.clone({
        params: req.params.set('access_token', token!),
      });
      params = paramReq;
    }
    return next.handle(params);
    } else {
      return next.handle(req);
    }

  }

}