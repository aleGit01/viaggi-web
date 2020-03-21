import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from "src/app/http-error-handler.service";

const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
    reservationUrl = 'http://192.162.0.155:8080/reservation/reservations/';  // URL to web api
    reservations: Reservation[] = [];
    reservation: Reservation;

    private handleError: HandleError;
  constructor(private http: HttpClient,  httpErrorHandler: HttpErrorHandler) { 
      this.handleError = httpErrorHandler.createHandleError('ReservationService');
  }


 // return Observable
 getReservation(reservationNumber: number){
         return this.http.get<Reservation>(this.reservationUrl + reservationNumber);
 }
 
 updateReservation(reservation: Reservation): Observable<Reservation>{
     return this.http.put<Reservation>(this.reservationUrl + reservation.id, reservation, httpOptions) 
     .pipe(
             catchError(this.handleError('updateReservation', reservation))
     );
}
 
 
//getReservation(): Reservation {
//return {
//        id: 0,
//        reservationNumber: 0,
//        description: 'Reservation dummy',
//        //agency: 'agency dummy'
//       };
//}
 
//  getReservations(reservationNumber: number): Reservation[] {
//  //  let reservations : Reservation[];
//  //let reservation : Reservation;
//    const obs = this.http.get<Reservation[]>('http://localhost:8080/reservation/reservations/' + reservationNumber);
//    obs.subscribe((resp) =>{
//        console.log(resp); 
//        
//        for (const reservation of resp) {
//            if (reservation.reservationNumber === Number(reservationNumber)) {
//              this.reservations.push(reservation);
//            }
//          }
//        
//     //  this.reservations = resp;
//        console.log("YEAH!");
//        console.log(this.reservations);    
// 
//    });
//   
//    return [{
//             id: 0,
//             reservationNumber: 0,
//             description: 'Reservation dummy',
//             //agency: 'agency dummy'
//            },
//           {
//             id: 1,
//             reservationNumber: 1,
//             description: 'Reservation dummy 2',
//            // agency: 'agency dummy 2'
//            }
//          ];
//         
//  }

}
