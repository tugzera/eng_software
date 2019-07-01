import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FilesIdComponent } from './files-id/files-id.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { AuthGuardService } from './../../guards/auth.guard.service';
import { AdminDadosComponent } from './admin-dados/admin-dados.component';
import { FilesComponent } from './files/files.component';

const adminRoutes = [
    { path: 'admin/home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'admin/cliente', component: ClienteListComponent, canActivate: [AuthGuardService]},
    { path: 'admin/dados', component: AdminDadosComponent, canActivate: [AuthGuardService]},
    { path: 'admin/files', component: FilesComponent, canActivate: [AuthGuardService]},
    { path: 'admin/files/:id', component: FilesIdComponent, canAcitvate: [AuthGuardService]},
    { path: 'admin/cliente/:id', component: ClienteUpdateComponent, canActivate: [AuthGuardService]},
    { path: 'admin/cliente/cadastro', component: ClienteFormComponent, canActivate: [AuthGuardService]},
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class adminRoutingModule { }
