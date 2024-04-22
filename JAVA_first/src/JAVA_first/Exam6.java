package JAVA_first;

public class Exam6 {
	
	public double circleArea(double radius) {
		return radius * radius * Math.PI;
	}
	
	public double rectangleArea(double width, double height) {
		return width * height;
	}
	
	public double triangleArea(double base, double height) {
		return base * height / 2;
	}

	public static void main(String[] args) {
		Exam6 calr = new Exam6();
		
		System.out.println("반지름이 5인 원의 넓이: " + calr.circleArea(5));
		System.out.println("가로 4, 세로 7인 직사각형의 넓이: " + calr.rectangleArea(4, 7));
		System.out.println("밑변이 6, 높이가 3인 삼각형의 넓이: " + calr.triangleArea(6, 3));
	}
}
