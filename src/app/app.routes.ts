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
  {
    path: 'cursos/claude-code/modulo-04',
    loadComponent: () =>
      import('./courses/claude-code/modulo-04/modulo-04.component').then(
        (m) => m.Modulo04Component
      ),
  },
  {
    path: 'cursos/claude-code/modulo-05',
    loadComponent: () =>
      import('./courses/claude-code/modulo-05/modulo-05.component').then(
        (m) => m.Modulo05Component
      ),
  },
  {
    path: 'cursos/claude-code/modulo-06',
    loadComponent: () =>
      import('./courses/claude-code/modulo-06/modulo-06.component').then(
        (m) => m.Modulo06Component
      ),
  },
  {
    path: 'cursos/claude-code/modulo-07',
    loadComponent: () =>
      import('./courses/claude-code/modulo-07/modulo-07.component').then(
        (m) => m.Modulo07Component
      ),
  },
  {
    path: 'cursos/claude-code/modulo-08',
    loadComponent: () =>
      import('./courses/claude-code/modulo-08/modulo-08.component').then(
        (m) => m.Modulo08Component
      ),
  },
  {
    path: 'cursos/claude-code/modulo-09',
    loadComponent: () =>
      import('./courses/claude-code/modulo-09/modulo-09.component').then(
        (m) => m.Modulo09Component
      ),
  },
];
