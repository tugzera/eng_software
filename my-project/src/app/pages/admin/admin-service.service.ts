import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Cliente } from '../admin/model/cliente.model';
import { Foto } from '../admin/model/foto.model';
import { ArquivoSistema } from '../admin/model/arquivoSistema.model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  listCliente() {
    return this.http.get<Cliente[]>('http://localhost:4000/cliente').pipe(
      tap()
    );
  }

  listFoto() {
    return this.http.get<Foto[]>('http://localhost:4000/foto').pipe(
      tap()
    );
  }

  listAlbumFotos() {
    return this.http.get<ArquivoSistema[]>('http://localhost:4000/arquivoSistema').pipe(
      tap(console.log)
    );
  }
  
  

}
