import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { adminRoutingModule } from './nav-bar-admin.routing.module';

@NgModule({
    declarations: [ClienteFormComponent],
    imports: [ CommonModule, adminRoutingModule ],
    exports: [],
    providers: [],
})
export class AdminModule {}