import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  basePath: string = "http://private-9aad-note10.apiary-mock.com/notes";

  constructor(private httpClient: HttpClient) {

  }

  getNotesList(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.basePath);
  }

  createNote(title: string): Observable<Note> {
    return this.httpClient.post<Note>(this.basePath, {title});
  }
  
  getNote(id: number): Observable<Note>  {
    return this.httpClient.get<Note>(this.basePath + "/" + id);
  }

  updateNote(id: number, title: string): Observable<Note>  {
    return this.httpClient.put<Note>(this.basePath + "/" + id, {title});

  }

  removeNote(id: number): Observable<any>  {
    return this.httpClient.delete<any>(this.basePath + "/" + id);
  }

}