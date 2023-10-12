package com.Long.McQuade.SchedulingSystem.entities;


import jakarta.persistence.*;

@Entity
@Table(name = "lesson_centre")
public class LessonCentre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "city")
    private String city;

    @Column(name = "phonnum")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private String address;

    @Column(name = "postcode")
    private String postCode;

    @Column(name = "numofrooms")
    private String numOfRooms;


    public LessonCentre(String city, String phoneNumber, String email, String address, String postCode, String numOfRooms) {
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.postCode = postCode;
        this.numOfRooms = numOfRooms;
    }

    public LessonCentre() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getNumOfRooms() {
        return numOfRooms;
    }

    public void setNumOfRooms(String numOfRooms) {
        this.numOfRooms = numOfRooms;
    }

    @Override
    public String toString() {
        return "LessonCentre{" +
                "id=" + id +
                ", city='" + city + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", postCode='" + postCode + '\'' +
                ", numOfRooms='" + numOfRooms + '\'' +
                '}';
    }
}
