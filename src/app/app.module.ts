import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { VistaPlatilloAleatorioComponent } from './modulo-bienvenida/vista-platillo-aleatorio/vista-platillo-aleatorio.component';
import { ModuloBienvenidaModule } from './modulo-bienvenida/modulo-bienvenida.module';
import { VistaListaIngredientesComponent } from './modulo-ingredientes/vista-lista-ingredientes/vista-lista-ingredientes.component';


//-- Rutas de navegación
const rutas: Routes=[
  {path:'', component:VistaPlatilloAleatorioComponent },
  {path:'ingredientes', component:VistaListaIngredientesComponent}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    ModuloBienvenidaModule,
    HttpClientModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
