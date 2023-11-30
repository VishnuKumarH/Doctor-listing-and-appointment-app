import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';

const routes: Routes = [
  {path: "doctors" ,component:DoctorListComponent},
  {path:"create-doctors",component:CreateDoctorComponent},
  {path:"update-doctor/:id",component:UpdateDoctorComponent},
  {path:"doctor-details/:id",component:DoctorDetailsComponent},
  {path: '',redirectTo:'doctors',pathMatch:'full'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
