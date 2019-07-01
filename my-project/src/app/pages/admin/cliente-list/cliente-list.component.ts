import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AdminServiceService } from '../admin-service.service';
import { Cliente } from '../model/cliente.model'


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[];

  cliente: Cliente;

  cookieValue = "NAOSEI";

  constructor(private service: AdminServiceService,
    private cookieID: CookieService,
    private router: Router) { }

  ngOnInit() {
    this.service.listCliente().subscribe(dados => this.clientes = dados);
    //console.log(this.cookieValue)
    //this.service.getClientebyID(this.cookieValue)
  }

  getIDCookie(id) {
    this.cookieID.set('ID', id);
    //let arq: ArquivoSistema = new ArquivoSistema();
    // this.service.listAlbumbyID(id).subscribe(dado => arq = dado);
    this.router.navigate(["admin/cliente/", id]).then(e => {

      if (e) { }

    })

  }

  del(id){
    this.service.delete(id).subscribe(_ => {
      alert("Excluido com com sucesso!!!");
      this.router.navigate(['/admin/home']);
    })
  }

}
