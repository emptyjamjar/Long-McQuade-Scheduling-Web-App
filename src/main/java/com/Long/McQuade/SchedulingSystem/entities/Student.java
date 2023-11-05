package com.Long.McQuade.SchedulingSystem.entities;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "snum")
    private String studentNumber;

    @NotNull(message = "First name cannot be empty")
    @Size(min = 2, max = 20, message = "First name must be between 2 characters and 20 characters")
    @Column(name = "first")
    private String firstName;

    @NotNull(message = "Last name cannot be empty")
    @Size(min = 2, max = 20, message = "Last name must be between 2 characters and 20 characters")
    @Column(name = "last")
    private String lastName;

    @NotNull(message = "Address name cannot be empty")
    @Size(min = 5, max = 30, message = "Address must be between 5 characters and 30 characters")
    @Column(name = "address")
    private String address;

    @NotNull(message = "Post code cannot be empty")
    @Size(min = 7, max = 7, message = "Post code must be 7 characters")
    @Column(name = "pcode")
    private String postCode;

    @NotNull(message = "Email cannot be empty")
    @Column(name = "email")
    private String email;

    @NotNull(message = "Instruments played cannot be empty")
    @Size(min = 5, max = 50, message = "Email must be between 5 and 50 characters")
    @Column(name = "played")
    private String instrumentsPlayed;

    @NotNull(message = "Experience cannot be empty")
    @Column(name = "experience")
    private String experience;

    @NotNull(message = "Year of Birth cannot be empty")
    @Size(min = 4, max = 4, message = "Year of Birth must be 4 digits")
    @Column(name = "yob")
    private String yearOfBirth;


    public Student(String firstName, String lastName, String address, String postCode, String email, String instrumentsPlayed, String experience, String yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.postCode = postCode;
        this.email = email;
        this.instrumentsPlayed = instrumentsPlayed;
        this.experience = experience;
        this.yearOfBirth = yearOfBirth;
    }

    public Student() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getInstrumentsPlayed() {
        return instrumentsPlayed;
    }

    public void setInstrumentsPlayed(String instrumentsPlayed) {
        this.instrumentsPlayed = instrumentsPlayed;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getYearOfBirth() {
        return yearOfBirth;
    }

    public void setYearOfBirth(String yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", studentNumber='" + studentNumber + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address='" + address + '\'' +
                ", postCode='" + postCode + '\'' +
                ", email='" + email + '\'' +
                ", instrumentsPlayed='" + instrumentsPlayed + '\'' +
                ", experience='" + experience + '\'' +
                ", yearOfBirth=" + yearOfBirth +
                '}';
    }
}
