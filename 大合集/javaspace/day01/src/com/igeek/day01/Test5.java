package com.igeek.day01;

public class Test5 {
  public static void main(String[] args) {
	  int a=3;
	  int b=4;
/*
 * a-- �ʼa=3,����a==3Ϊtrue,Ȼ��a�Լ����2;
 * ��·| |  ����߽��Ϊtrueʱ���ұ߾Ͳ�����������
 * if����������a=10��bδ�����κ����㣬��b���ǳ�ʼֵ4
 * */	  
	  if(a--==3||b--==4) {
		  a=10;
	  }
	  System.out.println(a);
	  System.out.println(b);
  }
}
