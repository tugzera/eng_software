import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { adminRoutingModule } from './nav-bar-admin.routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ArquivosFotosComponent } from './arquivos-fotos/arquivos-fotos.component';
import { ArquivosVideosComponent } from './arquivos-videos/arquivos-videos.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    declarations: [ClienteFormComponent, ClienteListComponent, ArquivosFotosComponent, ArquivosVideosComponent, HomePageComponent],
    imports: [ CommonModule, adminRoutingModule ],
    exports: [ ClienteFormComponent, ClienteListComponent],
    providers: [],
})
export class AdminModule {}