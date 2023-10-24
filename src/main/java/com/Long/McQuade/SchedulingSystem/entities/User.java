package com.Long.McQuade.SchedulingSystem.entities;


import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "identifiernumber")
    private String userNumber;

    @Column(name = "first")
    private String firstName;

    @Column(name = "last")
    private String lastName;

    @Column(name = "pwd")
    private String pwd;

    @Column(name = "enabled")
    private boolean enabled;



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