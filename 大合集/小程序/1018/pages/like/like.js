// pages/like/like.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var storage=wx.getStorageSync('liked')
    if(storage){
      var storageValue=wx.getStorageSync('liked')
      this.setData({
        liked:storageValue
      })
    }
  },

  
  onLike(){
    // wx.clearStorageSync()
    // wx.setStorageSync("s8", "垃圾")
    var liked=!this.data.liked;
    wx.setStorageSync('liked', liked)
    var storageValue=wx.getStorageSync('liked')
    this.setData({
      liked:storageValue
    })
  }
})