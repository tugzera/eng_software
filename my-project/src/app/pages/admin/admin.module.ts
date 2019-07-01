import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { FormsModule } from '@angular/forms';
import { FilesIdComponent } from './files-id/files-id.component';
import { FilesComponent } from './files/files.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';


import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { adminRoutingModule } from './admin.routing.module';
import { HomeComponent } from './home/home.component';
import { AdminDadosComponent } from './admin-dados/admin-dados.component';

@NgModule({
    imports: [
        CommonModule,
        adminRoutingModule,
        FormsModule
    ],
    exports: [HomeComponent],
    declarations: [HomeComponent, ClienteFormComponent, ClienteListComponent, AdminDadosComponent,
        FilesComponent, FilesIdComponent, ClienteUpdateComponent],
    providers: []

})

export class AdminModule { }