// pages/introduce/introduce.js
const app = getApp();
const doubanUrl = "https://douban.uieee.com/v2/movie/";
import utils from "../../utils/util";
const http = utils.http;
var handleCasts = utils.handleCasts;
Page({

  data: {

  },


  onLoad: function (options) {
    var id=options.id
    var url = doubanUrl + "subject/" + options.id;
    // console.log(url)
    http(url, this.handleData);
    console.log(options);
  },
  handleData(res) {
    console.log(res)
    // var data = res.data;
    // var title = data.title;
    // var banner = data.images.small;
    // var director = data.directors[0].name;
    // var average = data.rating.average;
    // var date = data.year;
    // var castsName = handleCasts(data.casts);
    // var sum = data.summary;
    // this.setData({
    //   sum,
    //   title,
    //   banner,
    //   average,
    //   director,
    //   castsName,
    // })
  },
})