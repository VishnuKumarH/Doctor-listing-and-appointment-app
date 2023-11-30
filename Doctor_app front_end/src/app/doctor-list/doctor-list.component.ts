import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorServiceService } from '../doctor-service.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors:any;

  constructor(private doctorService: DoctorServiceService,private router: Router) { }

  ngOnInit(): void {

    this.getDoctors();

  
   
  }

  private getDoctors(){
    this.doctorService.getDoctorslist().subscribe(data =>{
      this.doctors =data;
    });
  }


  updateDoctor(id: number){
    this.router.navigate(['update-doctor',id])
  }

  deleteDoc(id: number){
    
    this.doctorService.deleteDoctor(id).subscribe(data =>{
      alert("delete")
      console.log(data);
      this.getDoctors();

    })
    

  }

  doctorDetails(id:number){
    this.router.navigate(['doctor-details',id])

  }
  
  


}
