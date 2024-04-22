package JAVA_first;
import java.util.Scanner;

public class Exam5 {
	
	public double add(double num1, double num2) {
		return num1 + num2;
		}
	
	public double sub(double num1, double num2) {
		return num1 - num2;
		}
	
	public double mul(double num1, double num2) {
		return num1 * num2;
		}
	
	public double div(double num1, double num2) {
		return num1 / num2;
		}

	public static void main(String[] args) {		
		Exam5 calc = new Exam5();		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("숫자 두 개를 입력하세요");
        int num1 = scan.nextInt();
        int num2 = scan.nextInt();
        
        System.out.println("덧셈 결과 : " + calc.add(num1, num2) );
        System.out.println("뺄셈 결과 : " + calc.sub(num1, num2) );
        System.out.println("나눗셈 결과 : " + calc.div(num1, num2) );
        System.out.println("곱셈 결과 : " + calc.mul(num1, num2) );
        
        scan.close();
	}

}
