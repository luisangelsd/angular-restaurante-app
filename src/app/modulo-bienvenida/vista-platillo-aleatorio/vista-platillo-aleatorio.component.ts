import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiThemealdbService } from '../../servicios/api-themealdb.service';
import { EntityPlatillo } from '../../commons/entity-platillo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-platillo-aleatorio',
  templateUrl: './vista-platillo-aleatorio.component.html',
  styleUrls: ['./vista-platillo-aleatorio.component.css']
})
export class VistaPlatilloAleatorioComponent implements OnInit{

    //-- Variables globales
    public entityPlatillo:EntityPlatillo=new EntityPlatillo();
    


  //-- Constructores
  constructor(
   private serviciosApi: ApiThemealdbService,
   private router: Router
  ){ }




  //-- Metodo: Imprimir platillo aleatorio y redireccionar al detalle del platillo
  public popupPlatilloAleatorio():void{
    
    this.serviciosApi.platilloAleatorio().subscribe(
      HttpResponse => {
        this.entityPlatillo=HttpResponse;

        Swal.fire({
          title: this.entityPlatillo.meals[0].strMeal,
          text: "Platillo del dia",
          imageUrl: this.entityPlatillo.meals[0].strMealThumb,
          imageWidth: 300,
          imageHeight: 250,
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ver detalles'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/platillo-detalle/'+this.entityPlatillo.meals[0].idMeal]);
          }
        })

        
      },
      HttpsErrorResponse => {
        Swal.fire("¡No se pudo cargar la sugerencia del Día!",HttpsErrorResponse,"error");
      }
    );

  }

  //-- Constructor
  ngOnInit(): void {
      this.popupPlatilloAleatorio();
  }

 

}
