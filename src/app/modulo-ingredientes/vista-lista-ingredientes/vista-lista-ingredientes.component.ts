import { Component, OnInit } from '@angular/core';
import { ApiThemealdbService } from '../../servicios/api-themealdb.service';
import { EntityIngredientes } from '../../commons/entity-ingredientes';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-vista-lista-ingredientes',
  templateUrl: './vista-lista-ingredientes.component.html',
  styleUrls: ['./vista-lista-ingredientes.component.css']
})
export class VistaListaIngredientesComponent implements OnInit{

  //-- Variables globales
  public entityIngredientes: EntityIngredientes=new EntityIngredientes(); 
   aaa:Boolean=true;

  constructor(
    private apiServicios: ApiThemealdbService
  ){}


  //-- Metodo listar
    public listarIngredientes():void{

      this.apiServicios.listarIngredientes().subscribe(
        HttpResponse =>{
          this.entityIngredientes= HttpResponse;
          console.log(this.entityIngredientes.meals);
        },
        HttpErrorResponse=>{
          alert(HttpErrorResponse);
        }
      )
    }



  ngOnInit():void{
    this.listarIngredientes();
  }

}
