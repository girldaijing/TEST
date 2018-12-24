//index.js
//获取应用实例
const app = getApp()
var local=require("../../data/local");
Page({
  data: {
  imgUrl:[
    {url:"/images/post/cat.png"},
    {url:"/images/post/crab.png"},
    {url:"/images/post/vr.png"},
  ],
    postList:[],
  },

   onLoad(){
     var postList=local.postList;
     console.log(local.postList);
     this.setData({
       postList,
     })
   },
   handleclick(event){
     var id=event.currentTarget.dataset.id;

     wx.navigateTo({
       url: '/pages/index/detail/detail?id='+id,
     })
    console.log(event.currentTarget.dataset);
   }
})
