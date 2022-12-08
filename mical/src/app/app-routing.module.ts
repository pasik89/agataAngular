import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableResolver } from './pages/mical/resolvers/table-resolver.service';

const routes: Routes = [
  {
    path: 'mical',
    loadChildren: () => import('./pages/mical/mical.module').then(m => m.MicalModule),
    // resolve: {
    //   tableData: TableResolver
    // }
  },
  {
    path: '',
    redirectTo: 'mical',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
