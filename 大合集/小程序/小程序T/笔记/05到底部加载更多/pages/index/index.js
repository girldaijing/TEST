//index.js
//获取应用实例
const app = getApp()
var url = app.globalData.baseUrl;
Page({
  data: {
    show: false,
    start: 0,
    isEmpty: true,
    data:[]
  },
  onLoad() {
    // var self = this;
    // wx.request({

    //   url:"https://douban.uieee.com/v2/movie/top250",
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success: function(res) {
    //     self.handleData(res);
    //   }
    // })

    console.log(url);
    app.http(url, this.handleData);
  },
  handleData(res) {
    //隐藏加载
    wx.hideNavigationBarLoading();
    var data = [];
    var totalData = [];
    var subject = res.data.subjects;
    for (let key in subject) {
      //将subject[key]中需要的值取出来,放在一个对象中
      var name = subject[key].title;
      var average = subject[key].rating.average;
      var imgUrl = subject[key].images.small;
      var id = subject[key].id;
      var temp = {};
      temp.name = name;
      temp.average = average;
      temp.imgUrl = imgUrl;
      //  add
      temp.id = id;
      data.push(temp);
    }
    if(!this.data.isEmpty){
      totalData = this.data.data.concat(data);
      this.setData({
        data:totalData,
        show:true
      });
    }else{
      this.setData({
        data:data,
        show:true,
        isEmpty:false
      })
    }
    this.data.start += 20;
    
  },
  handleClick(event) {
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '/pages/movie-detail/movie-detail?id=' + id
    });
  },
  onReachBottom: function () {

    var nextUrl = url + "?start=" + this.data.start + "&count=20";
    console.log(nextUrl);
    app.http(nextUrl, this.handleData);
    //nav显示加载
    wx.showNavigationBarLoading();
  }
});