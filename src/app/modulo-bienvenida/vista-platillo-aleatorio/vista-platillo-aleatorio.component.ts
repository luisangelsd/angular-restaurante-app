import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiThemealdbService } from '../../servicios/api-themealdb.service';
import { EntityPlatillo } from '../../commons/entity-platillo';

@Component({
  selector: 'app-vista-platillo-aleatorio',
  templateUrl: './vista-platillo-aleatorio.component.html',
  styleUrls: ['./vista-platillo-aleatorio.component.css']
})
export class VistaPlatilloAleatorioComponent implements OnInit{

    //-- Variables globales
    entityPlatillo:EntityPlatillo=new EntityPlatillo();

  //-- Constructores
  constructor(
   private serviciosApi: ApiThemealdbService
  ){ }




  //-- Metodos
  public popupPlatilloAleatorio():void{
    
    this.serviciosApi.platilloAleatorio().subscribe(
      HttpResponse => {
        this.entityPlatillo=HttpResponse;
        
        /*
         Swal.fire({
          title: '',
          text: 'Sugerencia del Día',
          imageUrl: `${this.entityPlatillo.meals[0].strMealThumb}`,
          imageWidth: 300,
          imageHeight: 250,
          imageAlt: this.entityPlatillo.meals[0].strMeal,

          showCancelButton: true,
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ver detalles'
        })*/

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
            alert("Cargando ventana detalle");
          }
        })

        
      },
      HttpsErrorResponse => {
        Swal.fire("¡No se pudo cargar la sugerencia del Día!",HttpsErrorResponse,"error");
      }
    );

  }


  
  



  //-- Constructor de arranque
  ngOnInit(): void {
      this.popupPlatilloAleatorio();
  }

 

}
