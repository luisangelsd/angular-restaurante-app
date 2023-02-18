import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { EntityPlatillo } from '../commons/entity-platillo';
import { EntityIngredientes } from '../commons/entity-ingredientes';

@Injectable({
  providedIn: 'root'
})
export class ApiThemealdbService {

  //Variables globales
  urlEndPoint: String='https://www.themealdb.com';

  constructor(
    private http:HttpClient
  ) { }

    
  //-- Platillo Aleatorio
  public platilloAleatorio():Observable<EntityPlatillo>{
    return this.http.get(this.urlEndPoint+"/api/json/v1/1/random.php?apikey=1").pipe(
      map(respuesta => respuesta as EntityPlatillo),
      catchError(e=>{
        return throwError(e);
      })
    )
  }


  //-- Listar ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
  public listarIngredientes():Observable<EntityIngredientes>{
    return this.http.get(this.urlEndPoint+"/api/json/v1/1/list.php?i=list").pipe(
      map( respuesta=> respuesta as EntityIngredientes),
      catchError( e=>{
        return throwError(e);
      })
    )
  }


}
