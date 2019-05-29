import { Component, OnInit } from '@angular/core';

import { AdminServiceService } from '../admin-service.service';
import { Foto } from '../model/foto.model';

@Component({
  selector: 'app-files-photos',
  templateUrl: './files-photos.component.html',
  styleUrls: ['./files-photos.component.css']
})
export class FilesPhotosComponent implements OnInit {

  fotos: Foto[];

  constructor(private service: AdminServiceService) { }

  ngOnInit() {
    return this.service.listFoto().subscribe(dados => this.fotos = dados);
  }

}
