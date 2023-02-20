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
  
  
  //-- Metodos
  public filtroPlatilloPrimeraLetra(letra: String){
    this.apiServicios.filtrarPlatilloPrimeraLetra(letra).subscribe(
      HttpResponse =>{
        this.entityPlatillo = HttpResponse;
        console.log('Todo oK:'+this.entityPlatillo.meals[0].strMeal);
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
