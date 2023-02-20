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


  //-- Listar ingredientes
  public listarIngredientes():Observable<EntityIngredientes>{
    return this.http.get(this.urlEndPoint+"/api/json/v1/1/list.php?i=list").pipe(
      map( respuesta=> respuesta as EntityIngredientes),
      catchError( e=>{
        return throwError(e);
      })
    )
  }

  //-- Filtrar por primera letra
  public filtrarPlatilloPrimeraLetra(letra: String):Observable<EntityPlatillo>{
    return this.http.get(this.urlEndPoint+'/api/json/v1/1/search.php?f='+letra).pipe(
      map (respuesta => respuesta as EntityPlatillo),
      catchError(e=>{
        return throwError(e);
      })
    )
  }

  //-- Filtrar por nombre
  public filtrarPorNombre(nombre:String):Observable<EntityPlatillo>{
    return this.http.get(this.urlEndPoint+'/api/json/v1/1/search.php?s='+nombre).pipe(
      map(respuesta => respuesta as EntityPlatillo),
      catchError(e=>{
        return throwError(e);
      })
    )
  }

  //-- Filtrar por Ingrediente

  //-- Buscar por id
  public buscarComidaPorId(id:String):Observable<EntityPlatillo>{
    return this.http.get(this.urlEndPoint+'/api/json/v1/1/lookup.php?i='+id).pipe(
      map(respuesta => respuesta as EntityPlatillo),
      catchError(e=>{
        return throwError(e);
      })
    )
  }


}
