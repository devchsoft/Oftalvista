import { Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin.guard';
import { authGuard } from './core/guards/auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'dashboard/admin',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./modules/dashboard/admin/dashboard-admin.component').then(
        (m) => m.DashboardAdminComponent,
      ),
  },
  {
    path: 'dashboard/paciente',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/dashboard/paciente/dashboard-paciente.component').then(
        (m) => m.DashboardPacienteComponent,
      ),
  },
  {
    path: 'operaciones/recordatorios',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/recordatorio-cita/list/recordatorio-cita-list.component').then(
        (m) => m.RecordatorioCitaListComponent,
      ),
  },
  { path: '**', redirectTo: 'login' },
];
