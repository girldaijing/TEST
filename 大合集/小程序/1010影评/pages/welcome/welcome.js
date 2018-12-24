//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isEmpty:true
},
click(){
      wx.chooseImage({
        count: 9,	// 默认为9
        sizeType: ['original', 'compressed'],	// 指定原图或者压缩图
        sourceType: ['album', 'camera'],	// 指定图片来源
        success: res=> {
          var tempFilePaths = res.tempFilePaths;
          this.setData({
            imgUrl:tempFilePaths,
            isEmpty:false
          })
        }
      })
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
   wx.navigateTo({
     url: '/pages/index/index'
   });
  //  扫码触发事件
  //  wx.scanCode({
     
  //  })
 }


})
