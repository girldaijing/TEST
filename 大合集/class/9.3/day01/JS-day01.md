# JS-day01

## 1.调试

### 1.1console.log()

### 1.2debugger调试

~~~
window.onload = function(){
    var a =10;
    debugger;
    console.log(a);
}
~~~

### 1.3断点调试

## 2.变量

### 2.1如何声明变量

~~~
var a;
//如果声明一个变量,没有赋值,那么结果就是undefined
console.log(a); //undefined
~~~

### 2.2标识符(就是变量名,函数名,属性名)的命名规则

- 1.关键字和保留字不能作为命名

  | [abstract](https://baike.baidu.com/item/abstract)     | [assert](https://baike.baidu.com/item/assert)             | [boolean](https://baike.baidu.com/item/boolean)     | break                                                 | [byte](https://baike.baidu.com/item/byte)     |
  | ----------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------- |
  | case                                                  | [catch](https://baike.baidu.com/item/catch)               | [char](https://baike.baidu.com/item/char)           | [class](https://baike.baidu.com/item/class)           | const                                         |
  | continue                                              | [default](https://baike.baidu.com/item/default)           | [do](https://baike.baidu.com/item/do)               | [double](https://baike.baidu.com/item/double)         | [else](https://baike.baidu.com/item/else)     |
  | [enum](https://baike.baidu.com/item/enum)             | [extends](https://baike.baidu.com/item/extends)           | [final](https://baike.baidu.com/item/final)         | [finally](https://baike.baidu.com/item/finally)       | float                                         |
  | true                                                  | false                                                     | null                                                |                                                       |                                               |
  | [for](https://baike.baidu.com/item/for)               | goto                                                      | [if](https://baike.baidu.com/item/if)               | [implements](https://baike.baidu.com/item/implements) | [import](https://baike.baidu.com/item/import) |
  | [instanceof](https://baike.baidu.com/item/instanceof) | [int](https://baike.baidu.com/item/int)                   | [interface](https://baike.baidu.com/item/interface) | long                                                  | native                                        |
  | new                                                   | [package](https://baike.baidu.com/item/package)           | [private](https://baike.baidu.com/item/private)     | [protected](https://baike.baidu.com/item/protected)   | [public](https://baike.baidu.com/item/public) |
  | [return](https://baike.baidu.com/item/return)         | [strictfp](https://baike.baidu.com/item/strictfp)         | [short](https://baike.baidu.com/item/short)         | [static](https://baike.baidu.com/item/static)         | [super](https://baike.baidu.com/item/super)   |
  | [switch](https://baike.baidu.com/item/switch)         | [synchronized](https://baike.baidu.com/item/synchronized) | [this](https://baike.baidu.com/item/this)           | [throw](https://baike.baidu.com/item/throw)           | [throws](https://baike.baidu.com/item/throws) |
  | [transient](https://baike.baidu.com/item/transient)   | try                                                       | [void](https://baike.baidu.com/item/void)           | [volatile](https://baike.baidu.com/item/volatile)     | while                                         |

- 2.由字母,数字，下划线(_)或美元符号($)组成 

- 3.不能以数字开头

### 2.3声明提前

> 概念:js会将所有声明的变量,放在作用域的顶部集中创建,赋值留在原地

~~~
console.log(a); //undefined
var a =20;
~~~

### 2.4严格模式`use strict`

~~~
//js声明一个变量可以不使用var,js执行时自动补全
b=10;
console.log(b);
~~~

~~~
//如果使用严格模式,声明变量必须使用var
"use strict";
a=20;
console.log(a); //报错

~~~

## 3.数据类型

### 3.1基本数据类型

- number
- string
- boolean
- undefined
- null

#### 3.1.1typeof操作符可以判断数据类型

~~~
var a = 20;
var str = "hello";
var c = true;
console.log(typeof a);
console.log(typeof str);
console.log(typeof c);
~~~

### 3.2引用类型

- Array
- Function
- JSON对象

#### 3.2.1 Array

~~~
var arr = [1,2,3];
~~~

#### 3.2.2Function

> Tip:函数只要调用之后才执行

~~~
//语法
function funcName(){
    //coding
}
~~~



~~~
function func(){
      console.log("hello world");
}
//函数只有调用才回执行
func();
~~~

**箭头函数**

~~~
var test = ()=>{
    console.log("test");
}
test();
~~~

#### 3.2.3JSON对象

##### 1.声明一个JSON对象

~~~
var chengchao ={
 name : 'chengchao',
 age:18
}
//name可以不写双引号,js自动补全
~~~

##### 2.读取对象属性的值

~~~
//读取对象的值
console.log(chengchao.name);
console.log(chengchao["age"])
~~~

> Tip:在es6中倘若,JSON对象的属性名和值相同,可以简写

~~~
 var name="chengchao";
 var age=30;
 /* es5 */
 var chengchao={
    name:name,
    age:age
 }
 /* e6中倘若对象的属性名和值相同可以简写 */
 var zhang  = {
    name,
    age
 }
 console.log(zhang.age);
~~~

## 4.全局变量和局部变量

~~~~
/* 全局变量:在函数外声明的就叫全局变量 
   作用范围:整个window
*/
/* 
  局部变量:在函数内部声明的变量就叫局部变量
   作用范围:在函数的大括号中
*/
   var g = 20;
   console.log(g);
   function b(){
      var c = 30;
      console.log(c);
   }
   b();
        console.log(c);
~~~~

## 5.JS的模块化如何解决(课后了解)