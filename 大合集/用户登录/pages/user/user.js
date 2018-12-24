var app = getApp();
Page({
  data: {
    username: null //用来装载输入框的值，也就是用户信息
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心',
    })
    this.setData({
      username: app.appData.userinfo.username
    })
  },
})