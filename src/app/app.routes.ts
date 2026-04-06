import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cursos/claude-code/modulo-01',
    pathMatch: 'full',
  },
  {
    path: 'cursos/claude-code/modulo-01',
    loadComponent: () =>
      import('./courses/claude-code/modulo-01/modulo-01.component').then(
        (m) => m.Modulo01Component
      ),
  },
  {
    path: 'cursos/claude-code/modulo-02',
    loadComponent: () =>
      import('./courses/claude-code/modulo-02/modulo-02.component').then(
        (m) => m.Modulo02Component
      ),
  },
  {
    path: 'cursos/claude-code/modulo-03',
    loadComponent: () =>
      import('./courses/claude-code/modulo-03/modulo-03.component').then(
        (m) => m.Modulo03Component
      ),
  },
];
