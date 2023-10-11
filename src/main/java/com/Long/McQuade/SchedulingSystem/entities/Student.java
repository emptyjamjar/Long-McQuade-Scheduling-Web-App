package com.Long.McQuade.SchedulingSystem.entities;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "studentNumber")
    private String studentNumber;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "postCode")
    private String postCode;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "instrumentsPlayed")
    private String instrumentsPlayed;

    @Column(name = "experience")
    private String experience;

    @Column(name = "yearOfBirth")
    private int yearOfBirth;


    public Student(String firstName, String lastName, String address, String postCode, String phoneNumber, String instrumentsPlayed, String experience, int yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.postCode = postCode;
        this.phoneNumber = phoneNumber;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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

    public int getYearOfBirth() {
        return yearOfBirth;
    }

    public void setYearOfBirth(int yearOfBirth) {
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
                ", phoneNumber='" + phoneNumber + '\'' +
                ", instrumentsPlayed='" + instrumentsPlayed + '\'' +
                ", experience='" + experience + '\'' +
                ", yearOfBirth=" + yearOfBirth +
                '}';
    }
}
