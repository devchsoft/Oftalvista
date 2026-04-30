import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
export const routes: Routes = [
  {
    path: 'mantenimiento/especialidades',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./modules/especialidad-medica/list/especialidad-medica-list.component').then(
        (m) => m.EspecialidadMedicaListComponent,
      ),
  },
  {
    path: 'operaciones/citas',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/cita/list/cita-list.component').then((m) => m.CitaListComponent),
  },
];
