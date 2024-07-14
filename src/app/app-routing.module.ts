import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './Components/pessoas/pessoas.component';
import { PipesComponent } from './Components/pipes/pipes.component';

const routes: Routes = [{
  path:'pessoas', component : PessoasComponent,
  },
{  path: 'pipes', component: PipesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
