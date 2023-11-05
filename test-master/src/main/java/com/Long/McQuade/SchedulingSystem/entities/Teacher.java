package com.Long.McQuade.SchedulingSystem.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "teacher")
public class Teacher extends User{


    @Column(name = "teachernum")
    private String teacherNumber;

    @Column(name = "instruments")
    private String instrumentsTaught;

    public Teacher(String firstName, String lastName, String address, String postCode, String phoneNumber, String instrumentsTaught) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.postCode = postCode;
        this.phoneNumber = phoneNumber;
        this.instrumentsTaught = instrumentsTaught;
    }

    public Teacher() {

    }

    public String getTeacherNumber() {
        return teacherNumber;
    }

    public void setTeacherNumber(String teacherNumber) {
        this.teacherNumber = teacherNumber;
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

    public String getInstrumentsTaught() {
        return instrumentsTaught;
    }

    public void setInstrumentsTaught(String instrumentsTaught) {
        this.instrumentsTaught = instrumentsTaught;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", teacherNumber='" + teacherNumber + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address='" + address + '\'' +
                ", postCode='" + postCode + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", instrumentsTaught='" + instrumentsTaught + '\'' +
                '}';
    }
}
