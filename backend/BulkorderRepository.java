package com.example.demo.repository;

import com.example.demo.model.Bulkorder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BulkorderRepository extends JpaRepository<Bulkorder, Long> {


}