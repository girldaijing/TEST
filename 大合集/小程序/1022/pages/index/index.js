//index.js
//获取应用实例
const app = getApp();

Page({
  data:{
    isShow:false,
    value:null
  },
  onForm(e){
    console.log(e.detail.value)
  },
  onFocus(){
    this.setData({
      isShow:true
    })
  },
  onBlur(){
    this.setData({
      isShow:false
    })
  },
  onclick(){
    this.setData({
      value:""
    })
  }
})
