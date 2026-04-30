import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
export const routes: Routes = [
  {
    path: 'mantenimiento/usuarios',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./modules/usuario/list/usuario-list.component').then((m) => m.UsuarioListComponent),
  },
  {
    path: 'mantenimiento/agenda-medica',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./modules/agenda-medica/list/agenda-medica-list.component').then(
        (m) => m.AgendaMedicaListComponent,
      ),
  }
];
