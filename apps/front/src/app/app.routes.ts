import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FormFavoritoComponent } from './modules/favorito-edicao/components/form-favorito/form-favorito.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    title: 'Meus Favoritos',
    path: 'home',
    component: HomeComponent
  },
  {
    title: 'Sobre',
    path: 'sobre',
    component: SobreComponent
  },
  {
    title: 'Favorito edição',
    path: 'favorito-edicao/:id',
    component: FormFavoritoComponent
  },
  {
    title: 'Favorito edição',
    path: 'favorito-edicao',
    component: FormFavoritoComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
