package com.example.demo.model;

// import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
public class Register {
    @Id
    @GeneratedValue
    private int userId;
    private String name;
    private String email;
    private String password;

    // @OneToOne(mappedBy = "register", cascade = CascadeType.ALL)
    // @JsonBackReference
    // private Login login;

    public Register() {}

    public Register(int userId, String name, String email, String password) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // public Login getLogin() {
        // return login;
    // }

    // public void setLogin(Login login) {
        // this.login = login;
        // if (login != null) {
            // login.setRegister(this);
        // }
    // }
}