package com.igeek.day01;

import java.util.Scanner;

public class Test7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        Scanner sc=new Scanner(System.in);
        System.out.println("����������A:");
        int A=sc.nextInt();
        System.out.println("����������B:");
        int B=sc.nextInt();
        System.out.println("����������C:");
        int C=sc.nextInt();
        int max=(A>B)?A:B;
        int result=(max>C)?max:C;
        System.out.println(result);
	}

}
