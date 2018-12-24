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
   url: 'https://douban.uieee.com/v2/movie/top250',
   header: {
     'Content-Type': 'json'
   },
   success: function(res) {
   //   var data = res.data.data;
   //  self.setData({
   //    data,
   //    top:12
   //  });
   console.log(res);
   self.handleData(res);
   }
 });
},
handleData(res){
 var data=[];
     var subject=res.data.subjects;
     for(let key in subject){
        var name=subject[key].title;
        var average=subject[key].rating.average;
        var imgUrl=subject[key].images.small;
        var id = subject[key].id;
        var temp={};
        temp.name=name;
        temp.average=average;
        temp.imgUrl=imgUrl;
        temp.id = id;
        data.push(temp);
 }
 this.setData({
   data,
   show:true
 });
},
handleclick(event){
 console.log(event);
 var id = event.currentTarget.dataset.id;

 wx.navigateTo({
   url: '/pages/movie-detail/movie-detail?id='+id, 
 });

}
});
