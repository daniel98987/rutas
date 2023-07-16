import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuadroFornComponent } from './recuadro-forn/recuadro-forn.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'rojo',
        component: RecuadroFornComponent,

      },
 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroFormRoutingModule { }
