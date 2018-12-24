//index.js
//获取应用实例
const app = getApp();
var local=require("../../data/local");

Page({
  data: {
     imgUrl:[
       {url:"/images/post/bl.png",id:0},
       {url:"/images/post/cat.png",id:1},
       {url:"/images/post/crab.png",id:2},
     ],
     postList:[]
  },
  //事件处理函数
  onLoad(){
    var self=this;
    var postList=local.postList;
    this.setData({
      postList
    })
    // console.log(this.data.postList)
  },
  imgJump(event){
    // console.log(event);
    var id=event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/read/read-detail/read-detail?id='+id
    })
  },
  handleClick(event){
    // console.log(event);
    var id=event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/read/read-detail/read-detail?id='+id
    })
  }
})
