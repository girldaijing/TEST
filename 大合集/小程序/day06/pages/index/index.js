//index.js
//获取应用实例
const app = getApp()
var webUrl=app.webUrl;
var localUrl=app.localUrl;

Page({
     data:{
        show:false,
        start:0,
        isEmpty:true
     },
  onLoad(){
    var self = this;
    wx.request({
      url: webUrl+"top250",
      header: {
        'Content-Type': 'json'
      },
      success: function(res) {
      
      self.handleData(res);
      }
    });
  },
  handleData(res){
    var totalData=[];
    var data=[];
        var subject=res.data.subjects;
        for(let key in subject){
           var name=subject[key].title;
           var average=subject[key].rating.average;
           var imgUrl=subject[key].images.small;
           var id = subject[key].id;
           var temp={};
           temp.name=name;
           temp.average=average;
           temp.imgUrl=imgUrl;
           temp.id = id;
           data.push(temp);
    }
    if(!this.data.isEmpty){
      totalData=this.data.data.concat(data);
      console.log(totalData);
      this.setData({
        data:totalData,
        show:true
      });
    }else{
       this.setData({
      data,
      show:true
    });
    this.data.isEmpty=false;
    }
   wx.hideNavigationBarLoading();
  },
  handleClick(event){
    console.log(event);
    var id = event.currentTarget.dataset.id;
  
    wx.navigateTo({
      url: '/pages/movie-detail/movie-detail?id='+id, 
    });
  
  },
  onReachBottom:function(){
    wx.showNavigationBarLoading();
    var self=this;
    this.data.start+=20;
    var url=webUrl+"top250";
    var nextUrl=url+"?start="+this.data.start+"&count=20";
   wx.request({
     url: nextUrl,
     header: {
       'Content-Type': 'json'
     },
     success: function(res) {
        self.handleData(res);
     }
   });
  }
});
