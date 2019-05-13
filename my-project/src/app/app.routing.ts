import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './pages/login/login.component';

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './pages/admin/home/home.component';
import { AuthGuardService } from './guards/auth.guard.service';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: LoginComponent},
    { path: 'admin', component: HomeComponent, canActivate: [AuthGuardService]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);