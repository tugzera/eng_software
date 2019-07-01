import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AdminServiceService } from './../admin-service.service';
import { ArquivoCliente } from './../model/arquivoCliente.model';
import { Cliente } from './../model/cliente.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cookieValue;

  cliente: Cliente = new Cliente();

  constructor(
    private cookie: CookieService,
    private service: AdminServiceService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.cookieValue = this.cookie.get('ID');
    //console.log(this.cookieValue);
    this.service.getClientebyID(this.cookieValue).subscribe(dado => {
      this.cliente = dado;
    })
  }
  
  alterar() {
    //console.log('aq');
    //console.log(this.cliente);
    this.service.update(this.cliente).subscribe(_ => {
      alert("Alterado com sucesso!!!");
      this.router.navigate(['/admin/cliente']);
    })
  }
  

}