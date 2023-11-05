package com.Long.McQuade.SchedulingSystem.entities;


import jakarta.persistence.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    protected int id;

    @Column(name = "identifiernumber")
    protected String userNumber;

    @Column(name = "first")
    protected String firstName;

    @Column(name = "last")
    protected String lastName;

    @Column(name = "address")
    protected String address;

    @Column(name = "pcode")
    protected String postCode;

    @Column(name = "phonnum")
    protected String phoneNumber;


    @Column(name = "yob")
    protected String yearOfBirth;

    @Column(name = "pwd")
    protected String pwd;

    @Column(name = "enabled")
    protected boolean enabled;


    public User(String userNumber, String firstName, String lastName, String pwd, boolean enabled) {
        this.userNumber = userNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pwd = pwd;
        this.enabled = enabled;
    }

    public User() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserNumber() {
        return userNumber;
    }

    public void setUserNumber(String userNumber) {
        this.userNumber = userNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    @Override
    public String toString() {
        return "User{" +
                "userNumber='" + userNumber + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", pwd='" + pwd + '\'' +
                ", enabled=" + enabled +
                '}';
    }
}