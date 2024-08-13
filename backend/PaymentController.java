package com.example.demo.controller;

import com.example.demo.model.PaymentModel;
import com.example.demo.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    // Endpoint to submit a new payment
    @PostMapping("/submit")
    public PaymentModel submitPayment(@RequestBody PaymentModel paymentModel) {
        return paymentService.savePayment(paymentModel);
    }

    // Endpoint to get all payment details
    @GetMapping("/details")
    public List<PaymentModel> getAllPayments() {
        return paymentService.getAllPayments();
    }

    // Endpoint to update payment details by ID
    @PutMapping("/update/{id}")
    public PaymentModel updatePayment(@PathVariable Long id, @RequestBody PaymentModel paymentModel) {
        return paymentService.updatePayment(id, paymentModel);
    }

    // Endpoint to delete payment details by ID
    @DeleteMapping("/delete/{id}")
    public void deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
    }
}
