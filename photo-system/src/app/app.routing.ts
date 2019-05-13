import { HomePageComponent } from './nav-bar/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AuthGuardService } from './guards/auth-guard.service';
import { ClienteFormComponent } from './nav-bar-admin/cliente-form/cliente-form.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginPageComponent, },
    { path: 'login', component: LoginPageComponent },
    {
        path: 'admin', component: HomePageComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'user', component: NavBarComponent,
        canActivate: [AuthGuardService]
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);