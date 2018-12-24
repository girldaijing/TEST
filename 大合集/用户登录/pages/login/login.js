var app = getApp();
Page({
  data:{
    username:null,
    password:null,
  },
  loginBtnClick:function (){
    wx.setNavigationBarTitle({
      title: '用户中心',
    });
    // 用户名和密码验证的过程
    //建立一个类，存放用户名和密码
    app.appData.userinfo = {
      username:this.data.username,
      password:this.data.password
    }
    // wx.redirectTo({url:"../user/user"})
     if(app.appData.userinfo.username && this.data.password){
       wx.navigateTo({url:"../user/user"})
     }
  },

  usernameInput : function (event){
    //console.log(event)观察结构
    var username=event.detail.value
    this.setData({
      username
    })
  },

  passwordInput : function (event){
    this.setData({
      password:event.detail.value
    })
  }
})