import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const APP_ROUTES: Routes = [
    { path: '', component: AdminPageComponent},
    { path: 'login', component: LoginPageComponent},
    { path: 'admin', component: AdminPageComponent},
    { path: 'user', component: UserPageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);