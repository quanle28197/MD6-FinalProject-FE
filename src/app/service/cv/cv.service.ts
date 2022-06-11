import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CvDTO} from '../../model/dto/cv-dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CVService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  createCV(cv: CvDTO): Observable<CvDTO> {
    return this.http.post<CvDTO>(`${this.apiServerUrl}/CV/createCV`, cv)
  }

  updateCV(userId: number, cv: CvDTO): Observable<CvDTO> {
    return this.http.put<CvDTO>(`${this.apiServerUrl}/CV/${userId}`, cv)
  }

  findByUserId(id: number): Observable<CvDTO> {
    return this.http.get<CvDTO>(`${this.apiServerUrl}/CV/user/${id}`)
  }
}
