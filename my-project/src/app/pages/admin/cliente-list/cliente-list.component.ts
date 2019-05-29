import { Component, OnInit } from '@angular/core';

import { AdminServiceService } from '../admin-service.service';
import { Cliente } from '../model/cliente.model'

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[];

  constructor(private service: AdminServiceService) { }

  ngOnInit() {
    this.service.listCliente().subscribe(dados => this.clientes = dados);
  }

}
