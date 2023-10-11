CREATE DATABASE  IF NOT EXISTS `scheduling_system`;
USE `scheduling_system`;

DROP TABLE IF EXISTS `student`;
DROP TABLE IF EXISTS `teacher`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `lesson`;
DROP TABLE IF EXISTS `lesson_centre`;

CREATE TABLE `student` (

  `id` int NOT NULL AUTO_INCREMENT,
  `studentNumber` varchar(60) DEFAULT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `address` varchar(60) DEFAULT NULL,
  `postCode` varchar(10) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `instrumentsPlayed` varchar(255) DEFAULT NULL,
  `experience` varchar(45) DEFAULT NULL,
  `yearOfBirth` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;


CREATE TABLE `teacher` (

  `id` int NOT NULL AUTO_INCREMENT,
  `teacherNumber` varchar(60) DEFAULT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `address` varchar(60) DEFAULT NULL,
  `postCode` varchar(10) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `instrumentsTaught` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE `user` (
	`id` int NOT NULL AUTO_INCREMENT,
	`firstName` varchar(45) DEFAULT NULL,
	`lastName` varchar(45) DEFAULT NULL,
	`pwd` varchar(45) DEFAULT NULL,
	`authority` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `lesson` (

  `id` int NOT NULL AUTO_INCREMENT,
  `lessonNumber` varchar(60) DEFAULT NULL,
  `studentNumber` varchar(45) DEFAULT NULL,
  `teacherNumber` varchar(45) DEFAULT NULL,
  `centreID` int DEFAULT NULL,
  `startTime` varchar(60) DEFAULT NULL,
  `endTime` varchar(10) DEFAULT NULL,
  `roomNumber` int DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `dayOfWeek` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=latin1;


CREATE TABLE `lesson_centre` (

  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(60) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` int DEFAULT NULL,
  `postCode` varchar(60) DEFAULT NULL,
  `numOfRooms` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=latin1;


INSERT INTO `student` VALUES 
	(NULL, 'S1','test','test','test', 'test', 'test', 'test', 'test', '2003');
    
    
INSERT INTO `teacher` VALUES 
	(NULL, 'T1','test','test','test', 'test', 'test', 'test');