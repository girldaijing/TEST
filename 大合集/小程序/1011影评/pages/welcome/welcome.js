//index.js
//获取应用实例
const app = getApp()

Page({
   data:{

   },
   onShow: function () {

  },
  onHide: function () {
  
  },


 handleClick(){
  //  跳转后不能返回
  //  wx.redirectTo({
  //    url: '/pages/index/index'
   
  //  });
  //  跳转后可以返回原来页面
  //  wx.navigateTo({
  //    url: '/pages/index/index'
  //  });
  //  扫码触发事件
  //  wx.scanCode({
     
  //  })
   wx.switchTab({
     url: '/pages/index/index',
    
   })
 }


})
