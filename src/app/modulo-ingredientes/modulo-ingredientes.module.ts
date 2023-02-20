import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaListaIngredientesComponent } from './vista-lista-ingredientes/vista-lista-ingredientes.component';
import {  FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VistaListaIngredientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VistaListaIngredientesComponent
  ]
})
export class ModuloIngredientesModule { }
