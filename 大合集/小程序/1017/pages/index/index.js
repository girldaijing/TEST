//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
      msg:"child"
  },
  //事件处理函数
  onSearch(e){
     console.log(e.detail)
  },
  onLoad:function (){
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      
      header: { 'Content-type':'json'}, // 设置请求的 header
      success: function(res){
        // success
        var title=res.data.title;
        this.setData({
          title
        })
      },
    
    })
   
  }
  
});
