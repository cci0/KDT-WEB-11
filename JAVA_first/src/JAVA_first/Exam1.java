package JAVA_first;
import java.util.Scanner;

public class Exam1 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("이름을 입력하세요");
		String name = scan.next();
		
		System.out.println("나이를 입력하세요");
		int age = scan.nextInt();
		
		System.out.printf("안녕하세요! %s님(%d세)", name, age);
//		System.out.printf("안녕하세요!" + name + "님(" + age + "세)");

		scan.close();
	}

}
