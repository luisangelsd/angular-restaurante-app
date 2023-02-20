import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaListaPlatillosComponent } from './vista-lista-platillos/vista-lista-platillos.component';



@NgModule({
  declarations: [
    VistaListaPlatillosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaListaPlatillosComponent
  ]
})
export class ModuloPlatillosModule { }
