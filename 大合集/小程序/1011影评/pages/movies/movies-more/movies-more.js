// pages/movies/movies-more/movies-more.js
var douban=getApp().globalData.doubanUrl;
import utils from "../../../utils/utils";
var http=utils.http;
var sliceTitle=utils.sliceTitle;
const star=utils.star;
Page({
  data: {
         start:0,
         isEmpty:true
  },

  onLoad: function (options) {
     var type=options.type;
     var url=douban+type;
     var title=options.title;
     
    //  console.log(options)
    //  console.log(title)
     http(url,this.handleData);
     wx.setNavigationBarTitle({
       title,
      
     });
     this.setData({
       type
     });
  },

  handleData(res){
     var title=res.data.title;
     var subjects=res.data.subjects;
     var movies=[];

     subjects.forEach(ele => {
      
       var title=sliceTitle(ele.title);
       var average=ele.rating.average;
       var stars=star(ele.rating.stars);
       var imgUrl=ele.images.small;
       var id = ele.id;
       var temp={
         average,
         stars,
         title,
         imgUrl,
         id
       };
       movies.push(temp);
     });

     if(this.data.isEmpty){
       this.setData({
       movies,
       title,
       isEmpty:false
     });
     }else{
      this.setData({
        movies:this.data.movies.concat(movies)
      });
      
     }
     console.log(movies)
    wx.hideLoading()
  },
 

 onReachBottom(){
   var start=this.data.start;
   var type=this.data.type;
   this.data.start+=20;

   var url=`${douban}${type}?start=${start}&count=20`;
  //  console.log(url);
  http(url,this.handleData);
  wx.showLoading({
    title:"加载数据"
  });
 },
 onclick(event){
  var id=event.currentTarget.dataset.id;
  // console.log(id);
  wx.navigateTo({
    url: '/pages/movies/introduce/introduce?id='+id
  });
}
});