package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Login;

import com.example.demo.service.LoginService;
@CrossOrigin(origins="http://localhost:3000")


@RestController
@RequestMapping("/log")
public class LoginController {
    @Autowired
    LoginService rs;
    @PostMapping("/login")
    public ResponseEntity<Login> adddata(@RequestBody Login r)
    {
        Login obj=rs.create(r);
       
        return new ResponseEntity<>(obj,HttpStatus.CREATED);
    }
    @GetMapping("/getit") 
    public List<Login> fetchDepartmentList() 
    { 
        return rs.fetchDepartmentList(); 
    }
    @GetMapping("/login/{userId}")
    public ResponseEntity<Login> getById(@PathVariable("userId")int userId)
    {
        try
        {
            return new ResponseEntity<>(rs.getByid(userId),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/sort/{field}")
    public ResponseEntity<List<Login>> get(@PathVariable String field)
    {
        try{
            return new ResponseEntity<>(rs.getbysort(field),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/reach/{userId}")
    public ResponseEntity<Login> putMethod(@PathVariable("userId") int userId,@RequestBody Login pd)
    {
        if(rs.updateDetails(userId,pd) == true)
        {
            return new ResponseEntity<>(pd,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/Login/{userId}")
    public ResponseEntity<Boolean> delete(@PathVariable("userId") int userId)
    {
        if(rs.deleteEmployee(userId) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}