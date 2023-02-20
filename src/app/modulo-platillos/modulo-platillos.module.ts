import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaListaPlatillosComponent } from './vista-lista-platillos/vista-lista-platillos.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VistaListaPlatillosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    VistaListaPlatillosComponent
  ]
})
export class ModuloPlatillosModule { }
