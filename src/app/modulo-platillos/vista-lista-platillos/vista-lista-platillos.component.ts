import { Component, OnInit } from '@angular/core';
import { ApiThemealdbService } from '../../servicios/api-themealdb.service';
import { EntityPlatillo } from '../../commons/entity-platillo';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

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
  let letra: String=  (document.getElementById('filtro-buscar-por-primer-letra') as HTMLInputElement).value
  this.filtroPlatilloPrimeraLetra(letra);
}
  
  //-- Metodos
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




  ngOnInit(): void {
    this.filtroPlatilloPrimeraLetra('a');
  }



}
