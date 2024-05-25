import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {

  private readonly API = 'http://localhost:2000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(pagina: number): Observable<Pensamento[]>
  {
    const itensPorPagina = 6
    return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`)
  }

  criar(pensamento: Pensamento): Observable<Pensamento>
  {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento>
  {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: number): Observable<Pensamento>
  {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento>
  {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
