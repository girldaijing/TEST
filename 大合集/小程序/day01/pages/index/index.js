var local=require("../data/local.js");

Page({
   onLoad:function(){
       var bannerData=local.imgUrl;
       this.setData({
          imgUrl:bannerData
       })
   },
    toggleuser(){
        wx.navigateTo({
            url: '/pages/user/user'
            
        })
    }
});