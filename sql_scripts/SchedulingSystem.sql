CREATE DATABASE  IF NOT EXISTS `scheduling_system`;
USE `scheduling_system`;

DROP TABLE IF EXISTS `student`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `teacher`;
DROP TABLE IF EXISTS `lesson`;
DROP TABLE IF EXISTS `lesson_centre`;

CREATE TABLE `user` (
    `id` int NOT NULL AUTO_INCREMENT,
    `identifiernumber` varchar(45) DEFAULT NULL,
	`first` varchar(45) DEFAULT NULL,
	`last` varchar(45) DEFAULT NULL,
	`pwd` varchar(45) DEFAULT NULL,
	`authority` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE `student` (

  `id` int NOT NULL AUTO_INCREMENT,
  `snum` varchar(60) DEFAULT NULL,
  `first` varchar(45) DEFAULT NULL,
  `last` varchar(45) DEFAULT NULL,
  `address` varchar(60) DEFAULT NULL,
  `pcode` varchar(10) DEFAULT NULL,
  `phonnum` varchar(45) DEFAULT NULL,
  `played` varchar(255) DEFAULT NULL,
  `experience` varchar(45) DEFAULT NULL,
  `yob` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `teacher` (

  `id` int NOT NULL AUTO_INCREMENT,
  `teachernum` varchar(60) DEFAULT NULL,
  `first` varchar(45) DEFAULT NULL,
  `last` varchar(45) DEFAULT NULL,
  `address` varchar(60) DEFAULT NULL,
  `postcode` varchar(10) DEFAULT NULL,
  `phonenumber` varchar(45) DEFAULT NULL,
  `instruments` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE `lesson` (

  `id` int NOT NULL AUTO_INCREMENT,
  `lessonnum` varchar(60) DEFAULT NULL,
  `snum` varchar(45) DEFAULT NULL,
  `tnum` varchar(45) DEFAULT NULL,
  `centrenum` varchar(45) DEFAULT NULL,
  `starttime` varchar(60) DEFAULT NULL,
  `endtime` varchar(10) DEFAULT NULL,
  `roomnumber` varchar(10) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `dayofweek` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE `lesson_centre` (

  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(60) DEFAULT NULL,
  `phonnum` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` int DEFAULT NULL,
  `postcode` varchar(60) DEFAULT NULL,
  `numofrooms` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=latin1;

