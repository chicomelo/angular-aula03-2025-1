import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../../../../app.config';
import { Observable, share } from 'rxjs';
import { IFavorito } from '@nx-monorepo/comum';

@Injectable({
  providedIn: 'root'
})
export class FavoritoEdicaoService {
  private httpClient = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  public get(id:number): Observable<IFavorito> {
    return this.httpClient.get<IFavorito>(`${this.apiBaseUrl}/favorito/${id}`);
  }

  put(iFavorito: IFavorito): Observable<IFavorito> {
    const req$ = this.httpClient.put<IFavorito>(
      `${this.apiBaseUrl}/favorito/${iFavorito._id}`,
      iFavorito)
      .pipe(
        share()
      );

    req$.subscribe();

    return req$;

  }
}
