// pages/List/List.js
// import { MovieModel } from "../../models/movies";
// const movieModel = new MovieModel();

const app=getApp();
const doubanUrl="https://douban.uieee.com/v2/movie/";
import utils from "../../utils/util";
const http=utils.http;

Page({
  // data: {
  //   in_theaters:"in_theaters",
  //   top250: "top250",
  //   coming_soon:"coming_soon",
  //   us_box:"us_box"
  // },
  // onLoad: function () {
  //   const inTheaters = movieModel.getInTheaters();
  //   const top250 = movieModel.getTop250();
  //   const comingSoon = movieModel.getComingSoon();
  //   const usBox = movieModel.getUsBox();
  //   Promise.all([inTheaters, top250, comingSoon, usBox]).then(res => {
  //     let [inTheaters, top250, comingSoon, usBox] = res;
  //     this.setData({
  //       res
  //     })
  //   })

  // },
  // jump(event) {
  //   var type = event.currentTarget.dataset.type;
  //   console.log()
  //   wx.navigateTo({
  //     url: '../detail/detail?type='+type
  //   })
  // }


  data: {
    "in_theaters":{},
    "coming_soon":{},
    "top250":{},
    "us_box":{}
  },
  onLoad: function (options) {
    
    var inTheatersUrl=doubanUrl+"in_theaters";
    var comingSoonUrl=doubanUrl+"coming_soon";
    var top250Url=doubanUrl+"top250";
    // var uxBoxUrl=doubanUrl+"us_box";
   var self=this;
  http(inTheatersUrl,this.handleData,"in_theaters");
  http(comingSoonUrl,this.handleData,"coming_soon");
  http(top250Url,this.handleData,"top250");
  // http(uxBoxUrl,this.handleData,"us_box");
},
  handleData(res,type){
    var subjects=res.data.subjects;
    // console.log(subjects)
    var header=res.data.title;
    var movies=[];
    subjects.forEach(ele=> {
                 var temp={
                   title:ele.title,
                   average:ele.rating.average,
                   imgUrl:ele.images.small,
                   id:ele.id,
                   date:ele.year,
                   director:ele.directors[0].name
                 };
                 movies.push(temp);
            });
            var readyData={};
            readyData[type]={
              movies,
              header,
              type
            };
            this.setData(readyData);
            // console.log(readyData)
            wx.hideLoading();     
  },
  jump(event){
    // console.log(event)
    var type=event.currentTarget.dataset.type;
    var  header=event.currentTarget.dataset.header;
     wx.navigateTo({
       url: '/pages/detail/detail?type='+type+"&header="+header,
     });
   },
   imgClick(event){
    // console.log(event)
     var id=event.currentTarget.dataset.id;
     wx.navigateTo({
      url: '/pages/introduce/introduce?id='+id
    });
   }

})