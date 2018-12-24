//index.js
//获取应用实例
const app = getApp();
var flag=false;

// import utils from "../../utils/util";
// const utils=require("../../utils/util");

Page({
  data:{
    child:"child"
  },
 parent(event){
   console.log(event.target.dataset.title);
   console.log(event.currenTarget.dataset.title);

    // console.log("parent");
  },
  child(event){
   
    console.log("child");
  }



  // data: {
  //   color:"window",//属性绑定，初始属性为window
    
  // },
  // click:function(){//点击事件
  //     var color;
  //     if(flag){
  //       color="window";
  //       flag=false;
  //     }else{
  //        color="window-green";
  //        flag=true;
  //     }
  //     this.setData({
  //        color
  //     });
  // },


  // onLoad(){
  //   utils.say();
  // }
// }

});
