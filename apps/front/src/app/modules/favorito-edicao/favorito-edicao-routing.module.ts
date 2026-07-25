import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFavoritoComponent } from './favorito-edicao/components/form-favorito/form-favorito.component';

const routes: Routes = [
  {
    path: 'favorito-edicao',
    pathMatch: 'full',
    component: FormFavoritoComponent,
    data: {
      id: '',
    }
  },
  {
    path: 'favorito-edicao/:id',
    component: FormFavoritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritoEdicaoRoutingModule { }
