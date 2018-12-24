//写相对路径
var local = require("../data/local.js");
Page({
    onLoad:function(){
        var bannerData = local.imgUrl;
        this.setData({
            imgUrl:bannerData
        })
        
    },
    toggleUser(){
        wx.navigateTo({
            url: '/pages/user/user'
        })
    }
    
});