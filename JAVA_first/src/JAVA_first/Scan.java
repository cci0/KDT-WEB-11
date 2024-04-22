package JAVA_first;
import java.util.Scanner;

public class Scan {

	public static void main(String[] args) {
		System.out.println("이름, 나이, 키, 결혼 여부를 빈칸으로 분리하여 입력하세요.");
		
		Scanner scan = new Scanner(System.in);
		// System.in: 표준 입력 스트림을 나타내며, 주로 키보드 입력을 위해 사용;
		
		String name = scan.next(); // 공백 이전까지의 문자열 읽기
		int age = scan.nextInt(); // 공백 이전까지의 정수 읽기
		double height = scan.nextDouble(); // 공백 이전까지의 실수 읽기
		boolean isMarry = scan.nextBoolean(); // 공백 이전까지의 논리값 읽기
		
		System.out.printf("이름은 %s, 나이는 %d, 키는 %.1fcm, 결혼은 %b", name, age, height, isMarry);
		
		scan.close();
	}

}
