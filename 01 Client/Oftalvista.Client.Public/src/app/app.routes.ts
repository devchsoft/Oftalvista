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
];
