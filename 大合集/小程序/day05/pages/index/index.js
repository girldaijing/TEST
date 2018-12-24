//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
       show:false
  },
  click(){
    if(this.data.show){
      this.setData({
        show:false
      })
    }else{
      this.setData({
        show:true
      })
    }
  }
})
