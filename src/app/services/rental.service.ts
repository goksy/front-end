import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl= "https://localhost:44368/api/rentals/getrentaldetails"
  constructor(private htppClient : HttpClient) { }
   
  getRentals(): Observable<ListResponseModel<Rental>>{
    return this.htppClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }
}
