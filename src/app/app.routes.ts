import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'components',
        loadComponent: () => import('./components/components.component'),
        children:[
            {
                path: 'customer-add',
                title: 'Crear Cliente',
                loadComponent: () => import("./components/customer-add/customer-add.component"),
            },
            {
                path: 'customer-list',
                title: 'Lista Clientes',
                loadComponent: () => import("./components/customer-list/customer-list.component"),
            },
            {
                path:'', 
                redirectTo: 'customer-list',
                pathMatch:'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: '/components',
        pathMatch: 'full'
    },
];
