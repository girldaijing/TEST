const app = getApp()
var webUrl=app.webUrl;
var localUrl=app.localUrl;
Page({
  onLoad(option){
      var self=this;

      var id=option.id;
      wx.request({
          url: webUrl+id,
         header:{
               'Content-Type':'json'
         },
          success: function(res){
             var imgUrl=res.data.image;
             self.setData({
                 imgUrl
                 
             });
          }
         
      });
  }

})