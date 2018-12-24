// pages/mine/mine.js
import { ClassicModel } from "../../models/classic"
const classicModel = new ClassicModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    authorized: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    


    wx.getSetting({
      success: (res => {
        // console.log(res)
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              // console.log(res)
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              })

            },
          })
        }
      })
    })
  },

  onGetUserInfo(event) {
    let userInfo = event.detail.userInfo;
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
    }

  },
  onShow(){
    classicModel.getFavor(res => {
      this.setData({
        likes: res
      })
    })
  }


})