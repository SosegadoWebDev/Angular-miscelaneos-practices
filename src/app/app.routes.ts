import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {USUARIO_ROUTES  } from './components/usuario/usuario.routes';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: USUARIO_ROUTES
    },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
