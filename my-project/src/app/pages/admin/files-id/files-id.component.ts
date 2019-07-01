import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AdminServiceService } from './../admin-service.service';
import { ArquivoSistema } from './../model/arquivoSistema.model';
import { Foto } from '../model/foto.model';
import { Video } from '../model/video.model';

@Component({
  selector: 'app-files-id',
  templateUrl: './files-id.component.html',
  styleUrls: ['./files-id.component.css']
})
export class FilesIdComponent implements OnInit {

  cookieValue;

  arquivo: ArquivoSistema = new ArquivoSistema();

  vetFotos = [];

  vetVideos = [];

  constructor(
    private cookie: CookieService,
    private service: AdminServiceService,
    private http: HttpClient) { }

  ngOnInit() {
    this.cookieValue = this.cookie.get('ID');
    this.service.listAlbumbyID(this.cookieValue).subscribe(dado => {
      this.arquivo = dado
      this.vetFotos = this.arquivo.fotos
      this.vetVideos = this.arquivo.videos

      let cont: number = 0
      this.vetFotos.forEach((value, index) => {
        //console.log(value)
        this.http.get<Foto>(`http://localhost:4000/foto/${value}`).subscribe(dado => {
          this.vetFotos[cont++] = dado;
          //console.log(JSON.stringify(this.vetFotos));
        });
      });

      let cont1: number = 0;
      this.vetVideos.forEach((value, index) => {
        this.http.get<Video>(`http://localhost:4000/video/${value}`).subscribe(dado => {
          this.vetVideos[cont1++] = dado;
          //console.log(JSON.stringify(this.vetVideos));
        })
      })


    })


  }


}
