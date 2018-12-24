//index.js
//获取应用实例
const app = getApp()

Page({
   click(){
     wx.playBackgroundAudio({
       dataUrl: this.data.url,
       title:'城府'
     })
   },
   onLoad(){
     var self = this;
     wx.request({
       url: 'https://http://localhost:3000/music/url?id=167885',
      header: {
        'Content-Type':'appliction/json'
      },
       success: function(res){
         console.log(res.data.data[0].url)
         var url=res.data.data[0].url;
         self.setData({
           url:url
         })
       }
      
     })
   }
})
