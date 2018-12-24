// pages/movie/movie-detail/movie-detail.js
const app=getApp();
const douban=app.globalData.doubanUrl;
import utils from "../../../utils/utils";
const http=utils.http;
var star=utils.star;
var handleCasts=utils.handleCasts;
var handleGenres=utils.handleGenres;

Page({
    data:{
        
    },
    onLoad:function(options){
    //    wx.showLoading({
    //        title:"数据加载中"
    //    }); 
      var id=options.id;
      var url=douban+"subject/"+options.id;
      http(url,this.handleData);
    //   console.log(options);
    },
    handleData(res){
        console.log(res)
        var data=res.data;
        var title=data.title;
        var country=data.countries[0]+"·"+data.year;
        var like=data.wish_count;
        var comment=data.comments_count;
        var banner=data.images.large;
        var small=data.images.small;
        var alt_title=data.original_title;
        var director=data.directors[0].name;
        var stars=star(data.rating.stars);
        var average=data.rating.average;
        var castsName=handleCasts(data.casts);
        var genres=handleGenres(data.genres);
        var sum=data.summary;
        var casts=data.casts;
        this.setData({
            title,country,like,comment,banner,
            alt_title,stars,average,director,
            castsName,genres,sum,casts,small,stars
        })
        wx.hideLoading();
    },
    onPreview(){
        var self=this;
        wx.previewImage({
            // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
            urls: [self.data.banner],
            
        });
    },
   
   
});