import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ArquivosFotosComponent } from './arquivos-fotos/arquivos-fotos.component';
import { ArquivosVideosComponent } from './arquivos-videos/arquivos-videos.component';
import { HomePageComponent } from './home-page/home-page.component';

const adminRoutes = [
    { path: 'admin/cliente', component: ClienteFormComponent },
    { path: 'admin/list', component: ClienteListComponent},
    { path: 'admin/files/photos', component: ArquivosFotosComponent},
    { path: 'admin/files/videos', component: ArquivosVideosComponent},
    { path: 'admin/home', component: HomePageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class adminRoutingModule { }