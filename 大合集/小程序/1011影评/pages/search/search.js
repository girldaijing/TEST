// pages/search/search.js
import utils from "../../utils/utils";

const http=utils.http;
const star=utils.star;
var sliceTitle=utils.sliceTitle;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  
  onConfirm(e){
    var value=e.detail.value;
    var url=`https://douban.uieee.com/v2/movie/search?q=${value}`;
    http(url,this.handleData);
  },
  handleData(res){
    console.log(res)
 var subjects=res.data.subjects;
 var movies=[];
 subjects.forEach(ele => {
      
  var title=sliceTitle(ele.title);
  var average=ele.rating.average;
  var stars=star(ele.rating.stars);
  var imgUrl=ele.images.small;
  var id = ele.id;
  var temp={
    average,
    stars,
    title,
    imgUrl,
    id
  };
  movies.push(temp);
});
this.setData({
  movies
})
},
onclick(event){
  var id=event.currentTarget.dataset.id;
  console.log(id);
  wx.navigateTo({
    url: '/pages/movies/introduce/introduce?id='+id
  });
}
})