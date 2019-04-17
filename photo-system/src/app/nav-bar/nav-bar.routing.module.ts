import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ArquivosFotosComponent } from './arquivos-fotos/arquivos-fotos.component';
import { ArquivosVideosComponent } from './arquivos-videos/arquivos-videos.component';


const userRoutes = [
    { path: 'user/home', component: HomePageComponent},
    { path: 'user/files/photos', component: ArquivosFotosComponent},
    { path: 'user/files/videos', component: ArquivosVideosComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class userRoutingModule { }