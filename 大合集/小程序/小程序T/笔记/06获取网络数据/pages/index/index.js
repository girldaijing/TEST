//index.js
//获取应用实例
const app = getApp()
var webUrl = app.webUrl;
var localUrl = app.localUrl;
Page({
  onLoad(){
      wx.request({
          url: localUrl+"top250",
          header: {
              'Content-Type': 'json'
          },
          success: function(res) {
              console.log(res.data);
          }
      })
  }
})
