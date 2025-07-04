// src/app/services/document.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  private apiUrl = 'https://localhost:5001/api/document';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  add(doc: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, doc);
  }

  update(id: number, doc: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, doc);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
