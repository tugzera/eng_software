import { AdminServiceService } from './../admin-service.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './../model/cliente.model';
import { Endereco } from '../model/endereco.model';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente
  endereco: Endereco

  constructor(private service: AdminServiceService) {
    this.cliente = new Cliente
   }

   cadastro() {
    //  this.service.save(this.cliente).subscribe(al => {
    //    console.log('AQUI:', this.cliente);
    //    console.log('ook');
    //    window.alert('Aluno cadastrado com sucesso!!');

    //    this.cliente = new Cliente();
    //    console.log(al);
    //  })
    this.cliente.status =   'user';
    //console.log(this.cliente._id);
    this.service.save(this.cliente);

   }

  ngOnInit() {
  }

}
