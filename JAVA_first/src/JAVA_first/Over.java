package JAVA_first;

public class Over {
	
	// 메소드 오버로딩
	// 정수 두개를 더하는 메소드
	public int add(int a, int b) {
		return a + b;
	}
	
	// 실수 두 개를 더하는 메소드
	public double add(double a, double b) {
		return a + b;
	}
	
	// 정수 세 개를 더하는 메소드
	public int add(int a, int b, int c) {
		return a + b + c;
	}

	public static void main(String[] args) {
		
		Over calc = new Over();
		
		System.out.println(calc.add(10, 20));
		System.out.println(calc.add(5.3, 7.7));
		System.out.println(calc.add(1, 3, 1000));

	}

}
