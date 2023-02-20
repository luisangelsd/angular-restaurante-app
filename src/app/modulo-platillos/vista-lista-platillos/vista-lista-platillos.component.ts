import { Component, OnInit } from '@angular/core';
import { ApiThemealdbService } from '../../servicios/api-themealdb.service';
import { EntityPlatillo } from '../../commons/entity-platillo';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-vista-lista-platillos',
  templateUrl: './vista-lista-platillos.component.html',
  styleUrls: ['./vista-lista-platillos.component.css']
})
export class VistaListaPlatillosComponent  implements OnInit{
  
  //-- Variables globales
  public entityPlatillo: EntityPlatillo | undefined;


  //-- Constructor
  constructor(private apiServicios: ApiThemealdbService){}
  

  //--
formFiltroPrimeraLetra(){
  let letra: String=  (document.getElementById('filtro-buscar-por-primer-letra') as HTMLInputElement).value;
  this.filtroPlatilloPrimeraLetra(letra);
}
  
//-- 
formFiltroNombre(){
  let nombre=(document.getElementById('filtroNombre') as HTMLInputElement).value;
  this.apiServicios.filtrarPorNombre(nombre).subscribe(
    HttpResponse =>{
      this.entityPlatillo=HttpResponse;
    },
    HttpErrorResponse=>{
      return throwError(HttpErrorResponse);
    }
  )
}





  //-- Servicio: Filtrar por primera letra
  public filtroPlatilloPrimeraLetra(letra: String){
    this.apiServicios.filtrarPlatilloPrimeraLetra(letra).subscribe(
      HttpResponse =>{
        this.entityPlatillo = HttpResponse;
      },
      HttpErrorResponse=>{
        console.error(HttpErrorResponse)
      }
    )
  }

    //-- Servicio: Filtrar por primera letra






  ngOnInit(): void {
    this.filtroPlatilloPrimeraLetra('a');
  }



}
