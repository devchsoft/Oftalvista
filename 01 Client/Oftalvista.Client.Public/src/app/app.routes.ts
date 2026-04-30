import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
export const routes: Routes = [
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
];
