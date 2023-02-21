import { Component, OnInit } from '@angular/core';
import { ApiThemealdbService } from 'src/app/servicios/api-themealdb.service';
import { EntityPlatillo } from '../../commons/entity-platillo';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-vista-platillo-detalle',
  templateUrl: './vista-platillo-detalle.component.html',
  styleUrls: ['./vista-platillo-detalle.component.css']
})
export class VistaPlatilloDetalleComponent implements OnInit{

  //-- Variables globales
  private id:Number |undefined;

  //-- Constructor
  constructor(public apiServicios: ApiThemealdbService, private rutaActiva: ActivatedRoute){}



  //-- Variables
  public titulo:String='¡Platillo no encontrado!';
  public entityPlatillo: EntityPlatillo | undefined;




 public buscarPlatilloPorId():void{
  this.rutaActiva.params.subscribe(params => {
     let id = params['id'];

     if (id) {

        this.apiServicios.buscarComidaPorId(id).subscribe(
        HttpResponse=>{
          this.entityPlatillo=HttpResponse;
        },
        HttpErrorResponse=>{
          alert(HttpErrorResponse);
        })

     }//if
   })//servicio
  }// Metodo


  ngOnInit(): void {
    this.buscarPlatilloPorId();
  }

}
