//index.js
//获取应用实例
import {HTTP} from "../../utils/http";
var http = new HTTP();
const app = getApp()

// import {sliceTitle} from "../../utils/http_obj";

// var sliceTitle = utils.http_obj.sliceTitle;
Page({


data:{
  num:10
},
// onLoad(){
//   http.request({
//     url:"top250",
//     success: res=>{
//       console.log(res);
//     }
//   })


  //   var movies = wx.getStorageSync('movies');
  //   if (movies) {
  //     this.setData({
  //       movies
  //     })
  //   } else {
  //     var url = "https://douban.uieee.com/v2/movie/top250";
  //     wx.showNavigationBarLoading();
  //     http({
  //       url,
  //       success: res => {
  //         this.handleData(res)
  //       }
  //     })
  //   }
  // },
  
  // handleData(res) {
  //   var subjects = res.subjects;
  //   var movies = [];
  //   subjects.forEach(ele => {
  //     var title = sliceTitle(ele.title);
  //     var id = ele.id;
  //     var imgUrl = ele.images.small;
  //     var temp = {
  //       title,
  //       id,
  //       imgUrl
  //     }
  //     movies.push(temp);
  //   })
  //   wx.setStorageSync("movies", movies);
  //   this.setData({
  //     movies
  //   })
  //   wx.hideNavigationBarLoading()
  // }
})
