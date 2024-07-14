import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  Baseurl = 'http://localhost:5264';

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Pessoa[]> {
    const apiUrl = `${this.Baseurl}/api/pessoas`;
    return this.http.get<Pessoa[]>(apiUrl);
  }

  PegarPeloId(Id: number): Observable<Pessoa> {
    const apiUrl = `${this.Baseurl}/api/pessoas/${Id}`;
    return this.http.get<Pessoa>(apiUrl);
  }

  SalvarPessoa(pessoa: Pessoa): Observable<any> {
    const apiUrl = `${this.Baseurl}/api/pessoas`;
    return this.http.post(apiUrl, pessoa, httpOptions);
  }

  AtualizarPessoa(pessoa: Pessoa): Observable<any> {
    const apiUrl = `${this.Baseurl}/api/pessoas`;
    return this.http.put(apiUrl, pessoa, httpOptions);
  }

  DeletarPessoa(Id: number): Observable<any> {
    const apiUrl = `${this.Baseurl}/api/pessoas/${Id}`;
    return this.http.delete(apiUrl, httpOptions);
  }

}
