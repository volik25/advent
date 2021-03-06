import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiInterceptor } from "../services/api.interceptor";
import { vkApiService } from "../services/vkApi.service";

@NgModule({
    providers: [
        vkApiService,
        { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
    ]
})
export class JsonpInterceptingModule { }