import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Cliente } from '../admin/model/cliente.model';
import { Foto } from '../admin/model/foto.model';
import { ArquivoSistema } from '../admin/model/arquivoSistema.model';
import { ArquivoCliente } from '../admin/model/arquivoCliente.model';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient,
    private router: Router) { }

  listCliente() {
    return this.http.get<Cliente[]>('http://localhost:4000/cliente').pipe(
      tap()
    );
  };

  listFoto() {
    return this.http.get<Foto[]>('http://localhost:4000/foto').pipe(
      tap()
    );
  };

  listAlbumFotos() {
    return this.http.get<ArquivoSistema[]>('http://localhost:4000/arquivoSistema').pipe(
      tap()
    );
  };

  listAlbumbyID(id: string): Observable<ArquivoSistema> {
    let url = 'http://localhost:4000/arquivoSistema/';
    url = url + id;
    return this.http.get<ArquivoSistema>(url).pipe(
      tap()
    );
  };

  getFotobyID(id: string): Observable<Foto> {
    let url = 'http://localhost:4000/foto/';
    url = url + id;
    return this.http.get<Foto>(url).pipe(
      tap()
    );
  };

  getClientebyID(id:string):Observable<Cliente> {
    let url = 'http://localhost:4000/cliente/';
    url = url + id;
    return this.http.get<Cliente>(url).pipe(
      tap()
    );
  }

  save(cliente: Cliente) 
  {
    // cliente.status = 'user'
    // console.log(JSON.stringify(cliente));
      //  return this.http.post(`http://localhost:4000/cliente`, cliente, this.httpOptions)
      // .pipe(
      //    catchError(this.handleError)
      //  )
    let arquivoCliente: ArquivoCliente = new ArquivoCliente();

    this.http.post(`http://localhost:4000/cliente`, cliente).subscribe( data => {
       alert("Inserido com Sucesso!!");
      //  arquivoCliente.cliente = cliente._id;
      //  console.log(cliente._id);
      //  console.log(arquivoCliente);
      //  this.http.post(`http://localhost:4000/arquivoCliente`, arquivoCliente).subscribe(data => {
      //    alert("Arquivo Cliente criado com sucesso!!");
      //  })
       this.router.navigateByUrl('/admin/cliente');
    })


  }

  update(cliente: Cliente):Observable<Cliente> {
    //console.log(cliente._id);
    return this.http.patch(`http://localhost:4000/cliente/${cliente._id}`, cliente);
  }

   delete(id:string){
     return this.http.delete(`http://localhost:4000/cliente/${id}`);
   }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Class Comunicação Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Class Comunicação Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
