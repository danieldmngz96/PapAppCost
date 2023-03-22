import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  actividades = "https://web-services-papappcost-umb.onrender.com/crop_settings/crop_activity/id_main_process/1"
constructor(private http: HttpClient) { }

handleError(error: HttpErrorResponse): any {
  return throwError(error);
}

 /**
     * @author Daniel Dominguez
     * Servicio para consultarlas actividades del primer select
     * @param {json} filters json
     * @returns json
     */
 getActividades() {
  return this.http.get<any[]>(`${this.actividades}`).pipe(
    catchError(this.handleError),
    map((actividades:any) => actividades.map((m:any) => m.description_activity)),map(description_activity => [...new Set(this.actividades)]),
    );
}
}
