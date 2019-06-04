import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AdminServiceService } from '../admin-service.service';
import { ArquivoSistema } from '../model/arquivoSistema.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  arquivos: ArquivoSistema[] = [];

  cookieValue = "NAOSEI";

  constructor(
    private service: AdminServiceService,
    private cookieID: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.listAlbumFotos().subscribe(dados => this.arquivos = dados);
    //this.cookieID.set('ID', 'teste');
    //this.cookieValue = this.cookieID.get('ID');
  }

  getIDCookie(id: string) {
    this.cookieID.set('ID', id);
  }

}
