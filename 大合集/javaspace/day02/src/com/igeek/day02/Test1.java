package com.igeek.day02;

import java.io.FileReader;

public class Test1 {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		@SuppressWarnings("resource")
		FileReader fr = new FileReader("d:/test.txt");
		int i = fr.read();
		int i2 = fr.read();
		char c = (char) i;
		char c2 = (char) i2;
		System.out.println(c+""+c2);
		
		
		
//		It c = 0;
//		while((c=fr.read())!=-1) {
//			System.out.println((char)c);
//		}
//		fr.close();
	}

}
