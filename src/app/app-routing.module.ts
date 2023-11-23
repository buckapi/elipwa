import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: '/site', pathMatch:'full'},
 { path: 'site', loadChildren: () => import('@components/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'  // Habilita la restauración de la posición de desplazamiento
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
