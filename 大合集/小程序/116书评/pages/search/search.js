// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMore: 0,
    bottomMore: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onPullDownRefresh: function () {
    //  console.log(1)
    this.setData({
      topMore: Math.random()
    })
  },
  onReachBottom() {
    this.setData({
      bottomMore: Math.random()
    })
  }
})