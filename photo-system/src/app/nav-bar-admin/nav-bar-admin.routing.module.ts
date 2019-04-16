import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientFormComponent } from './../client-form/client-form.component';

const adminRoutes = [
    { path: 'admin/cliente', component: ClientFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class adminRoutingModule { }