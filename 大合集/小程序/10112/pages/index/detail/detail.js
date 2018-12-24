// pages/detail/detail.js
const local=require("../../../data/local");
const audio=wx.getBackgroundAudioManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self=this;
    var id=options.id;
    var data=local.postList[options.id];
        
    this.setData({
        data,
        music:local.postList[options.id].music
     });
     /*音乐监听*/
     audio.onPause(()=>{
       self.setData({
         isPlay:false
       })
     });
     audio.onPlay(()=>{
       self.setData({
         isPlay:true
       })
     })
  },
  playmusic(){
     var self=this;
     var url=this.data.music.url;
  
    if(this.data.isPlay){
         audio.pause();
         audio.src=null;
         this.setData({
          isPlay:false
         })
    }else{
     audio.src=url;
      this.setData({
        isPlay:true
       })
    }
  }
})