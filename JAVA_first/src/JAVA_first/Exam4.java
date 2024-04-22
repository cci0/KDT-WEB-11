package JAVA_first;
import java.util.Scanner;

public class Exam4 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.println("숫자를 입력하세요");
        int num = scan.nextInt();
        
        for ( int i = 1; i <= num; i++) {
        	System.out.printf("%d ", i);
        }
		
		scan.close();
	}

}
