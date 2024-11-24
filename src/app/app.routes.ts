import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import("./component/component.module").then((m) => m.ComponentModule)
    },
    {
        path: 'home',
        loadChildren: () => import("./component/sidenav/sidenav.module").then((m) => m.SidenavModule)
    },
    { path: '**', redirectTo: 'login' }
];
