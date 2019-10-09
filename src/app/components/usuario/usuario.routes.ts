import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

export const USUARIO_ROUTES: Routes = [
    // { path: 'nuevo/:parametro2', component: UsuarioNuevoComponent },
    { path: 'nuevo', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditarComponent },
    { path: 'detalle', component: UsuarioDetalleComponent },
    { path: '**', redirectTo: 'nuevo' }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
export class AppRoutingModule { }
