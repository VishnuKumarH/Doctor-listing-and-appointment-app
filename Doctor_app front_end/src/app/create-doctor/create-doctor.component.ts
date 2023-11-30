import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorServiceService } from '../doctor-service.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor= new Doctor();//defined a doctor property

  constructor(private doctorService:DoctorServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //alert("submit pressed");
    console.log(this.doctor);
   this.saveDoctor();
   
    
  }

  saveDoctor(){
    this.doctorService.createDoctor(this.doctor).subscribe(data=>{
      console.log(data)
     this.goToDoctorList();
    },error=>console.log(error));
    
  }



  goToDoctorList(){
    this.router.navigate(['/doctors'])
   }

}
