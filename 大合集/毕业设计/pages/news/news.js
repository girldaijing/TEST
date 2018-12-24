// pages/news/news.js
var newsUrl = "https://www.apiopen.top/journalismApi";
import utils from "../../utils/util";
var http = utils.http;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http(newsUrl, this.handleData);
  },
  handleData(res) {
    var data = res.data;
    console.log(data)
    var war = data.war;
    var news = [];
    war.forEach(ele => {
      var title = ele.title;
      var source = ele.source;
      var date = ele.ptime;
      var image=ele.picInfo[0].url;
      var temp = {
        image,
        title,
        source,
        date
      }
      news.push(temp)
      
    });
    
    this.setData({news,})
  }

})