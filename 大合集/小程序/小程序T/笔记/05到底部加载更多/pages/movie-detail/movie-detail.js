// pages/movie-detail/movie-detail.js
Page({

  /**
   * 页面的初始数据
   */
   onLoad(option){
      var self = this;
      var id = option.id;
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/'+id,
        header: {
          'Content-Type': 'json'
        },
        success: function(res) {
         var imgUrl = res.data.image;
         self.setData({
           imgUrl
         })
        }
      });
   }

})