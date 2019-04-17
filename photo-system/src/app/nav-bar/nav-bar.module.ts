import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { userRoutingModule } from './nav-bar.routing.module';
import { ArquivosFotosComponent } from './arquivos-fotos/arquivos-fotos.component';
import { ArquivosVideosComponent } from './arquivos-videos/arquivos-videos.component';


@NgModule({
    declarations: [HomePageComponent, ArquivosFotosComponent, ArquivosVideosComponent],
    imports: [ CommonModule, userRoutingModule  ],
    exports: [],
    providers: [],
})
export class UserModule {}