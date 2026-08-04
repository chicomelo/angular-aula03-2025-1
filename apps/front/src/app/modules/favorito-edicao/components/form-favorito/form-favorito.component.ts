import { Component, inject, Input, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FavoritoEdicaoService } from '../../services/favorito-edicao/favorito-edicao.service';
import { IFavorito } from '@nx-monorepo/comum';

@Component({
  selector: 'app-form-favorito',
  templateUrl: './form-favorito.component.html',
  styleUrl: './form-favorito.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class FormFavoritoComponent {

  @Input({
    required: true,
  })
  public id!:string

  private fb = inject(FormBuilder);

  formGroup = this.fb.group({
    _id:        [0],
    titulo:     ['', Validators.required],
    descricao:  ['', Validators.required],
    imagem:     ['', Validators.required],
    url:        ['', Validators.required],
  });

  private favoritoEdicaoService = inject(FavoritoEdicaoService);

  public ngOnInit(): void {
    if (this.id) {
      this.favoritoEdicaoService.get(Number(this.id)).subscribe((IFavorito) => {
        this.formGroup.setValue(IFavorito);
      });
    }
  }

  onSubmit(): void {
    const iFavorito = <IFavorito>this.formGroup.value;
    if(this.id){
      this.favoritoEdicaoService.put(iFavorito).subscribe((IFavorito) => {
        alert('Favorito atualizado com sucesso!');
      });
    } else {
      alert('Este é um novo favorito, mas a funcionalidade de criação ainda não foi implementada.');
    }
  }
}
