// pages/detail/detail.js
// import {MovieModel}from "../../models/movies";
// import{config} from "../../config";
// var base_url_api=config.base_url_api;
// const movieModel=new MovieModel();

const app = getApp();
const doubanUrl = "https://douban.uieee.com/v2/movie/";
import utils from "../../utils/util";
const http = utils.http;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  onLoad: function (options) {
    //  console.log(options)
    var type = options.type;
    var url = doubanUrl + type;
    // console.log(url)
    http(url, this.handleData);
    this.setData({
      type
    })
  },
  handleData(res) {
    var subjects = res.data.subjects;
    console.log(subjects)

    var header = res.data.title;
    var movies = [];
    subjects.forEach(ele => {
      var temp = {
        title: ele.title,
        average: ele.rating.average,
        imgUrl: ele.images.small,
        id: ele.id,
        date: ele.year,
        director:ele.directors[0].name
      };
      movies.push(temp);
    });
    this.setData({
      movies,
      header
    })
    // console.log(movies)
  },
  imgClick(event){

    var id=event.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
     url: '/pages/introduce/introduce?id='+id
   });
  }

})