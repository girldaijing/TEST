//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  //事件处理函数
  
  onLoad: function () {
   wx.request({
     url: 'http://bl.7yue.pro/v1/classic/latest',
     header: {
       'Content-Type': 'application/json',
       "appkey":"9xK0CrzQREI1yGPh"
     },
     success: res=>{
      this.setData({
         classic:res.data
      })
     }
   })
  },
  onLike(e){
     console.log(e.detail)
  }
})
