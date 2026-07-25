import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { API_BASE_URL } from '../../app.config';
import { Observable, shareReplay } from 'rxjs';
import { IFavorito } from '@nx-monorepo/comum';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private httpClient = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  public getAll(): Observable<IFavorito[]> {
    return this.httpClient.get<IFavorito[]>(`${this.apiBaseUrl}/favorito`)
    .pipe(
      shareReplay(),
    );
  }

}
