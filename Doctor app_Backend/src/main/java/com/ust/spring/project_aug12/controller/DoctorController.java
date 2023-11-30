package com.ust.spring.project_aug12.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ust.spring.project_aug12.exception.ResourceNotFoundException;
import com.ust.spring.project_aug12.model.Doctor;
import com.ust.spring.project_aug12.repository.DoctorRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class DoctorController {


     @Autowired
    private  DoctorRepository dr;

   @GetMapping("/doctors")
    public List<Doctor> getAllDoctors(){

        return dr.findAll();

    }
    
    @PostMapping("/doctors")
    public Doctor addDoctors( @RequestBody Doctor doctor){
        return dr.save(doctor);
    }
     
    @GetMapping("/doctors/{id}")
    public ResponseEntity<Doctor> getDocById(@PathVariable Long id){

        Optional<Doctor> temp = dr.findById(id);
        Doctor doc = null;
        if(temp.isEmpty()){
            return ResponseEntity.noContent().build();
        }else{
            doc= temp.get();

            return ResponseEntity.ok(doc);
        }


    }


       @PutMapping("/doctors/{id}")
    public ResponseEntity<Doctor> updateDoc(@PathVariable Long id , @RequestBody Doctor doctor){

        Optional<Doctor> temp= dr.findById(id);
        Doctor doc =temp.get();
        

        if(temp.isEmpty()){
            return ResponseEntity.noContent().build();
        }else{
            
            doc.setFirstName(doctor.getFirstName());
            doc.setLastName(doctor.getLastName());
            doc.setEmail(doctor.getEmail());
            doc.setDepartment(doctor.getDepartment());
            doc.setDescription(doctor.getDescription());
            doc.setGender(doctor.getGender());
            doc.setPhone(doctor.getPhone());

            Doctor updatedDoctor = dr.save(doc);
            return ResponseEntity.ok(updatedDoctor);
        }

    }


   @DeleteMapping("/doctors/{id}")
    public ResponseEntity<Doctor> deleteDoctor(@PathVariable Long id){
       Optional<Doctor> temp =dr.findById(id);

       Doctor doc = temp.get();
       if(temp.isPresent()){
           dr.delete(doc);
           return ResponseEntity.ok(doc);
       }else{
           throw new ResourceNotFoundException("doctor doesnot exist");
       }

    }

    
}
