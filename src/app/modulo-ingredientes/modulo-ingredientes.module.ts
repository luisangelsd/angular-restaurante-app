import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaListaIngredientesComponent } from './vista-lista-ingredientes/vista-lista-ingredientes.component';



@NgModule({
  declarations: [
    VistaListaIngredientesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaListaIngredientesComponent
  ]
})
export class ModuloIngredientesModule { }
