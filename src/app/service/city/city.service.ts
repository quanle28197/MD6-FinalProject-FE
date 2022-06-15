import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {City} from '../../model/city';

@Injectable({
    providedIn: 'root'
})
export class CityService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    showAll(): Observable<City []> {
        return this.http.get<City []>(`${this.apiServerUrl}/cities`);
    }
}
