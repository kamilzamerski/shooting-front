import { Injectable } from '@angular/core';
import {RestService} from '../rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    redirectUrl: string;

    constructor(private http: RestService) {

    }

    login(token: string) {
        window.localStorage.setItem('api-token', token);
    }

    logout(): void {
        window.localStorage.clear();
    }
}
