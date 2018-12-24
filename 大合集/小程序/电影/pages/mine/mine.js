// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isEmpty:true
  },
  imgClick(){
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