import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

    flag : boolean =false;

    constructor() {}

    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse |HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>
    {
        let username = sessionStorage.getItem("username");
        let password = sessionStorage.getItem("password");
        let token: string = sessionStorage.getItem("token");
        

        if(token && token.endsWith('login'))
        {
            const customReq = req.clone({
                headers: req.headers.set("Authorization","Basic"+btoa(username+":"+password))
            })
            console.log(customReq);
            return next.handle(customReq);
        }
        const customReq = req.clone({
            headers: req.headers.set("Authorization", sessionStorage.getItem("token"))
        })
        console.log(customReq);
        return next.handle(customReq);

    }

} 