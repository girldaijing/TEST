package com.igeek.day01;

public class Test5 {
  public static void main(String[] args) {
	  int a=3;
	  int b=4;
/*
 * a-- 最开始a=3,所以a==3为true,然后a自减变成2;
 * 短路| |  当左边结果为true时，右边就不参与运算了
 * if成立，最终a=10，b未参与任何运算，故b还是初始值4
 * */	  
	  if(a--==3||b--==4) {
		  a=10;
	  }
	  System.out.println(a);
	  System.out.println(b);
  }
}
