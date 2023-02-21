import { Component, OnInit } from '@angular/core';
import { ApiThemealdbService } from '../../servicios/api-themealdb.service';
import { EntityIngredientes } from '../../commons/entity-ingredientes';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { EntityIngredientesDetalle } from '../../commons/entity-ingredientes-detalle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-lista-ingredientes',
  templateUrl: './vista-lista-ingredientes.component.html',
  styleUrls: ['./vista-lista-ingredientes.component.css']
})
export class VistaListaIngredientesComponent implements OnInit{

  //-- Variables globales
  entityIngredientes: EntityIngredientes | undefined;



  constructor(
    private apiServicios: ApiThemealdbService,
    private router: Router
  ){  }


  //-- Metodo listar
    public listarIngredientes():void{

      this.apiServicios.listarIngredientes().subscribe(
        HttpResponse =>{
          this.entityIngredientes= HttpResponse;
        },
        HttpErrorResponse=>{
          console.error("Error: "+HttpErrorResponse);
        }
      )
    }


    //-- Metodo platillas relaionados
    public platillosRelacionadosIngrediente(ingrediente:any):void{
      this.router.navigate(['platillos/'+ingrediente]);
    }


  ngOnInit():void{
    this.listarIngredientes();
  }

}
