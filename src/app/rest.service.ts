import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class RestService {

    apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = 'http://api.shoot';
    }

    public get(url: string, params: any = {}) {
        return this.http.get(this.apiUrl + url, {observe: 'response', params: params}).pipe(
            catchError(this.handleError)
        );
    }

    public post(url: string, params: any) {
        return this.http.post(this.apiUrl + url, params, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, observe: 'response'
        }).pipe(
            catchError(this.handleError)
        );
    }

    public put(url: string, params: any) {
        return this.http.put(this.apiUrl + url, params, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, observe: 'response'
        }).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ` + JSON.stringify(error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(error);
    };
}
