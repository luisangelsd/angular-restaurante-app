import { Component, OnInit } from '@angular/core';
import { ApiThemealdbService } from '../../servicios/api-themealdb.service';
import { EntityPlatillo } from '../../commons/entity-platillo';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FormControl, FormGroup,Validators } from '@angular/forms';

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

public formGroupFiltroNombre=new FormGroup({
  form_nombre: new FormControl('',[Validators.required])
});


public formFiltroNombre():void{
if (this.formGroupFiltroNombre.valid) {

      let nombre: String=(document.getElementById('filtroNombre') as HTMLInputElement).value;
    this.apiServicios.filtrarPorNombre(nombre).subscribe(
      HttpResponse=>{
        this.entityPlatillo=HttpResponse;
      },
      HttpErrorResponse=>{
        alert(HttpErrorResponse);
      }
    )
  }
}



  //-- Servicio: Filtrar por primera letra
  public filtroPlatilloPrimeraLetra(){
    let letra: String=  (document.getElementById('filtro-buscar-por-primer-letra') as HTMLInputElement).value;
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
    this.filtroPlatilloPrimeraLetra();
  }



}
