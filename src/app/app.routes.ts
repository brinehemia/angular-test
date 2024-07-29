import { Routes } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { AdminComponent } from './layout/admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    }, 
    {
        path: 'admin',
        component: AdminComponent    
    }
];