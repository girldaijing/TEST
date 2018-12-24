//index.js
//获取应用实例
const app = getApp()

Page({
  jump(){
    wx.navigateTo({
      url: '/pages/like/like'
    });
  },
  getData(){
    var storage=wx.getStorageSync('s8');
    console.log(storage)
  }
});
