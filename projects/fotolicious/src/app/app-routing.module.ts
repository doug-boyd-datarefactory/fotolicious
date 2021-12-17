import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fotolicious',
    pathMatch: 'full'
  },
  {
    path: 'fotolicious',
    loadChildren: () =>
      import('./features/fotolicious/fotolicious.module').then(
        (m) => m.FotoliciousModule
      )
  },
  {
    path: '**',
    redirectTo: 'fotolicious'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
