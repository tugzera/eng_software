import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { AuthGuardService } from './../../guards/auth.guard.service';
import { AdminDadosComponent } from './admin-dados/admin-dados.component';
import { FilesPhotosComponent } from './files-photos/files-photos.component';
import { FilesVideosComponent } from './files-videos/files-videos.component';
import { FilesComponent } from './files/files.component';

const adminRoutes = [
    { path: 'admin/home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'admin/cliente', component: ClienteListComponent, canActivate: [AuthGuardService]},
    { path: 'admin/dados', component: AdminDadosComponent, canActivate: [AuthGuardService]},
    { path: 'admin/files', component: FilesComponent, canActivate: [AuthGuardService]},
    { path: 'admin/files/photos', component: FilesPhotosComponent, canActivate: [AuthGuardService]},
    { path: 'admin/files/videos', component: FilesVideosComponent, canActivate: [AuthGuardService]}
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class adminRoutingModule { }
