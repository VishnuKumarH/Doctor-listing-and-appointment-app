package com.ust.spring.project_aug12.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ust.spring.project_aug12.model.Doctor;


@Repository
public interface DoctorRepository  extends JpaRepository<Doctor,Long>{
    
}
