//index.js
//获取应用实例
const app = getApp()
var local=require("../../data/local");//请求当地数据接口
Page({
  data: {
  imgUrl:[
    {url:"/images/post/cat.png",id:0},
    {url:"/images/post/crab.png",id:1},
    {url:"/images/post/vr.png",id:2},
  ],//把轮播图片放在imgUrl里面
    postList:[],//把本地的接口数据放在postList这个容器里
  },

   onLoad(){
     var self=this;//this指向问题，每一个事件里面都有一个自己的this,重名了无法分辨,
                   // 故把自己自带的这个this改一个名字变成self,这样再用this的话，现在这个this就指向上一级的this(page里)
  
     var postList=local.postList;//把本地接口数据赋值给postList
    //  console.log(local.postList);
     this.setData({
       postList, //把数据加载装到postList这个容器里
     })
     console.log(this.data.postList);//输出判断数据是否加载成功
   },
   handleclick(event){ //index.wxml点击事件
    //  console.log(event) 控制台输出
     var id=event.currentTarget.dataset.id;//catchtap事件取出id

     wx.navigateTo({
       url: '/pages/index/detail/detail?id='+id,  //跳转到对应的id页面
     })
    
   
    // console.log(event.currentTarget.dataset);
   },
   jump(event){//index.wxml轮播图片跳转事件
     var id=event.currentTarget.dataset.id;//获取id
     wx.navigateTo({
       url: '/pages/index/detail/detail?id='+id //跳转到对应的id页面
     });
   },

});
