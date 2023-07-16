import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecuadroFornComponent } from './registro-user/recuadro-forn/recuadro-forn.component';

const routes: Routes = [

  
  { 
    path: 'recuadro', 
    loadChildren: ()=> import('../app/registro-user/registro-form.module').then(m=>m.RegistroFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
