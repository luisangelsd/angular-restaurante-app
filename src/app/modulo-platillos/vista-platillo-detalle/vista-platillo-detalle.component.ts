import { Component, OnInit } from '@angular/core';
import { ApiThemealdbService } from 'src/app/servicios/api-themealdb.service';
import { EntityPlatillo } from '../../commons/entity-platillo';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vista-platillo-detalle',
  templateUrl: './vista-platillo-detalle.component.html',
  styleUrls: ['./vista-platillo-detalle.component.css']
})
export class VistaPlatilloDetalleComponent implements OnInit{

  //-- Constructor
  constructor(public apiServicios: ApiThemealdbService){}


  //-- Variables
  public titulo:String='¡Platillo no encontrado!';
  public entityPlatillo: EntityPlatillo = new EntityPlatillo();


  //-- Buscar platillo por id
  public buscarPlatilloPorId(id:Number){
    this.apiServicios.buscarComidaPorId(id).subscribe(
      HttpResponse=>{
        this.entityPlatillo=HttpResponse;
      },
      HttpErrorResponse=>{
        alert(HttpErrorResponse);
      }
    )
  }


  ngOnInit(): void {
   this.buscarPlatilloPorId(52858);
  }

}
