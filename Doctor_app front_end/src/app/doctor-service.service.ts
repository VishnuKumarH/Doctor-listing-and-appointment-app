import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  

  private baseUrl="http://localhost:8081/api/v1/doctors"
  constructor(private httpClient: HttpClient) { }

//   getDoctorslist():Observable<Doctor[]>{
//     return this.httpClient.get<Doctor[]>(`${this.baseUrl}`);
//     return this.http.get('https://api.example.com/data');
    
//   }
// }


getDoctorslist(){
  return this.httpClient.get(this.baseUrl);
}

createDoctor( doctor:Doctor):Observable<any>{

  return this.httpClient.post(`${this.baseUrl}`,doctor);

}

getDoctorById(id:number): Observable<Doctor>{
  

  return this.httpClient.get<Doctor>(`${this.baseUrl}/${id}`)
}

updateDoctor(id:number, doctor:Doctor): Observable<any>{
  return this.httpClient.put(`${this.baseUrl}/${id}`,doctor);


}

deleteDoctor(id:number): Observable<any>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`)
}



}