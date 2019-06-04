import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-files-id',
  templateUrl: './files-id.component.html',
  styleUrls: ['./files-id.component.css']
})
export class FilesIdComponent implements OnInit {

  cookieValue;

  constructor(private cookie: CookieService) { }

  ngOnInit() {
    this.cookieValue = this.cookie.get('ID');
    
  }

}
