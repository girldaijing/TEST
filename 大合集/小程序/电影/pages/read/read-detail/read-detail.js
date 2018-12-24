// pages/read/read-detail/read-detail.js
const local=require("../../../data/local");
const app=getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
     isPlay:false,
     collected:false,
     shared:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
     var self=this;
     var id=options.id;
     var data=local.postList[options.id];
    //  console.log(id);
     this.setData({
       data,
       postId:id,
       music:local.postList[options.id].music
     });
     this.onMusic();

     if(app.globalData.g_isPlay && app.globalData.g_currentId==id){
       this.setData({
         isPlay:true
       });
     }
     let allCollected=wx.getStorageSync('allCollected');
     if(allCollected){
       let storageCollected=allCollected[id];
       this.setData({
         collected:storageCollected
       });
     }else{
       let allCollected={};
       allCollected[id]=false;
       wx.setStorageSync('allCollected', allCollected);
     }
  },


  onMusic(){
    var self=this;
    wx.onBackgroundAudioPlay(function() {
    self.setData({
      isPlay:true
    });
    app.globalData.g_isPlay=true;
    app.globalData.g_currentId=self.data.postId;
  });

  wx.onBackgroundAudioPause(function() {
   self.setData({
     isPlay:false
   });
   app.globalData.g_isPlay=false;
   app.globalData.g_currentId=null;
  });
  wx.onBackgroundAudioStop(function() {
   self.setData({
     isPlay:false
   });
  });

 
},



playMusic(){
  var self=this;
 if(this.data.isPlay){
   wx.stopBackgroundAudio();
   this.setData({
     isPlay:false
   });
 }else{
   wx.playBackgroundAudio({
   dataUrl: self.data.music.url,
   title:self.data.music.title,
   coverImgUrl:self.data.music.coverImgUrl
 });
 this.setData({
   isPlay:true
 });
 }
},
  

onCollect(){
  var allCollected=wx.getStorageSync('allCollected');
  var storageCollected=allCollected[this.data.postId];
  storageCollected=!storageCollected;
  allCollected[this.data.postId]=storageCollected;
  wx.setStorageSync('allCollected',allCollected);
  this.setData({
    collected:storageCollected
  })
},
onShare(){
  wx.showActionSheet({
    itemList: ["分享到微信","分享到微博","分享到朋友圈"],
    itemColor: '#44d',
    success:res=> {
      console.log(res.tapIndex);
      this.setData({
        shared:true
      })
    },
    fail:err=>{
      this.setData({
        shared:false
      })
    }
  })
}
})