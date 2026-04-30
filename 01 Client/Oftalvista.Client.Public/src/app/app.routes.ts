import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
export const routes: Routes = [
  {
    path: 'dashboard/paciente',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/dashboard/paciente/dashboard-paciente.component').then(
        (m) => m.DashboardPacienteComponent,
      ),
  },
  {
    path: 'operaciones/pagos',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./modules/pago-cita/list/pago-cita-list.component').then(
        (m) => m.PagoCitaListComponent,
      ),
  },
<<<<<<< HEAD
=======
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
  },
  {
    path: 'mantenimiento/medicos',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./modules/medico/list/medico-list.component').then((m) => m.MedicoListComponent),
  },
  {
    path: 'operaciones/historial',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/historial-cita/list/historial-cita-list.component').then(
        (m) => m.HistorialCitaListComponent,
      ),
  },
  { path: '**', redirectTo: 'login' },
>>>>>>> 94e1c74f5049bb8d321d4e18ca8ff0590c66e995
];
