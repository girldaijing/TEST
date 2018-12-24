var data=require("../data/local.js");

Page({
    data:{
        msg:"hello world"
    },
    click(){
        this.setData({
            msg:"toggle"
        })
    },

    
   onLoad(){
     this.setData({
         arr:data.arr
     })
    
   }
});