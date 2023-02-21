import { Component, OnInit } from '@angular/core';
import { ApiThemealdbService } from '../../servicios/api-themealdb.service';
import { EntityPlatillo } from '../../commons/entity-platillo';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-lista-platillos',
  templateUrl: './vista-lista-platillos.component.html',
  styleUrls: ['./vista-lista-platillos.component.css']
})
export class VistaListaPlatillosComponent  implements OnInit{
  
  //-- Variables globales
  public entityPlatillo: EntityPlatillo | undefined;
  public mensaje:String='Mensaje';

  //-- Constructor
  constructor(private apiServicios: ApiThemealdbService,
     private router: Router,
     private rutaActiva: ActivatedRoute){}
  

//-- FormGroup: Valida el formulario buscar por nombre de ingrediente
public formGroupFiltroNombre=new FormGroup({
  form_nombre: new FormControl('',[Validators.required])
});



//--  Metodo: Filtrar por ombre
public formFiltroNombre():void{
if (this.formGroupFiltroNombre.valid) {
      let nombre: String=(document.getElementById('filtroNombre') as HTMLInputElement).value;
    this.apiServicios.filtrarPorNombre(nombre).subscribe(
      HttpResponse=>{
        this.entityPlatillo=HttpResponse;
      },
      HttpErrorResponse=>{
        Swal.fire("¡No se han podido cargar los Platillos!",HttpErrorResponse,"error");
      }
    )
  }
}



  //-- Metodo: Filtrar por primera letra
  public filtroPlatilloPrimeraLetra():void{
    let letra: String=  (document.getElementById('filtro-buscar-por-primer-letra') as HTMLInputElement).value;
    this.apiServicios.filtrarPlatilloPrimeraLetra(letra).subscribe(
      HttpResponse =>{
        this.entityPlatillo = HttpResponse;
      },
      HttpErrorResponse=>{
        Swal.fire("¡No se han podido cargar los Platillos!",HttpErrorResponse,"error");
      }
    )
  }

  
//-- Metodo: Filtrar por ingrediente
private filtrarPlatilloIngrediente(ingrediente: String):void{
  this.apiServicios.filtrarPorIngrediente(ingrediente).subscribe(
    HttpResponse=>{
      this.entityPlatillo=HttpResponse;
    },
    HttpErrorResponse=>{
      Swal.fire("¡No se han podido cargar los Platillos!",HttpErrorResponse,"error");
    }
  )
}

  //-- Metodo: Verifica si existe algun parametro de entrada y eleigue el mejor camino para cargar los datos por defecto
  private datosDeInicio():void{
    this.rutaActiva.params.subscribe(params=>{
      let ingrediente:String=params['ingrediente'];
      if (ingrediente!=undefined) {
        this.filtrarPlatilloIngrediente(ingrediente);
      }else{
        this.filtroPlatilloPrimeraLetra();
      }
    })
  }

  //-- Redirección: Abre la pagina de detalle comida
  public redireccionarPlatilloDetalle(idPlatillo: any):void{
    this.router.navigate(['/platillo-detalle/'+ idPlatillo]);
  }


  ngOnInit(): void {
    this.datosDeInicio();
  }



}
