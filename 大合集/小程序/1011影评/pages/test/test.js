// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isEmpty:true
  },
  click(){
        //  wx.previewImage({
        //    current: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp", // 当前显示图片的链接，不填则默认为 urls 的第一张
        //    urls: ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp"],
        //  })

        wx.chooseImage({
          count: 9,	// 默认为9
          sizeType: ['original', 'compressed'],	// 指定原图或者压缩图
          sourceType: ['album', 'camera'],	// 指定图片来源
          success: res=> {
            var tempFilePaths = res.tempFilePaths;

            wx.setStorageSync('image', {
              imgUrl:tempFilePaths,
              isEmpty:false
            })

           var image=wx.getStorageSync('image');
           var imgUrl=image.imgUrl[0];
           var isEmpty=image.isEmpty;
            this.setData({
              isEmpty:isEmpty,
              imgUrl
            })
          }
        });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          var image=wx.getStorageSync('image');
          if(image){
            var imgUrl=image.imgUrl[0];
            var isEmpty=image.isEmpty;
            this.setData({
              imgUrl,
              isEmpty
            })
          }
  },

})