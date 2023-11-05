package com.Long.McQuade.SchedulingSystem.entities;


import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "student")
public class Student extends User {

    @Column(name = "snum")
    private String studentNumber;

    @Column(name = "played")
    private String instrumentsPlayed;

    @Column(name = "experience")
    private String experience;


    public Student(String firstName, String lastName, String address, String postCode, String phoneNumber, String instrumentsPlayed, String experience, String yearOfBirth) {
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


    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
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
                ", phoneNumber='" + phoneNumber + '\'' +
                ", instrumentsPlayed='" + instrumentsPlayed + '\'' +
                ", experience='" + experience + '\'' +
                ", yearOfBirth=" + yearOfBirth +
                '}';
    }
}
