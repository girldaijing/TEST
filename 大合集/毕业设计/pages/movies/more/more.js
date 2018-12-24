// pages/more/more.js
const app=getApp();
import utils from "../../../utils/util";
var doubanUrl = "https://douban.uieee.com/v2/movie/";
var httpData=utils.httpData;
var sliceTitle=utils.sliceTitle;
var star=utils.star;

Page({
  data: {
   isEmpty:true,
   start:0
  },
  onLoad: function (options) {
    // console.log(options)
    var type = options.type;
    var url=doubanUrl+type;
    var header=options.header;
    // console.log(header)
    httpData(url,this.handleData);
    wx.setNavigationBarTitle({
      title:type,
    })
    this.setData({
      type,
    })
},

handleData(res){
    // console.log(res)
    var subjects=res.data.subjects;
    var header=res.data.title;
    var movies=[];
    subjects.forEach(ele => {
        // console.log(ele)
        var temp={
            image:ele.images.small,
            title:sliceTitle(ele.title),
            stars:star(ele.rating.stars),
            average:ele.rating.average,
            id:ele.id
        }
        movies.push(temp);
    });
      this.setData({
         movies
      })
  },
  onReachBottom(){
    var start=this.data.start;
    var type=this.data.type;
    this.data.start+=20;
 
    var url=`${doubanUrl}${type}?start=${start}&count=20`;
   //  console.log(url);
   httpData(url,this.handleData);
   wx.showLoading({
     title:"加载数据"
   });
  },

  
})