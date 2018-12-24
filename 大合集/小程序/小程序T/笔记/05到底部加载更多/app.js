//app.js
App({
  onLaunch: function () {

  },
  globalData: {

    baseUrl: "https://douban.uieee.com/v2/movie/top250"
  },
  http(url,callback) {
    wx.request({
      url,
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        callback(res);
      }
    });
  }
})