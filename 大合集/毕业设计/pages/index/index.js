// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       userInfo:'',
       authorized:false  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
       
  },
onGetUserInfo(event){
  let userInfo=event.detail.userInfo;
  if(userInfo){
    this.setData({
      userInfo,
      authorized:true
    })
  }
},
_authorize(){
  wx.getSetting({
    success: res=>{
       if(res.authSetting['scope.userInfo']){
         wx.getUserInfo({
           success:res=> {
              this.setData({
                userInfo:res.userInfo,
                authorized:true
              })
           }
         })
       }
    },

  });
},

begin(){
  wx.switchTab({
    url: '/pages/news/news',
    // success: (result)=>{
      
    // },

  });
}

})