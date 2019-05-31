import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { ArquivoSistema } from '../model/arquivoSistema.model';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  arquivos: ArquivoSistema[];

  constructor(private service: AdminServiceService) { }

  ngOnInit() {
    this.service.listAlbumFotos().subscribe(dados => this.arquivos = dados);
  }

}
