package com.Long.McQuade.SchedulingSystem.entities;


import jakarta.persistence.*;

@Entity
@Table(name = "lesson")
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "studentNumber")
    private String studentNumber;

    @Column(name = "teacherNumber")
    private String teacherNumber;

    @Column(name = "centreID")
    private String centreID;

    @Column(name = "lessonNumber")
    private String lessonNumber;

    @Column(name = "startTime")
    private String startTime;

    @Column(name = "endTime")
    private String endTime;

    @Column(name = "roomNumber")
    private int roomNumber;

    @Column(name = "date")
    private String date;

    @Column(name = "dayOfWeek")
    private String dayOfWeek;

    public Lesson(String studentNumber, String teacherNumber, String centreID, String lessonNumber, String startTime, String endTime, int roomNumber, String date, String dayOfWeek) {
        this.studentNumber = studentNumber;
        this.teacherNumber = teacherNumber;
        this.centreID = centreID;
        this.lessonNumber = lessonNumber;
        this.startTime = startTime;
        this.endTime = endTime;
        this.roomNumber = roomNumber;
        this.date = date;
        this.dayOfWeek = dayOfWeek;
    }

    public Lesson() {

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

    public String getTeacherNumber() {
        return teacherNumber;
    }

    public void setTeacherNumber(String teacherNumber) {
        this.teacherNumber = teacherNumber;
    }

    public String getCentreID() {
        return centreID;
    }

    public void setCentreID(String centreID) {
        this.centreID = centreID;
    }

    public String getLessonNumber() {
        return lessonNumber;
    }

    public void setLessonNumber(String lessonNumber) {
        this.lessonNumber = lessonNumber;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(String dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    @Override
    public String toString() {
        return "Lesson{" +
                "id=" + id +
                ", studentNumber='" + studentNumber + '\'' +
                ", teacherNumber='" + teacherNumber + '\'' +
                ", centreID='" + centreID + '\'' +
                ", lessonNumber='" + lessonNumber + '\'' +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", roomNumber=" + roomNumber +
                ", date='" + date + '\'' +
                ", dayOfWeek='" + dayOfWeek + '\'' +
                '}';
    }
}
