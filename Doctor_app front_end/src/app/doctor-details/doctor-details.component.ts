import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorServiceService } from '../doctor-service.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private doctorService:DoctorServiceService) { }

  doctor:Doctor | any
  id:any;

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.doctor=new Doctor();
    this.doctorService.getDoctorById(this.id).subscribe(data=>{
      this.doctor=data;
    })
    
  
  }

}
