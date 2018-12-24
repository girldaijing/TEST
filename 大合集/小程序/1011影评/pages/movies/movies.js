// pages/movies/movies.js
const app=getApp();
const douban=app.globalData.doubanUrl;
import utils from "../../utils/utils";
const http=utils.http;
const star=utils.star;

Page({
  data: {
    "in_theaters":{},
    "coming_soon":{},
    "top250":{},
   
  },

  onLoad: function (options) {
    var count="?start=0&count=3";
    var inTheatersUrl=douban+"in_theaters"+count;
    var comingSoon=douban+"coming_soon"+count;
    var top250=douban+"top250"+count;

   var self=this;
  http(inTheatersUrl,this.handleData,"in_theaters");
  http(comingSoon,this.handleData,"coming_soon");
  http(top250,this.handleData,"top250");
},
  handleData(res,type){
    var subjects=res.data.subjects;
    var title=res.data.title;
    var movies=[];
    subjects.forEach(ele=> {
                 var temp={
                   title:ele.title,
                   stars:star(ele.rating.stars),
                   average:ele.rating.average,
                   imgUrl:ele.images.small,
                   id:ele.id
                 };
                 movies.push(temp);
                //  console.log(movies)
            });
            var readyData={};
            readyData[type]={
              movies,
              title,
              type
            };
            this.setData(readyData);
           
            wx.hideLoading();

            
  },
  more(event){
   var type=event.currentTarget.dataset.type;
   var title=event.currentTarget.dataset.title;

  
    wx.navigateTo({
      url: 'movies-more/movies-more?type='+type+"&title="+title,
      
    });
    //  var url='movies-more/movies-more?type='+type+"&title="+title
    // console.log(url)
  },
  onclick(event){
   
    var id=event.currentTarget.dataset.id;
    // console.log(id);
    wx.navigateTo({
      url: '/pages/movies/introduce/introduce?id='+id
    });
  },
  onsearch(){
    wx.navigateTo({
      url: '/pages/search/search',
      success: function(res){
        // success
      },
     
    })
  }

});