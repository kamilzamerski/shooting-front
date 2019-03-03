import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    apiUrl: string;

    constructor(protected http: HttpClient, protected router: Router) {
        this.router = router;
        this.apiUrl = 'http://localhost:8000';
    }

    public get(url: string, params: any = {}) {
        return this.http.get(this.apiUrl + url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('api-token'),
            }),
            observe: 'response', params: params
        }).pipe(
            catchError(err => this.handleError(err, this.router))
        );
    }

    public delete(url: string, params: any = {}) {
        return this.http.delete(this.apiUrl + url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('api-token'),
            }),
            observe: 'response', params: params
        }).pipe(
            catchError(err => this.handleError(err, this.router))
        );
    }

    public post(url: string, params: any) {
        return this.http.post(this.apiUrl + url, params, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('api-token'),
            }), observe: 'response'
        }).pipe(
            catchError(err => this.handleError(err, this.router))
        );
    }

    public put(url: string, params: any) {
        return this.http.put(this.apiUrl + url, params, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('api-token'),
            }), observe: 'response'
        }).pipe(
            catchError(err => this.handleError(err, this.router))
        );
    }

    private handleError(error: HttpErrorResponse, router: Router) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            if (error.status === 401) {
                router.navigate(['/login']);
            } else {
                console.error(
                    `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`);
            }
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}
