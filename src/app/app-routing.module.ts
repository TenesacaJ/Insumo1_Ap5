import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'puerta',
    loadChildren: () => import('./Vistas/puerta/puerta.module').then( m => m.PuertaPageModule)
  },
  {
    path: '',
    redirectTo: 'puerta',
    pathMatch: 'full'
  },
  {
    path: 'sala',
    loadChildren: () => import('./Vistas/sala/sala.module').then( m => m.SalaPageModule)
  },
  {
    path: 'cuarto',
    loadChildren: () => import('./Vistas/cuarto/cuarto.module').then( m => m.CuartoPageModule)
  },
  {
    path: 'cocina',
    loadChildren: () => import('./Vistas/cocina/cocina.module').then( m => m.CocinaPageModule)
  },
  {
    path: 'bano',
    loadChildren: () => import('./Vistas/bano/bano.module').then( m => m.BanoPageModule)
  },
  {
    path: 'lavanderia',
    loadChildren: () => import('./Vistas/lavanderia/lavanderia.module').then( m => m.LavanderiaPageModule)
  },
  {
    path: 'biblioteca',
    loadChildren: () => import('./Vistas/biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
