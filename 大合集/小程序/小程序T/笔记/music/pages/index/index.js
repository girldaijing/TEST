//index.js
//获取应用实例
const app = getApp()

Page({
  // data:{
  //   url
  // },
  click() {
    wx.playBackgroundAudio({
      dataUrl: this.data.url,
      title: '往后余生'
    })
  },
  onLoad(){
    var self = this;
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=song&id=571338279',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
         console.log(res.data.data[0].url);
         var url = res.data.data[0].url;    
         self.setData({
            url:url
         })
      }
    })
  }
})