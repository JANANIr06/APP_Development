package com.example.demo.service;

import com.example.demo.model.Bulkorder;
import com.example.demo.repository.BulkorderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BulkorderService {

    @Autowired
    private BulkorderRepository bulkorderRepository;

    public Bulkorder saveMessage(Bulkorder bulkorderModel) {
        return bulkorderRepository.save(bulkorderModel);
    }

    public List<Bulkorder> getAllMessages() {
        return bulkorderRepository.findAll();
    }

    public Bulkorder getMessageById(Long id) {
        return bulkorderRepository.findById(id).orElse(null);
    }
}