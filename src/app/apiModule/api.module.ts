import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiService } from "../services/api.service";

@NgModule({
    providers: [
        ApiService
    ]
})
export class ApiModule { }