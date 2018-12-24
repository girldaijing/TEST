// pages/movies/movies.js
const app = getApp();
const doubanUrl = "https://douban.uieee.com/v2/movie/";
import utils from "../../utils/util";
const httpData = utils.httpData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "in_theaters": {},
    "coming_soon": {},
    "top250": {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var inTheatersUrl = doubanUrl + "in_theaters";
    var comingSoonUrl = doubanUrl + "coming_soon";
    var top250Url = doubanUrl + "top250";

    var self = this;
    httpData(inTheatersUrl, this.handleData, "in_theaters");
    httpData(comingSoonUrl, this.handleData, "coming_soon");
    httpData(top250Url, this.handleData, "top250");
  },

  handleData(res, type) {
    var subjects = res.data.subjects;
    var header = res.data.title;
    var movies = [];
    var images = [];
    subjects.forEach(ele => {
      var temp = {
        title: ele.title,
        average: ele.rating.average,
        imgUrl: ele.images.small,
        id: ele.id,
        date: ele.year,
        director: ele.directors[0].name
      };
      movies.push(temp);
      images.push(temp.imgUrl)
    });
    var readyData = {};
    readyData[type] = {
      movies,
      header,
      type
    };
    this.setData(readyData);
    this.setData({
      images: images.slice(0, 4)
    })

    wx.hideLoading();
  },
  more(event){
    console.log(event)
    var type = event.currentTarget.dataset.type;
    var title = event.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/movies/more/more?type=' + type + "&title=" + title,
    });
  },
})