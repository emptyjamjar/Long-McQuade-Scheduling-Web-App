package com.Long.McQuade.SchedulingSystem;

import com.Long.McQuade.SchedulingSystem.entities.Student;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SchedulingSystemApplicationTests {

	@Test
	void contextLoads() {
	}

	public static void main(String[] args) {

		//testing student
		Student testStu = new Student("Stu", "Dent", "123 School St", "123456", "3061234567", "clarinet", "none", "2004");

		testStu.setFirstName("Josh");
		String nameF = testStu.getFirstName();
		if (!nameF.equals("Josh")){
			System.out.println("First name not set or gotten properly");
		}

		testStu.setLastName("Ua");
		String nameL = testStu.getLastName();
		if (!nameL.equals("Ua")){
			System.out.println("Last name not set or gotten properly");
		}

		testStu.setAddress("345 Street");
		String addy = testStu.getAddress();
		if (!addy.equals("345 Street")){
			System.out.println("Address not set or gotten properly");
		}

		testStu.setInstrumentsPlayed("trombone");
		String intr = testStu.getInstrumentsPlayed();
		if (!intr.equals("trombone")){
			System.out.println("Instrument not set or gotten properly");
		}

	}
}
