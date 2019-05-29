import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';


import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { adminRoutingModule } from './admin.routing.module';
import { HomeComponent } from './home/home.component';
import { FilesPhotosComponent } from './files-photos/files-photos.component';
import { FilesVideosComponent } from './files-videos/files-videos.component';
import { AdminDadosComponent } from './admin-dados/admin-dados.component';

@NgModule({
    imports: [
        CommonModule,
        adminRoutingModule
    ],
    exports: [HomeComponent],
    declarations: [HomeComponent, ClienteFormComponent, ClienteListComponent, FilesPhotosComponent, FilesVideosComponent, AdminDadosComponent],
    providers: []
    
})

export class AdminModule {}