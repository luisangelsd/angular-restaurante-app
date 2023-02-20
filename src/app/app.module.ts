import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ModuloBienvenidaModule } from './modulo-bienvenida/modulo-bienvenida.module';
import { VistaPlatilloAleatorioComponent } from './modulo-bienvenida/vista-platillo-aleatorio/vista-platillo-aleatorio.component';
import { ModuloIngredientesModule } from './modulo-ingredientes/modulo-ingredientes.module';
import { VistaListaIngredientesComponent } from './modulo-ingredientes/vista-lista-ingredientes/vista-lista-ingredientes.component';
import { CommonModule } from '@angular/common';
import { ModuloPlatillosModule } from './modulo-platillos/modulo-platillos.module';
import { VistaListaPlatillosComponent } from './modulo-platillos/vista-lista-platillos/vista-lista-platillos.component';



//-- Rutas de navegación
const rutas: Routes=[
  {path:'', component:VistaPlatilloAleatorioComponent },
  {path:'ingredientes', component:VistaListaIngredientesComponent},
  {path: 'platillos', component: VistaListaPlatillosComponent}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(rutas),
    ModuloBienvenidaModule,
    ModuloIngredientesModule,
    ModuloPlatillosModule,
    HttpClientModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
