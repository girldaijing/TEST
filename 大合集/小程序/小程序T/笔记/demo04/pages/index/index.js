//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    show:false
  },
  onLoad(){
    var self = this;
    wx.request({
      // url: 'https://www.easy-mock.com/mock/5bac6df10132334db7167178/testDemo/smallTest',
      url:"https://douban.uieee.com/v2/movie/top250",
      header: {
        'Content-Type': 'json'
      },
      success: function(res) {
        // var data = res.data.data;
        // self.setData({
        //   data,
        //   top:12
        // });
        
        self.handleData(res);
      }
    })
  },
  handleData(res){
    var data = [];
        var subject = res.data.subjects;
        for(let key in subject){
          //将subject[key]中需要的值取出来,放在一个对象中
           var name = subject[key].title;
           var average = subject[key].rating.average;
           var imgUrl = subject[key].images.small;
           var id = subject[key].id;
           var temp={};
           temp.name=name;
           temp.average =average;
           temp.imgUrl = imgUrl;
          //  add
           temp.id = id;
           data.push(temp);
        }
        this.setData({
          data,
          show:true
        })
  },
  handleClick(event){
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '/pages/movie-detail/movie-detail?id='+id
    });
  },
  onReachBottom: function () {
     
  }
});
