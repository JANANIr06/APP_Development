package com.example.demo.controller;

import com.example.demo.model.Bulkorder;
import com.example.demo.service.BulkorderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins="http://localhost:3000")

@RestController
@RequestMapping("/api/bulkorder")
public class BulkorderController {

    @Autowired
    private BulkorderService bulkorderService;

    @PostMapping("/submit")
    public Bulkorder submitMessage(@RequestBody Bulkorder bulkorderModel) {
        return bulkorderService.saveMessage(bulkorderModel);
    }

    @GetMapping("/messages")
    public List<Bulkorder> getMessages() {
        return bulkorderService.getAllMessages();
    }

    @GetMapping("/message/{id}")
    public Bulkorder getById(@PathVariable Long id) {
        return bulkorderService.getMessageById(id);
    }
}