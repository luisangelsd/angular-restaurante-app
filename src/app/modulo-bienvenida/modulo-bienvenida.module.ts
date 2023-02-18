import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPlatilloAleatorioComponent } from './vista-platillo-aleatorio/vista-platillo-aleatorio.component';



@NgModule({
  declarations: [
    VistaPlatilloAleatorioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VistaPlatilloAleatorioComponent
  ]
})
export class ModuloBienvenidaModule { }
