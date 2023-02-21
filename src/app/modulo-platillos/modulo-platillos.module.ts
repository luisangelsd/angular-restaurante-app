import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaListaPlatillosComponent } from './vista-lista-platillos/vista-lista-platillos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VistaPlatilloDetalleComponent } from './vista-platillo-detalle/vista-platillo-detalle.component';



@NgModule({
  declarations: [
    VistaListaPlatillosComponent,
    VistaPlatilloDetalleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    VistaListaPlatillosComponent,
    VistaPlatilloDetalleComponent
  ]
})
export class ModuloPlatillosModule { }
