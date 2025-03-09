import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private apiUrl = 'https://localhost:44369/register';

    constructor(private http: HttpClient) {}

    login(user: { email: string; password: string }): Observable<any> {
        return this.http.post<any>(this.apiUrl, user);
    }
}
